import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Layout from '../components/layout/Layout';
import Alert from '../components/modal/alert';
import {getUserAuth} from '../store/actions/userAction';
import config from '../utils/config';

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
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        setUser(auth.user);
        setAccount(auth.user);
        console.log(auth.user);
    }, [auth]);
    useEffect(() => {
        dispatch(getUserAuth());
    }, [dispatch]);

    function modifyUser(e) {
        e.preventDefault();
        if (auth.user && auth.user.completedProfile == 1) {
            setShow(true);
            setData({
                content: 'Vous avez déjà modifier votre information',
                title: 'Information',
            });
        } else {
            axios
                .post(`/api/auth/edit-user`, {...user, completedProfile: true})
                .then((res) => {
                    console.log(res);
                    setSuccess(true);
                    dispatch(getUserAuth());
                    setData({
                        content: res.data.message,
                        title: 'Information',
                    });
                })
                .catch((err) => {
                    setData({
                        content: err.response.data.message,
                        title: 'Information',
                    });
                })
                .finally(() => {
                    setShow(true);
                });
        }
    }

    function addAccount(e) {
        e.preventDefault();
        if (auth.user && auth.user.completedAccount == 1) {
            setShow(true);
            setData({
                content: 'Vous avez déjà modifier votre information',
                title: 'Information',
            });
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
                    dispatch(getUserAuth());
                    setData({
                        content: res.data.message,
                        title: 'Information',
                    });
                })
                .catch((err) => {
                    setData({
                        content: err.response.data.message,
                        title: 'Information',
                    });
                })
                .finally(() => {
                    setShow(true);
                });
        }
    }

    function changePassword(e) {
        e.preventDefault();
        axios
            .post(`/api/auth/change-password`, {
                ...mdpData,
                email: user.email,
                hashId: user.hashId,
            })
            .then((res) => {
                setSuccess(true);
                dispatch(getUserAuth());
                setData({
                    content: res.data.message,
                    title: 'Information',
                });
            })
            .catch((err) => {
                setData({
                    content: err.response.data.message
                        ? err.response.data.message
                        : 'erreur',
                    title: 'Information',
                });
            })
            .finally(() => {
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
            <Layout subTitle="Back to Home" pageTitle="Settings">
                <div className="profile_setting">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div className="account_setting card setting_card-content">
                                    <div className="card-header">
                                        <h4 className="card-title">Account Setting</h4>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={(e) => modifyUser(e)}>
                                            <div className="form-group">
                                                <label>Nom</label>
                                                <input
                                                    onChange={(e) =>
                                                        setUser({...user, nom: e.target.value})
                                                    }
                                                    value={user?.nom}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Nom"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Prénom</label>
                                                <input
                                                    onChange={(e) =>
                                                        setUser({...user, prenom: e.target.value})
                                                    }
                                                    value={user?.prenom}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Prénom"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Ville</label>
                                                <input
                                                    onChange={(e) =>
                                                        setUser({...user, ville: e.target.value})
                                                    }
                                                    value={user?.ville}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Ville"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Adresse</label>
                                                <input
                                                    onChange={(e) =>
                                                        setUser({...user, adresse: e.target.value})
                                                    }
                                                    value={user?.adresse}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Adresse"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Code postale</label>
                                                <input
                                                    onChange={(e) =>
                                                        setUser({...user, codePostal: e.target.value})
                                                    }
                                                    value={user?.codePostal}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Code postale"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Pays</label>
                                                <input
                                                    disabled={true}
                                                    onChange={(e) =>
                                                        setUser({...user, pays: e.target.value})
                                                    }
                                                    value={user?.pays}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Pays"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>ID Parrain</label>
                                                <input
                                                    onChange={(e) =>
                                                        setUser({...user, idParrain: e.target.value})
                                                    }
                                                    value={user?.idParrain}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="ID Parrain"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input
                                                    onChange={(e) =>
                                                        setUser({...user, email: e.target.value})
                                                    }
                                                    value={user?.email}
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Adresse email"
                                                />
                                            </div>
                                            {/* <div className="form-group">
                                                <label>Country</label>
                                                <select className="form-control">
                                                    
                                                    <option>United States</option>
                                                    <option>United Kingdom</option>
                                                    <option>Germany</option>
                                                    <option>Bangladesh</option>
                                                    <option>Others</option>
                                                    
                                                </select>
                                                <span>We use your geo to filter out the option the cashout options that are not
                                                    available to you. Your should be deleted automacally.</span>
                                            </div> */}
                                            {/* <div className="form-group">
                                                <label>Custom referral code</label>
                                                <input type="text" className="form-control" placeholder="Henry"/>
                                                <span>Set a custom referral code to be used in your referral url.This will be
                                                your
                                                self id by default.</span>
                                            </div> */}

                                            <button type="submit" className="btn btn-primary">
                                                Save
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="payment_setting card setting_card-content">
                                    <div className="card-header">
                                        <h4 className="card-title">Payment Setting</h4>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={(e) => addAccount(e)}>
                                            <div className="form-group">
                                                <label>PayPal Address</label>
                                                <input
                                                    onChange={(e) =>
                                                        setAccount({...account, paypal: e.target.value})
                                                    }
                                                    value={account?.paypal}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Adresse paypal"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Virement bancaire</label>
                                                <input
                                                    onChange={(e) =>
                                                        setAccount({...account, skrill: e.target.value})
                                                    }
                                                    value={account?.skrill}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Virement bancaire"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>IBAN</label>
                                                <input
                                                    onChange={(e) =>
                                                        setAccount({...account, iban: e.target.value})
                                                    }
                                                    value={account?.iban}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="IBAN"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>BIC</label>
                                                <input
                                                    onChange={(e) =>
                                                        setAccount({...account, swift: e.target.value})
                                                    }
                                                    value={account?.swift}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="BIC"
                                                />
                                            </div>

                                            <button type="submit" className="btn btn-primary">
                                                Save
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="account_setting card setting_card-content">
                                    <div className="card-header">
                                        <h4 className="card-title">Changer mot de passe</h4>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={(e) => changePassword(e)}>
                                            <div className="form-group">
                                                <label>Ancien mot de passe</label>
                                                <input
                                                    onChange={(e) =>
                                                        setMdpData({...mdpData, mdp: e.target.value})
                                                    }
                                                    value={mdpData.mdp}
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Votre ancien mot de passe"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Nouveau mot de passe</label>
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
                                                    placeholder="Votre nouveau mot de passe"
                                                />
                                            </div>

                                            <button type="submit" className="btn btn-primary">
                                                Save
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
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
