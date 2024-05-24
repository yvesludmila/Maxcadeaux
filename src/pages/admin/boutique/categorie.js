import LayoutAdmin from "../../../components/layout/LayoutAdmin";
import Link from "next/dist/client/link";
import {useState} from "react";
import axios from "axios";
import config from "../../../utils/config";
import {useRouter} from "next/dist/client/router";
import {useEffect} from "react";

export default function CategorieBoutique() {
    const [nomCat, setNomCat] = useState("");
    const [showMessage, setShowMessage] = useState({
        err: false,
        succ: false,
        message: "",
    });

    const [allCats, setAllCats] = useState([]);
    const router = useRouter();

    useEffect(() => {
        getAllCat();
    }, []);

    async function getAllCat() {
        await axios
            .post(`/api/shop/all-cat`)
            .then((res) => {
                console.log(res);
                if (res.data.success) {
                    setAllCats(res.data.result);
                }
            })
            .catch((err) => console.log(err));
    }

    async function createCat(e) {
        e.preventDefault();
        await axios
            .post(`/api/shop/new-cat`, {nom: nomCat})
            .then((res) => {
                if (res.status == 200) {
                    setShowMessage({
                        err: false,
                        succ: true,
                        message: res.data.message,
                    });

                    setNomCat("");
                    getAllCat();
                }
            })
            .catch((error) => {
                setShowMessage({
                    err: true,
                    succ: false,
                    message: error.response.data.message,
                });
            });
    }

    return (
        <LayoutAdmin>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 flex items-center">
                        <div className="font-size-md mr-3">
                            <Link href="/admin/boutique/nouveau">
                <span
                    role="img"
                    aria-label="left-circle"
                    className="cursor-pointer hover:text-indigo-500 anticon anticon-left-circle mail-detail-action-icon font-size-md ml-0"
                >
                  <svg
                      viewBox="64 64 896 896"
                      className="w-6 h-6"
                      focusable="false"
                      data-icon="left-circle"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                  >
                    <path
                        d="M603.3 327.5l-246 178a7.95 7.95 0 000 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z"></path>
                    <path
                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                  </svg>
                </span>
                            </Link>
                        </div>
                        <h2 className="mt-1 text-black underline-offset-2 decoration-2 decoration-yellow-300 underline">
                            Categorie
                        </h2>
                    </div>
                    <div className="col-lg-12">
                        <form onSubmit={(e) => createCat(e)}>
                            <div className="row">
                                <div
                                    className="bg-green-100 border border-green-400 text-green-700 mt-4 px-4 py-3 rounded relative"
                                    role="alert"
                                    style={{
                                        display: showMessage.succ ? "block" : "none",
                                    }}
                                >
                                    <span className="block sm:inline">{showMessage.message}</span>
                                    <span
                                        className="absolute top-0 bottom-0 right-0 px-4 py-3"
                                        onClick={() => {
                                            setShowMessage({err: false, succ: false, message: ""});
                                        }}
                                    >
                    <svg
                        className="fill-current h-6 w-6 text-green-500"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                      <title>Close</title>
                      <path
                          d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                    </svg>
                  </span>
                                </div>
                                <div
                                    className="bg-red-100 border border-red-400 text-red-700 mt-4 px-4 py-3 rounded relative"
                                    role="alert"
                                    style={{
                                        display: showMessage.err ? "block" : "none",
                                    }}
                                >
                                    <span className="block sm:inline">{showMessage.message}</span>
                                    <span
                                        className="absolute top-0 bottom-0 right-0 px-4 py-3"
                                        onClick={() => {
                                            setShowMessage({err: false, succ: false, message: ""});
                                        }}
                                    >
                    <svg
                        className="fill-current h-6 w-6 text-red-500"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                      <title>Close</title>
                      <path
                          d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                    </svg>
                  </span>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group mb-4">
                                        <label htmlFor="">Nom</label>
                                        <input
                                            onChange={(e) => setNomCat(e.target.value)}
                                            value={nomCat}
                                            type="text"
                                            className="form-control border-yellow-400 border-2"
                                            placeholder="Entrez le nom du categorie"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <button type="submit" className="btn btn-primary">
                                        Ajouter Nouveau
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-12 mt-3">
                        <div className="overflow-x-auto">
                            <div className="min-w-screen flex items-center justify-center  font-sans">
                                <div className="w-full">
                                    <div className="bg-white shadow-md rounded ">
                                        <table className="min-w-max w-full max-h-screen table-auto">
                                            <thead>
                                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                <th className="py-3 px-6 text-left">Nom</th>
                                                <th className="py-3 px-6 text-right"></th>
                                            </tr>
                                            </thead>

                                            <tbody className="text-gray-600 text-sm font-light">
                                            {allCats.map((cat, i) => {
                                                return (
                                                    <tr
                                                        key={i}
                                                        className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100"
                                                    >
                                                        <td className="py-3 px-6 text-left">
                                                            <div className="flex items-center cursor-pointer">
                                  <span className="font-medium hover:text-yellow-500">
                                    {cat.nom}
                                  </span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-right">
                                                            <div className="flex item-center justify-end">
                                                                <div
                                                                    className="w-4 mr-2 text-red-500 cursor-pointer transform hover:text-purple-500 hover:scale-110">
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
                                                );
                                            })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
}
