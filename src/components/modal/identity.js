import React, { useEffect } from 'react';
import Link from 'next/link';
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuth } from '../../store/actions/userAction';
import axios from 'axios';
import uploadFile from '../../utils/uploadService';
import IdentityPendingModal from './identityPending';

function IdentityModal({ show, setShow, setPending }) {
    const cancelButtonRef = useRef(null);
    const dispatch = useDispatch();
    const [identityCardRecto, setIdentityCardRecto] = useState('');
    const [identityCardVerso, setIdentityCardVerso] = useState('');
    const [address, setAddress] = useState('');
    const [block, setBlock] = useState(false);
    const [isLoadingForm, setLoadingForm] = useState(false);
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(getUserAuth());
    }, [dispatch]);

    function upload(event, type) {
        const img = event.target.files[0];
        const reader = new FileReader();
        reader.onload = async (e) => {
            const image = reader.result;
            if (type === 1) {
                setIdentityCardRecto(image);
            } else if (type === 2) {
                setIdentityCardVerso(image);
            } else {
                setAddress(image);
            }
        };
        reader.readAsDataURL(img);
    }

    async function addIdentity() {
        setLoadingForm(true);
        let recto = '';
        let verso = '';
        let addressInside = '';
        if (identityCardRecto !== '') {
            const rectoResponse = await uploadFile(identityCardRecto);
            recto = rectoResponse.data.path;
        }
        if (identityCardVerso !== '') {
            const versoResponse = await uploadFile(identityCardVerso);
            verso = versoResponse.data.path;
        }
        if (address !== '') {
            const addressResponse = await uploadFile(address);
            addressInside = addressResponse.data.path;
        }
        axios
            .post('/api/identity/add', {
                hashId: auth.user.hashId,
                identityCardRecto: recto,
                identityCardVerso: verso,
                addressCard: addressInside,
            })
            .then(() => {
                setPending(true);
                setShow(false);
                setLoadingForm(false);
            });
    }

    return (
        <>
            <Transition.Root show={show} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setBlock}
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
                                                    Compte non vérifier!
                                                </Dialog.Title>
                                                <div className="mt-4">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="form-group mb-4">
                                                                <label htmlFor="">Carte d'identité recto</label>
                                                                <input
                                                                    onChange={(e) => upload(e, 1)}
                                                                    type="file"
                                                                    className="form-control border-yellow-400 border-2"
                                                                    placeholder="Lien image"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group mb-4">
                                                                <label htmlFor="">Carte d'identité verso</label>
                                                                <input
                                                                    onChange={(e) => upload(e, 2)}
                                                                    type="file"
                                                                    className="form-control border-yellow-400 border-2"
                                                                    placeholder="Lien image"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group mb-4">
                                                            <label htmlFor="">Justificatif domicile</label>
                                                            <input
                                                                onChange={(e) => upload(e, 3)}
                                                                type="file"
                                                                className="form-control border-yellow-400 border-2"
                                                                placeholder="Lien image"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-4 row">
                                                    {identityCardRecto.length > 0 && (
                                                        <div className="col-lg-6 mt-4">
                                                            <div className="form-group mb-4 text-black">
                                                                <img
                                                                    className="w-full h-64 object-cover"
                                                                    src={identityCardRecto}
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                                    {identityCardVerso.length > 0 && (
                                                        <div className="col-lg-6 mt-4">
                                                            <div className="form-group mb-4 text-black">
                                                                <img
                                                                    className="w-full h-64 object-cover"
                                                                    src={identityCardVerso}
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                                    {address.length > 0 && (
                                                        <div className="col-lg-6 mt-4">
                                                            <div className="form-group mb-4 text-black">
                                                                <img
                                                                    className="w-full h-64 object-cover"
                                                                    src={address}
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            onClick={() => addIdentity()}
                                            type="button"
                                            disable={isLoadingForm}
                                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                        >
                                            {isLoadingForm ? 'En cours de traitement . . .' : 'Valider'}
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

export default IdentityModal;
