import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../components/layout/Layout";
import IdentityModal from "../components/modal/identity";
import IdentityPendingModal from "../components/modal/identityPending";
import IdentityRejectedModal from "../components/modal/identityRejected";
import SelectShop from "../components/modal/shop";

import { getAllShop } from "../store/actions/shop";

function Blank() {
  const [show, setShow] = useState(false);
  const [currentID, setCurrentID] = useState();

  const [catFilter, setCatFilter] = useState("");
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const shop = useSelector((state) => state.shop);
  const [notVerified, setNotVerified] = useState(false);
  const [pending, setPending] = useState(false);
  const [rejected, setRejected] = useState(false);
  
  useEffect(() => {
    dispatch(getAllShop());
  }, [dispatch]);

  useEffect(() => {
    if (auth.user && (!auth.user.status || auth.user.status === "")) {
      setNotVerified(true);
    } else if (auth.user && auth.user.status === "PENDING") {
      setPending(true);
    } else if (auth.user && auth.user.status === "REJECTED") {
      setRejected(true);
    }
  }, [auth]);

  function selectShop(id) {
    setCurrentID(id);
    setShow(true);
  }

  return (
    <>
      <Layout subTitle="Boutique" pageTitle="Liste des boutiques">
        <div className="container px-3 mx-auto min-h-[54vh]">
          <div className="d-flex">
            <button
              onClick={() => setCatFilter("")}
              type="button"
              className={`${
                catFilter == "" && "bg-yellow-500 text-white "
              }  focus:bg-yellow-500 focus:text-white text-yellow-400 hover:text-white  border-1 border-yellow-400 hover:bg-yellow-500  font-medium rounded-lg  text-xs px-2 py-2.5 text-center mr-2 mb-2 `}
            >
              Tous les Cadeaux
            </button>
            {shop.all.map((s, i) => {
              return (
                <button
                  key={i}
                  onClick={() => setCatFilter(s[0])}
                  type="button"
                  className={`${
                    catFilter == s[0] && "bg-yellow-500 text-white "
                  }  focus:bg-yellow-500 focus:text-white text-yellow-400 hover:text-white  border-1 border-yellow-400 hover:bg-yellow-500  font-medium rounded-lg text-xs px-2 py-2.5 text-center mr-2 mb-2 `}
                >
                  {s[0]}
                </button>
              );
            })}
          </div>
          <div>
            <div className="grid grid-cols-12 gap-y-5">
              {shop &&
                shop.all.length > 0 &&
                shop.all
                  .filter((e) => {
                    return catFilter == "" ? e : e[0] == catFilter;
                  })
                  .map((s, index) => (
                    <div className="col-span-12" key={index}>
                      <div className="flex flex-col space-y-5">
                        <div className="font-bold text-lg text-yellow-500">
                          {s[0]}
                        </div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
                          {s[1].map((list, i) => (
                            <div
                              key={i}
                              onClick={() => {
                                if (
                                  auth.user &&
                                  (!auth.user.status || auth.user.status === "")
                                ) {
                                  setNotVerified(true);
                                } else if (auth.user.status === "PENDING") {
                                  setPending(true);
                                } else if (auth.user.status === "REJECTED") {
                                  setRejected(true);
                                } else {
                                  selectShop(list.shopId);
                                }
                              }}
                              className="rounded-lg shadow-lg"
                            >
                              <div className="flex justify-center mb-2 relative">
                                <img
                                  className="cursor-pointer h-[152px] w-[100%] object-fill rounded-t-lg"
                                  src={"./uploads/" + list.shopImage}
                                  alt={list.shopName}
                                />
                                <div className="absolute top-3 right-3">
                                  <div className="flex bg-yellow-400 text-white px-2 py-1 shadow rounded-lg">
                                    <span className="text-xs text-uppercase">
                                      {s[0]}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h4 className="px-2 py-2 text-capitalize text-center">
                                {list.shopName}
                              </h4>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
        <SelectShop setShow={setShow} shopID={currentID} show={show} />
        {notVerified && (
          <IdentityModal
            setShow={setNotVerified}
            setPending={setPending}
            show={notVerified}
          />
        )}
        <IdentityPendingModal setShow={setPending} show={pending} />
        <IdentityRejectedModal setShow={setRejected} show={rejected} />
      </Layout>
    </>
  );
}

export default Blank;
