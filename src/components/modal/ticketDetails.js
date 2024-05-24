import React from "react";
import {Fragment, useRef, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import config from "../../utils/config";
import axios from "axios";
import {useEffect} from "react";

function TicketDetails({setShowReplyTicket, showReplyTicket, dataTicket}) {
    const cancelButtonRef = useRef(null);
    const [reponse, setReponse] = useState("");

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
                                                    Votre ticket
                                                </div>
                                            </div>
                                            <form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    setShowReplyTicket(false);
                                                }}
                                                className="space-y-5 mt-8"
                                            >
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
                                          Votre message :{" "}
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
                                          Reponse d {dataTicket.employe_respond}
                                            :{" "}
                                        </span>
                                      </span>
                                                                        </label>
                                                                    </div>
                                                                    <div
                                                                        className="relative mt-2 flex items-center group filament-forms-text-input-component">
                                                                        <div className="flex-1 ">
                                                                            <div
                                                                                placeholder="Entrez votre reponse"
                                                                                className="text-black font-semibold block w-full px-2 h-[150px] transition duration-75 py-2  text-sm border-1   focus:border-yellow-600 focus:ring-1 focus:ring-inset focus:ring-yellow-600 disabled:opacity-70 border-yellow-300"
                                                                            >
                                                                                {dataTicket.reponse}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-end">
                                                            <input
                                                                type="submit"
                                                                value="Fermer"
                                                                className="bg-red-500 border-2 border-yellow-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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

export default TicketDetails;
