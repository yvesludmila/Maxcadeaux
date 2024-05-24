import React, { useEffect } from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { amountShop, singleShop } from "../../store/actions/shop";
import axios from "axios";
import { getUserAuth } from "../../store/actions/userAction";

function SelectShop({ show, setShow, shopID }) {
    const cancelButtonRef = useRef(null);
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(0);
    const shop = useSelector((state) => state.shop);
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(singleShop(shopID));
        dispatch(amountShop(shopID));
    }, [dispatch, shopID]);

    useEffect(() => {
        setSelected(0);
    }, [show]);

    function addCommand() {
        document.getElementById("valider").disabled = true;
        axios
            .post("/api/command/add", {
                userID: auth.user.hashId,
                shopID,
                selected,
            })
            .then(() => {
                axios
                    .post("/api/user/remove-amount", {
                        userID: auth.user.hashId,
                        amount: selected,
                    })
                    .then(() => {
                        dispatch(getUserAuth());
                        setShow(false);
                        setSelected(0);
                    });
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
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="md:flex  items-center justify-center p-4 text-center sm:items-center sm:p-0">
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
                                    className="relative  lg:w-[600px] text-black transform overflow-hidden rounded bg-transparent text-left transition-all sm:my-8 ">
                                    <div className="col-xl-12 col-lg-12">
                                        <div className="credit">
                                            <div className="card rounded">
                                                <div className="card-body">
                                                    <div className="flex justify-between items-center">
                                                        <h4 className="card-title border-b-2 border-yellow-500">
                                                            {shop &&
                                                                shop.single &&
                                                                shop.single[0] &&
                                                                shop.single[0]?.nom}
                                                        </h4>
                                                        <button
                                                            type="button"
                                                            onClick={() => setShow(false)}
                                                            className="flex items-center justify-center w-10 h-10 text-black rounded-full hover:bg-gray-500/5 focus:outline-none filament-icon-button text-primary-500 focus:bg-primary-500/10"
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
                                                                    strokeWidth="4"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                ></path>
                                                                <path
                                                                    d="M8 40L40 8"
                                                                    stroke="currentColor"
                                                                    strokeWidth="4"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                ></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="credit-content">
                                                        <div className="space-y-2">
                                                            <div
                                                                className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                                                                <label
                                                                    className="inline-flex items-center space-x-3 rtl:space-x-reverse filament-forms-field-wrapper-label"
                                                                    htmlFor="state.package_id"
                                                                >
                                                                    <span className="text-sm font-medium leading-4 text-gray-700">
                                                                        Package
                                                                        <sup className="font-medium text-danger-700">
                                                                            *
                                                                        </sup>
                                                                    </span>
                                                                </label>
                                                            </div>

                                                            <div
                                                                className="grid  md:grid-cols-3 sm:grid-col-1 gap-2 filament-forms-radio-component">
                                                                {shop &&
                                                                    shop.amount &&
                                                                    shop.amount.length > 0 &&
                                                                    shop.amount.map((a, index) => (
                                                                        <div
                                                                            key={index}
                                                                            onClick={() => setSelected(a.montant)}
                                                                            className={`${selected == a.montant && "bg-yellow-500"
                                                                                } border-2 rounded-lg border-yellow-500`}
                                                                        >
                                                                            <input
                                                                                name="state.package_id"
                                                                                type="radio"
                                                                                value="7020"
                                                                                className="hidden peer"
                                                                            />
                                                                            <label
                                                                                htmlFor="state.package_id-7020"
                                                                                className="flex items-center font-bold justify-center w-full  rounded-lg shadow-sm border border-gray-300 font-medium px-4 py-4 cursor-pointer hover:border-primary-600 hover:ring-1 hover:ring-primary-600 peer-checked:border-primary-600 peer-checked:ring-1 peer-checked:ring-primary-600 text-gray-700"
                                                                            >
                                                                                {a.montant} EUR
                                                                            </label>
                                                                        </div>
                                                                    ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {selected !== 0 && (
                                                        <div
                                                            className="flex my-2 flex-col space-y-2 bg-gray-100 p-3 sm:p-4 rounded-md">
                                                            <h1 className="font-medium text-base">
                                                                {shop && shop.single && shop.single[0]?.nom} -{" "}
                                                                {selected} EUR
                                                            </h1>
                                                            {auth && auth.user && auth.user.euros < selected && (
                                                                <div className="space-y-1">
                                                                    <div
                                                                        className="flex items-center justify-between text-sm">
                                                                        <span className="text-red-500">
                                                                            Required Balance
                                                                        </span>
                                                                        <span className="font-medium">
                                                                            € {selected - auth.user.euros}
                                                                        </span>
                                                                    </div>
                                                                    <div
                                                                        className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                                                        <div
                                                                            className="h-2 bg-green-500 rounded-full max-w-full"
                                                                            style={{ width: "0.00%" }}
                                                                        ></div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                    <button
                                                        onClick={() => addCommand()}
                                                        disabled={
                                                            (auth &&
                                                                auth.user &&
                                                                auth.user.euros < selected) ||
                                                                selected === 0
                                                                ? true
                                                                : false
                                                        }
                                                        className="btn w-full mt-4 btn-primary"
                                                        id="valider"
                                                    >
                                                        Valider
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

export default SelectShop;
