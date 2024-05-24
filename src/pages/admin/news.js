import LayoutAdmin from "../../components/layout/LayoutAdmin";
import axios from "axios";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function MessageAdmin() {
    const [newsVal, setNewsVal] = useState({
        id: "",
        titre: "",
        date: "",
        description: "",
        etat: 0,
    });

    const [action, setAction] = useState("add");
    const [scroolTo, setScroolTo] = useState(0);
    const [allNews, setAllNews] = useState([]);
    const handleClick = () => {
        setScroolTo((state) => state + 1);
    };
    useEffect(() => {
        getAllNews();
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [scroolTo]);

    async function getAllNews() {
        await axios.get("/api/news/all").then((res) => {
            setAllNews(res.data);
        });
    }

    async function createNews(e) {
        e.preventDefault();
        await axios.post("/api/news/add", newsVal).then((res) => {
            if (res.status == 200) {
                getAllNews();
                setNewsVal({titre: "", date: "", description: ""});
            }
        });
    }

    async function updateNews(id, etat, data) {
        const dataU = {
            titre: data.titre,
            description: data.description,
            date: data.date,
            etat,
        };
        await axios.put(`/api/news/update/${id}`, dataU).then((res) => {
            if (res.status == 200) {
                getAllNews();
                setAction("add");
                setNewsVal({titre: "", date: "", description: ""});
            }
        });
    }

    async function deleteNews(id) {
        await axios.delete(`/api/news/delete/${id}`).then((res) => {
            if (res.status == 200) {
                getAllNews();
            }
        });
    }

    return (
        <>
            <LayoutAdmin>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-12 flex justify-between items-center border-l-[6px]  border-yellow-500 mb-2 py-1">
                            <h3 className="text-black underline-offset-2 decoration-2 decoration-yellow-300 underline">
                                Administration des News
                            </h3>
                        </div>
                        <div className="col-lg-12">
                            <form onSubmit={(e) => createNews(e)}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group mb-4">
                                            <label htmlFor="">Titre</label>
                                            <input
                                                onChange={(e) =>
                                                    setNewsVal({
                                                        ...newsVal,
                                                        titre: e.target.value,
                                                    })
                                                }
                                                value={newsVal.titre}
                                                type="text"
                                                className="form-control border-yellow-400 border-2"
                                                placeholder="Entrez le titre"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mb-4">
                                            <label htmlFor="">Date</label>
                                            <input
                                                onChange={(e) =>
                                                    setNewsVal({
                                                        ...newsVal,
                                                        date: e.target.value,
                                                    })
                                                }
                                                value={newsVal.date}
                                                type="date"
                                                className="form-control border-yellow-400 border-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group mb-4">
                                            <label htmlFor="">Description</label>
                                            <textarea
                                                onChange={(e) =>
                                                    setNewsVal({
                                                        ...newsVal,
                                                        description: e.target.value,
                                                    })
                                                }
                                                value={newsVal.description}
                                                cols="30"
                                                rows="10"
                                                className="form-control border-yellow-400 border-2"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        {action == "add" && (
                                            <button type="submit" className="btn btn-primary">
                                                Ajouter Nouveau
                                            </button>
                                        )}
                                        {action == "update" && (
                                            <button
                                                onClick={() => {
                                                    updateNews(newsVal.id, newsVal.etat, newsVal);
                                                }}
                                                type="button"
                                                className="btn btn-success"
                                            >
                                                Modifier
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-12 mt-5">
                            <div className="row">
                                {allNews.length != 0 &&
                                    allNews.map((newa, i) => {
                                        return (
                                            <div key={i} className="col-lg-6 mb-3">
                                                <div
                                                    className="p-6  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                                        {newa.titre}
                                                    </h5>
                                                    <h6>{newa.date}</h6>
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: newa.description,
                                                        }}
                                                        className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[200px] overflow-y-auto"
                                                    ></div>

                                                    {newa.etat ? (
                                                        <button
                                                            onClick={async () => {
                                                                updateNews(newa.id, 0, newa);
                                                            }}
                                                            className="inline-flex mr-2  items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800  dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-red-800"
                                                        >
                                                            Pas afficher
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={async () => {
                                                                updateNews(newa.id, 1, newa);
                                                            }}
                                                            className="mr-2 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                        >
                                                            Afficher
                                                        </button>
                                                    )}

                                                    <button
                                                        onClick={() => {
                                                            setAction("update");
                                                            handleClick();
                                                            setNewsVal(newa);
                                                        }}
                                                        className="mr-2 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                                    >
                                                        Modifier
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            deleteNews(newa.id);
                                                        }}
                                                        className="mr-2 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                                    >
                                                        Supprimer
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAdmin>
        </>
    );
}
