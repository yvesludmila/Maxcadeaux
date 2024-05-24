import React, {useEffect} from 'react';
import Link from 'next/link';
import {Fragment, useRef, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAuth} from '../../store/actions/userAction';
import axios from 'axios';

function AlertAvertissement({show, setShow, content, title, idAvert}) {
    const cancelButtonRef = useRef(null);
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(getUserAuth());
    }, [dispatch]);

    async function confirmAvertissement() {
        await axios
            .put(`/api/user/valide-avertissement`, {id: idAvert[0].id})
            .then((res) => {
                if (res.status == 200) {
                    setShow(false);
                    dispatch(getUserAuth());
                }
            });
    }

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
                                                    {title}
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">{content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => {
                                                confirmAvertissement(); // setShow(false)}
                                            }}
                                        >
                                            Valider
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

export default AlertAvertissement;
