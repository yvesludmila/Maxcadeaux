import React from "react";
import Layout from "../components/layout/Layout";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import config from "../utils/config";
import { useRouter } from "next/dist/client/router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

function Blank() {
    const router = useRouter();
    const emailUser = useSelector((state) => state.auth).user?.email;
    const [showMessageError, setShowMessageError] = useState(false);
    const [tickets, setTickets] = useState({
        type_message: "Earing",
        employe_respond: "Administrator",
        description: "",
        user: emailUser,
    });
    const [loadingCreateTicket, setLoadingCreateTicket] = useState(false);

    function createTicket(e) {
        console.log("tickets: ", tickets);
        e.preventDefault();
        setLoadingCreateTicket(true);
        axios
            .post(`/api/ticket/createTicket`, tickets)
            .then((res) => {
                if (res.data.success) {
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
                        title: "Message envoyé avec succès"
                    })
                    setTickets({
                        type_message: "Earing",
                        employe_respond: "Administrator",
                        description: "",
                        user: emailUser,
                    });
                    // router.push("/support");
                }
            })
            .catch((err) => {
                // setShowMessageError(true);
                Swal.mixin({
                    toast: true,
                    position: "bottom-right",
                    showConfirmButton: false,
                    timer: 4000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener("mouseenter", Swal.stopTimer);
                        toast.addEventListener(
                            "mouseleave",
                            Swal.resumeTimer
                        );
                    }
                }).fire({
                    icon: "error",
                    title: "Ooupppss Erreur"
                })
            })
            .finally((err) => {
                setLoadingCreateTicket(false);
            })
    }

    return (
        <>
            <Layout subTitle="Système de support" pageTitle="Nouveau ticket">
                <div className="create_ticket-default">
                    <div className="container">
                        <div className="row justify-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="create_ticket-form card">
                                    <div className="card-header">
                                        <h4 className="card-title">Nouveau ticket</h4>
                                        <Link href="/support">
                                            <a className="font-bold text-red-500 hover:text-red-800">
                                                Annuler
                                            </a>
                                        </Link>
                                    </div>
                                    <div
                                        className="bg-red-100 border border-red-400 text-red-700 mt-4 px-4 py-3 rounded relative"
                                        role="alert"
                                        style={{
                                            display: showMessageError ? "block" : "none",
                                        }}
                                    >
                                        <span className="block sm:inline">
                                            Oupps error! Message not send
                                        </span>
                                        <span
                                            className="absolute top-0 bottom-0 right-0 px-4 py-3"
                                            onClick={() => setShowMessageError(false)}
                                        >
                                            <svg
                                                className="fill-current h-6 w-6 text-red-500"
                                                role="button"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <title>Close</title>
                                                <path
                                                    d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={(e) => createTicket(e)}>
                                            <div className="form-group">
                                                {/* <label>What the type question do you want?</label> */}
                                                <label>
                                                    Quel est le type de question que vous voulez nous
                                                    envoyer?
                                                </label>
                                                <select
                                                    className="drop-menu form-control"
                                                    value={tickets.type_message}
                                                    onChange={(e) =>
                                                        setTickets({
                                                            ...tickets,
                                                            type_message: e.target.value,
                                                        })
                                                    }
                                                >
                                                    <option value="Earing"> Earning</option>
                                                    <option value="Withdrawals"> Withdrawals</option>
                                                    <option value="Profile"> Profil</option>
                                                    <option value="General"> General</option>
                                                    <option value="Others"> Autres</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                {/* <label htmlFor="">Employe Respond</label> */}
                                                <label htmlFor="">
                                                    Quel employé que vous voulez vous repondre?
                                                </label>
                                                <select
                                                    className="drop-menu form-control"
                                                    value={tickets.employe_respond}
                                                    onChange={(e) =>
                                                        setTickets({
                                                            ...tickets,
                                                            employe_respond: e.target.value,
                                                        })
                                                    }
                                                >
                                                    <option value="Administrator"> Administrateur</option>
                                                    <option value="Responsable"> Responsable</option>
                                                    <option value="Others"> Autres</option>
                                                </select>
                                            </div>
                                            {/* <div className="form-group">
                        <label htmlFor="">
                          What language do you prefer to be answered?
                        </label>
                        <select
                          className="drop-menu form-control"
                          value={tickets.lang_response}
                          onChange={(e) =>
                            setTickets({
                              ...tickets,
                              lang_response: e.target.value,
                            })
                          }
                        >
                          <option value="English"> English</option>
                          <option value="Français"> Français</option>
                          <option value="Deutsch"> Deutsch</option>
                          <option> Others</option>
                        </select>
                      </div> */}
                                            <div className="form-group">
                                                {/* <label htmlFor="">
                          Please provide a description of the problem you are
                          encountering
                        </label> */}
                                                <label htmlFor="">
                                                    Entre la description de votre problème
                                                </label>
                                                <textarea
                                                    style={{
                                                        minHeight: "200px",
                                                        padding: "20px",
                                                    }}
                                                    value={tickets.description}
                                                    onChange={(e) => {
                                                        setTickets({
                                                            ...tickets,
                                                            user: emailUser,
                                                            description: e.target.value,
                                                        });
                                                    }}
                                                    name=""
                                                    id=""
                                                    rows="10"
                                                    className="form-control"
                                                    required
                                                ></textarea>
                                            </div>
                                            <div className="text-center">
                                                <button
                                                    type="submit"
                                                    disabled={tickets.description.length === 0}
                                                    className="btn btn-primary"
                                                >
                                                    {loadingCreateTicket ? "En cours de traitement ..." : "Envoyer"}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
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
