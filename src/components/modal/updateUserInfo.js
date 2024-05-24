import React, {useEffect} from "react";
import {Fragment, useRef, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import config from "../../utils/config";
import axios from "axios";

function UpdateUserInfo({
                            setShowUpdateUserInfo,
                            showUpdateUserInfo,
                            dataUser,
                            allUtilisateus,
                        }) {
    const cancelButtonRef = useRef(null);

    const [showMessage, setShowMessage] = useState(false);
    const [showMessageError, setShowMessageError] = useState(false);
    const [users, setUsers] = useState({
        nom: "",
        prenom: "",
        ville: "",
        adresse: "",
        codePostal: "",
        pays: "",
        idParrain: "",
        email: "",
        hashId: "",
        premium: "",
        level: "",
    });
    useEffect(() => {
        console.log("dataUser ==> ", dataUser);
        setUsers({
            nom: dataUser.nom || "",
            prenom: dataUser.prenom || "",
            ville: dataUser.ville || "",
            adresse: dataUser.adresse || "",
            codePostal: dataUser.codePostal || "",
            pays: dataUser.pays || "",
            idParrain: dataUser.idParrain || "",
            email: dataUser.email || "",
            hashId: dataUser.hashId || "",
            premium: dataUser.premium || "",
            level: dataUser.level || "",
        });
    }, [dataUser]);

    function updateInformation(e) {
        e.preventDefault();
        axios
            .post(`/api/auth/update-user`, users)
            .then((res) => {
                setShowMessage(true);
                setShowMessageError(false);
                allUtilisateus();
                setTimeout(() => {
                    setShowUpdateUserInfo(false);
                    setShowMessage(false);
                }, 1000);
            })
            .catch((err) => {
                setShowMessage(false);
                setShowMessageError(true);
            });
    }

    return (
        <>
            <Transition.Root show={showUpdateUserInfo} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setShowUpdateUserInfo}
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
                                        <div className="flex flex-col px-3 lg:px-5 py-12 w-full">
                                            <div>
                                                <div className="text-2xl  font-bold sm:text-center">
                                                    Modification
                                                </div>
                                            </div>
                                            <div
                                                className="bg-green-100 border border-green-400 text-green-700 mt-4 px-4 py-3 rounded relative"
                                                level="alert"
                                                style={{
                                                    display: showMessage ? "block" : "none",
                                                }}
                                            >
                        <span className="block sm:inline">
                          Modification avec success
                        </span>
                                                <span
                                                    className="absolute top-0 bottom-0 right-0 px-4 py-3"
                                                    onClick={() => setShowMessage(false)}
                                                >
                          <svg
                              className="fill-current h-6 w-6 text-green-500"
                              level="button"
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
                                                level="alert"
                                                style={{
                                                    display: showMessageError ? "block" : "none",
                                                }}
                                            >
                                                <span className="block sm:inline">Oupps ! Error</span>
                                                <span
                                                    className="absolute top-0 bottom-0 right-0 px-4 py-3"
                                                    onClick={() => setShowMessageError(false)}
                                                >
                          <svg
                              className="fill-current h-6 w-6 text-red-500"
                              level="button"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                          >
                            <title>Close</title>
                            <path
                                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                          </svg>
                        </span>
                                            </div>
                                            <form
                                                onSubmit={(e) => updateInformation(e)}
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
                                        Nom
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
                                                                                type="text"
                                                                                onChange={(e) => {
                                                                                    setUsers({
                                                                                        ...users,
                                                                                        nom: e.target.value,
                                                                                    });
                                                                                }}
                                                                                value={users.nom}
                                                                                placeholder="Entrez nom"
                                                                                required
                                                                                className="text-yellow-500 block w-full pl-10 transition duration-75 py-2  text-sm border-1 rounded-lg  focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
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
                                        Prénom
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
                                                                                type="text"
                                                                                onChange={(e) => {
                                                                                    setUsers({
                                                                                        ...users,
                                                                                        prenom: e.target.value,
                                                                                    });
                                                                                }}
                                                                                value={users.prenom}
                                                                                placeholder="Entrez prénom"
                                                                                required
                                                                                className="text-yellow-500 block w-full pl-10 transition duration-75 py-2  text-sm border-1 rounded-lg  focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
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
                                        Ville
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
                                                                                type="text"
                                                                                onChange={(e) => {
                                                                                    setUsers({
                                                                                        ...users,
                                                                                        ville: e.target.value,
                                                                                    });
                                                                                }}
                                                                                value={users.ville}
                                                                                placeholder="Entrez ville"
                                                                                className="text-yellow-500 block w-full pl-10 transition duration-75 py-2  text-sm border-1 rounded-lg  focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
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
                                        Adresse
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
                                                                                type="text"
                                                                                onChange={(e) => {
                                                                                    setUsers({
                                                                                        ...users,
                                                                                        adresse: e.target.value,
                                                                                    });
                                                                                }}
                                                                                value={users.adresse}
                                                                                placeholder={users.adresse}
                                                                                className="text-yellow-500 block w-full pl-10 transition duration-75 py-2  text-sm border-1 rounded-lg  focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
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
                                        Code postale
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
                                                                                type="text"
                                                                                onChange={(e) => {
                                                                                    setUsers({
                                                                                        ...users,
                                                                                        codePostal: e.target.value,
                                                                                    });
                                                                                }}
                                                                                value={users.codePostal}
                                                                                placeholder="Entrez code postal"
                                                                                className="text-yellow-500 block w-full pl-10 transition duration-75 py-2  text-sm border-1 rounded-lg  focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
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
                                        Pays
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
                                                                                type="text"
                                                                                onChange={(e) => {
                                                                                    setUsers({
                                                                                        ...users,
                                                                                        pays: e.target.value,
                                                                                    });
                                                                                }}
                                                                                value={users.pays}
                                                                                placeholder="Entrez pays"
                                                                                className="text-yellow-500 block w-full pl-10 transition duration-75 py-2  text-sm border-1 rounded-lg  focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
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
                                                                                onChange={(e) => {
                                                                                    setUsers({
                                                                                        ...users,
                                                                                        email: e.target.value,
                                                                                    });
                                                                                }}
                                                                                value={users.email}
                                                                                placeholder="Entrez votre adresse e-mail"
                                                                                required
                                                                                className="text-yellow-500 block w-full pl-10 transition duration-75 py-2  text-sm border-1 rounded-lg  focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
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
                                        Premium
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
                                                                            <select
                                                                                className="text-yellow-500 block w-full pl-10 transition duration-75 py-2  text-sm border-1 rounded-lg  focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
                                                                                onChange={(e) => {
                                                                                    setUsers({
                                                                                        ...users,
                                                                                        premium: e.target.value,
                                                                                    });
                                                                                }}
                                                                                value={users.premium}
                                                                                required
                                                                            >
                                                                                <option value="0">NON</option>
                                                                                <option value="1">OUI</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
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
                                        Id Parrain
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
                                                                                type="text"
                                                                                onChange={(e) => {
                                                                                    setUsers({
                                                                                        ...users,
                                                                                        idParrain: e.target.value,
                                                                                    });
                                                                                }}
                                                                                value={users.idParrain}
                                                                                placeholder="Entrez id Parrain"
                                                                                className="text-yellow-500 block w-full pl-10 transition duration-75 py-2  text-sm border-1 rounded-lg  focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
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
                                        Rôle
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
                                                                            <select
                                                                                className="text-yellow-500 block w-full pl-10 transition duration-75 py-2  text-sm border-1 rounded-lg  focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
                                                                                onChange={(e) => {
                                                                                    setUsers({
                                                                                        ...users,
                                                                                        level: e.target.value,
                                                                                    });
                                                                                }}
                                                                                value={users.level}
                                                                                required
                                                                            >
                                                                                <option value="1">Utilisateur</option>
                                                                                <option value="99">Super Admin</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <input
                                                                type="submit"
                                                                value="MODIFIER"
                                                                className="inline-flex p-0 items-center cursor-pointer text-base justify-center gap-1 font-medium rounded-lg border transition-colors focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button h-9 px-4 text-sm text-white focus:ring-white border-transparent bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 focus:ring-offset-indigo-700 w-full"
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

export default UpdateUserInfo;
