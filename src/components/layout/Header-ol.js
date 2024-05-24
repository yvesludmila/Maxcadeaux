import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import Login from "../modal/login";
import Register from "../modal/register";

import useClickOutside from "../../utils/outsideClick";
import { getPendingAmount } from "../../store/actions/validation";
import { getUserAuth, logoutUser } from "../../store/actions/userAction";

function Header() {
  const [openClass, setOpenClass] = useState(false);
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const pending = useSelector((state) => state.pending);
  const [total, setTotal] = useState({
    accepted: 0,
    attente: 0,
    commande: 0,
  });
  useEffect(() => {
    dispatch(getUserAuth());
  }, [dispatch]);
  useEffect(() => {
    if (auth.user) {
      dispatch(getPendingAmount(auth.user.hashId));
    }
  }, [dispatch, auth]);

  const handleOpen = () => setOpenClass(!openClass);
  const handleShow = () => setShow(!show);

  let domNode = useClickOutside(() => {
    setOpenClass(false);
  });

  function logout() {
    dispatch(logoutUser()).then(() => {
      router.push("/");
    });
  }

  useEffect(() => getStatistiqueUser(), []);

  async function getStatistiqueUser() {
    await axios
      .get(`/api/statistiques/${auth?.user?.hashId}`)
      .then(async (res) => {
        console.log(res.data.total);
        await setTotal(res.data.total);
      });
  }

  return (
    <>
      <div className="shadow-sm py-2 dashboard @@headerClass !z-2">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <nav className="navbar navbar-expand-lg  navbar-light">
                <Link href="/">
                  <div>
                    <img
                      className="object-contain scale-125  h-[80px] lg:h-20 lg:w-60 w-full"
                      src="./images/logo-maxicadeau.png"
                      alt=""
                    />
                  </div>
                </Link>
                {auth.isAuth && (
                  <button
                    className="navbar-toggler "
                    type="button"
                    // onClick={handleShow}
                    onClick={handleOpen}
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                )}
                {!auth.isAuth && (
                  <div className="!inline-flex lg:!hidden">
                    <button
                      onClick={() => setShowLogin(true)}
                      className="inline-flex items-center justify-center rounded-xl border-1 border-indigo-600 bg-white px-3 py-1 text-lg font-bold  text-indigo-600 hover:bg-indigo-50"
                    >
                      Log In
                    </button>
                    <button
                      onClick={() => setShowRegister(true)}
                      className="inline-flex items-center justify-center rounded-xl border border-transparent bg-indigo-600 px-3 py-1 ml-2 text-lg hover:text-white font-bold text-white hover:bg-indigo-700"
                    >
                      Register
                    </button>
                  </div>
                )}

                <div
                  className={
                    show
                      ? "collapse navbar-collapse show"
                      : "collapse navbar-collapse"
                  }
                  id="navbarSupportedContent"
                ></div>
                <div className="dashboard_log my-2">
                  <div className="d-flex align-items-center ">
                    {auth.isAuth && (
                      <div className="account_money mt-2">
                        <ul className="flex">
                          <li
                            className="crypto flex"
                            style={{ display: "flex" }}
                          >
                            {/* <span>
                              {auth && auth.user
                                ? auth?.user?.euros?.toFixed(2)
                                : 0.0}
                              {" EU"}
                            </span> */}

                            {total?.gain > 0 ? (
                              <span className=" d-flex items-center">
                                {total?.gain?.toFixed(2)}{" "}
                                <i className="fa fa-coins text-yellow-500 ml-2"></i>
                              </span>
                            ) : (
                              <span className="d-flex items-center">
                                0{" "}
                                <i className="fa fa-coins text-yellow-500 ml-2"></i>
                              </span>
                            )}
                          </li>
                          <li
                            className="usd relative"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {/* <span>
                              {auth && total.gain ? total.gain : 0.0} EU
                            </span> */}
                            {/* {pending > 0 && ( */}
                            {/* <div className="h-5 w-px mx-2 bg-gray-500"></div> */}
                            {/* )} */}
                            {total.attente > 0 ? (
                              <span className="d-flex items-center">
                                {total.attente?.toFixed(2)}{" "}
                                <i className="fa fa-coins text-yellow-500 ml-2"></i>
                              </span>
                            ) : (
                              <span className="d-flex items-center">
                                0{" "}
                                <i className="fa fa-coins text-yellow-500 ml-2"></i>
                              </span>
                            )}
                          </li>
                        </ul>
                      </div>
                    )}
                    {!auth.isAuth ? (
                      <div className=" !hidden lg:!inline-flex mt-2">
                        <button
                          onClick={() => setShowLogin(true)}
                          className="inline-flex items-center justify-center rounded-xl border-1 border-indigo-600 bg-white px-3 py-1 text-lg font-bold  text-indigo-600 hover:bg-indigo-50"
                        >
                          Log In
                        </button>
                        <button
                          onClick={() => setShowRegister(true)}
                          className="inline-flex items-center justify-center rounded-xl border border-transparent bg-indigo-600 px-3 py-1 ml-2 text-lg hover:text-white font-bold text-white hover:bg-indigo-700"
                        >
                          Register
                        </button>
                      </div>
                    ) : (
                      <div
                        className="profile_log dropdown xs:ml-5"
                        ref={domNode}
                      >
                        <div
                          className="user !pt-2 cursor-pointer"
                          onClick={handleOpen}
                        >
                          <span className="thumb name text-white">
                            <i className="la la-user "></i>
                          </span>
                          <span className="name text-xs">
                            {auth.user?.nom + " " + auth.user?.prenom}
                          </span>
                          <span className="arrow">
                            <i className="la la-angle-down"></i>
                          </span>
                        </div>
                        <div
                          className={
                            openClass
                              ? "dropdown-menu show dropdown-menu-end"
                              : "dropdown-menu dropdown-menu-end "
                          }
                          style={{
                            right: "-80px",
                            left: "auto",
                            top: "82px",
                            borderRadius: "0",
                          }}
                        >
                          <Link href="/coupon">
                            <a className="dropdown-item !inline-flex xl:!hidden">
                              <i className="la la-ticket-alt"></i>
                              Coupon
                            </a>
                          </Link>
                          <Link href="/boutique">
                            <a className="dropdown-item !inline-flex xl:!hidden">
                              <i className="la la-store"></i>
                              Boutique
                            </a>
                          </Link>
                          <Link href="/mission">
                            <a className="dropdown-item !inline-flex xl:!hidden">
                              <i className="la la-star"></i>
                              Mission
                            </a>
                          </Link>
                          <Link href="/offerwall">
                            <a className="dropdown-item !inline-flex xl:!hidden">
                              <i className="la la-euro-sign"></i>
                              Offerwall
                            </a>
                          </Link>
                          <Link href="/offer">
                            <a className="dropdown-item !inline-flex xl:!hidden">
                              <i className="la la-history"></i>
                              Mes participations
                            </a>
                          </Link>
                          <Link href="/my-commande">
                            <a className="dropdown-item !inline-flex xl:!hidden">
                              <i className="la la-book"></i>
                              Mes Commandes
                            </a>
                          </Link>
                          <Link href="/support">
                            <a className="dropdown-item !inline-flex xl:!hidden">
                              <i className="la la-envelope"></i>
                              Support
                            </a>
                          </Link>
                          <Link href="/profile">
                            <a className="dropdown-item">
                              <i className="la la-user"></i>
                              Profil
                            </a>
                          </Link>
                          {/* <Link href="/history">
                            <a className="dropdown-item">
                              <i className="la la-book"></i>
                              History
                            </a>
                          </Link> */}
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

export default Header;
