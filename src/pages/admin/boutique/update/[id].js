import LayoutAdmin from "../../../../components/layout/LayoutAdmin";
import Link from "next/dist/client/link";
import {useState} from "react";
import axios from "axios";
import config from "../../../../utils/config";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function NouveauBoutique() {
    const router = useRouter();
    const data = router.query;
    const [allCat, setAllCat] = useState([]);
    const [newBoutique, setNewBoutiqe] = useState({
        nom: "",
        categorieId: "",
        image: "",
        actif: "1",
    });

    const [showMessage, setShowMessage] = useState({
        err: false,
        succ: false,
        message: "",
    });

    useEffect(() => {
        setNewBoutiqe({
            nom: data.shopName,
            categorieId: data.categorieId,
            image: data.shopImage,
            actif: data.actif,
        });
    }, [data]);
    useEffect(() => {
        getAllCat();
    }, []);

    async function getAllCat() {
        await axios
            .post(`/api/shop/all-cat`)
            .then((res) => {
                if (res.data.success) {
                    setAllCat(res.data.result);
                }
            })
            .catch((err) => console.log(err));
    }

    async function updateBoutique(e) {
        e.preventDefault();

        console.log(newBoutique);
        await axios
            .put(`/api/shop/update-boutique/${router.query.id}`, newBoutique)
            .then((res) => {
                if (res.status == 200) {
                    setShowMessage({
                        err: false,
                        succ: true,
                        message: res.data.message,
                    });
                } else {
                    setShowMessage({
                        err: true,
                        succ: false,
                        message: res.data.message,
                    });
                }
            })
            .catch((error) => {
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
                            <Link href="/admin/boutique">
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
                            Update boutique
                        </h2>
                    </div>
                    <div className="col-lg-12">
                        <form onSubmit={(e) => updateBoutique(e)}>
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
                                    <div className="form-group mb-4">
                                        <label htmlFor="">Nom</label>
                                        <input
                                            onChange={(e) =>
                                                setNewBoutiqe({
                                                    ...newBoutique,
                                                    nom: e.target.value,
                                                })
                                            }
                                            value={newBoutique.nom}
                                            type="text"
                                            className="form-control border-yellow-400 border-2"
                                            placeholder="Entrez le nom du boutique"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group mb-4">
                                        <label htmlFor="">Lien Image</label>
                                        <input
                                            onChange={(e) =>
                                                setNewBoutiqe({
                                                    ...newBoutique,
                                                    image: e.target.value,
                                                })
                                            }
                                            value={newBoutique.image}
                                            type="text"
                                            className="form-control border-yellow-400 border-2"
                                            placeholder="Lien image"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row items-center">
                                        <div className="col-sm-10">
                                            <div className="form-group mb-4">
                                                <label htmlFor="">Categorie</label>
                                                <select
                                                    className="form-control border-yellow-400 border-2"
                                                    value={newBoutique.categorieId}
                                                    onChange={(e) =>
                                                        setNewBoutiqe({
                                                            ...newBoutique,
                                                            categorieId: e.target.value,
                                                        })
                                                    }
                                                >
                                                    {allCat.length != 0 &&
                                                        allCat.map((cat, i) => {
                                                            return (
                                                                <option key={i} value={cat.id}>
                                                                    {cat.nom}
                                                                </option>
                                                            );
                                                        })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-2">
                                            <Link href="/admin/boutique/categorie">
                                                <button className=" text-black px-2 py-2 rounded-xl">
                                                    <i className="fa fa-folder-plus"></i>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group mb-4">
                                        <label htmlFor="">Activité</label>
                                        <select
                                            onChange={(e) =>
                                                setNewBoutiqe({
                                                    ...newBoutique,
                                                    actif: e.target.value,
                                                })
                                            }
                                            className="form-control border-yellow-400 border-2"
                                            value={newBoutique.actif}
                                        >
                                            <option value="1">Actif</option>
                                            <option value="0">Non-Actif</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <button type="submit" className="btn btn-primary">
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
