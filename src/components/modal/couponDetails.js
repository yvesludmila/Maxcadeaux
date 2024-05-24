import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import convertDate from "../../utils/converDate";

function CouponDetails({ coupon, show, setShow }) {
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
                                    <div className="col-xl-12 col-lg-12">
                                        <div className="credit">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h4 className="card-title">{coupon.nom}</h4>
                                                    <div className="credit-content">
                                                        <div className="flex justify-center mb-4">
                                                            <img src={'/uploads/' + coupon.image} />
                                                        </div>
                                                        <div className="invited d-flex justify-content-between">
                                                            <h6>Start date</h6>
                                                            <h6 className="text-primary">
                                                                {convertDate(coupon.dateDebut)}
                                                            </h6>
                                                        </div>
                                                        <div className="invited d-flex justify-content-between">
                                                            <h6>End date</h6>
                                                            <h6 className="text-primary">
                                                                {convertDate(coupon.dateFin)}
                                                            </h6>
                                                        </div>
                                                        <div className="invited d-flex justify-content-between">
                                                            <h6>Code</h6>
                                                            <h6 className="text-primary">{coupon.code}</h6>
                                                        </div>
                                                        <div className="invited d-flex justify-content-between">
                                                            <h6>Type</h6>
                                                            <h6 className="text-primary">{coupon.typecoupon}</h6>
                                                        </div>
                                                        <div className="invited d-flex justify-content-between">
                                                            <h6>Pays</h6>
                                                            <h6 className="text-primary">{coupon.pays}</h6>
                                                        </div>
                                                        <div className="invited d-flex justify-content-between">
                                                            <h6>Url</h6>
                                                            <h6 className="text-primary">{coupon.url}</h6>
                                                        </div>
                                                        <div className="invited d-flex justify-content-between">
                                                            <h6>Actif</h6>
                                                            <h6 className="text-primary">{coupon.actif}</h6>
                                                        </div>
                                                        <div className="invited d-flex justify-content-between">
                                                            <h6>Valid</h6>
                                                            <h6 className="text-primary">{coupon.valid}</h6>
                                                        </div>
                                                        <div
                                                            className="invited d-flex max-w-[600px] justify-content-between">
                                                            <h6 className="text-primary">{coupon.description}</h6>
                                                        </div>
                                                        <button
                                                            onClick={() => setShow(false)}
                                                            className="btn btn-primary"
                                                        >
                                                            Close
                                                        </button>
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

export default CouponDetails;
