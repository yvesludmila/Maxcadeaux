import React, { useEffect } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import useClickOutside from '../../utils/outsideClick';
import Register from '../modal/register';
import Login from '../modal/login';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuth, logoutUser } from '../../store/actions/userAction';
import { useRouter } from 'next/dist/client/router';
function HeaderAdmin() {
    const [openClass, setOpenClass] = useState(false);
    const [show, setShow] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const router = useRouter();

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const navigate = useRouter();
    
    useEffect(() => {
        dispatch(getUserAuth());
    }, [dispatch]);

    useEffect(() => {
        if (auth.user && auth.user.level !== 99) {
            navigate.push('/');
        }
        console.log(auth);
    }, [auth]);
    const handleOpen = () => setOpenClass(!openClass);
    const handleShow = () => setShow(!show);

    let domNode = useClickOutside(() => {
        setOpenClass(false);
    });

    function logout() {
        Swal.mixin({
            toast: true,
            position: "bottom-right",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener(
                    "mouseleave",
                    Swal.resumeTimer
                );
            }
        }).fire({
            icon: "success",
            title: "Vous êtes déconnécté avec succès!",
        });;
        dispatch(logoutUser()).then(() => {
            router.push("/");
        });
    }

    return (
        <>
            <div className="shadow-sm py-2 dashboard @@headerClass">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                                <Link href="/admin">
                                    <a className="navbar-brand">MAXCADEAUX</a>
                                </Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    onClick={handleShow}
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div
                                    className={
                                        show
                                            ? 'collapse navbar-collapse show'
                                            : 'collapse navbar-collapse'
                                    }
                                    id="navbarSupportedContent"
                                ></div>
                                <div className="dashboard_log my-2 justify-content-end">
                                    <div className="d-flex ">
                                        {!auth.isAuth ? (
                                            <div>
                                                <button
                                                    onClick={() => setShowLogin(true)}
                                                    className="inline-flex items-center justify-center rounded-xl border-1 border-indigo-600 bg-white px-5 py-2 text-lg font-bold  text-indigo-600 hover:bg-indigo-50"
                                                >
                                                    Connexion
                                                </button>
                                                <button
                                                    onClick={() => setShowRegister(true)}
                                                    className="inline-flex items-center justify-center rounded-xl border border-transparent bg-indigo-600 px-5 py-2 text-lg hover:text-white font-bold text-white hover:bg-indigo-700"
                                                >
                                                    Inscription
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="profile_log dropdown" ref={domNode}>
                                                <div className="user" onClick={handleOpen}>
                                                    <span className="thumb">
                                                        <i className="la la-user"></i>
                                                    </span>
                                                    <span className="name">
                                                        {auth.user?.nom + ' ' + auth.user?.prenom}
                                                    </span>
                                                    <span className="arrow">
                                                        <i className="la la-angle-down"></i>
                                                    </span>
                                                </div>
                                                <div
                                                    className={
                                                        openClass
                                                            ? 'dropdown-menu show dropdown-menu-end'
                                                            : 'dropdown-menu dropdown-menu-end'
                                                    }
                                                    style={{ right: '0', left: 'auto' }}
                                                >
                                                    <Link href="/profile">
                                                        <a className="dropdown-item">
                                                            <i className="la la-user"></i>
                                                            Profil
                                                        </a>
                                                    </Link>
                                                    <Link href="/history">
                                                        <a className="dropdown-item">
                                                            <i className="la la-book"></i>
                                                            Historique
                                                        </a>
                                                    </Link>
                                                    <Link href="/settings">
                                                        <a className="dropdown-item">
                                                            <i className="la la-cog"></i>
                                                            Paramètres
                                                        </a>
                                                    </Link>
                                                    <button onClick={() => logout()}>
                                                        <a className="dropdown-item logout">
                                                            <i className="la la-sign-out"></i>
                                                            Déconnexion
                                                        </a>
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <Register showRegister={showRegister} setShowRegister={setShowRegister} />
            <Login setShowLogin={setShowLogin} showLogin={showLogin} />
        </>
    );
}

export default HeaderAdmin;
