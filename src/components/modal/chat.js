import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessage } from "../../store/actions/messageAction";
import { getAllUsers, getUserAuth } from "../../store/actions/userAction";
import moment from "moment";

function Chat({ sendMessage, setNewMessage, newMessage }) {
    const cancelButtonRef = useRef(null);
    const scrollRef = useRef(null);
    const bottomRef = useRef(null);
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.messages);
    const auth = useSelector((state) => state.auth);
    const users = useSelector((state) => state.allUsers);
    const [list, setList] = useState(false);
    useEffect(() => {
        dispatch(getUserAuth());
        dispatch(getAllMessage()).then(() => {
            if (bottomRef?.current.scrollTop) {
                bottomRef.current.scrollTop = bottomRef?.current?.scrollHeight;
            }
        });

        dispatch(getAllUsers());
    }, [dispatch]);

    function banUser(id, value) {
        axios
            .post(`/api/user/ban`, { id, value })
            .then(() => {
                dispatch(getAllUsers());
                dispatch(getUserAuth());
            })
            .catch((err) => {
            });
    }

    return (
        <>
            <div className="fixed bottom-[59px] h-[63vh] rounded  right-10 w-[400px]  z-10 ">
                <div
                    className="flex bg-gray-300 flex-col rounded-[16px] border-1 flex-grow w-full w-full h-full bg-white shadow-xl  overflow-hidden">
                    <div className="text-center text-white bg-[#2a4d9c] relative font-bold border-b py-3">
                        Chat
                        {auth && auth.user.level === 99 && (
                            <div
                                className="absolute w-12 right-0 flex text-white items-center justify-center top-0 bottom-0">
                                <i
                                    onClick={() => setList(!list)}
                                    className="cursor-pointer fa fa-list"
                                ></i>
                            </div>
                        )}
                    </div>
                    <div
                        ref={bottomRef}
                        className="flex flex-col flex-grow h-0 relative p-4 overflow-auto"
                    >
                        {list && (
                            <div
                                className="fixed bottom-[59px] h-[58vh] overflow-auto right-10 w-[400px] bg-white z-10">
                                <ul className="my-1">
                                    {users.length > 0 &&
                                        users.map(
                                            (usr, index) =>
                                                usr.id !== auth.user.id && (
                                                    <li key={index} className="flex px-4">
                                                        <div
                                                            className={
                                                                "w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3 " +
                                                                (usr.banni_chat !== 0 ? "opacity-50" : "")
                                                            }
                                                        >
                                                            <svg
                                                                className="w-9 h-9 fill-current text-indigo-50"
                                                                viewBox="0 0 36 36"
                                                            >
                                                                <path
                                                                    d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"></path>
                                                            </svg>
                                                        </div>
                                                        <div
                                                            className="flex-grow flex items-center border-b border-gray-100 dark:border-gray-400 text-sm text-gray-600 dark:text-gray-100 py-2">
                                                            <div className="flex-grow flex justify-between items-center">
                                                                <div
                                                                    className={
                                                                        "self-center " +
                                                                        (usr.banni_chat !== 0 ? "opacity-50" : "")
                                                                    }
                                                                >
                                                                    <a
                                                                        className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100"
                                                                        href="#0"
                                                                        style={{ outline: "none;" }}
                                                                    >
                                                                        {usr.nom + " " + usr.prenom}
                                                                    </a>
                                                                </div>
                                                                <div className="flex-shrink-0 ml-2">
                                                                    {usr.banni_chat === 0 ? (
                                                                        <a
                                                                            className="flex items-center font-medium text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-500"
                                                                            href="#0"
                                                                            style={{ outline: "none;" }}
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                banUser(usr.id, 1);
                                                                            }}
                                                                        >
                                                                            Bannir
                                                                            <span>
                                                                                <svg
                                                                                    width="20"
                                                                                    height="20"
                                                                                    viewBox="0 0 20 20"
                                                                                    fill="currentColor"
                                                                                    className="transform transition-transform duration-500 ease-in-out"
                                                                                >
                                                                                    <path
                                                                                        fill-rule="evenodd"
                                                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                                                        clip-rule="evenodd"
                                                                                    ></path>
                                                                                </svg>
                                                                            </span>
                                                                        </a>
                                                                    ) : (
                                                                        <a
                                                                            className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                                                                            href="#0"
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                banUser(usr.id, 0);
                                                                            }}
                                                                            style={{ outline: "none;" }}
                                                                        >
                                                                            Annuler
                                                                            <span>
                                                                                <svg
                                                                                    width="20"
                                                                                    height="20"
                                                                                    viewBox="0 0 20 20"
                                                                                    fill="currentColor"
                                                                                    className="transform transition-transform duration-500 ease-in-out"
                                                                                >
                                                                                    <path
                                                                                        fill-rule="evenodd"
                                                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                                                        clip-rule="evenodd"
                                                                                    ></path>
                                                                                </svg>
                                                                            </span>
                                                                        </a>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                        )}
                                </ul>
                            </div>
                        )}
                        {messages.length > 0 &&
                            messages.map((message, index) => (
                                <div key={index} className="flex w-full mt-2 space-x-3 w-full">
                                    <div
                                        className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                        <div className="flex flex-column">
                                            <div className='flex items-center justify-between'>
                                                <div className='flex items-center'>
                                                    {
                                                        message.profileImage &&
                                                            message.profileImage !== '' ? (
                                                            <img
                                                                className="w-[32px] h-[32px] rounded-full object-cover mr-3"
                                                                src={'./uploads/' + message.profileImage}
                                                                alt=""
                                                            />
                                                        ) : (
                                                            <img
                                                                className="rounded-full items-start w-[32px] h-[32px] flex-shrink-0 mr-3"
                                                                src={"https://ui-avatars.com/api/?name=" + message.nom + " " + message.prenom}
                                                                width="32" height="32" alt="Marie Zulfikar" />

                                                        )
                                                    }
                                                    <h4 className="text-sm my-0  flex items-center font-semibold text-gray-900">
                                                        {message.idUser !== auth.user.hashId
                                                            ? message.nom + " " + message.prenom
                                                            : "Moi"} {
                                                            message.level === 99 ? <span
                                                                className='bg-red-500 flex-none ml-2 px-2 rounded-full text-white font-medium text-[10px]'>Admin</span> : ""
                                                        }
                                                    </h4>
                                                </div>
                                                <div className='flex items-center'>
                                                    <span className='text-[10px]'>
                                                        {moment(message.date).format("DD/MM/YYYY")}
                                                        {"  "}
                                                        {moment(message.date).format("HH:MM")}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='ml-[46px]'>
                                                <div style={{ overflowWrap: 'anywhere' }}
                                                    className="text-[13px]">{message.message}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        <div ref={scrollRef}></div>
                    </div>

                    <div className="flex bg-[#2a4d9c] justify-center py-3 px-4">
                        {auth.user.banni_chat === 1 ? (
                            <p className="text-center text-red-600">
                                Vous êtes banni du chat
                            </p>
                        ) : (
                            <>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        sendMessage();
                                        scrollRef.current.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="w-full"
                                >
                                    <input
                                        onChange={(e) =>
                                            setNewMessage({ ...newMessage, message: e.target.value })
                                        }
                                        value={newMessage.message}
                                        className="flex items-center h-10 w-full rounded px-3 text-sm"
                                        type="text"
                                        placeholder="Ecrire votre message ..."
                                    />
                                </form>
                                <button
                                    onClick={() => sendMessage()}
                                    className="ml-2 text-white  text-sm font-bold"
                                >
                                    Envoyer
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chat;
