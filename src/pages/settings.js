import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import Alert from "../components/modal/alert";
import { getUserAuth } from "../store/actions/userAction";
// import config from "../utils/config";

function Blank() {
    const [user, setUser] = useState({
        nom: '',
        prenom: '',
        email: '',
        codePostal: '',
        ville: '',
        adresse: '',
        pays: '',
        idParrain: NaN,
        hashId: '',
    });

    const [account, setAccount] = useState({
        iban: '',
        swift: '',
        paypal: '',
        skrill: '',
    });

    const [mdpData, setMdpData] = useState({
        email: '',
        hashId: '',
        mdp: '',
        newMdp: '',
    });
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState({
        title: '',
        content: '',
    });
    const dispatch = useDispatch();
    const [loading_modify_user, setLoadingModifyUser] = useState(false);
    const [loading_add_account, setLoadingAddAccount] = useState(false);
    const [loading_change_password, setLoadingChangePassword] = useState(false);
    const auth = useSelector((state) => state.auth);
    
    useEffect(() => {
        setUser(auth.user);
        setAccount(auth.user);
    }, [auth]);

    useEffect(() => {
        dispatch(getUserAuth()).then();
    }, [dispatch]);

    function modifyUser(e) {
        e.preventDefault();
        setLoadingModifyUser(true);
        if (auth.user?.completedProfile === 1) {
            setShow(true);
            setData({
                content: "Vous avez déjà modifier votre information",
                title: "Information",
            });
            setLoadingModifyUser(false);
        } else {
            axios
                .post(`/api/auth/edit-user`, { ...user, completedProfile: true })
                .then((res) => {
                    console.log(res);
                    setSuccess(true);
                    dispatch(getUserAuth()).then();
                    setData({
                        content: res.data.message,
                        title: "Information",
                    });
                })
                .catch((err) => {
                    setData({
                        content: err.response.data.message,
                        title: "Information",
                    });
                })
                .finally(() => {
                    setShow(true);
                    setLoadingModifyUser(false);
                });
        }
    }

    function addAccount(e) {
        e.preventDefault();
        setLoadingAddAccount(true);
        if (auth.user?.completedAccount === 1) {
            setShow(true);
            setData({
                content: "Vous avez déjà modifier votre information",
                title: "Information",
            });
            setLoadingAddAccount(false);
        } else {
            axios
                .post(`/api/auth/add-account`, {
                    ...account,
                    id: auth.user.id,
                    completedAccount: true,
                })
                .then((res) => {
                    console.log(res);
                    setSuccess(true);
                    dispatch(getUserAuth()).then();
                    setData({
                        content: res.data.message,
                        title: "Information",
                    });
                })
                .catch((err) => {
                    setData({
                        content: err.response.data.message,
                        title: "Information",
                    });
                })
                .finally(() => {
                    setLoadingAddAccount(false);
                    setShow(true);
                });
        }
    }

    function changePassword(e) {
        e.preventDefault();
        setLoadingChangePassword(true);
        axios
            .post(`/api/auth/change-password`, {
                ...mdpData,
                email: auth.user.email,
                hashId: auth.user.hashId,
            })
            .then((res) => {
                setSuccess(true);
                dispatch(getUserAuth()).then();
                setData({
                    content: res.data.message,
                    title: "Information",
                });
            })
            .catch((err) => {
                setData({
                    title: "Information",
                    content: err.response.data.message
                        ? err.response.data.message
                        : "erreur",
                });
            })
            .finally(() => {
                setLoadingChangePassword(false);
                setShow(true);
                setMdpData({
                    email: '',
                    hashId: '',
                    mdp: '',
                    newMdp: '',
                });
            });
    }

    return (
        <>
            <Layout subTitle="Back to Home" pageTitle="Paramètres">
                <div className="container">

                    <div className="card border border-indigo-400 bg-white p-4 shadow-md border-radius">
                        <h5 className="mb-3">
                            <span
                                className="background-middle-title underline underline-offset-1 decoration-[10px] decoration-yellow-200 text-xl">
                                Paramètres du compte
                            </span>
                        </h5>
                        <form onSubmit={(e) => modifyUser(e)}>
                            <div className="row w-full mb-3">
                                <div className="col-sm-6">
                                    <div className="js-form-message">
                                        <label htmlFor="pseudoLabel" className="text-md mb-2 ml-1">
                                            Nom de famille
                                        </label>
                                        <div className="form-group">
                                            <input
                                                onChange={(e) =>
                                                    setUser({ ...user, nom: e.target.value })
                                                }
                                                value={user?.nom}
                                                type="text"
                                                className="form-control"
                                                id="pseudoLabel"
                                                name="pseudo"
                                                placeholder="Entrez votre nom de famille"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="js-form-message">
                                        <label htmlFor="pseudoLabel" className="text-md mb-2 ml-1">
                                            Prénom
                                        </label>
                                        <div className="form-group">
                                            <input
                                                onChange={(e) =>
                                                    setUser({ ...user, prenom: e.target.value })
                                                }
                                                value={user?.prenom}
                                                type="text"
                                                className="form-control"
                                                id="pseudoLabel"
                                                name="pseudo"
                                                placeholder="Entrez votre prénom"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row w-full mb-3">
                                <div className="col-sm-12">
                                    <div className="js-form-message">
                                        <label htmlFor="pseudoLabel" className="text-md mb-2 ml-1">
                                            Email
                                        </label>
                                        <div className="form-group">
                                            <input
                                                onChange={(e) =>
                                                    setUser({ ...user, email: e.target.value })
                                                }
                                                value={user?.email}
                                                type="email"
                                                className="form-control"
                                                id="pseudoLabel"
                                                name="pseudo"
                                                placeholder="Entrez votre email"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row w-full mb-3">
                                <div className="col-sm-6">
                                    <div className="js-form-message">
                                        <label htmlFor="pseudoLabel" className="text-md mb-2 ml-1">
                                            Ville
                                        </label>
                                        <div className="form-group">
                                            <input
                                                onChange={(e) =>
                                                    setUser({ ...user, ville: e.target.value })
                                                }
                                                value={user?.ville}
                                                type="text"
                                                className="form-control"
                                                id="pseudoLabel"
                                                name="pseudo"
                                                placeholder="Entrez votre ville"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="js-form-message">
                                        <label htmlFor="pseudoLabel" className="text-md mb-2 ml-1">
                                            Adresse
                                        </label>
                                        <div className="form-group">
                                            <input
                                                onChange={(e) =>
                                                    setUser({ ...user, adresse: e.target.value })
                                                }
                                                value={user?.adresse}
                                                type="text"
                                                className="form-control"
                                                id="pseudoLabel"
                                                name="pseudo"
                                                placeholder="Entrez votre addresse"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row w-full mb-3">
                                <div className="col-sm-6">
                                    <div className="js-form-message">
                                        <label htmlFor="pseudoLabel" className="text-md mb-2 ml-1">
                                            Code Postal
                                        </label>
                                        <div className="form-group">
                                            <input
                                                onChange={(e) =>
                                                    setUser({ ...user, codePostal: e.target.value })
                                                }
                                                value={user?.codePostal}
                                                type="text"
                                                className="form-control"
                                                id="pseudoLabel"
                                                name="pseudo"
                                                placeholder="Entrez votre code postal"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="js-form-message">
                                        <label htmlFor="pseudoLabel" className="text-md mb-2 ml-1">
                                            Pays
                                        </label>
                                        <div className="form-group">
                                            <input
                                                disabled={true}
                                                onChange={(e) =>
                                                    setUser({ ...user, pays: e.target.value })
                                                }
                                                value={user?.pays}
                                                type="text"
                                                className="form-control"
                                                id="pseudoLabel"
                                                name="pseudo"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 text-end">
                                <button type="submit" className="btn btn-primary" disabled={loading_modify_user}>
                                    {loading_modify_user ? 'En cours de traitement . . .' : 'Enregistrer'}
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    <div className="card border border-indigo-400 bg-white p-4 shadow-md border-radius">
                        <h5 className="mb-3">
                            <span
                                className="background-middle-title underline underline-offset-1 decoration-[10px] decoration-yellow-200 text-xl">
                                Paramètre de payement
                            </span>
                        </h5>
                        <form onSubmit={(e) => addAccount(e)}>
                            <div className="row w-full mb-3">
                                <div className="col-sm-12">
                                    <div className="js-form-message">
                                        <label htmlFor="pseudoLabel" className="text-md mb-2 ml-1">
                                            PayPal Address
                                        </label>
                                        <div className="form-group">
                                            <input
                                                onChange={(e) =>
                                                    setAccount({ ...account, paypal: e.target.value })
                                                }
                                                value={account?.paypal}
                                                type="text"
                                                className="form-control"
                                                id="pseudoLabel"
                                                name="pseudo"
                                                placeholder="Entrez votre paypal addresse"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row w-full mb-3">
                                <div className="col-sm-6">
                                    <div className="js-form-message">
                                        <label htmlFor="pseudoLabel" className="text-md mb-2 ml-1">
                                            IBAN
                                        </label>
                                        <div className="form-group">
                                            <input
                                                onChange={(e) =>
                                                    setAccount({ ...account, iban: e.target.value })
                                                }
                                                value={account?.iban}
                                                type="text"
                                                className="form-control"
                                                id="pseudoLabel"
                                                name="pseudo"
                                                placeholder="Entrez votre IBAN"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="js-form-message">
                                        <label htmlFor="pseudoLabel" className="text-md mb-2 ml-1">
                                            BIC
                                        </label>
                                        <div className="form-group">
                                            <input
                                                onChange={(e) =>
                                                    setAccount({ ...account, swift: e.target.value })
                                                }
                                                value={account?.swift}
                                                type="text"
                                                className="form-control"
                                                id="pseudoLabel"
                                                name="pseudo"
                                                placeholder="Entrez votre BIC"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 text-end">
                                <button type="submit" className="btn btn-primary"
                                    disabled={loading_add_account}>
                                    {loading_add_account ? 'En cours de traitement . . . ' : 'Enregistrer'}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="card border border-indigo-400 bg-white p-4 shadow-md border-radius">
                        <h5 className="mb-3">
                            <span
                                className="background-middle-title underline underline-offset-1 decoration-[10px] decoration-yellow-200 text-xl">
                                Mot de passe
                            </span>
                        </h5>
                        <div className="alert alert-info">
                            <p className="mb-0">
                                <i className="icofont-info-circle"></i> Laissez les champs
                                ci-dessous vide si vous ne souhaitez pas modifier votre mot de
                                passe.
                            </p>
                        </div>
                        <form onSubmit={(e) => changePassword(e)}>
                            <div className="row w-full mb-3">
                                <div className="col-sm-12">
                                    <div className="js-form-message">
                                        <label htmlFor="pseudoLabel" className="text-md mb-2 ml-1">
                                            Ancien mot de passe
                                        </label>
                                        <div className="form-group">
                                            <input
                                                onChange={(e) =>
                                                    setMdpData({ ...mdpData, mdp: e.target.value })
                                                }
                                                value={mdpData.mdp}
                                                type="password"
                                                className="form-control"
                                                id="pseudoLabel"
                                                name="pseudo"
                                                placeholder="Entrez votre ancien mot de passe"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row w-full mb-3">
                                <div className="col-sm-12">
                                    <div className="js-form-message">
                                        <label htmlFor="pseudoLabel" className="text-md mb-2 ml-1">
                                            Nouveau mot de passe
                                        </label>
                                        <div className="form-group">
                                            <input
                                                onChange={(e) =>
                                                    setMdpData({
                                                        ...mdpData,
                                                        newMdp: e.target.value,
                                                    })
                                                }
                                                value={mdpData.newMdp}
                                                type="password"
                                                className="form-control"
                                                id="pseudoLabel"
                                                name="pseudo"
                                                placeholder="Entrez votre nouveau mot de passe"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 text-end">
                                <button className="btn btn-primary"
                                    disabled={loading_change_password}
                                >
                                    {loading_change_password ? 'En cours de traitement . . . ' : 'Enregistrer'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
            <Alert
                content={data.content}
                setShow={setShow}
                show={show}
                title={data.title}
                isSuccess={success}
            />
        </>
    );
}

export default Blank;
