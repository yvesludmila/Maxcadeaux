import React from "react";
import Layout from "../components/layout/Layout";
import ReCAPTCHA from "react-google-recaptcha";
import config from "../utils/config";
import { Fragment, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Blank() {
    const recaptchaRef = React.createRef();
    const [captcha, setCaptcha] = useState(false);
    const [message, setMessage] = useState({
        email: "",
        sujet: "",
        message: "",
    });
    const [showSuccesMessage, setShowSuccesMessage] = useState(false);
    const onReCAPTCHAChange = (captchaCode) => {
        // If the reCAPTCHA code is null or undefined indicating that
        // the reCAPTCHA was expired then return early

        if (!captchaCode) {
            return;
        } else {
            setCaptcha(true);
        }
        recaptchaRef.current.reset();
    };

    function sendMessage(e) {
        e.preventDefault();
        if (captcha) {
            axios.post(`/api/contact`, message).then((res) => {
                if (res.data.result.success) {
                    // setShowSuccesMessage(true);
                    toast.success("hello");
                    setMessage({
                        email: "",
                        sujet: "",
                        message: "",
                    });
                }
            });
        }
    }

    return (
        <>
            <Layout subTitle="" pageTitle="">
                <div className=" mx-auto ">
                    <h1 className="text-center text-indigo-600 underline-offset-4 decoration-2 decoration-yellow-300 underline">
                        Contactez-nous
                    </h1>

                    <div className="flex justify-center  py-5">
                        <div className="col-12 col-lg-8">
                            <div
                                className="bg-green-100 mb-6 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                                role="alert"
                                style={{ display: showSuccesMessage ? "block" : "none" }}
                            >
                                <span className="block sm:inline">
                                    Message envoyé avec succèsu
                                </span>
                                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                    <svg
                                        className="fill-current h-6 w-6 text-green-500"
                                        role="button"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        onClick={() => setShowSuccesMessage(false)}
                                    >
                                        <title>Fermer</title>
                                        <path
                                            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <form onSubmit={(e) => sendMessage(e)} className="space-y-5">
                                    <div>
                                        <div className="grid grid-cols-1  gap-3 filament-forms-component-container">
                                            <div className="col-span-1">
                                                <div className="filament-forms-field-wrapper">
                                                    <div className="space-y-2">
                                                        <div
                                                            className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                                                            <label
                                                                htmlFor="fullname"
                                                                className="inline-flex items-center space-x-3 rtl:space-x-reverse filament-forms-field-wrapper-label"
                                                            >
                                                                <span
                                                                    className="text-sm underline-offset-2 decoration-2 decoration-yellow-300 underline font-medium leading-4 text-gray-700">
                                                                    Adresse Email
                                                                    <sup className="font-medium text-danger-700">
                                                                        *
                                                                    </sup>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div
                                                            className="relative flex items-center group filament-forms-text-input-component">
                                                            <div className="flex-1">
                                                                <input
                                                                    onChange={(e) =>
                                                                        setMessage({
                                                                            ...message,
                                                                            email: e.target.value,
                                                                        })
                                                                    }
                                                                    value={message.email}
                                                                    id="email"
                                                                    placeholder="exemple@exemple.com"
                                                                    type="email"
                                                                    required=""
                                                                    className="bg-gray-100 border-1 border-yellow-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-1">
                                                <div className="filament-forms-field-wrapper">
                                                    <div className="space-y-2">
                                                        <div
                                                            className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                                                            <label
                                                                htmlFor="sujet"
                                                                className="inline-flex items-center space-x-3 rtl:space-x-reverse filament-forms-field-wrapper-label"
                                                            >
                                                                <span
                                                                    className="text-sm underline-offset-2 decoration-2 decoration-yellow-300 underline font-medium leading-4 text-gray-700">
                                                                    Sujet
                                                                    <sup className="font-medium text-danger-700">
                                                                        *
                                                                    </sup>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div
                                                            className="relative flex items-center group filament-forms-text-input-component">
                                                            <div className="flex-1">
                                                                <input
                                                                    id="sujet"
                                                                    onChange={(e) =>
                                                                        setMessage({
                                                                            ...message,
                                                                            sujet: e.target.value,
                                                                        })
                                                                    }
                                                                    value={message.sujet}
                                                                    required
                                                                    placeholder="Sujet du message"
                                                                    type="text"
                                                                    className="bg-gray-100 border-1 border-yellow-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-1">
                                                <div className="filament-forms-field-wrapper">
                                                    <div className="space-y-2">
                                                        <div
                                                            className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                                                            <label
                                                                htmlFor="user-email"
                                                                className="inline-flex items-center space-x-3 rtl:space-x-reverse filament-forms-field-wrapper-label"
                                                            >
                                                                <span
                                                                    className="text-sm underline-offset-2 decoration-2 decoration-yellow-300 underline font-medium leading-4 text-gray-700">
                                                                    Message
                                                                    <sup className="font-medium text-danger-700">
                                                                        *
                                                                    </sup>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div
                                                            className="relative flex items-center group filament-forms-text-input-component">
                                                            <div className="flex-1">
                                                                <textarea
                                                                    onChange={(e) =>
                                                                        setMessage({
                                                                            ...message,
                                                                            message: e.target.value,
                                                                        })
                                                                    }
                                                                    value={message.message}
                                                                    id=""
                                                                    cols="30"
                                                                    rows="10"
                                                                    className="bg-gray-100 border-1 border-yellow-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                                ></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-1">
                                                <ReCAPTCHA
                                                    ref={recaptchaRef}
                                                    sitekey={config.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                                    onChange={onReCAPTCHAChange}
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <button
                                                    type="submit"
                                                    className="bg-indigo-500 border-2 border-yellow-400 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    Envoyer
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Blank;
