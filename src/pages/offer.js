import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import OfferHistory from "../components/member/offer";
import { getValidationByUser } from "../store/actions/validation";
import { convertDateString } from "../utils/converDate";

function Blank() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [title,] = useState("Mes Participations");
  const [orderOfData, setOrderOfData] = useState('UP');

  useEffect(() => {
    if (auth.user) dispatch(getValidationByUser(auth.user.hashId));
  }, [dispatch, auth]);

  const validations = useSelector((state) => state.validation);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(validations.map((validation) => {
      const newdata = {
        date: isNaN(validation.idt) ? convertDateString(validation.dateH) : convertDateString(validation.dateO),
        nom: isNaN(validation.idt) ? validation.idt : validation.nom,
        renumeration: isNaN(validation.idt) ? parseFloat(validation.renumerationH) + ' ' : parseFloat(validation.renumerationO) + ' ',
        status: validation.etat,
        offerwall: validation.offerwall
      };
      return newdata;
    }));
  }, [validations]);

  function handlechangeOrder() {
    if (orderOfData === "UP") {
      setOrderOfData("DOWN");
      setData([...data].sort((a, b) => parseFloat(a.renumeration) - parseFloat(b.renumeration)));
    } else {
      setOrderOfData("UP");
      setData([...data].sort((a, b) => parseFloat(b.renumeration) - parseFloat(a.renumeration)));
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
          <div className="row">
            <div className="col-xl-12">
              <div className="card-body">
                <OfferHistory data={data} />
              </div>
            </div>
          </div>
        </div>
      </Layout >
    </>
  );
}

export default Blank;
