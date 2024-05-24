import React from "react";
import {Fragment, useRef, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";

import axios from "axios";

function UserDetails({
                         dataUser,
                         showUserDetails,
                         setShowUserDetails,
                         allUtilisateus,
                     }) {
    const cancelButtonRef = useRef(null);

    async function bannir(id, value) {
        await axios.put(`/api/bannir/${id}`, {value}).then((res) => {
            allUtilisateus();
            dataUser.banni = value;
        });
    }

    return (
        <>
            <Transition.Root show={showUserDetails} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setShowUserDetails}
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
                                    className="relative min-w-[400px] maw-w-[600px] text-black transform overflow-hidden rounded-lg bg-transparent text-left transition-all sm:my-8 ">
                                    <div className="col-xl-12 col-lg-12 ">
                                        <div className="credit">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h4 className="card-title text-center">
                                                        {dataUser.nom} {dataUser.prenom}{" "}
                                                        <span className="text-red-600">
                              {dataUser.banni == 1 && "(Banni)"}{" "}
                            </span>
                                                    </h4>
                                                    <div className="w-[80vw]">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div
                                                                    className="invited d-flex flex-col justify-content-between">
                                                                    <h6 className="text-black">Email</h6>
                                                                    <h6 className="text-yellow-600">
                                                                        {dataUser.email}
                                                                    </h6>
                                                                </div>
                                                                <div
                                                                    className="invited d-flex flex-col justify-content-between">
                                                                    <h6 className="text-black">Adresse</h6>
                                                                    <h6 className="text-yellow-600">
                                                                        {dataUser.adresse}
                                                                    </h6>
                                                                </div>
                                                                <div
                                                                    className="invited d-flex flex-col justify-content-between">
                                                                    <h6 className="text-black">Ville</h6>
                                                                    <h6 className="text-yellow-600">
                                                                        {dataUser.ville}
                                                                    </h6>
                                                                </div>
                                                                <div
                                                                    className="invited d-flex flex-col justify-content-between">
                                                                    <h6 className="text-black">Code Postale</h6>
                                                                    <h6 className="text-yellow-600">
                                                                        {dataUser.codePostal}
                                                                    </h6>
                                                                </div>
                                                                <div
                                                                    className="invited d-flex flex-col justify-content-between">
                                                                    <h6 className="text-black">Euro</h6>
                                                                    <h6 className="text-yellow-600">
                                                                        {dataUser.euros}
                                                                    </h6>
                                                                </div>
                                                                {/* <div className="invited d-flex flex-col justify-content-between">
                                  <h6 className="text-black">Euro historique</h6>
                                  <h6 className="text-yellow-600">
                                    {dataUser.euros_histo}
                                  </h6>
                                </div> */}
                                                                <div
                                                                    className="invited d-flex flex-col justify-content-between">
                                                                    <h6 className="text-black">Adresse IP</h6>
                                                                    <h6 className="text-yellow-600">{dataUser.ip}</h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div
                                                                    className="invited d-flex flex-col justify-content-between">
                                                                    <h6 className="text-black">Actif</h6>
                                                                    <h6 className="text-yellow-600">
                                                                        {dataUser.actif}
                                                                    </h6>
                                                                </div>
                                                                <div
                                                                    className="invited d-flex flex-col justify-content-between">
                                                                    <h6 className="text-black">Swift</h6>
                                                                    <h6 className="text-yellow-600">
                                                                        {dataUser.swift}
                                                                    </h6>
                                                                </div>
                                                                <div
                                                                    className="invited d-flex flex-col justify-content-between">
                                                                    <h6 className="text-black">Paypal</h6>
                                                                    <h6 className="text-yellow-600">
                                                                        {dataUser.paypal}
                                                                    </h6>
                                                                </div>
                                                                <div
                                                                    className="invited d-flex flex-col justify-content-between">
                                                                    <h6 className="text-black">Level</h6>
                                                                    <h6 className="text-yellow-600">
                                                                        {dataUser.level}
                                                                    </h6>
                                                                </div>
                                                                <div
                                                                    className="invited d-flex flex-col justify-content-between">
                                                                    <h6 className="text-black">Date last connex</h6>
                                                                    <h6 className="text-yellow-600">
                                                                        {dataUser.datelastco}
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div
                                                                    className="invited d-flex flex-col justify-content-between">
                                                                    <h6 className="text-black">Premium</h6>
                                                                    <h6 className="text-yellow-600">
                                                                        {dataUser.premium}
                                                                    </h6>
                                                                </div>
                                                                <div
                                                                    className="invited d-flex flex-col justify-content-between">
                                                                    <h6 className="text-black">Banni</h6>
                                                                    <h6 className="text-yellow-600">
                                                                        {dataUser.banni == 1 ? (
                                                                            <span className="text-red-500">Oui</span>
                                                                        ) : (
                                                                            "NON"
                                                                        )}
                                                                    </h6>
                                                                </div>
                                                                <div
                                                                    className="invited d-flex flex-col justify-content-between">
                                                                    <h6 className="text-black">Banni Chat</h6>
                                                                    <h6 className="text-yellow-600">
                                                                        {dataUser.banni_chat}
                                                                    </h6>
                                                                </div>
                                                                <div
                                                                    className="invited d-flex flex-col justify-content-between">
                                                                    <h6 className="text-black">iBan</h6>
                                                                    <h6 className="text-yellow-600">
                                                                        {dataUser.iban}
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 text-end">
                                                                {dataUser.banni == 1 ? (
                                                                    <button
                                                                        onClick={() => {
                                                                            bannir(dataUser.hashId, 0);
                                                                        }}
                                                                        className="btn btn-success mr-2"
                                                                    >
                                                                        Gracier
                                                                    </button>
                                                                ) : (
                                                                    <button
                                                                        onClick={() => {
                                                                            bannir(dataUser.hashId, 1);
                                                                        }}
                                                                        className="btn btn-danger mr-2"
                                                                    >
                                                                        Bannir
                                                                    </button>
                                                                )}

                                                                <button
                                                                    onClick={() => setShowUserDetails(false)}
                                                                    className="btn btn-primary"
                                                                >
                                                                    Close
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
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

export default UserDetails;
