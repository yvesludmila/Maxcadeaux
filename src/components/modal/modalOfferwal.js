import React, {useEffect} from "react";
import {Fragment, useRef, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {useDispatch, useSelector} from "react-redux";

import {getUserAuth} from "../../store/actions/userAction";

function ModalOfferwall({show, setShow, data}) {
    const cancelButtonRef = useRef(null);

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(getUserAuth());
    }, [dispatch]);

    return (
        <>
            <Transition.Root show={show} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setShow}
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
                        <div className="flex min-h-full items-end justify-center  text-center sm:items-center sm:p-0">
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
                                    className="relative w-[100%] lg:w-[80%] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 bg-gray-100 py-3 px-3 "
                                    >
                                        <div className="flex item-center space-x-4">
                                            <div className="font-semibold text-xl leading-none">
                                                {data.name}
                                            </div>
                                            <div>
                                                <a
                                                    className="inline-flex items-center justify-center gap-0.5 font-medium hover:underline focus:outline-none focus:underline filament-link text-primary-600 hover:text-primary-500"
                                                    href={`
                          ${
                                                        data.id === "offertoro"
                                                            ? data.linkIframe.replace(
                                                                "mon_id",
                                                                auth.user.hashId
                                                            )
                                                            : data.linkIframe + auth.user.hashId
                                                    }`}
                                                    target="_blank"
                                                >
                                                    <svg
                                                        className="filament-button-icon w-4 h-4 mr-1 -ml-2 rtl:ml-1 rtl:-mr-2"
                                                        viewBox="0 0 48 48"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <rect
                                                            width="48"
                                                            height="48"
                                                            fill="white"
                                                            fillOpacity="0.01"
                                                        ></rect>
                                                        <path
                                                            d="M6 6L16 15.8995"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>

                                                        <path
                                                            d="M6 41.8995L16 32"
                                                            stroke="currentColor"
                                                            stroke-width="4"
                                                            stroke-linecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M42.0001 41.8995L32.1006 32"
                                                            stroke="currentColor"
                                                            stroke-width="4"
                                                            stroke-linecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M41.8995 6L32 15.8995"
                                                            stroke="currentColor"
                                                            stroke-width="4"
                                                            stroke-linecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M33 6H42V15"
                                                            stroke="currentColor"
                                                            stroke-width="4"
                                                            stroke-linecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M42 33V42H33"
                                                            stroke="currentColor"
                                                            stroke-width="4"
                                                            stroke-linecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M15 42H6V33"
                                                            stroke="currentColor"
                                                            stroke-width="4"
                                                            stroke-linecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M6 15V6H15"
                                                            stroke="currentColor"
                                                            stroke-width="4"
                                                            stroke-linecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div className="absolute right-2 top-2 z-50">
                                                <button
                                                    onClick={() => setShow(false)}
                                                    type="button"
                                                    className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-red-500/5 focus:outline-none filament-icon-button text-red-500 focus:bg-red-500/10"
                                                >
                                                    <svg
                                                        className="w-5 h-5 filament-icon-button-icon"
                                                        viewBox="0 0 48 48"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <rect
                                                            width="48"
                                                            height="48"
                                                            fill="white"
                                                            fillOpacity="0.01"
                                                        ></rect>
                                                        <path
                                                            d="M8 8L40 40"
                                                            stroke="currentColor"
                                                            stroke-width="4"
                                                            stroke-linecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M8 40L40 8"
                                                            stroke="currentColor"
                                                            stroke-width="4"
                                                            stroke-linecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                    {" "}
                                                </button>
                                            </div>
                                        </div>
                                    </Dialog.Title>
                                    <iframe
                                        id={data.id}
                                        src={`
                    ${
                                            data.id === "offertoro"
                                                ? data.linkIframe.replace("mon_id", auth.user.hashId)
                                                : data.linkIframe + auth.user.hashId
                                        }`}
                                        width="750"
                                        height="1400"
                                        frameborder="0"
                                        className="w-full"
                                        allowfullscreen
                                    ></iframe>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}

export default ModalOfferwall;
