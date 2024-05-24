import React from "react";
import axios from "axios";
import config from "../../utils/config";

import {useState} from "react";

import {useRouter} from "next/dist/client/router";

function CardTicket({
                        status,
                        type_message,
                        employe_respond,
                        date,
                        email,
                        hashId,
                    }) {
    const router = useRouter();
    const [myTickets, setMyTickets] = useState([]);

    async function deleteTicket() {
        await axios
            .post(`/api/ticket/deleteTicket`, {email: email, hashId})
            .then((res) => {
                if (res.status === 200) {
                    router.reload(window.location.pathname);
                }
            });
    }

    async function getTicket() {
        await axios.post(`/api/ticket/findTicket`, {email}).then((res) => {
        });
    }

    return (
        <>
            <div className="card lg:flex-row px-4 py-4">
                <div className="col-lg-4">
                    {/* <div>ID:</div> */}
                    <div>
            <span
                className="px-4  py-1 rounded-full text-gray-500 bg-green-200 text-xs flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              {status}
            </span>
                    </div>
                </div>
                <div className="col-lg-2">
                    {/* <div>Type:</div> */}
                    <div>{type_message}</div>
                </div>
                <div className="col-lg-2">
                    {/* <div>Received by:</div> */}
                    <div>{employe_respond}</div>
                </div>
                <div className="col-lg-2">
                    {/* <div>Date:</div> */}
                    <div>{date}</div>
                </div>
                <div className="col-lg-2 lg:text-end">
                    {/* <div>Date:</div> */}
                    <button
                        onClick={deleteTicket}
                        className="md:my-2 lg:my-0 bg-red-500 hover:bg-red-700 text-white font-bold  px-2 rounded"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
}

export default CardTicket;
