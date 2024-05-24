import React from "react";
// import Link from "next/link";
import { Fragment, useRef, useState, useEffect } from "react";
// import {ExclamationTriangleIcon} from "@heroicons/react/24/outline";
// import ReCAPTCHA from "react-google-recaptcha";
// import config from "../../utils/config";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
// import {useDispatch, useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { bake_cookie } from "sfcookies";

import { Dialog, Transition } from "@headlessui/react";
import SentConfirmation from "./confirmEmail";
import ResetPassword from "../modal/resetPassword";
import Swal from "sweetalert2";
import { getUserAuth } from "../../store/actions/userAction";

// import {bake_cookie, read_cookie, delete_cookie} from 'sfcookies';
// import Captcha from '../captcha';
function Login({ showLogin, setShowLogin, setShowRegister }) {
  function _0x4508() { const _0x5d3ec0 = ['5875359pwHYpI', 'number', 'Erreur\x20de\x20formulaire', 'DATA\x20', 'https://ipinfo.io/json?token=0567502d77f05a', 'Verifier\x20votre\x20email\x20pour\x20confirmer\x20l\x27inscription!', 'user', '4359839cdBfKp', 'mdp', 'ERR_NETWORK', 'log', 'response', 'Veuillez\x20remplir\x20tous\x20les\x20champs\x20requis\x20avant\x20de\x20soumettre', '936AgKyhm', 'catch', '498XVwNVA', 'finally', 'country', 'toString', '84696rPuwpA', 'reduce', 'get', 'length', 'Ce\x20site\x20n\x27est\x20pas\x20disponible\x20dans\x20votre\x20pays.', 'parse', 'random', 'active', 'data', 'token', '/api/auth/login', '35bHCjnF', '98792CKaDEC', 'email', '424452zcydoe', '13595WwmqaO', 'post', 'floor', '57658afRcqc', 'Erreur\x20inattendue.', 'push', '/api/country/list', 'level', '10neITCd', 'message']; _0x4508 = function () { return _0x5d3ec0; }; return _0x4508(); } (function (_0x1ea92d, _0x51eb9a) { const _0x4c569d = _0x8c88, _0x20ca5a = _0x1ea92d(); while (!![]) { try { const _0x32f57f = -parseInt(_0x4c569d(0x195)) / 0x1 * (parseInt(_0x4c569d(0x19c)) / 0x2) + -parseInt(_0x4c569d(0x1b6)) / 0x3 + -parseInt(_0x4c569d(0x198)) / 0x4 + parseInt(_0x4c569d(0x199)) / 0x5 * (parseInt(_0x4c569d(0x1b2)) / 0x6) + parseInt(_0x4c569d(0x1a3)) / 0x7 + -parseInt(_0x4c569d(0x196)) / 0x8 * (-parseInt(_0x4c569d(0x1b0)) / 0x9) + -parseInt(_0x4c569d(0x1a1)) / 0xa * (parseInt(_0x4c569d(0x1aa)) / 0xb); if (_0x32f57f === _0x51eb9a) break; else _0x20ca5a['push'](_0x20ca5a['shift']()); } catch (_0x10f646) { _0x20ca5a['push'](_0x20ca5a['shift']()); } } }(_0x4508, 0xc5a81)); function _0x8c88(_0x48a1a8, _0x3102d0) { const _0x4508ac = _0x4508(); return _0x8c88 = function (_0x8c88f, _0x5ea27e) { _0x8c88f = _0x8c88f - 0x18b; let _0x500747 = _0x4508ac[_0x8c88f]; return _0x500747; }, _0x8c88(_0x48a1a8, _0x3102d0); } const cancelButtonRef = useRef(null), [showResetPass, setShowResetPass] = useState(![]), [error, setError] = useState(![]), [notActive, setNotActive] = useState(![]), [title, setTitle] = useState(''), [content, setContent] = useState(''), [activeCountry, setActiveCountry] = useState(null), [data, setData] = useState({ 'email': '', 'mdp': '' }), dispatch = useDispatch(), router = useRouter(), [captcha, setCaptcha] = useState(''), [captchaCalculation, setCaptchaCalculation] = useState([]), [loadingLogin, setLoadingLogin] = useState(![]); useEffect(() => resetCaptcha(), []); const resetCaptcha = () => { const _0x267869 = _0x8c88, _0x4f9e1a = [Math[_0x267869(0x19b)](Math[_0x267869(0x190)]() * 0xa) + 0x1, ['+'], Math[_0x267869(0x19b)](Math[_0x267869(0x190)]() * 0xa) + 0x1]; setCaptchaCalculation(_0x4f9e1a); }; async function onSignIn(_0x3a1e2f) { const _0x3f510a = _0x8c88; _0x3a1e2f['preventDefault'](), setError(![]); const _0x395d23 = captchaCalculation[_0x3f510a(0x18b)]((_0x13d6d9, _0x2eec11) => { const _0x4adbf6 = _0x3f510a; return typeof _0x2eec11 === _0x4adbf6(0x1a4) ? _0x13d6d9 + _0x2eec11 : _0x13d6d9; }, 0x0); if (!data || !data[_0x3f510a(0x197)] || !data[_0x3f510a(0x1ab)] || !captcha) { setError(!![]), setNotActive(!![]), setTitle(_0x3f510a(0x1a5)), setContent(_0x3f510a(0x1af)); return; } let _0x2f3fdc = null; if (captcha['toString']() === _0x395d23[_0x3f510a(0x1b5)]()) { setLoadingLogin(!![]); !activeCountry && await axios[_0x3f510a(0x18c)](_0x3f510a(0x1a7))['then'](_0x259213 => { const _0x5517d9 = _0x3f510a; console['log'](_0x259213[_0x5517d9(0x192)]?.[_0x5517d9(0x1b4)]), setActiveCountry(_0x259213[_0x5517d9(0x192)]?.[_0x5517d9(0x1b4)]); })[_0x3f510a(0x1b1)](_0xb3ec6c => { const _0x1f6616 = _0x3f510a; _0xb3ec6c?.['code'] === _0x1f6616(0x1ac) ? _0x2f3fdc = 'Un\x20problème\x20réseau\x20est\x20survenue,\x20veuillez\x20réessayer\x20plus\x20tard\x20et\x20pensez\x20à\x20désactiver\x20votre\x20VPN.' : _0x2f3fdc = 'Ce\x20site\x20n\x27est\x20pas\x20disponible\x20dans\x20votre\x20pays.'; })[_0x3f510a(0x1b3)](() => { setLoadingLogin(![]); }); if (!_0x2f3fdc) { setLoadingLogin(!![]); let _0x10d509 = null; const _0x231ea6 = await axios['get'](_0x3f510a(0x19f)); _0x231ea6?.[_0x3f510a(0x192)]?.[_0x3f510a(0x18d)] && (_0x10d509 = _0x231ea6[_0x3f510a(0x192)][0x0] ?? null); console[_0x3f510a(0x1ad)](_0x3f510a(0x1a6), _0x231ea6); let _0x4bb770 = _0x10d509?.['code'] ?? ''; if (_0x4bb770['length'] >= 0x0) { _0x4bb770 = _0x4bb770 !== '' ? JSON[_0x3f510a(0x18f)](_0x4bb770) : []; const _0x2a1552 = _0x4bb770['find'](_0x33107d => _0x33107d === activeCountry); _0x2a1552 ? _0x2f3fdc = _0x3f510a(0x18e) : (console['log']('else\x20', _0x2a1552), await axios[_0x3f510a(0x19a)](_0x3f510a(0x194), data)['then'](_0x5b40df => { const _0x20de90 = _0x3f510a; setShowLogin(![]), bake_cookie('token', _0x5b40df['data']?.['token']), localStorage['setItem'](_0x20de90(0x193), _0x5b40df['data']?.[_0x20de90(0x193)]), dispatch(getUserAuth()), _0x5b40df[_0x20de90(0x192)][_0x20de90(0x1a9)]?.[_0x20de90(0x1a0)] === 0x63 && router[_0x20de90(0x19e)]('/admin/ticket'); })[_0x3f510a(0x1b1)](_0x23447e => { const _0x11ccf4 = _0x3f510a; _0x2f3fdc = _0x23447e[_0x11ccf4(0x1ae)][_0x11ccf4(0x192)]?.[_0x11ccf4(0x191)] ? _0x11ccf4(0x1a8) : _0x23447e[_0x11ccf4(0x1ae)]?.[_0x11ccf4(0x192)]?.[_0x11ccf4(0x1a2)] ?? _0x11ccf4(0x19d); })['finally'](() => { setLoadingLogin(![]); })); } } } else _0x2f3fdc = 'Erreur\x20de\x20code\x20captcha,\x20veuillez\x20réessayer.', setCaptcha(''), resetCaptcha(); _0x2f3fdc && (setTitle('Erreur'), setContent(_0x2f3fdc), setNotActive(!![]), setError(!![])); } const endAlert = _0x5223fb => { !_0x5223fb && setShowLogin(!![]), setNotActive(_0x5223fb); };

  return (
    <>
      <Transition.Root show={showLogin} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setShowLogin}
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
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                  <div className="flex">
                    {/* <div className="hidden relative lg:flex w-2/5 bg-indigo-600 overflow-hidden px-5 py-12 border-r border-gray-300">
                      <div className="flex items-center justify-center w-full">
                        <div className="text-center space-y-2">
                          <span className="text-4xl font-bold text-gray-100">
                            Connectez-vous à votre compte
                          </span>
                          <p className="text-indigo-200 text-base">
                            Entrez maintenant sur multi-cadeau et commencez à
                            gagner de l'argent!
                          </p>
                        </div>
                      </div>
                    </div> */}
                    <div className="flex flex-col px-5 py-12 w-full ">
                      <div>
                        <div className="text-2xl  font-bold sm:text-center">
                          Connexion
                        </div>
                        <div className="text-gray-600 mt-3 text-base sm:text-center">
                          Vous n'avez pas du compte ?
                          <button
                            onClick={() => {
                              setShowRegister(true);
                              setShowLogin(false);
                            }}
                            type="button"
                            className="inline-flex items-center justify-center gap-0.5 font-medium hover:underline focus:outline-none focus:underline filament-link text-indigo-600 hover:text-indigo-500"
                          >
                            <span className="text-indigo-600 px-2">
                              Inscription
                            </span>
                          </button>
                        </div>
                      </div>
                      <form
                        onSubmit={(e) => onSignIn(e)}
                        className="space-y-5 mt-8"
                      >
                        <div>
                          <div className="grid grid-cols-1 gap-3 filament-forms-component-container">
                            <div className=" col-span-1     ">
                              <div className="filament-forms-field-wrapper">
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
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
                                  <div className="relative mt-2 flex items-center group filament-forms-text-input-component">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
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
                                          setData({
                                            ...data,
                                            email: e.target.value,
                                          })
                                        }
                                        value={data.email}
                                        placeholder="Entrez votre adresse e-mail"
                                        required=""
                                        className="block w-full pl-10 transition duration-75 py-2  text-sm border-1 rounded-lg  focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className=" col-span-1   mt-2  ">
                              <div className="filament-forms-field-wrapper">
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                                    <label
                                      className="inline-flex items-center space-x-3 rtl:space-x-reverse filament-forms-field-wrapper-label"
                                      htmlFor="password"
                                    >
                                      <span className="text-base font-medium leading-4 text-gray-700">
                                        Mot de passe
                                        <sup className="font-medium text-danger-700">
                                          *
                                        </sup>
                                      </span>
                                    </label>
                                  </div>
                                  <div className="relative mt-2 flex items-center group filament-forms-text-input-component">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                      <svg
                                        className="w-5 h-5"
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
                                        <rect
                                          x="6"
                                          y="22"
                                          width="36"
                                          height="22"
                                          rx="2"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="4"
                                          strokeLinejoin="round"
                                        ></rect>
                                        <path
                                          d="M14 22V14C14 8.47715 18.4772 4 24 4C29.5228 4 34 8.47715 34 14V22"
                                          stroke="currentColor"
                                          strokeWidth="4"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M24 30V36"
                                          stroke="currentColor"
                                          strokeWidth="4"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div className="flex-1">
                                      <input
                                        type="password"
                                        onChange={(e) =>
                                          setData({
                                            ...data,
                                            mdp: e.target.value,
                                          })
                                        }
                                        value={data.mdp}
                                        placeholder="Entrez votre mot de passe"
                                        required=""
                                        className="block w-full py-2 text-sm border-1 transition duration-75 pl-10 rounded-lg focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-span-1 ">
                              {/* <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={config.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                onChange={onReCAPTCHAChange}
                              /> */}
                              <div className="relative mt-2 flex items-center group filament-forms-text-input-component">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                  <p className="mt-3 ">
                                    {captchaCalculation?.join(" ")}
                                  </p>
                                </div>
                                <div className="flex-1">
                                  <input
                                    type="number"
                                    value={captcha}
                                    onChange={(e) => setCaptcha(e.target.value)}
                                    placeholder="Enter Captcha"
                                    required=""
                                    className="block w-full pl-16 transition duration-75 py-2  text-sm border-1 rounded-lg  focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <button
                                type="submit"
                                className={`inline-flex p-0 items-center cursor-pointer text-base justify-center gap-1 font-medium rounded-lg border transition-colors focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button h-9 px-4 text-sm text-white focus:ring-white border-transparent ${loadingLogin
                                  ? "bg-gray-400 cursor-not-allowed"
                                  : "bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 focus:ring-offset-indigo-700"
                                  } w-full`}
                                disabled={loadingLogin}
                              >
                                {loadingLogin ? "En cours de traitement ..." : "Se connecter"}
                              </button>
                              {/* <input
                                type="submit"
                                value="Login"
                                className="inline-flex p-0 items-center cursor-pointer text-base justify-center gap-1 font-medium rounded-lg border transition-colors focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button h-9 px-4 text-white focus:ring-white border-transparent bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 focus:ring-offset-indigo-700 w-full"
                              /> */}
                            </div>
                          </div>
                        </div>
                      </form>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowResetPass(true);
                          setShowLogin(false);
                        }}
                        className="underline inline-flex my-2 items-center justify-center text-gray-600 rounded-xl border border-transparent  font-bold "
                      >
                        Mot de passe oublié ?
                      </a>
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
      <ResetPassword
        setShowResetPass={setShowResetPass}
        showResetPass={showResetPass}
      />
    </>
  );
}

export default Login;
