import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import config from "../../utils/config";
import axios from "axios";
import { toast } from "react-toastify";
import SentConfirmation from "./confirmEmail";

function ResetPassword({ setShowResetPass, showResetPass }) {
    const cancelButtonRef = useRef(null);
    const [email, setEmail] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [showMessageError, setShowMessageError] = useState(false);
    const [message, setMessage] = useState("");
    const [notActive, setNotActive] = useState(false);
    const [error, setError] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loadingResetPassword, setLoadingResetPassword] = useState(false);

    function resetPass(e) {
        e.preventDefault();
        setError(false);
        setLoadingResetPassword(true);
        axios
            .post(`/api/resetpassword`, { email })
            .then((res) => {
                if (res.data.success) {
                    setEmail('');
                    setNotActive(true);
                    setTitle('Réinitialisation');
                    setContent(res.data.message ?? 'Message envoyé.');
                    // setShowMessage(true);
                    // setMessage(res.data.message);
                    // setTimeout(() => {
                    //     setShowResetPass(false);
                    //     setShowMessage(false);
                    // }, 5000);
                }
            })
            .catch((err) => {
                // setShowMessageError(true);
                // toast.error(err.response?.data?.message ?? 'Message non envoyé.');
                setNotActive(true);
                setError(true);
                setTitle('Erreur');
                setContent(err.response?.data?.message ?? 'Message non envoyé.');
            })
            .finally(() => {
                setLoadingResetPassword(false);
            })
    }

    const endAlert = (closed) => {
        if (!closed && error) {
            setShowResetPass(true);
        }

        setNotActive(closed);
        setError(false);
    };

    return (
        <>
            <Transition.Root show={showResetPass} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setShowResetPass}
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
                                    className="relative w-[80%] lg:w-[50%] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                                    <div className="flex">
                                        <div className="flex flex-col px-5 py-12 w-full">
                                            <div>
                                                <div className="text-2xl  font-bold sm:text-center">
                                                    Réinitialiser le mot de passe
                                                </div>
                                                <div className="text-center">
                                                    Il semble que vous avez oublié votre mot de passe, si
                                                    c'est vrai,entrer votre email ici pour faire la
                                                    réinitialisation de votre mot de passe
                                                </div>
                                            </div>
                                            <div
                                                className="bg-green-100 border border-green-400 text-green-700 mt-4 px-4 py-3 rounded relative"
                                                role="alert"
                                                style={{
                                                    display: showMessage ? "block" : "none",
                                                }}
                                            >
                                                <span className="block sm:inline">{message}</span>
                                                <span
                                                    className="absolute top-0 bottom-0 right-0 px-4 py-3"
                                                    onClick={() => setShowMessage(false)}
                                                >
                                                    <svg
                                                        className="fill-current h-6 w-6 text-green-500"
                                                        role="button"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <title>Close</title>
                                                        <path
                                                            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
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
                                                    Erreur pour la réinitialisation
                                                </span>
                                                <span
                                                    className="absolute top-0 bottom-0 right-0 px-4 py-3"
                                                    onClick={() => setShowMessageError(false)}
                                                >
                                                    <svg
                                                        className="fill-current h-6 w-6 text-red-500"
                                                        role="button"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <title>Close</title>
                                                        <path
                                                            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <form
                                                onSubmit={(e) => resetPass(e)}
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
                                                                            className="inline-flex items-center space-x-3 rtl:space-x-reverse filament-forms-field-wrapper-label"
                                                                            htmlFor="email"
                                                                        >
                                                                            <span className="text-base font-medium leading-4 text-gray-700">
                                                                                Email
                                                                                <sup className="font-medium text-danger-700">
                                                                                    *
                                                                                </sup>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <div
                                                                        className="relative mt-2 flex items-center group filament-forms-text-input-component">
                                                                        <div
                                                                            className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                                                            <svg
                                                                                className="w-5 h-5"
                                                                                viewBox="0 0 48 48"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <circle
                                                                                    cx="24"
                                                                                    cy="12"
                                                                                    r="8"
                                                                                    fill="none"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth="4"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                ></circle>
                                                                                <path
                                                                                    d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth="4"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                ></path>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="flex-1">
                                                                            <input
                                                                                type="email"
                                                                                onChange={(e) =>
                                                                                    setEmail(e.target.value)
                                                                                }
                                                                                value={email}
                                                                                placeholder="Entrez votre adresse e-mail"
                                                                                required
                                                                                className="block w-full pl-10 transition duration-75 py-2  text-sm border-1 rounded-lg  focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button
                                                                type="submit"
                                                                className={`inline-flex p-0 items-center cursor-pointer text-base justify-center gap-1 font-medium rounded-lg border transition-colors focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button h-9 px-4 text-sm text-white focus:ring-white border-transparent ${loadingResetPassword
                                                                    ? "bg-gray-400 cursor-not-allowed"
                                                                    : "bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 focus:ring-offset-indigo-700"
                                                                    } w-full`}
                                                                disabled={loadingResetPassword}
                                                            >
                                                                {loadingResetPassword ? "En cours de traitement ..." : "Valider"}
                                                            </button>
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
            <SentConfirmation
                setConfirm={endAlert}
                confirm={notActive}
                content={content}
                title={title}
                isError={error}
            />
        </>
    );
}

export default ResetPassword;
