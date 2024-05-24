import LayoutAdmin from "../../../../components/layout/LayoutAdmin";
import Link from "next/dist/client/link";
import {useState} from "react";
import axios from "axios";
import config from "../../../../utils/config";
import {useEffect} from "react";
import {useRouter} from "next/dist/client/router";
import Router from "next/router";
import allPays from "../../../../utils/allCountry";

export default function UbdateMission() {
    const [showMessage, setShowMessage] = useState({
        err: false,
        succ: false,
        message: "",
    });

    const [newOfferUpdated, setNewOfferUpdated] = useState(0);

    const router = useRouter();
    const data = router.query;
    const [newOffer, setNewOffer] = useState({
        nom: "",
        url: "",
        description: "",
        description2: "",
        pays: "",
        remuneration: 0,
        montant: 0,
        regie: "",
        annonceur: "",
        quota: 0,
        image: "",
        valid: 0,
        premium: 0,
        idoffre: "",
        actif: 0,
    });
    const [urlOffer, setUrlOffer] = useState("");
    useEffect(() => {
        setNewOffer({
            nom: data.nom,
            url: data.url,
            description: data.description,
            description2: data.description2,
            pays: data.pays,
            remuneration: data.remuneration,
            montant: data.montant,
            regie: data.regie,
            annonceur: data.annonceur,
            quota: data.quota,
            image: data.image,
            valid: data.valid,
            premium: data.premium,
            idoffre: data.idoffre,
            actif: data.actif,
        });
    }, [data]);

    useEffect(async () => {
        await axios.put(`/api/missions`, newOffer);
    }, [newOfferUpdated]);

    function checkPaysAccepter(val) {
        const pays = newOffer.pays;
        const myPays = pays.split(",");
        if (myPays.includes(val)) {
            const i = myPays.indexOf(val);
            myPays.splice(i, 1);
        } else {
            myPays.push(val);
            console.log(myPays);
        }
        let value;
        if (myPays.toString().charAt(0) == ",") {
            value = myPays.toString().substring(1);
        } else {
            value = myPays.toString();
        }
        setNewOffer({...newOffer, pays: value});
    }

    async function addMoreUrlOffer() {
        const urls = newOffer.url;
        const myUrls = urls.split(",");

        if (urlOffer != "" && !myUrls.includes(urlOffer)) {
            myUrls.push(urlOffer);
            setUrlOffer("");
        }

        let value;
        if (myUrls.toString().charAt(0) == ",") {
            value = myUrls.toString().substring(1);
        } else {
            value = myUrls.toString();
        }
        setNewOffer({...newOffer, url: value, quota: myUrls.length});
        setNewOfferUpdated((state) => state + 1);
    }

    function removeUrlOffer(i) {
        const urls = newOffer.url;
        const myUrls = urls.split(",");

        myUrls.splice(i, 1);

        let value;
        if (myUrls.toString().charAt(0) == ",") {
            value = myUrls.toString().substring(1);
        } else {
            value = myUrls.toString();
        }
        setNewOffer({...newOffer, url: value, quota: myUrls.length});
        setNewOfferUpdated((state) => state - 1);
    }

    async function updateOffer(e) {
        e.preventDefault();
        await axios
            .put(`/api/missions`, newOffer)
            .then((res) => {
                if (res.status == 200) {
                    setShowMessage({
                        err: false,
                        succ: true,
                        message: res.data.message,
                    });

                    Router.push("/admin/mission");
                }
            })
            .catch((err) => {
                setShowMessage({
                    err: true,
                    succ: false,
                    message: error.response.data.message,
                });
            });
    }

    return (
        <LayoutAdmin>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-3 flex items-center">
                        <div className="font-size-md mr-3">
                            <Link href="/admin/mission">
                <span
                    role="img"
                    aria-label="left-circle"
                    className="cursor-pointer hover:text-indigo-500 anticon anticon-left-circle mail-detail-action-icon font-size-md ml-0"
                >
                  <svg
                      viewBox="64 64 896 896"
                      className="w-6 h-6"
                      focusable="false"
                      data-icon="left-circle"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                  >
                    <path
                        d="M603.3 327.5l-246 178a7.95 7.95 0 000 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z"></path>
                    <path
                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                  </svg>
                </span>
                            </Link>
                        </div>
                        <h2 className="mt-1 text-black underline-offset-2 decoration-2 decoration-yellow-300 underline">
                            Modifier Offre
                        </h2>
                    </div>
                    <div className="col-lg-12">
                        <form onSubmit={(e) => updateOffer(e)}>
                            <div className="row">
                                <div
                                    className="bg-green-100 border border-green-400 text-green-700 mt-4 px-4 py-3 rounded relative"
                                    role="alert"
                                    style={{
                                        display: showMessage.succ ? "block" : "none",
                                    }}
                                >
                                    <span className="block sm:inline">{showMessage.message}</span>
                                    <span
                                        className="absolute top-0 bottom-0 right-0 px-4 py-3"
                                        onClick={() => {
                                            setShowMessage({err: false, succ: false, message: ""});
                                        }}
                                    >
                    <svg
                        className="fill-current h-6 w-6 text-green-500"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                      <title>Close</title>
                      <path
                          d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                    </svg>
                  </span>
                                </div>
                                <div
                                    className="bg-red-100 border border-red-400 text-red-700 mt-4 px-4 py-3 rounded relative"
                                    role="alert"
                                    style={{
                                        display: showMessage.err ? "block" : "none",
                                    }}
                                >
                                    <span className="block sm:inline">{showMessage.message}</span>
                                    <span
                                        className="absolute top-0 bottom-0 right-0 px-4 py-3"
                                        onClick={() => {
                                            setShowMessage({err: false, succ: false, message: ""});
                                        }}
                                    >
                    <svg
                        className="fill-current h-6 w-6 text-red-500"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                      <title>Close</title>
                      <path
                          d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                    </svg>
                  </span>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group mb-4 ">
                                        <label className="text-black">
                                            Nom de l'offre{" "}
                                            <span className="text-red-500 font-bold">*</span>
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                setNewOffer({...newOffer, nom: e.target.value});
                                            }}
                                            value={newOffer.nom}
                                            type="text"
                                            className="form-control border-yellow-400 border-2 text-black"
                                            placeholder="Entrez le Nom de l'offre"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="row items-center">
                                        <div className="col-lg-10">
                                            <div className="form-group mb-4 text-black">
                                                <label className="text-black">
                                                    Url de l'offre {" "}
                                                    <span className="text-red-500 font-bold">*</span>
                                                </label>
                                                <input
                                                    onChange={(e) => {
                                                        setUrlOffer(e.target.value);
                                                    }}
                                                    value={urlOffer}
                                                    required={newOffer.url == ""}
                                                    type="text"
                                                    className="form-control border-yellow-400 text-black border-2"
                                                    placeholder="entrer l'Url de l'offre"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <button
                                                onClick={() => {
                                                    addMoreUrlOffer();
                                                }}
                                                type="button"
                                                className="py-2 px-4 text-sm font-medium text-white bg-[#00d7b3] hover:bg-[#01be9f] rounded-md"
                                            >
                                                Valider
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        {newOffer.url?.split(",").map((val, i) => {
                                            if (val != "")
                                                return (
                                                    <div
                                                        key={i}
                                                        className="flex justify-between px-2 py-2 border-1 border-yellow-400 text-sm font-bold text-black mb-1"
                                                    >
                                                        {val}
                                                        <div
                                                            className="w-4 mr-2 text-red-500 cursor-pointer transform hover:text-purple-500 hover:scale-110">
                                                            <svg
                                                                onClick={() => {
                                                                    removeUrlOffer(i);
                                                                }}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                );
                                        })}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group mb-4 ">
                                        <label className="text-black">
                                            Description de l'offre{" "}
                                            <span className="text-red-500 font-bold">*</span>
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                setNewOffer({
                                                    ...newOffer,
                                                    description: e.target.value,
                                                });
                                            }}
                                            value={newOffer.description}
                                            required
                                            type="text"
                                            className="form-control border-yellow-400 border-2 text-black"
                                            placeholder="Entrer une courte description(optionel)"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group mb-4 text-black">
                                        <label className="text-black">
                                            Description de l'offre (Longue)
                                        </label>
                                        <textarea
                                            onChange={(e) => {
                                                setNewOffer({
                                                    ...newOffer,
                                                    description2: e.target.value,
                                                });
                                            }}
                                            value={newOffer.description2}
                                            type="text"
                                            className="form-control border-yellow-400 border-2 py-2 text-black"
                                            placeholder="Entrer une longue description(optionel)"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group mb-4 ">
                                        <label className="text-black">Image</label>
                                        <input
                                            onChange={(e) => {
                                                setNewOffer({...newOffer, image: e.target.value});
                                            }}
                                            value={newOffer.image}
                                            type="text"
                                            className="form-control border-yellow-400 border-2 text-black"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group mb-4 text-black">
                                        <label className="text-black">
                                            Rémunération aux membres{" "}
                                            <span className="text-red-500 font-bold">*</span>
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                setNewOffer({
                                                    ...newOffer,
                                                    remuneration: e.target.value,
                                                });
                                            }}
                                            value={newOffer.remuneration}
                                            required
                                            type="number"
                                            step="0.01"
                                            min="0.01"
                                            className="form-control border-yellow-400 border-2 text-black"
                                            placeholder="0.01"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group mb-4 text-black">
                                        <label className="text-black">
                                            Validation directe (0 = non | 1 = oui){" "}
                                            <span className="text-red-500 font-bold">*</span>
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                setNewOffer({...newOffer, valid: e.target.value});
                                            }}
                                            value={newOffer.valid}
                                            required
                                            type="number"
                                            max="1"
                                            min="0"
                                            className="form-control border-yellow-400 border-2 text-black"
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group mb-4 ">
                                        <label className="text-black">
                                            Premium <span className="text-red-500 font-bold">*</span>
                                        </label>
                                        <select
                                            className="form-control border-yellow-400 border-2 text-black"
                                            onChange={(e) => {
                                                setNewOffer({...newOffer, premium: e.target.value});
                                            }}
                                            value={newOffer.premium}
                                            required
                                        >
                                            <option value="0">NON</option>
                                            <option value="1">OUI</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group mb-4 ">
                                        <label className="text-black">
                                            Rémunération sur régie{" "}
                                            <span className="text-red-500 font-bold">*</span>
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                setNewOffer({...newOffer, montant: e.target.value});
                                            }}
                                            value={newOffer.montant}
                                            required
                                            type="number"
                                            step="0.01"
                                            min="0.01"
                                            className="form-control border-yellow-400 border-2 text-black"
                                            placeholder="0.01"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-2 text-black">
                                    <label className="text-black">
                                        Pays acceptés
                                        <span className="text-red-500 font-bold">*</span>
                                        <span className="break-all text-indigo-500 font-bold ml-4">
                      : {newOffer.pays}
                    </span>
                                    </label>
                                    <ul className="flex flex-wrap h-[300px] overflow-auto  text-sm font-medium text-black bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                        {allPays.map((e, i) => {
                                            return (
                                                <li key={i}
                                                    className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                                                    <div className="flex items-center pl-3">
                                                        <input
                                                            onChange={(e) => {
                                                                checkPaysAccepter(e.target.value);
                                                            }}
                                                            checked={newOffer?.pays?.includes(e.code)}
                                                            id={"chck-" + e.code}
                                                            type="checkbox"
                                                            value={e.code}
                                                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                        />
                                                        <label
                                                            htmlFor={"chck-" + e.code}
                                                            className="py-3 ml-2 w-full text-sm font-medium text-black dark:text-gray-300"
                                                        >
                                                            {e.nom}
                                                        </label>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="col-lg-12">
                                    <button type="submit" className="btn btn-primary ml-2">
                                        Modifier
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
}
