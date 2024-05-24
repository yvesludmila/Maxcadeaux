import React, { useEffect } from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

function AlertActiveAddBlock({ show, setShow, content, title  }) {
    const cancelButtonRef = useRef(null);
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
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
                                    className="relative min-w-[400px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="">
                                            <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="flex items-center flex-col text-lg font-medium leading-6 text-gray-900"
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
                                                    <img
                                                        src="https://getadblock.com/images/dark_banner.png?v=8b7d8e7d"
                                                        intrinsicsize="512 x 512"
                                                        width="100"
                                                        height="100"
                                                        srcSet="https://getadblock.com/images/dark_banner.png?v=8b7d8e7d 4x"
                                                        alt="Warning Signs SVG Vector"
                                                        title="Warning Signs SVG Vector"
                                                    />
                                                    <div className="mt-2">
                                                        {title}
                                                    </div>
                                                </Dialog.Title>
                                                <div className="mt-2 text-center">
                                                    <p className="text-sm text-gray-500">{content}</p>
                                                </div>
                                                <div className="sm:flex sm:flex-row-reverse">
                                                    <button
                                                        type="button"
                                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                        onClick={() => setShow(false)}
                                                        ref={cancelButtonRef}
                                                    >
                                                        OK
                                                    </button>
                                                </div>

                                            </div>
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

export default AlertActiveAddBlock;
