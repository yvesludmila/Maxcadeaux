import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../components/layout/Layout";
import CommandHistory from "../components/member/command";
import OfferHistory from "../components/member/offer";
import axios from "axios";
import { getValidationByUser } from "../store/actions/validation";

function Blank() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("Mes Commandes");
  const [orderOfData, setOrderOfData] = useState('UP');

  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    return () => {
      if (auth.user) dispatch(getValidationByUser(auth.user.hashId));
    };
  }, [dispatch, auth]);

  // useEffect(() => {
  //   return () => {
  //     setData(validations);
  //   };
  // }, [validations]);

  useEffect(() => {
    if (auth.user) {
      axios
        .post("/api/command/user", {
          userID: auth.user.hashId,
        })
        .then((res) => {
          setData(res.data);
          console.log('DATA COMMANDE', res.data);
        });
    }
  }, [dispatch, auth]);

  function handlechangeOrder() {
    if (orderOfData === "UP") {
      setOrderOfData("DOWN");
      setData(
        data.sort(
          (a, b) => parseFloat(a.amount) - parseFloat(b.amount)
        )
      );
    } else {
      setOrderOfData("UP");
      setData(
        data.sort(
          (a, b) => parseFloat(a.amount) + parseFloat(b.amount)
        )
      );
    }
  }

  return (
    <>
      <Layout subTitle=""
        pageTitle={title}
        show_button_order={true}
        handlechangeOrder={handlechangeOrder}
        orderOfData={orderOfData}
      >
        <div className="offer-v1 min-h-[55vh]">
          <div className="">
            <div className="row">
              <div className="col-xl-12">
                <div className="card-body">
                  {data && (
                    <CommandHistory data={data} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Blank;
