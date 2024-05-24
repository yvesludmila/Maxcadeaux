import Link from "next/link";
import Layout from "../components/layout/Layout";
import React, { Fragment, useRef, useEffect, useState } from "react";
import config from "../utils/config";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getUserAuth } from "../store/actions/userAction";
import { Dialog, Transition } from "@headlessui/react";
import { converDateAndHours } from "../utils/converDateAndHours";
import TicketDetails from "../components/modal/ticketDetails";

function Blank() {
    const dispatch = useDispatch();
    const emailUser = useSelector((state) => state.auth).user?.email;
    const cancelButtonRef = useRef(null);
    const [idDelete, setIdDelete] = useState({ email: "", hashId: "" });
    const [myTickets, setMyTickets] = useState([]);
    const [confirm, setConfirm] = useState(false);
    const [dataTicket, setDataTicket] = useState([]);
    const [showReplyTicket, setShowReplyTicket] = useState(false);
    useEffect(() => {
        getTicket();
        dispatch(getUserAuth());
    }, [emailUser, dispatch]);
    // useEffect(() => {

    // }, [dispatch]);
    async function getTicket() {
        await axios
            .post(`/api/ticket/findTicket`, { email: emailUser })
            .then((res) => {
                setMyTickets(res.data);
            });
    }

    async function deleteTicket(user, hashId) {
        await axios
            .post(`/api/ticket/deleteTicket`, { email: user, hashId })
            .then((res) => {
                if (res.status === 200) {
                    getTicket();
                }
            });
    }

    return (
        <>
            <Layout subTitle="Support" pageTitle="Système de support">
                <div className="support">
                    <div className="">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card create_ticket">
                                    <div className="card-header">
                                        <h4 className="card-title">Votre Ticket</h4>
                                        <Link href="/create-ticket">
                                            <a className="btn btn-primary">Nouveau</a>
                                        </Link>
                                    </div>
                                    <div
                                        className="card-body height-200 d-flex align-items-center justify-content-center">
                                        <p
                                            className="mt-5"
                                            style={{
                                                display: myTickets.length == 0 ? "block" : "none",
                                            }}
                                        >
                                            Vous n'avez pas encore de ticket ! Créez-en un en appuyant sur le bouton "Nouveau"
                                        </p>
                                        <div
                                            className="w-full"
                                            style={{
                                                display: myTickets.length == 0 ? "none" : "block",
                                            }}
                                        >
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="overflow-x-auto">
                                                        <div
                                                            className="min-w-screen flex items-center justify-center  font-sans">
                                                            <div className="w-full">
                                                                <div className="bg-white shadow-md rounded my-6">
                                                                    <table className="min-w-max w-full table-auto">
                                                                        <thead>
                                                                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                                                <th className="py-3 px-6 text-left">
                                                                                    Type
                                                                                </th>
                                                                                <th className="py-3 px-6 text-center">
                                                                                    Statut
                                                                                </th>
                                                                                <th className="py-3 px-6 text-center">
                                                                                    Date
                                                                                </th>
                                                                                <th className="py-3 px-6 text-center">
                                                                                    Actions
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody
                                                                            className="text-gray-600 text-sm font-light">
                                                                            {myTickets.map((ticket, index) => {
                                                                                return (
                                                                                    <tr key={index}
                                                                                        className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                                                                                        <td className="py-3 px-6 text-left">
                                                                                            <div
                                                                                                className="flex items-center">
                                                                                                <span className="font-medium">
                                                                                                    {ticket.type_message}
                                                                                                </span>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="py-3 px-6 text-center">
                                                                                            <div
                                                                                                className="flex items-center justify-center">
                                                                                                <span
                                                                                                    className={
                                                                                                        ticket.status == "OK"
                                                                                                            ? "bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs"
                                                                                                            : "bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs"
                                                                                                    }
                                                                                                >
                                                                                                    {ticket.status}
                                                                                                </span>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="py-3 px-6 text-center">
                                                                                            <div
                                                                                                className="flex items-center justify-center">
                                                                                                {converDateAndHours(
                                                                                                    ticket.date
                                                                                                )}
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="py-3 px-6 text-center">
                                                                                            <div
                                                                                                className="flex item-center justify-center">
                                                                                                <div
                                                                                                    className="w-5 mr-2 cursor-pointer transform hover:text-purple-500 hover:scale-110">
                                                                                                    <svg
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                        fill="none"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        stroke="currentColor"
                                                                                                        onClick={() => {
                                                                                                            setShowReplyTicket(true);
                                                                                                            setDataTicket(ticket);
                                                                                                        }}
                                                                                                    >
                                                                                                        <path
                                                                                                            strokeLinecap="round"
                                                                                                            strokeLinejoin="round"
                                                                                                            strokeWidth="2"
                                                                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                                                        />
                                                                                                        <path
                                                                                                            strokeLinecap="round"
                                                                                                            strokeLinejoin="round"
                                                                                                            strokeWidth="2"
                                                                                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="w-5 mr-2 text-red-600 cursor-pointer transform hover:text-purple-500 hover:scale-110">
                                                                                                    <svg
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                        fill="none"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        stroke="currentColor"
                                                                                                        onClick={() => {
                                                                                                            setIdDelete({
                                                                                                                email: ticket.user,
                                                                                                                hashId: ticket.hashId,
                                                                                                            });
                                                                                                            setConfirm(true);
                                                                                                        }}
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
                                                                                        </td>
                                                                                    </tr>
                                                                                );
                                                                            })}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            <TicketDetails
                setShowReplyTicket={setShowReplyTicket}
                showReplyTicket={showReplyTicket}
                dataTicket={dataTicket}
            />
            <Transition.Root show={confirm} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setConfirm}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel
                                    className="relative min-w-[400px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg font-medium leading-6 text-gray-900"
                                                >
                                                    Suprrimer ce ticket?
                                                </Dialog.Title>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => setConfirm(false)}
                                        >
                                            Annuler
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => {
                                                setConfirm(false);
                                                deleteTicket(idDelete.email, idDelete.hashId);
                                            }}
                                        >
                                            Supprimer
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}

export default Blank;
