import Link from "next/link";
import React, { useState } from "react";
import CouponDetails from "../modal/couponDetails";
import DeleteCoupon from "../modal/deleteCoupon";
import FormCoupon from "../modal/formCoupon";

import convertDate from "../../utils/converDate";

function Coupon({ coupon }) {
    const [current, setCurrent] = useState();
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [deleted, setDeleted] = useState(false);

    function showCoupon() {
        console.log(coupon);
        setShow(true);
        setCurrent(coupon);
    }

    function editCoupon(e) {
        e.stopPropagation();
        setEdit(true);
        setCurrent(coupon);
    }

    return (
        <>
            <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                        <span
                            onClick={() => showCoupon()}
                            className="font-medium text-lg hover:text-yellow-500 cursor-pointer"
                        >
                            {coupon.nom}
                        </span>
                    </div>
                </td>
                <td className="py-3 px-6 text-left">
                    <div className="flex text-lg items-center">
                        {convertDate(coupon.dateDebut)}
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex text-lg items-center justify-center">
                        {convertDate(coupon.dateFin)}
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex text-lg items-center justify-center">
                        {coupon.actif}
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                        <div
                            className="w-4 mr-2 cursor-pointer text-green-500 transform hover:text-purple-500 hover:scale-110">
                            <svg
                                onClick={() => showCoupon()}
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
                                onClick={(e) => editCoupon(e)}
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
                                setCurrent(coupon);
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

            {current && show && (
                <CouponDetails setShow={setShow} show={show} coupon={coupon} />
            )}
            {edit && current && (
                <FormCoupon edit={edit} setEdit={setEdit} current={current} />
            )}

            {deleted && current && (
                <DeleteCoupon id={current.id} show={deleted} setShow={setDeleted} />
            )}
        </>
    );
}

export default Coupon;
