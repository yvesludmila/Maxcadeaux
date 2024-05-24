import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Coupon from "../../components/admin/coupon";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import FormCoupon from "../../components/modal/formCoupon";
import { getAllCoupon } from "../../store/actions/couponAction";
import convertDate from "../../utils/converDate";

import axios from "axios";
import CouponDetails from "../../components/modal/couponDetails";
import DeleteCoupon from "../../components/modal/deleteCoupon";

export default function CouponAdmin() {
    const dispatch = useDispatch();
    const coupon = useSelector((state) => state.coupon);
    const [show, setShow] = useState(false);

    const [current, setCurrent] = useState();
    const [showC, setShowC] = useState(false);
    const [edit, setEdit] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [image, setImage] = useState(false);

    function showCoupon(coupon) {
        console.log(coupon);
        setShowC(true);
        setCurrent(coupon);
    }

    function editCoupon(e, coupon) {
        e.stopPropagation();
        setEdit(true);
        setCurrent(coupon);
    }

    async function updateCouponActif(id, actif) {
        await axios
            .put(`/api/coupon/update-actif`, {
                id: id,
                actif: actif
            })
            .then((res) => {
                if (res.status == 200) {
                    console.log('OK NY UPDATE');
                    dispatch(getAllCoupon());
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        // return
        dispatch(getAllCoupon());
    }, []);

    return (
        <LayoutAdmin>
            <div className="gift_card">
                <div className="container">
                    {/* <div className="my-4">
            <button
              onClick={() => setShow(true)}
              className="btn btn-success rounded-full px-4 py-2"
            >
              New coupon
            </button>
          </div> */}

                    <div className="row">
                        <div
                            className="col-lg-12 flex justify-between items-center border-l-[6px]  border-yellow-500 mb-2 py-1">
                            <h3 className="text-black underline-offset-2 decoration-2 decoration-yellow-300 underline">
                                Administration des coupons
                            </h3>
                            <button
                                onClick={() => setShow(true)}
                                className="py-2 px-4 text-sm font-medium text-white bg-[#00d7b3] hover:bg-[#01be9f] rounded-md"
                            >
                                <i className="fa fa-pen mr-1"></i>
                                Ajouter
                            </button>
                        </div>
                        <div className="col-lg-12">
                            <div className="overflow-x-auto">
                                <div className="min-w-screen flex items-center justify-center  font-sans">
                                    <div className="w-full">
                                        <div className="bg-white shadow-md rounded my-6">
                                            <table className="min-w-max w-full table-auto">
                                                <thead>
                                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                        <th className="py-3 px-6 text-left">Nom</th>
                                                        <th className="py-3 px-6 text-left">Date debut</th>
                                                        <th className="py-3 px-6 text-center">Date Fin</th>
                                                        <th className="py-3 px-6 text-center">Actif</th>
                                                        <th className="py-3 px-6 text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-gray-600 text-sm font-light">
                                                    {coupon &&
                                                        coupon.length > 0 &&
                                                        coupon.map((c, index) =>
                                                            <tr key={index}
                                                                className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                                                                <td className="py-3 px-6 text-left">
                                                                    <div className="flex items-center">
                                                                        <span
                                                                            onClick={() => showCoupon(c)}
                                                                            className="font-medium text-lg hover:text-yellow-500 cursor-pointer"
                                                                        >
                                                                            {c.nom}
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-6 text-left">
                                                                    <div className="flex text-lg items-center">
                                                                        {convertDate(c.dateDebut)}
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-6 text-center">
                                                                    <div
                                                                        className="flex text-lg items-center justify-center">
                                                                        {convertDate(c.dateFin)}
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-6 text-center">
                                                                    <div className="flex text-lg items-center justify-center">
                                                                        {c.actif === 1 ? (
                                                                            <button
                                                                                onClick={() => {
                                                                                    updateCouponActif(c.id, 0);
                                                                                }}
                                                                                className="py-1 px-2 rounded-sm bg-green-400 "
                                                                            >
                                                                                <span className="text-xs">
                                                                                    Actif
                                                                                </span>
                                                                            </button>
                                                                        ) : (
                                                                            <button
                                                                                onClick={() => {
                                                                                    updateCouponActif(c.id, 1);
                                                                                }}
                                                                                className="py-1 px-2 rounded-sm bg-blue-400"
                                                                            >
                                                                                <span className="text-xs">
                                                                                    Inactif
                                                                                </span>
                                                                            </button>
                                                                        )}
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-6 text-center">
                                                                    <div className="flex item-center justify-center">
                                                                        <div
                                                                            className="w-4 mr-2 cursor-pointer text-green-500 transform hover:text-purple-500 hover:scale-110">
                                                                            <svg
                                                                                onClick={() => showCoupon(c)}
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth="2"
                                                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                                />
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth="2"
                                                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                        <div
                                                                            className="w-4 mr-2 transform cursor-pointer text-indigo-500 hover:text-purple-500 hover:scale-110">
                                                                            <svg
                                                                                onClick={(e) => editCoupon(e, c)}
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth="2"
                                                                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                        <div
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                setDeleted(true);
                                                                                setCurrent(c);
                                                                            }}
                                                                            className="w-4 mr-2 transform  cursor-pointer text-red-500 hover:text-purple-500 hover:scale-110"
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth="2"
                                                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            // <Coupon key={index} coupon={c}
                                                            // />
                                                        )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {current && showC && (
                        <CouponDetails setShow={setShowC} show={showC} coupon={current} />
                    )}
                    {edit && current && (
                        <FormCoupon edit={edit} setEdit={setEdit} current={current} />
                    )}

                    {deleted && current && (
                        <DeleteCoupon id={current.id} show={deleted} setShow={setDeleted} />
                    )}

                    {/* <div className="row">
            {coupon.length > 0 &&
              coupon.map((c) => <Coupon key={c.id} coupon={c} />)}
          </div> */}
                </div>
            </div>
            {show && <FormCoupon edit={show} setEdit={setShow} />}
        </LayoutAdmin>
    );
}
