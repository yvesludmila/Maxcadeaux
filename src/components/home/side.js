import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { getUserAuth } from "../../store/actions/userAction";

// import { useRouter } from "next/router";
export default function Side({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [countMessages, setCountMessages] = useState(0);
  useEffect(() => {
    dispatch(getUserAuth());
  }, [dispatch]);

  function executeInput() {
    const elem = document.getElementById("upload-img");
    elem.click();
  }

  // useEffect(() => {
  //   console.log(auth);
  // }, [auth]);

  // console.log("path: ", router.pathname);

  //useEffect(() => s(), []);
  function s() {
    axios
      .post(`/api/ticket/findTicket`, { email: auth.user?.email })
      .then((res) => {
        const c = res?.data?.filter((e) => e.vu == 0 && e.status == "OK");
        // console.log(c);
        setCountMessages(c?.length);
      })
      .catch((err) => console.log(err));
  }

  function upload(event) {
    setIsLoading(true);
    const img = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = reader.result;
      const response = axios
        .post(
          "/api/upload?userId=" + auth.user.hashId,
          image.split(",")[1],
          config
        )
        .then(() => {
          setIsLoading(false);
          console.log("vita eeee");
          dispatch(getUserAuth());
        });
    };

    reader.readAsDataURL(img);

    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        if (Math.round((event.loaded * 100) / event.total) === 100)
          console.log(
            `Current progress:`,
            Math.round((event.loaded * 100) / event.total)
          );
      },
    };
  }

  return (
    <>
      {auth.isAuth ? (
        <div className="profile ">
          <div className="container">
            <div className="row">
              {router.pathname != "/contact" &&
              router.pathname != "/term-condition" &&
              router.pathname != "/privacy-policy" &&
              router.pathname != "/about" ? (
                <>
                  <div className="col-xl-3  pt-1 hidden xl:inline-flex">
                    <div className="profile_card !w-full">
                      <div className="d-flex flex-column items-center">
                        <input
                          onChange={(e) => upload(e)}
                          type={"file"}
                          className="hidden"
                          id="upload-img"
                        />
                        <div className="w-[100px] h-[100px] object-cover ">
                          {isLoading ? (
                            <img
                              onClick={() => executeInput()}
                              className="w-full h-full rounded-full object-cover"
                              src="./images/loading.gif"
                              alt=""
                            />
                          ) : auth.user?.profileImage &&
                            auth.user?.profileImage !== "" ? (
                            <img
                              onClick={() => executeInput()}
                              className="w-full h-full rounded-full object-cover"
                              src={"./uploads/" + auth.user.profileImage}
                              alt=""
                            />
                          ) : (
                            <img
                              onClick={() => executeInput()}
                              className="w-full rounded-full h-full object-cover"
                              src="./images/profile/profile.png"
                              alt=""
                            />
                          )}
                        </div>

                        <div className="flex-grow-1 mx-[2px] text-center">
                          <h6 className="m-0 p-0">
                            {auth?.user?.nom + " " + auth?.user?.prenom}
                          </h6>
                          <p>{auth?.user?.email}</p>
                        </div>

                        <div className="flex-grow-1 mx-[2px] text-center">
                          {auth?.user?.status === "PENDING" ? (
                            <span className="px-2 py-1 text-white text-sm bg-yellow-400 rounded">
                              En attente de Vérification
                            </span>
                          ) : auth?.user?.status === "ACCEPTED" ? (
                            <span className="px-2 py-1 text-white text-sm bg-green-400 rounded">
                              Vérifié
                            </span>
                          ) : !auth?.user?.status ||
                            auth?.user?.status === "" ? (
                            <span className="px-2 py-1 text-white text-sm bg-red-400 rounded">
                              Non Vérifié
                            </span>
                          ) : (
                            <span className="px-2 py-1 text-white text-sm bg-red-400 rounded">
                              Vérification réfusé
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="profile_list">
                        <ul className="nav nav-tabs">
                          <li>
                            <Link data-bs-toggle="tab" href="/coupon">
                              <a>
                                <span className="icons gift">
                                  <i className="fa fa-ticket-alt"></i>
                                </span>
                                <span className="text-sm -ml-3">Coupon</span>
                                <span>
                                  <i className="la la-angle-right"></i>
                                </span>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link data-bs-toggle="tab" href="/boutique">
                              <a>
                                <span className="icons gift">
                                  <i className="fa fa-store"></i>
                                </span>

                                <span className="text-sm -ml-3">Boutique</span>
                                <span>
                                  <i className="la la-angle-right"></i>
                                </span>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link data-bs-toggle="tab" href="/mission">
                              <a>
                                <span className="icons gift">
                                  <i className="fa fa-star"></i>
                                </span>

                                <span className="text-sm -ml-3">Mission</span>
                                <span>
                                  <i className="la la-angle-right"></i>
                                </span>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link data-bs-toggle="tab" href="/offerwall">
                              <a>
                                <span className="icons gift">
                                  <i className="fa fa-euro-sign"></i>
                                </span>

                                <span className="text-sm -ml-3">Offerwall</span>
                                <span>
                                  <i className="la la-angle-right"></i>
                                </span>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link data-bs-toggle="tab" href="/offer">
                              <a>
                                <span className="icons gift">
                                  <i className="fa fa-history"></i>
                                </span>

                                <span className="text-sm -ml-3">
                                  Mes participations
                                </span>
                                <span>
                                  <i className="la la-angle-right"></i>
                                </span>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link data-bs-toggle="tab" href="/my-commande">
                              <a>
                                <span className="icons gift">
                                  <i className="fa fa-book"></i>
                                </span>

                                <span className="text-sm -ml-3">
                                  Mes Commandes
                                </span>
                                <span>
                                  <i className="la la-angle-right"></i>
                                </span>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link data-bs-toggle="tab" href="/support">
                              <a>
                                <span className="icons gift">
                                  <i className="fa fa-envelope"></i>
                                </span>

                                <span className="text-sm -ml-3">
                                  Support{" "}
                                  {/* {countMessages != 0 && (
                                    <span className="bg-red-500 px-2.5 py-1 text-white rounded-full">
                                      {countMessages}
                                    </span>
                                  )} */}
                                </span>
                                <span>
                                  <i className="la la-angle-right"></i>
                                </span>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-9">{children}</div>{" "}
                </>
              ) : (
                <div className="col-xl-12">{children}</div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
