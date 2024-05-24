import React, { createRef, useState, useRef, useEffect } from "react";
import Link from "next/link";
import useClickOutside from "../../utils/outsideClick";
import Register from "../modal/register";
import Login from "../modal/login";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuth, logoutUser } from "../../store/actions/userAction";
import { useRouter } from "next/dist/client/router";
import { getPendingAmount } from "../../store/actions/validation";
import axios from "axios";
import HistoTooltip from "./histoTooltip";
import Swal from "sweetalert2";
import { createPopper } from "@popperjs/core";
function Header() {
    const [openClass, setOpenClass] = useState(false);
    const [openClassTooltip, setOpenClassTooltip] = useState(false);
    const [show, setShow] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [allPending, setAllPending] = useState([]);
    const router = useRouter();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const pending = useSelector((state) => state.pending);
    const [total, setTotal] = useState({
        accepted: 0,
        attente: 0,
        commande: 0,
    });
    // const [isGreet, setIsGreet] = useState(null);
    const [tooltipShow, setTooltipShow] = useState(false);
    const tooltipRef = useRef();

    useEffect(() => {
        if (tooltipShow) {
            createPopper(tooltipRef.current, tooltipRef.current, {
                placement: "top",
            });
        }
    }, [tooltipShow]);

    useEffect(() => {

        // Perform logic that requires access to the Redux store
        const fetchData = async () => {
            try {
                if (auth.user) {
                    // Dispatch actions only if the component is still mounted

                    dispatch(getUserAuth());
                    dispatch(getPendingAmount(auth.user.hashId));
                    getAllPending();
                }
            } catch (error) {
                // Handle errors
                throw error;
            }
        };

        // Fetch data when the component mounts
        // fetch('/api/greet')
        //     .then(response => response.json())
        //     .then(data => {
        //         setIsGreet(data.isBeforeReferenceDate);
        //         console.log('Is befo', data.isBeforeReferenceDate);
        //     })
        //     .catch(error => {
        //         console.error('Erreur lors de la récupération de donnée greet :', error);
        //     });
        // console.log('Date ', new Date());
        fetchData();
        // Cleanup function to update the mount status

    }, []);
    // useEffect(() => {

    const handleOpen = () => setOpenClass(!openClass);
    const handleOpenTooltipGain = () => setOpenClassTooltip(!openClassTooltip);
    const handleShow = () => setShow(!show);

    // let domNode = useClickOutside(() => {
    //   setOpenClass(false);
    // });

    // useEffect(() => {

    // }, []);
    function logout() {
        Swal.fire({
            title: "Voulez-vous vraiment déconnecter ?",
            showCancelButton: true,
            confirmButtonText: "Oui",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(logoutUser()).then(() => {
                    router.push("/");
                });
            }
        });
    }

    function getAllPending() {
        axios.get("/api/validation/all-pending").then((res) => {
            setAllPending(res.data?.request);
            console.log('GET ALL PENDING', res.data);
        });
    }

    // useEffect(() => getStatistiqueUser(), []);
    function getStatistiqueUser() {
        axios
            .get(`/api/statistiques/${auth?.user?.hashId}`)
            .then((res) => {
                console.log(res.data.total);
                setTotal(res.data.total);
            });
    }

    return (
        <>
            <header className="bg-gray-100 border-b border-gray-300 fixed w-full z-10">
                <div className="container px-5 mx-auto">
                    <nav className="flex items-center h-16">
                        <div>
                            {/* LOGO */}
                            <Link href="/">
                                <a className="flex flex-row items-center group focus:outline-none h-10">
                                    <span
                                        className="group-hover:transform group-hover:rotate-180 transition duration-1000 text-indigo-600">
                                        <svg
                                            className="h-10 w-10"
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
                                                d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M31 7V24V7Z"
                                                fill="none"
                                            ></path>
                                            <path
                                                d="M31 7V24"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M16.636 6.63605L30.7781 20.7782L16.636 6.63605Z"
                                                fill="none"
                                            ></path>
                                            <path
                                                d="M16.636 6.63605L30.7781 20.7782"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7 17H24H7Z"
                                                fill="none"
                                            ></path>
                                            <path
                                                d="M7 17H24"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M20.364 17.636L6.22188 31.7782L20.364 17.636Z"
                                                fill="none"
                                            ></path>
                                            <path
                                                d="M20.364 17.636L6.22188 31.7782"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M17 25V42V25Z"
                                                fill="none"
                                            ></path>
                                            <path
                                                d="M17 25V42"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M17.636 27.636L31.7781 41.7782L17.636 27.636Z"
                                                fill="none"
                                            ></path>
                                            <path
                                                d="M17.636 27.636L31.7781 41.7782"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M24 31L42 31L24 31Z"
                                                fill="none"
                                            ></path>
                                            <path
                                                d="M24 31L42 31"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M42.364 16.636L28.2219 30.7782L42.364 16.636Z"
                                                fill="none"
                                            ></path>
                                            <path
                                                d="M42.364 16.636L28.2219 30.7782"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                        {" "}
                                    </span>
                                    <span
                                        className="leading-none font-bold ml-2 uppercase hidden sm:inline text-2xl text-gray-800">
                                        maxiconcour
                                    </span>
                                </a>
                            </Link>
                        </div>
                        <div className="grow lg:ml-10">
                            <div
                                className={
                                    auth.isAuth
                                        ? "flex items-center justify-end lg:justify-between"
                                        : "flex items-center justify-end"
                                }
                            >
                                {auth.isAuth && (
                                    <div className="hidden lg:block">
                                        <div className="flex items-center h-full lg:space-x-4 max-w-md lg:max-w-none mx-auto lg:mx-0"></div>
                                    </div>
                                )}
                                {auth.isAuth && (
                                    <div className="flex flex-row space-x-2 ">
                                        {/* 2 Bouton lien Acceuil et boutique*/}
                                        <div className="flex items-center space-x-2 shrink-0">
                                            <div className="flex items-center bg-indigo-100 rounded-full pl-3 pr-3 h-10 cursor-pointer">
                                                <Link href="/">
                                                    <a className="flex items-center justify-center font-semibold text-center w-full h-full">
                                                        Acceuil
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 shrink-0">
                                            <div className="flex items-center bg-indigo-100 rounded-full pl-3 pr-3 h-10 cursor-pointer">
                                                <Link href="/boutique">
                                                    <a className="flex items-center justify-center font-semibold text-center w-full h-full">
                                                        Boutique
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>

                                        {/* MAKE TOOLTIP */}
                                        <div className="flex items-center space-x-2 shrink-0">
                                            <div >
                                                <div className="relative flex items-center bg-indigo-100 rounded-full pl-3 pr-1 h-10 cursor-pointer"
                                                    onClick={handleOpenTooltipGain}
                                                    onMouseEnter={() => setOpenClassTooltip(true)}
                                                    onMouseLeave={() => setOpenClassTooltip(false)}
                                                >
                                                    <div className="flex items-center">
                                                        <div>
                                                            {auth && auth?.user?.euros > 0 ? (
                                                                <span className="font-semibold d-flex items-center">
                                                                    {auth?.user?.euros}{" "}
                                                                    <i className="fas fa-euro-sign text-yellow-500 ml-2"></i>
                                                                </span>
                                                            ) : (
                                                                <span className="font-semibold d-flex items-center">
                                                                    0
                                                                    <i className="fas fa-euro-sign text-yellow-500 ml-2"></i>
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="h-5 w-px mx-2 bg-gray-500"></div>
                                                        {pending > 0 ? (
                                                            <span className=" ml-2">
                                                                {pending?.toFixed(2)}{" "}
                                                                <i className="fas fa-euro-sign text-yellow-500 mr-2"></i>{" "}
                                                            </span>
                                                        ) : (
                                                            <span className=" ml-2">
                                                                0 <i className="fas fa-euro-sign text-yellow-500 mr-2"></i>{" "}
                                                            </span>
                                                        )}
                                                    </div>
                                                    {openClassTooltip && (
                                                        <div className="absolute top-12 right-0 z-0">
                                                            <div className="absolute right-40 lg:right-4 w-3 h-3 bg-white rotate-45 -translate-y-1/2 -translate-x-1/2 border-t border-l"></div>
                                                            <div className="w-[180px] bg-white border rounded-md shadow">
                                                                <div className="text-center">
                                                                    <div>Gain en attente</div>
                                                                    <div>
                                                                        {auth && auth?.user?.euros > 0 ?
                                                                            auth?.user?.euros : 0}{" "}
                                                                        <i className="fas fa-euro-sign text-yellow-500 ml-2"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* profile */}
                                            <div>
                                                <div
                                                    className="relative flex items-center bg-gray-200 rounded-full px-1 h-10">
                                                    <button
                                                        onClick={handleOpen}
                                                        className="flex items-center space-x-2"
                                                    >
                                                        <div className="shrink-0">
                                                            <img
                                                                src={"./uploads/" + auth.user?.profileImage}
                                                                className="h-8 w-8 rounded-full"
                                                            />
                                                        </div>
                                                        <div className="max-w-[150px] text-black truncate hidden md:block">
                                                            <span className="text-sm text-black">
                                                                {auth.user?.nom} {auth.user?.prenom}
                                                            </span>
                                                        </div>
                                                        <div className="shrink-0">
                                                            <div className="flex items-center justify-center w-6 h-6">
                                                                <svg
                                                                    className="h-4 w-4 text-black"
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
                                                                        d="M36 19L24 31L12 19H36Z"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="4"
                                                                        strokeLinejoin="round"
                                                                    ></path>
                                                                </svg>
                                                                {" "}
                                                            </div>
                                                        </div>
                                                    </button>
                                                    {openClass && (
                                                        <div className="absolute top-12 right-0 z-10">
                                                            <div
                                                                className="absolute right-10 lg:right-4 w-3 h-3 bg-white rotate-45 -translate-y-1/2 -translate-x-1/2 border-t border-l"></div>
                                                            <div className="w-[180px] bg-white border rounded-md shadow">
                                                                <ul className="flex flex-col space-y-0.5 py-2">
                                                                    <li className="!inline-flex xl:!hidden">
                                                                        <button
                                                                            type="button"
                                                                            className="flex px-4 py-1 text-sm hover:text-indigo-600 w-full"
                                                                        >
                                                                            <Link href="/coupon">
                                                                                <span className="font-medium text-black">
                                                                                    Coupon
                                                                                </span>
                                                                            </Link>
                                                                        </button>
                                                                    </li>
                                                                    <li className="!inline-flex xl:!hidden">
                                                                        <button
                                                                            type="button"
                                                                            className="flex px-4 py-1 text-sm hover:text-indigo-600 w-full"
                                                                        >
                                                                            <Link href="/boutique">
                                                                                <span className="font-medium text-black">
                                                                                    Boutique
                                                                                </span>
                                                                            </Link>
                                                                        </button>
                                                                    </li>
                                                                    <li className="!inline-flex xl:!hidden">
                                                                        <button
                                                                            type="button"
                                                                            className="flex px-4 py-1 text-sm hover:text-indigo-600 w-full"
                                                                        >
                                                                            <Link href="/mission">
                                                                                <span className="font-medium text-black">
                                                                                    Mission
                                                                                </span>
                                                                            </Link>
                                                                        </button>
                                                                    </li>
                                                                    <li className="!inline-flex xl:!hidden">
                                                                        <button
                                                                            type="button"
                                                                            className="flex px-4 py-1 text-sm hover:text-indigo-600 w-full"
                                                                        >
                                                                            <Link href="/offerwall">
                                                                                <span className="font-medium text-black">
                                                                                    Offerwall
                                                                                </span>
                                                                            </Link>
                                                                        </button>
                                                                    </li>
                                                                    <li className="!inline-flex xl:!hidden">
                                                                        <button
                                                                            type="button"
                                                                            className="flex px-4 py-1 text-sm hover:text-indigo-600 w-full"
                                                                        >
                                                                            <Link href="/offer">
                                                                                <span className="font-medium text-black">
                                                                                    Mes participations
                                                                                </span>
                                                                            </Link>
                                                                        </button>
                                                                    </li>
                                                                    <li className="!inline-flex xl:!hidden">
                                                                        <button
                                                                            type="button"
                                                                            className="flex px-4 py-1 text-sm hover:text-indigo-600 w-full"
                                                                        >
                                                                            <Link href="/my-commande">
                                                                                <span className="font-medium text-black">
                                                                                    Mes Commandes
                                                                                </span>
                                                                            </Link>
                                                                        </button>
                                                                    </li>
                                                                    <li className="!inline-flex xl:!hidden">
                                                                        <button
                                                                            type="button"
                                                                            className="flex px-4 py-1 text-sm hover:text-indigo-600 w-full"
                                                                        >
                                                                            <Link href="/support">
                                                                                <span className="font-medium text-black">
                                                                                    Support
                                                                                </span>
                                                                            </Link>
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button
                                                                            type="button"
                                                                            className="flex px-4 py-1 text-sm hover:text-indigo-600 w-full"
                                                                        >
                                                                            <Link href="/">
                                                                                <span className="font-medium text-black">
                                                                                    Profil
                                                                                </span>
                                                                            </Link>
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button
                                                                            type="button"
                                                                            className="flex px-4 py-1 text-sm hover:text-indigo-600 w-full"
                                                                        >
                                                                            <Link href="/settings">
                                                                                <span className="font-medium text-black">
                                                                                    Paramètres
                                                                                </span>
                                                                            </Link>
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button
                                                                            onClick={() => logout()}
                                                                            type="button"
                                                                            className="flex px-4 py-1 text-sm hover:text-indigo-600 w-full"
                                                                        >
                                                                            <span className="font-medium text-red-500">
                                                                                Déconnexion
                                                                            </span>
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* CONNEXION ET INSCRIPTION */}
                                {!auth.isAuth && (
                                    <div>
                                        <div className="flex items-center space-x-2 sm:space-x-4">
                                            <div className="inline-flex">
                                                <button
                                                    onClick={() => setShowLogin(true)}
                                                    type="button"
                                                    className="inline-flex items-center justify-center gap-1 font-medium rounded-lg border transition-colors focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button h-9 px-4 text-sm shadow focus:ring-white text-indigo-600 border border-indigo-600 hover:bg-indigo-600/20 focus:bg-indigo-700/20 focus:ring-offset-indigo-700"
                                                >
                                                    <span className="flex items-center gap-1">
                                                        <span>Connexion</span>
                                                    </span>
                                                </button>
                                            </div>
                                            {" "}
                                            <div className="inline-flex">
                                                <button
                                                    onClick={() => setShowRegister(true)}
                                                    className="inline-flex items-center justify-center gap-1 font-medium rounded-lg border transition-colors focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button h-9 px-4 text-sm text-white shadow focus:ring-white border-transparent bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 focus:ring-offset-indigo-700"
                                                >
                                                    <span className="flex items-center gap-1">
                                                        <span>Inscription</span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </nav>

                    {/* Historique pending */}
                    <div className="flex items-center h-16">
                        <div className="overflow-y-hidden overflow-x-auto no-scrollbar pb-3 px-1 -mx-4">
                            <div className="flex items-center flex-row-reverse space-x-reverse space-x-2 w-max">
                                <div className="flex items-center overflow-x-auto space-x-2 max-w-screen">
                                    {Array.isArray(allPending) && allPending.map((e, i) => (
                                        <div key={i}>
                                            <HistoTooltip data={e} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
                <div className="flex items-center h-2 bg-yellow-500 w-full" />
            </header >
            <Register
                showRegister={showRegister}
                setShowRegister={setShowRegister}
                setShowLogin={setShowLogin}
            />
            <Login
                setShowLogin={setShowLogin}
                showLogin={showLogin}
                setShowRegister={setShowRegister}
            />
        </>
    );
}

export default Header;
