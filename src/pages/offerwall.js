import React from "react";
import {useState} from "react";
import Layout from "../components/layout/Layout";
import ModalOfferwall from "../components/modal/modalOfferwal";

function Blank() {
    const [openModal, setOpenModal] = useState(false);
    const [datas, setDatas] = useState({});
    const offerwalls = [
        // {
        //   name: "kiwiwall",
        //   id: "kiwiwall",
        //   pourcent: 9,
        //   bonus: "33%",
        //   linkIframe:
        //     "https://www.kiwiwall.com/wall/2zNrepCURYVEm9thFQuzzlOsGYLwnCJp/",
        //   logo: "https://www.kiwiwall.com/img/logo.png",
        // },
        {
            name: "Wannads",
            pourcent: 9,
            bonus: "33%",
            linkIframe:
                "https://wall.wannads.com/wall?apiKey=6355837522a87750714167&userId=",
            id: "wannads",
            logo: "https://wall.wannads.com/images/logo.png",
        },
        {
            name: "Notik",
            pourcent: 9,
            bonus: "33%",
            linkIframe:
                "https://notik.me/coins?api_key=yohLJXxsT6WhhJBhjCxduoo7PKwQczLF&pub_id=szVD&app_id=xHZvv42tJs&user_id=",
            id: "notik",
            logo: "https://notik.me/landingpage/images/logo_main.png",
        },
        {
            name: "OfferToro",
            pourcent: 9,
            bonus: "33%",
            linkIframe: "https://www.offertoro.com/ifr/show/19324/mon_id/7155",
            id: "offertoro",
            logo: "https://www.offertoro.com/home/images/logo.png",
        },
        // {
        //   name: "Adgatemedia",
        //   pourcent: 9,
        //   bonus: "33%",
        //   linkIframe: "https://wall.adgaterewards.com/oK-WrA/",
        //   id: "adgatemedia",
        //   logo: "https://earnator.com/images/offerwalls/adgatemedia.jpg",
        // },
    ];
    return (
        <>
            <Layout
                subTitle="Chaque mur d'offres contient des centaines d'offres à compléter"
                pageTitle="Offerwalls"
            >
                <div className="create_ticket-default">
                    <div className="container">
                        <div className="row justify-center">
                            <div className="grid grid-cols-12 gap-3">
                                {offerwalls.map((data, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4"
                                        >
                                            <button
                                                onClick={() => {
                                                    setOpenModal(true);
                                                    setDatas(data);
                                                }}
                                                type="button"
                                                className="block relative group w-full text-left"
                                            >
                                                <div
                                                    className="bg-white border border-gray-400 rounded-xl overflow-hidden transition duration-300 group-hover:border-primary-600 group-hover:ring-1 group-hover:ring-primary-600 group-hover:shadow">
                                                    <div className="space-y-3">
                                                        <div className="flex flex-row items-center px-3 pt-3 space-x-3">
                                                            <div
                                                                className="rounded-xl px-2 border overflow-hidden shrink-0">
                                                                <img
                                                                    src={data.logo}
                                                                    alt=""
                                                                    className="h-[100px] w-[100px] object-contain"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col grow">
                                <span className="text-md text-gray-600">
                                  Offerwall
                                </span>
                                                                <span
                                                                    className="font-semibold text-gray-600 md:text-lg sm:text-xl">
                                  {data.name}
                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="relative bg-gray-100 rounded-full h-1.5">
                                                            <div
                                                                className={`${
                                                                    "w-" + data.pourcent + "/12"
                                                                } absolute inset-y-0  bg-green-500 rounded-full`}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            {openModal && (
                <ModalOfferwall data={datas} setShow={setOpenModal} show={true}/>
            )}
        </>
    );
}

export default Blank;
