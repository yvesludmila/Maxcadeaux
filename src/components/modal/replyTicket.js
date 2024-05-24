import React from "react";
import {Fragment, useRef, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import config from "../../utils/config";
import axios from "axios";
import {useEffect} from "react";

function TicketResponse({setShowReplyTicket, showReplyTicket, dataTicket}) {
    const cancelButtonRef = useRef(null);
    const [reponse, setReponse] = useState("");

    const [showMessage, setShowMessage] = useState(false);
    const [showMessageError, setShowMessageError] = useState(false);
    useEffect(() => {
        setReponse(dataTicket.reponse || "");
    }, [dataTicket.reponse]);

    function resetPass(e) {
        e.preventDefault();
        axios
            .post(`/api/ticket/updateTicket`, {
                hashId: dataTicket.hashId,
                reponse: reponse,
            })
            .then((res) => {
                if (res.status == 200) {
                    setShowMessage(true);
                }
            })
            .catch((err) => {
                setShowMessageError(true);
            });
    }

    return (
        <>
            <Transition.Root show={showReplyTicket} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setShowReplyTicket}
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
                                    className="relative w-[80%] lg:w-[50%] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                                    <div className="flex">
                                        <div className="flex flex-col px-5 py-12 w-full">
                                            <div>
                                                <div
                                                    className="text-2xl underline-offset-2 decoration-2 decoration-yellow-300 underline text-indigo-500 font-bold sm:text-center">
                                                    Reply Ticket
                                                </div>
                                            </div>
                                            <form
                                                onSubmit={(e) => resetPass(e)}
                                                className="space-y-5 mt-8"
                                            >
                                                <div
                                                    className="bg-green-100 border border-green-400 text-green-700 mt-4 px-4 py-3 rounded relative"
                                                    role="alert"
                                                    style={{
                                                        display: showMessage ? "block" : "none",
                                                    }}
                                                >
                          <span className="block sm:inline">
                            Réponse envoyé
                          </span>
                                                    <span
                                                        className="absolute top-0 bottom-0 right-0 px-4 py-3"
                                                        onClick={() => {
                                                            setShowMessage(false);
                                                            setShowReplyTicket(false);
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
                          <span className="block sm:inline">
                            Error to reset password
                          </span>
                                                    <span
                                                        className="absolute top-0 bottom-0 right-0 px-4 py-3"
                                                        onClick={() => {
                                                            setShowMessageError(false);
                                                            setShowReplyTicket(false);
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
                                                <div>
                                                    <div
                                                        className="grid grid-cols-1 gap-3 filament-forms-component-container">
                                                        <div className=" col-span-1     ">
                                                            <div className="filament-forms-field-wrapper">
                                                                <div className="space-y-4">
                                                                    <div
                                                                        className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                                                                        <label
                                                                            className="inline-flex items-center space-x-3 rtl:space-x-reverse filament-forms-field-wrapper-label">
                                      <span className="text-base font-medium leading-4 text-gray-700">
                                        <span
                                            className="underline-offset-2 decoration-2 decoration-yellow-300 underline">
                                          User :{" "}
                                        </span>
                                        <span className="font-normal">
                                          {dataTicket.user}
                                        </span>
                                      </span>
                                                                        </label>
                                                                        <label
                                                                            className="inline-flex items-center space-x-3 rtl:space-x-reverse filament-forms-field-wrapper-label">
                                      <span className="text-base font-medium leading-4 text-gray-700">
                                        <span
                                            className="underline-offset-2 decoration-2 decoration-yellow-300 underline">
                                          Pour repondre :{" "}
                                        </span>
                                        <span className="font-normal">
                                          {dataTicket.employe_respond}
                                        </span>
                                      </span>
                                                                        </label>
                                                                    </div>
                                                                    <div
                                                                        className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                                                                        <label
                                                                            className="inline-flex items-center space-x-3 rtl:space-x-reverse filament-forms-field-wrapper-label">
                                      <span className="text-base font-medium leading-4 text-gray-700">
                                        <span
                                            className="underline-offset-2 decoration-2 decoration-yellow-300 underline">
                                          type du message :
                                        </span>
                                        <span className="font-normal">
                                          {" "}
                                            {dataTicket.type_message}
                                        </span>
                                      </span>
                                                                        </label>
                                                                        <label
                                                                            className="inline-flex items-center space-x-3 rtl:space-x-reverse filament-forms-field-wrapper-label">
                                      <span className="text-base font-medium leading-4 text-gray-700">
                                        <span
                                            className="underline-offset-2 decoration-2 decoration-yellow-300 underline">
                                          Status :{" "}
                                        </span>
                                        <span className="font-normal">
                                          {dataTicket.status}
                                        </span>
                                      </span>
                                                                        </label>
                                                                    </div>
                                                                    <div
                                                                        className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                                                                        <label
                                                                            className="inline-flex items-center space-x-3 rtl:space-x-reverse filament-forms-field-wrapper-label">
                                      <span className="text-base font-medium  text-gray-700">
                                        <span
                                            className="underline-offset-2 decoration-2 decoration-yellow-300 underline">
                                          Message du client :{" "}
                                        </span>
                                        <span className="font-normal">
                                          {dataTicket.description}
                                        </span>
                                      </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className=" col-span-1 ">
                                                            <div className="filament-forms-field-wrapper">
                                                                <div className="space-y-4">
                                                                    <div
                                                                        className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                                                                        <label
                                                                            className="inline-flex items-center space-x-3 rtl:space-x-reverse filament-forms-field-wrapper-label">
                                      <span className="text-base font-medium leading-4 text-gray-700">
                                        <span
                                            className="underline-offset-2 decoration-2 decoration-yellow-300 underline">
                                          Reponse :{" "}
                                        </span>
                                        <sup className="font-medium text-danger-700">
                                          *
                                        </sup>
                                      </span>
                                                                        </label>
                                                                    </div>
                                                                    <div
                                                                        className="relative mt-2 flex items-center group filament-forms-text-input-component">
                                                                        <div className="flex-1 ">
                                      <textarea
                                          type="text"
                                          onChange={(e) =>
                                              setReponse(e.target.value)
                                          }
                                          value={reponse}
                                          placeholder="Entrez votre reponse"
                                          required
                                          className=" block w-full px-2 h-[150px] transition duration-75 py-2  text-sm border-1 rounded-lg  focus:border-yellow-600 focus:ring-1 focus:ring-inset focus:ring-yellow-600 disabled:opacity-70 border-yellow-300"
                                      ></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-end">
                                                            <input
                                                                type="submit"
                                                                value="REPONDRE"
                                                                className="bg-indigo-500 border-2 border-yellow-400 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
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

export default TicketResponse;
