import React from 'react';
import { Fragment, useRef, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import config from '../../utils/config';
import axios from 'axios';
// import ReCAPTCHA from 'react-google-recaptcha';
import SentConfirmation from './confirmEmail';
import Swal from 'sweetalert2';

function Register({ showRegister, setShowRegister, setShowLogin }) {
  const cancelButtonRef = useRef(null);
  // const recaptchaRef = React.createRef();
  // const [captcha, setCaptcha] = useState(true);
  const [notActive, setNotActive] = useState(false);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  const [user, setUser] = useState({
    nom: '',
    prenom: '',
    email: '',
    mdp: '',
    parrain: '',
  });
  const [captcha, setCaptcha] = useState('');
  const [captchaCalculation, setCaptchaCalculation] = useState([]);

  useEffect(() => resetCaptcha(), []);

  const resetCaptcha = () => {
    const captchaCalculation = [
      Math.floor(Math.random() * 10) + 1,
      ["+"],
      Math.floor(Math.random() * 10) + 1,
    ];

    setCaptchaCalculation(captchaCalculation);
  };

  async function signup(e) {
    e.preventDefault();
    setFormLoading(true);
    console.log('eto');
    const captchaResponse = captchaCalculation.reduce((acc, curr) => {
      //   // 1 + 2 = 3  // 1 - 2 = -1
      if (typeof curr === 'number') {
        return acc + curr;
      } else {
        return acc;
      }
    }, 0);

    setError(false);
    setNotActive(false);

    if (!user || !user.nom || !user.prenom || !user.email || !user.mdp) {
      setError(true);
      setNotActive(true);
      setTitle('Erreur de formulaire');
      setContent('Veuillez remplir tous les champs requis avant de soumettre');
      setFormLoading(false);
      // setUser({
      //   nom: '',
      //   prenom: '',
      //   email: '',
      //   mdp: '',
      //   parrain: '',
      // });
      return;
    }

    if (captcha.toString() === captchaResponse.toString()) {
      console.log('captcha', captcha);
      const response = await axios.get('/api/getIpInfo'
        // "https://ipinfo.io/json?token=0567502d77f05a"
      ).then((res) => res)
        .catch((err) => {
          console.error(err);
        });

      let country = null;
      const _data = await axios.get('/api/country/list');
      if (_data?.data?.length) {
        country = _data.data[0] ?? null;
      }
      console.log('_data country', _data);

      let _code = country?.code ?? '';
      console.log('country code ', _code);
      if (_code.length >= 0) {
        _code = _code !== '' ? JSON.parse(_code) : [];
        const isExist = _code.find(
          (c) => c === response.data.country
        );
        if (isExist) {
          setError(true);
          setNotActive(true);
          setTitle('Erreur');
          setContent("Ce site n'est pas disponible dans votre pays");
        } else if (!formLoading) {
          setFormLoading(true);
          console.log('USER', user);
          axios.get('https://api.db-ip.com/v2/free/self')
            .then(async (res) => {
              console.log("API DB FREE", res.data);
              const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  ...user,
                  ip: res.data?.ipAddress ?? null,
                  pays: res.data?.countryCode ?? null,
                }),
              });

              if (response.ok) {
                setTitle('Inscription réussie.');
                setContent(
                  'Veuillez consulter votre email pour confirmer votre inscription!'
                );
                // Swal.fire({
                //   icon: 'success',
                //   title: 'Inscription réussi!',
                //   text: 'Veuillez consulter votre email pour confirmer votre inscription!',
                // });
                setShowRegister(false);
                setNotActive(true);
              } else {
                const data = await response.json();
                // Swal.fire({
                //   icon: 'error',
                //   title: 'Erreur',
                //   text: data.message ?
                //     'Cette adresse e-mail existe déjà. Veuillez en choisir une autre'
                //     : 'Erreur inattendue',
                // });
                setError(true);
                setNotActive(true);
                setTitle('Erreur');
                setContent(data.message ?? 'Erreur inattendue.');
              }
            })
            .catch((err) => {
              console.error(err);
              Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: 'Erreur inattendue, Veuillez réessayer plus tard',
              });
            })
            .finally(() => {
              setFormLoading(false);
            })
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Erreur inattendue, Veuillez réessayer plus tard',
        });
        setFormLoading(false);
      }
    } else {
      setError(true);
      setNotActive(true);
      setTitle('Erreur');
      setContent('Erreur de code captcha, veuillez réessayer');
      setCaptcha('');
      resetCaptcha();
      setFormLoading(false);
    }
  }

  // const onReCAPTCHAChange = (captchaCode) => {
  //   // If the reCAPTCHA code is null or undefined indicating that
  //   // the reCAPTCHA was expired then return early
  //   if (!captchaCode) {
  //     return;
  //   }
  //   setCaptcha(true);
  //   recaptchaRef.current.reset();
  // };

  const endAlert = (closed) => {
    if (!closed && error) {
      setShowRegister(true);
    }

    setNotActive(closed);
  };

  return (
    <>
      <Transition.Root show={showRegister} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setShowRegister}
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
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                  <div className="flex">
                    {/* <div className="hidden relative lg:flex w-2/5 bg-indigo-600 overflow-hidden px-5 py-12 border-r border-gray-300">
                      <div className="flex items-center justify-center w-full">
                        <div className="text-center space-y-2">
                          <span className="text-4xl font-bold text-gray-100">
                            Join today
                          </span>
                          <p className="text-indigo-200 text-base">
                            Cashout in just 10 minutes
                          </p>
                        </div>
                      </div>
                    </div> */}
                    <div className="flex flex-col px-5 py-12 w-full min-w-[50vw]">
                      <div>
                        <div className="text-2xl  font-bold sm:text-center">
                          Inscription
                        </div>
                        <div className="text-gray-600 mt-3 text-base sm:text-center">
                          Avez-vous déjà un compte?
                          <button
                            onClick={() => {
                              setShowRegister(false);
                              setShowLogin(true);
                            }}
                            type="button"
                            className="inline-flex items-center justify-center gap-0.5 font-medium text-indigo-600 "
                          >
                            <span className="text-indigo-600 px-2">Se connecter</span>
                          </button>
                        </div>
                      </div>
                      <form onSubmit={(e) => signup(e)} className="space-y-5 mt-8">
                        <div
                          className="grid grid-cols-1 gap-3 filament-forms-component-container">
                          <div className=" col-span-1     ">
                            <div className="filament-forms-field-wrapper">
                              <div className="space-y-4">
                                <div
                                  className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                                  <label
                                    className="inline-flex items-center space-x-3 rtl:space-x-reverse filament-forms-field-wrapper-label"
                                    htmlFor="nom"
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
                                      onChange={(e) =>
                                        setUser({
                                          ...user,
                                          nom: e.target.value,
                                        })
                                      }
                                      value={user.nom}
                                      placeholder="Entrez votre nom de famille"
                                      required=""
                                      className="block w-full pl-10 transition duration-75 py-2  text-sm border-1 rounded-lg  focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
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
                                    htmlFor="prenom"
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
                                      onChange={(e) =>
                                        setUser({
                                          ...user,
                                          prenom: e.target.value,
                                        })
                                      }
                                      value={user.prenom}
                                      placeholder="Entrez votre prénom"
                                      required=""
                                      className="block w-full pl-10 transition duration-75 py-2  text-sm border-1 rounded-lg  focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
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
                                      onChange={(e) =>
                                        setUser({
                                          ...user,
                                          email: e.target.value,
                                        })
                                      }
                                      value={user.email}
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
                                <div
                                  className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
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
                                        setUser({
                                          ...user,
                                          mdp: e.target.value,
                                        })
                                      }
                                      value={user.mdp}
                                      placeholder="Entrez votre mot de passe"
                                      required=""
                                      className="block w-full py-2  text-sm border-1 transition duration-75 pl-10 rounded-lg  focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 pl-10 border-gray-300"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div
                                className="relative mt-2 flex items-center group filament-forms-text-input-component">
                                <div
                                  className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                  <p className="mt-3 ">{captchaCalculation?.join(" ")}</p>

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
                                className={`inline-flex p-0 items-center cursor-pointer text-base justify-center gap-1 font-medium rounded-lg border transition-colors focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button h-9 px-4 text-sm text-white focus:ring-white border-transparent ${formLoading
                                  ? "bg-gray-400 cursor-not-allowed"
                                  : "bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 focus:ring-offset-indigo-700"
                                  } w-full`}
                                disabled={formLoading}
                              >
                                {formLoading ? "En cours de traitement ..." : "S'inscrire"}
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

export default Register;
