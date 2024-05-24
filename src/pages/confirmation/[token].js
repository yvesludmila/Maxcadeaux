import axios from "axios";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
// import Layout from "../../components/layout/Layout";
import SentConfirmation from "../../components/modal/confirmEmail";
// import config from "../../utils/config";

function Blank() {
    const router = useRouter();
    const [open, setOpen] = useState(true);
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("Confirmation");
    const [message, setMessage] = useState("Votre email a été confirmé!!");
    useEffect(() => {
        if (router.query) {
            axios
                .post(`/api/auth/confirm`, {
                    hashId: router.query.token,
                })
                .then((res) => {
                    // console.log(res);
                    setLoading(false);
                })
                .catch(async (err) => {
                    // console.log(err);
                    await setIsError(true);
                    await setTitle('Erreur');
                    await setMessage(err.response?.message ?? 'Erreur inattendue.');
                    await setLoading(false);
                });
        }
    }, [router]);

    function toHome() {
        setOpen(false);
        // router.push('/');
        window.location.href = '/';
    }

    return (
        <>
            {loading ? (
                <p>...</p>
            ) : (
                <SentConfirmation
                    setConfirm={toHome}
                    confirm={open}
                    content={message}
                    title={title}
                    isError={isError}
                />
            )}
        </>
    );
}

export default Blank;
