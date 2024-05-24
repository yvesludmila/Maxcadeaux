import Link from "next/link";
import {useRouter} from "next/router";
import {Fragment, useState, useRef, useEffect} from "react";
import LayoutAdmin from "../../../components/layout/LayoutAdmin";
import {Dialog, Transition} from "@headlessui/react";
import axios from "axios";
import config from "../../../utils/config";

import Router from "next/router";

export default function DetailsMess() {
    const cancelButtonRef = useRef(null);
    const [openReponse, setOpenReponse] = useState(false);
    const [confirm, setConfirm] = useState(false);

    const [showMessage, setShowMessage] = useState(false);
    const [showReplyMessage, setShowReplyMessage] = useState(false);
    const [showMessageError, setShowMessageError] = useState(false);
    const [reponse, setReponse] = useState("");

    const router = useRouter();
    const data = router.query;

    useEffect(() => {
        setReponse(data.reponse);
    }, [data.reponse]);

    useEffect(() => {
        luMessage();
    }, []);

    async function deleteMessage() {
        await axios
            .post(`/api/messagerie/delete`, {id2: data.id2})
            .then((res) => {
                if (res.status == 200) {
                    Router.push("/admin/message");
                }
            });
    }

    function luMessage() {
        console.log("lu");
        axios.post(`/api/messagerie/update`, {
            id2: data.id2,
            reponse: "",
            user: "",
            sujet: "",
        });
    }

    function repondreMessage(e) {
        e.preventDefault();
        console.log({
            id2: data.id2,
            reponse: reponse,
            user: data.user,
            sujet: data.titre,
        });
        axios
            .post(`/api/messagerie/update`, {
                id2: data.id2,
                reponse: reponse,
                user: data.user,
                sujet: data.titre,
            })
            .then((res) => {
                if (res.status == 200) {
                    setShowMessage(true);
                    setTimeout(() => {
                        setShowMessage(false);
                        setOpenReponse(false);
                        router.push("/admin/message");
                    }, 2500);
                }
            })
            .catch((err) => {
                setShowMessageError(true);
            });
    }

    return (
        <>
            <LayoutAdmin>
                <div>
                    <div className="flex items-center justify-between">
                        <div className="d-flex align-items-center mb-3">
                            <div className="font-size-md mr-3">
                                <Link href="/admin/message">
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
                            <div className="avatar-status d-flex align-items-center">
                <span className="h-10 w-10  ">
                  <img
                      className="rounded-full"
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  />
                </span>
                                <div className="ml-2">
                                    <div>
                                        <div className="font-semibold text-slate-700">{data.user2}</div>
                                        <span></span>
                                    </div>
                                    <div className="text-muted avatar-status-subtitle">
                                        To: {data.user}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center">
                <span className="mr-3 font-medium text-slate-700">
                  {" "}
                    {data.date}
                </span>
                                <span
                                    role="img"
                                    aria-label="delete"
                                    className="anticon anticon-delete mail-detail-action-icon"
                                    onClick={() => {
                                        setConfirm(true);
                                    }}
                                >
                  <svg
                      className="h-6 w-6 text-red-500 cursor-pointer hover:text-red-800"
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="delete"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                  >
                    <path
                        d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                  </svg>
                </span>
                            </div>
                        </div>
                    </div>
                    <div className="my-4 w-full text-2xl text-slate-900 font-bold">
                        {data.titre}
                    </div>
                    <div
                        className="text-slate-700"
                        dangerouslySetInnerHTML={{__html: data.message}}
                    ></div>
                    <div className="my-4">
                        <button
                            style={{display: openReponse ? "none" : "block"}}
                            onClick={() => setOpenReponse(true)}
                            className="bg-purple px-4 py-2 rounded-xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none "
                        >
                            Repondre
                        </button>
                    </div>
                    <div
                        className="bg-green-100 border border-green-400 text-green-700 mt-4 px-4 py-3 rounded relative"
                        role="alert"
                        style={{
                            display: showMessage ? "block" : "none",
                        }}
                    >
                        <span className="block sm:inline">Message envoyé</span>
                        <span
                            className="absolute top-0 bottom-0 right-0 px-4 py-3"
                            onClick={() => {
                                setShowMessage(false);
                                setShowReplyMessage(false);
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
                            display: showMessageError ? "block" : "none",
                        }}
                    >
                        <span className="block sm:inline">Error</span>
                        <span
                            className="absolute top-0 bottom-0 right-0 px-4 py-3"
                            onClick={() => {
                                setShowMessageError(false);
                                setShowReplyMessage(false);
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
                    <div style={{display: openReponse ? "block" : "none"}}>
                        <form onSubmit={(e) => repondreMessage(e)}>
                            <label htmlFor="reponse" className="text-gray-500">
                                Votre reponse
                            </label>
                            <textarea
                                id="reponse"
                                cols="30"
                                rows="10"
                                className="border-2 w-full p-4"
                                placeholder="Entrez votre réponse..."
                                onChange={(e) => setReponse(e.target.value)}
                                value={reponse}
                            ></textarea>
                            <div className="text-end ">
                                <button
                                    type="button"
                                    onClick={() => setOpenReponse(false)}
                                    className=" bg-red-400 px-4 py-2 rounded-xl mr-2"
                                >
                                    Fermer
                                </button>
                                <button
                                    type="submit"
                                    className=" bg-green-400 px-4 py-2 rounded-xl"
                                >
                                    Envoyer
                                </button>
                            </div>
                        </form>
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
                                                    Suprrimer cette message?
                                                </Dialog.Title>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-2">
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
                                                deleteMessage();
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
