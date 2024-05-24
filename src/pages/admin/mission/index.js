import React, { useEffect } from "react";
import { Fragment, useRef, useState } from "react";
import LayoutAdmin from "../../../components/layout/LayoutAdmin";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import config from "../../../utils/config";
import Link from "next/link";

export default function BoutiqueAdmin() {
    const cancelButtonRef = useRef(null);
    const [confirm, setConfirm] = useState(false);
    const [allMissions, setAllMissions] = useState([]);
    const [idDel, setIdDel] = useState("");

    async function getAllMission() {
        await axios
            .get(`/api/missions/all`)
            .then((res) => {
                setAllMissions(res.data.request);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getAllMission();
    }, []);

    async function etatOffer(mission, actif) {
        await axios.put(`/api/missions`, { ...mission, actif }).then((res) => {
            if (res.status == 200) getAllMission();
        });
    }

    async function deleteOffre() {
        await axios.delete(`/api/missions/${idDel}`).then((res) => {
            if (res.status == 200) {
                setConfirm(false);
                getAllMission();
            }
        });
    }

    return (
        <>
            <LayoutAdmin>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-12 flex justify-between items-center border-l-[6px]  border-yellow-500 mb-2 py-1">
                            <h3 className="text-black underline-offset-2 decoration-2 decoration-yellow-300 underline">
                                Administration des missions
                            </h3>

                            <div>
                                <Link href="mission/nouveau">
                                    <button
                                        type="button"
                                        className="py-2 px-4 text-sm font-medium text-white bg-[#00d7b3] hover:bg-[#01be9f] rounded-md"
                                    >
                                        Nouveau mission
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-12  ">
                            <div className="overflow-x-auto">
                                <div className="min-w-screen flex items-center justify-center  font-sans">
                                    <div className="w-full">
                                        <div className="bg-white shadow-md rounded ">
                                            <table className="min-w-max w-full max-h-screen table-auto">
                                                <thead>
                                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                        <th className="py-3 px-6 text-left">Nom de l'offre</th>
                                                        <th className="py-3 px-6 text-left">Description</th>
                                                        <th className="py-3 px-6 text-left">Rémunération</th>
                                                        {/* <th className="py-3 px-6 text-left">Etat</th> */}
                                                        <th className="py-3 px-6 text-right">Actions</th>
                                                    </tr>
                                                </thead>

                                                <tbody className="text-gray-600 text-sm font-light">
                                                    {allMissions?.map((mission, i) => {
                                                        return (
                                                            <tr
                                                                key={i}
                                                                className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100"
                                                            >
                                                                <td className="py-3 px-6 text-left">
                                                                    <div
                                                                        className="flex items-center cursor-pointer max-w-[200px]">
                                                                        <span className="font-medium hover:text-yellow-500">
                                                                            {mission.nom}
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-6 text-left">
                                                                    <div className="flex items-center max-w-[150px]">
                                                                        {mission.description}
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-6 text-left">
                                                                    <div className="flex items-center ">
                                                                        {mission.remuneration} €
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-6 text-center">
                                                                    <div className="flex item-center justify-end">
                                                                        <div
                                                                            className=" -mt-1 mr-2 text-xs cursor-pointer transform hover:text-purple-500 hover:scale-110">
                                                                            <div>
                                                                                {mission.actif ? (
                                                                                    <button
                                                                                        onClick={() => {
                                                                                            etatOffer(mission, 0);
                                                                                        }}
                                                                                        className="py-1 px-2 rounded-sm bg-green-400 "
                                                                                    >
                                                                                        <span className="text-xs">
                                                                                            Pause
                                                                                        </span>
                                                                                    </button>
                                                                                ) : (
                                                                                    <button
                                                                                        onClick={() => {
                                                                                            etatOffer(mission, 1);
                                                                                        }}
                                                                                        className="py-1 px-2 rounded-sm bg-blue-400"
                                                                                    >
                                                                                        <span className="text-xs">
                                                                                            Activer
                                                                                        </span>
                                                                                    </button>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="mr-2 cursor-pointer transform hover:text-purple-500 hover:scale-110">
                                                                            <Link
                                                                                href={{
                                                                                    pathname: `mission/update/${mission.id}`,
                                                                                    query: mission, // the data
                                                                                }}
                                                                            >
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="none"
                                                                                    viewBox="0 0 24 24"
                                                                                    stroke="currentColor"
                                                                                    className="w-5 h-5 text-purple-500"
                                                                                >
                                                                                    <path
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                        strokeWidth="2"
                                                                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                                                    />
                                                                                </svg>
                                                                            </Link>
                                                                        </div>
                                                                        <div
                                                                            className="mr-2 cursor-pointer transform hover:text-purple-500 hover:scale-110">
                                                                            <svg
                                                                                className="w-5 h-5 text-red-500"
                                                                                onClick={() => {
                                                                                    setConfirm(true);
                                                                                    setIdDel(mission.idoffre);
                                                                                }}
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

            <Transition.Root show={confirm} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setConfirm}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel
                                    className="relative min-w-[400px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg font-medium leading-6 text-gray-900"
                                                >
                                                    Suprrimer cette boutique?
                                                </Dialog.Title>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => setConfirm(false)}
                                        >
                                            Annuler
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => {
                                                deleteOffre();
                                                setConfirm(false);
                                            }}
                                        >
                                            Supprimer
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}
