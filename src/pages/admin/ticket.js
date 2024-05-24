import LayoutAdmin from "../../components/layout/LayoutAdmin";
import config from "../../utils/config";
import {Fragment, useRef, useEffect, useState} from "react";
import axios from "axios";
import TicketResponse from "../../components/modal/replyTicket";

import {Dialog, Transition} from "@headlessui/react";
import {useRouter} from "next/dist/client/router";
import {authMiddleware} from '../../store/middleware/authMiddleware';


export default function TicketAdmin() {
    const router = useRouter();
    const cancelButtonRef = useRef(null);
    const [myAllTickets, setAllMyTickets] = useState([]);
    const [showReplyTicket, setShowReplyTicket] = useState(false);
    const [dataTicket, setDataTicket] = useState([]);
    const [confirm, setConfirm] = useState(false);
    const [idDelete, setIdDelete] = useState({email: "", hashId: ""});
    // const [showReplyTicket, setShowReplyTicket] = useState(false);
    const result = authMiddleware(router.req);

    useEffect(() => {
        const fetchData = async () => {
            try {

                // Dispatch actions only if the component is still mounted

                getAllTickets();

            } catch (error) {
                // Handle errors
            }
        };

        // Fetch data when the component mounts
        fetchData();

    }, []);

    async function getAllTickets() {
        await axios.post(`/api/ticket/allTickets`).then((res) => {
            setAllMyTickets(res.data);
        });
    }

    async function deleteTicket(user, hashId) {
        await axios
            .post(`/api/ticket/deleteTicket`, {email: user, hashId})
            .then((res) => {
                if (res.status === 200) {
                    getAllTickets();
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
                                Administration des tickets
                            </h3>
                            <div>
                <span
                    onClick={() => getAllTickets()}
                    className="py-2 px-4 text-sm font-medium text-white bg-[#00d7b3] hover:bg-[#01be9f] rounded-md cursor-pointer"
                >
                  <i className="fa fa-sync"></i>
                </span>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="overflow-x-auto">
                                <div className="min-w-screen flex items-center justify-center  font-sans">
                                    <div className="w-full">
                                        <div className="bg-white shadow-md rounded my-6">
                                            <table className="min-w-max w-full table-auto">
                                                <thead>
                                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                    <th className="py-3 px-6 text-left">Utilisateur</th>
                                                    <th className="py-3 px-6 text-left">Type</th>
                                                    <th className="py-3 px-6 text-center">Status</th>
                                                    <th className="py-3 px-6 text-center">Date</th>
                                                    <th className="py-3 px-6 text-center">Actions</th>
                                                </tr>
                                                </thead>
                                                <tbody className="text-gray-600 text-sm font-light">
                                                {myAllTickets.map((ticket, index) => {
                                                    return (
                                                        <tr key={index}
                                                            className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                                                            <td className="py-3 px-6 text-left">
                                                                <div className="flex items-center">
                                    <span className="font-medium">
                                      {ticket.user}
                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="py-3 px-6 text-left">
                                                                <div className="flex items-center">
                                                                    {ticket.type_message}
                                                                </div>
                                                            </td>
                                                            <td className="py-3 px-6 text-center">
                                                                <div className="flex items-center justify-center">
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
                                                                <div className="flex items-center justify-center">
                                                                    {ticket.date}
                                                                </div>
                                                            </td>
                                                            <td className="py-3 px-6 text-center">
                                                                <div className="flex item-center justify-center">
                                                                    <div
                                                                        className="w-4 mr-2 cursor-pointer transform hover:text-purple-500 hover:scale-110">
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
                                                                        className="w-4 mr-2 cursor-pointer transform hover:text-purple-500 hover:scale-110">
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
            </LayoutAdmin>
            <TicketResponse
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
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
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
