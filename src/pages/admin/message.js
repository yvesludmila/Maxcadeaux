import LayoutAdmin from "../../components/layout/LayoutAdmin";
import axios from "axios";
import Link from "next/link";
import config from "../../utils/config";
import {useEffect, useState} from "react";

export default function MessageAdmin() {
    const [allMessage, setAllMessage] = useState([]);

    async function getAllMessage() {
        await axios.post(`/api/messagerie/all-message`).then((res) => {
            setAllMessage(res.data.result);
        });
    }

    useEffect(() => {
        getAllMessage();
    }, []);
    return (
        <>
            <LayoutAdmin>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-12 flex justify-between items-center border-l-[6px]  border-yellow-500 mb-2 py-1">
                            <h3 className="text-black underline-offset-2 decoration-2 decoration-yellow-300 underline">
                                Administration des messages
                            </h3>
                            <div>
                                <button
                                    onClick={() => getAllMessage()}
                                    className="py-2 px-4 text-sm font-medium text-white bg-[#00d7b3] hover:bg-[#01be9f] rounded-md cursor-pointer"
                                >
                                    <i className="fa fa-sync"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="overflow-x-auto">
                                <div className="min-w-screen flex items-center justify-center  font-sans">
                                    <div className="w-full">
                                        <div className="bg-white shadow-md rounded my-6">
                                            <table className="min-w-max w-full table-auto">
                                                <thead>
                                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                    <th className="py-3 px-2 text-left">Utilisateur</th>
                                                    <th className="py-3 px-2 text-left">Sujet</th>
                                                    <th className="py-3 px-2 text-left">Lu</th>
                                                    <th className="py-3 px-2 text-left">Message</th>
                                                    <th className="py-3 px-2 text-left">Date</th>
                                                </tr>
                                                </thead>
                                                <tbody className="text-gray-600 text-sm font-light">
                                                {allMessage
                                                    .sort((a, b) =>
                                                        a.lu > b.lu || a.status > b.status ? 1 : -1
                                                    )
                                                    .map((mess) => {
                                                        return (
                                                            <Link
                                                                href={{
                                                                    pathname: `message/${mess.id2}`,
                                                                    query: mess, // the data
                                                                }}
                                                            >
                                                                <tr className=" cursor-pointer border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                                                                    <td className="py-3 px-2 text-left">
                                                                        <div className="flex items-center">
                                                                            <div className="mr-2">
                                                                                <img
                                                                                    className="w-6 h-6"
                                                                                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                                                                />
                                                                            </div>
                                                                            <span
                                                                                className="font-medium hover:text-yellow-500">
                                          {mess.user}
                                        </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className="py-3 px-2 text-left">
                                                                        <div className="flex items-center font-medium">
                                                                            {mess.titre}
                                                                        </div>
                                                                    </td>
                                                                    <td className="py-3 px-2 text-center">
                                                                        <div
                                                                            className="flex items-center justify-center">
                                        <span
                                            className={
                                                mess.lu == 1
                                                    ? "text-indigo-500 font-bold text-xs"
                                                    : "text-red-500 font-bold text-xs"
                                            }
                                        >
                                          {mess.lu == 1 ? "OUI" : "NON"}
                                        </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className="py-3 px-2 text-left">
                                                                        <div
                                                                            className="flex items-center truncate text-ellipsis w-[250px]">
                                                                            {mess.message}
                                                                        </div>
                                                                    </td>
                                                                    <td className="py-3 px-2 text-left">
                                                                        <div className="flex items-center ">
                                                                            {mess.date}
                                                                        </div>
                                                                    </td>
                                                                    {/* <td className="py-3 px-2 text-left">
                                    <div className="flex item-center justify-center">
                                      <div className="w-4 mr-2 cursor-pointer transform hover:text-purple-500 hover:scale-110">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          onClick={() => {
                                            setShowReplyMessage(true);
                                            setDataMessage(mess);
                                            updateMessage(mess.id2);
                                          }}
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
                                      <div className="w-4 mr-2 cursor-pointer transform hover:text-purple-500 hover:scale-110">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          onClick={() => {
                                            setIdDelete(mess.id2);
                                            setConfirm(true);
                                          }}
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
                                  </td> */}
                                                                </tr>
                                                            </Link>
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
        </>
    );
}
