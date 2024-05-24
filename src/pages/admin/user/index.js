import axios from "axios";
import React, {useEffect} from "react";
import {Fragment, useRef, useState} from "react";
import LayoutAdmin from "../../../components/layout/LayoutAdmin";
import config from "../../../utils/config";
import {useRouter} from "next/dist/client/router";
import UserDetails from "../../../components/modal/userDetail";
import UpdateUserInfo from "../../../components/modal/updateUserInfo";
import {Dialog, Transition} from "@headlessui/react";

import Link from "next/link";

export default function UserAdmin() {
    const router = useRouter();
    const [allUsers, setAllUsers] = useState([]);
    const cancelButtonRef = useRef(null);
    const [showUserDetails, setShowUserDetails] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [confirmAvertissement, setConfirmAvertissement] = useState(false);
    const [idDelete, setIdDelete] = useState("");
    const [idAvertissement, setIdAvertissement] = useState("");
    const [showUpdateUserInfo, setShowUpdateUserInfo] = useState(false);
    const [dataUser, setDataUser] = useState([]);
    const [raison, setRaison] = useState("");
    const [valuePage, setValuePage] = useState({start: 0, end: 10});

    const [shows, setShows] = useState([]);
    useEffect(() => {
        allUtilisateus();
    }, []);

    async function allUtilisateus() {
        await axios.post(`/api/user/all`).then((res) => {
            if (res.status == 200) {
                setAllUsers(res.data);
            }
        });
    }

    useEffect(() => {
        if (allUsers.all?.length > 10) {
            const tmp = allUsers.all?.map((m, i) => {
                if (i < 10) return m;
            });

            setShows(tmp);
        }
    }, [allUsers]);

    async function deleteUser(hashId) {
        await axios.post(`/api/auth/delete-user`, {hashId}).then((res) => {
            if (res.status === 200) {
                setAllUsers([]);
                allUtilisateus();
            }
        });
    }

    async function avertirMembre(e) {
        e.preventDefault();
        await axios
            .post(`/api/user/avertissement`, {idUser: idAvertissement, raison})
            .then((res) => {
                console.log(res);
                if (res.status == 200) {
                    setConfirmAvertissement(false);
                    setRaison("");
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
                                Administration des utilisateurs
                            </h3>

                            <div>
                                <button
                                    onClick={() => allUtilisateus()}
                                    className="py-2 px-4 text-sm font-medium text-white bg-[#00d7b3] hover:bg-[#01be9f] rounded-md"
                                >
                                    <i className="fa fa-sync"></i>
                                </button>
                            </div>
                        </div>
                        {/* <div className="col-lg-12 flex mb-2">
              <button
                onClick={() => {
                  filter(1);
                }}
                className="border-1 border-green-500 text-white bg-green-500  hover:bg-green-500 rounded-xl px-3 py-1 mr-2"
              >
                Clients
              </button>
              <button
                onClick={() => {
                  filter(99);
                }}
                className="border-1 border-red-500 text-white bg-red-500 hover:bg-red-500 rounded-xl px-3 py-1 mr-2"
              >
                Admin
              </button>
            </div> */}
                        <div className="col-lg-12  ">
                            <div className="overflow-x-auto">
                                <div className="min-w-screen flex items-center justify-center  font-sans">
                                    <div className="w-full">
                                        <div className="bg-white shadow-md rounded ">
                                            <table className="min-w-max w-full max-h-screen table-auto">
                                                <thead>
                                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                    <th className="py-3 px-2 text-left">Utilisateur</th>
                                                    <th className="py-3 px-2 text-center">Nom et Prenom</th>
                                                    <th className="py-3 px-2 text-center">Solde</th>
                                                    <th className="py-3 px-2 text-left">Role</th>
                                                    <th className="py-3 px-2 text-center">Actions</th>
                                                </tr>
                                                </thead>
                                                <tbody className="text-gray-600 text-sm font-light">
                                                {allUsers.all
                                                    ?.slice(valuePage.start, valuePage.end)
                                                    .map((e, index) => {
                                                        return (
                                                            <tr
                                                                key={index}
                                                                className={
                                                                    e.banni == 1
                                                                        ? "border-b border-gray-200 bg-red-500 hover:bg-red-600 text-white"
                                                                        : "border-b border-gray-200 bg-gray-50 hover:bg-gray-100"
                                                                }
                                                            >
                                                                <td className="py-3 px-2 text-left">
                                                                    <div className="flex items-center cursor-pointer">
                                                                        <div className="mr-2">
                                                                            <img
                                                                                className="w-6 h-6"
                                                                                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                                                            />
                                                                        </div>
                                                                        <span className="font-medium">
                                        {e.email}{" "}
                                                                            <span
                                                                                className="text-red-500 text-xs font-bold ml-2">
                                          {e.premium == 1 && "PREMIUM"}
                                        </span>
                                      </span>
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-2 text-center">
                                                                    <div className="flex items-center justify-center">
                                                                        {e.nom + " " + e.prenom}{" "}
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-2 text-center">
                                                                    <div className="flex items-center justify-center">
                                                                        {e.euros} €
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-2 text-left">
                                                                    <div className="flex items-center">
                                      <span
                                          className={
                                              e.level == 99
                                                  ? "bg-red-500 text-white py-1 px-3 rounded-full text-xs"
                                                  : "bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs"
                                          }
                                      >
                                        {e.level}
                                      </span>
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-2 text-center">
                                                                    <div className="flex item-center justify-center">
                                                                        <div
                                                                            className="w-4 mr-2 cursor-pointer transform hover:text-purple-500 hover:scale-110">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                                onClick={() => {
                                                                                    setShowUserDetails(true);
                                                                                    setDataUser(e);
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
                                                                        <div
                                                                            className="w-4 mr-2 cursor-pointer transform hover:text-purple-500 hover:scale-110">
                                                                            <Link
                                                                                href={{
                                                                                    pathname: `user/${e.id}`,
                                                                                    query: e, // the data
                                                                                }}
                                                                            >
                                                                                <img
                                                                                    src="https://www.svgrepo.com/show/1079/euro.svg"
                                                                                    intrinsicsize="512 x 512"
                                                                                    width="180"
                                                                                    height="180"
                                                                                    srcSet="https://www.svgrepo.com/show/1079/euro.svg 4x"
                                                                                    alt="Euro SVG Vector"
                                                                                    title="Euro SVG Vector"
                                                                                />
                                                                            </Link>
                                                                        </div>
                                                                        <div
                                                                            className="w-4 mr-2 cursor-pointer transform hover:text-purple-500 hover:scale-110">
                                                                            <img
                                                                                style={{
                                                                                    display:
                                                                                        e.level == 99 ? "none" : "block",
                                                                                }}
                                                                                onClick={() => {
                                                                                    setIdAvertissement(e.id);
                                                                                    setConfirmAvertissement(true);
                                                                                }}
                                                                                src="https://www.svgrepo.com/show/177809/warning-signs.svg"
                                                                                intrinsicsize="512 x 512"
                                                                                width="180"
                                                                                height="180"
                                                                                srcSet="https://www.svgrepo.com/show/177809/warning-signs.svg 4x"
                                                                                alt="Warning Signs SVG Vector"
                                                                                title="Warning Signs SVG Vector"
                                                                            />
                                                                        </div>
                                                                        <div
                                                                            className="w-4 mr-2 cursor-pointer transform hover:text-purple-500 hover:scale-110">
                                                                            <svg
                                                                                onClick={() => {
                                                                                    setShowUpdateUserInfo(true);
                                                                                    setDataUser(e);
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
                                                                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                        <div
                                                                            className="w-4 mr-2 cursor-pointer transform hover:text-purple-500 hover:scale-110">
                                                                            <svg
                                                                                onClick={() => {
                                                                                    setConfirm(true);
                                                                                    setIdDelete(e.hashId);
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
                                            <div className="mt-4">
                                                <button
                                                    onClick={() => {
                                                        setValuePage({
                                                            start: valuePage.start - 12,
                                                            end: valuePage.end - 12,
                                                        });
                                                    }}
                                                    disabled={valuePage.start === 0 ? true : false}
                                                    className="mr-2 text-white text-sm font-extrabold rounded btn btn-primary "
                                                >
                                                    Précédent
                                                </button>

                                                <button
                                                    onClick={() => {
                                                        setValuePage({
                                                            start: valuePage.start + 12,
                                                            end: valuePage.end + 12,
                                                        });
                                                    }}
                                                    className="px-4 text-white text-sm font-extrabold rounded btn btn-primary "
                                                    disabled={
                                                        valuePage.end >= allUsers.all?.length ? true : false
                                                    }
                                                >
                                                    Suivant
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAdmin>
            <UserDetails
                setShowUserDetails={setShowUserDetails}
                showUserDetails={showUserDetails}
                dataUser={dataUser}
                allUtilisateus={allUtilisateus}
            />
            <UpdateUserInfo
                setShowUpdateUserInfo={setShowUpdateUserInfo}
                showUpdateUserInfo={showUpdateUserInfo}
                dataUser={dataUser}
                allUtilisateus={allUtilisateus}
            />

            <Transition.Root show={confirmAvertissement} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setConfirmAvertissement}
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
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
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
                                    className="relative lg:w-[60%] min-w-[400px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                                    <form onSubmit={(e) => avertirMembre(e)}>
                                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            {/* <div className="sm:flex sm:items-start"> */}
                                            <div>
                                                <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                                                    <Dialog.Title
                                                        as="h3"
                                                        className="text-lg flex items-center flex-col font-medium leading-6 text-gray-900"
                                                    >
                                                        <img
                                                            src="https://www.svgrepo.com/show/177809/warning-signs.svg"
                                                            intrinsicsize="512 x 512"
                                                            width="100"
                                                            height="100"
                                                            srcSet="https://www.svgrepo.com/show/177809/warning-signs.svg 4x"
                                                            alt="Warning Signs SVG Vector"
                                                            title="Warning Signs SVG Vector"
                                                        />
                                                        Envoyer un avertissement à ce membre??
                                                    </Dialog.Title>
                                                    <div className="form-group text-black">
                            <textarea
                                onChange={(e) => {
                                    setRaison(e.target.value);
                                }}
                                value={raison}
                                className="form-control border-yellow-400 text-black border-2"
                                placeholder="Entrer une raison"
                                cols="30"
                                rows="10"
                                required
                            ></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="bg-gray-50 px-4 py-3 sm:flex justify-center sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="button"
                                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => setConfirmAvertissement(false)}
                                            >
                                                Annuler
                                            </button>
                                            <button
                                                type="submit"
                                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                            >
                                                Avertir
                                            </button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
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
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
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
                                                    Suprrimer cette utilisateur?
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
                                                setConfirm(false);
                                                deleteUser(idDelete);
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
