import axios from 'axios';
import React, {useEffect, useState} from 'react';
import LayoutAdmin from '../../components/layout/LayoutAdmin';
import IdentityModalDetails from '../../components/modal/identityDetails';

export default function IdentityAdmin() {
    const [allVerification, setAllVerification] = useState([]);
    const [details, setDetails] = useState(false);
    const [current, setCurrent] = useState();
    useEffect(() => {
        getAllVerification();
    }, []);

    function getAllVerification() {
        axios.get('/api/identity/list').then((res) => {
            console.log(res);
            setAllVerification(res.data);
        });
    }

    function acceptVerification(hashId) {
        axios
            .post('/api/identity/validate', {
                hashId,
            })
            .then(() => {
                getAllVerification();
            });
    }

    function rejectVerification(hashId) {
        axios
            .post('/api/identity/reject', {
                hashId,
            })
            .then(() => {
                getAllVerification();
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
                                Vérification de compte
                            </h3>
                        </div>
                        <div className="col-lg-12  ">
                            <div className="overflow-x-auto">
                                <div className="min-w-screen flex items-center justify-center  font-sans">
                                    <div className="w-full">
                                        <div className="bg-white shadow-md rounded ">
                                            <table className="min-w-max w-full max-h-screen table-auto">
                                                <thead>
                                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                    <th className="py-3 px-2 text-left">Email</th>
                                                    <th className="py-3 px-2 text-center">Nom et Prenom</th>
                                                    <th className="py-3 px-2 text-center">Status</th>
                                                    <th className="py-3 px-2 text-center">Actions</th>
                                                </tr>
                                                </thead>
                                                <tbody className="text-gray-600 text-sm font-light">
                                                {allVerification &&
                                                    allVerification.map((usr) => (
                                                        <tr
                                                            className={
                                                                'border-b border-gray-200 bg-gray-50 hover:bg-gray-100'
                                                            }
                                                        >
                                                            <td className="py-3 px-2 text-left">
                                                                <div className="flex items-center cursor-pointer">
                                                                    <div className="mr-2"></div>
                                                                    <span className="font-medium">{usr.email}</span>
                                                                </div>
                                                            </td>
                                                            <td className="py-3 px-2 text-center">
                                                                <div className="flex items-center justify-center">
                                                                    {usr.nom + ' ' + usr.prenom}
                                                                </div>
                                                            </td>
                                                            <td className="py-3 px-2 text-center">
                                                                {usr.status === 'PENDING' ? (
                                                                    <span
                                                                        className="px-2 py-1 text-white font-bold bg-yellow-400 rounded">
                                      EN ATTENTE
                                    </span>
                                                                ) : usr.status === 'ACCEPTED' ? (
                                                                    <span
                                                                        className="px-2 py-1 text-white font-bold bg-green-400 rounded">
                                      ACCEPTE
                                    </span>
                                                                ) : (
                                                                    <span
                                                                        className="px-2 py-1 text-white font-bold bg-red-400 rounded">
                                      REFUSE
                                    </span>
                                                                )}
                                                            </td>
                                                            <td className="py-3 px-2 text-center">
                                                                <button
                                                                    onClick={() => {
                                                                        setCurrent(usr);
                                                                        setDetails(true);
                                                                    }}
                                                                    className="py-2 px-4 text-sm font-medium text-white bg-indigo-500 ml-2 hover:bg-indigo-400 rounded-md"
                                                                >
                                                                    Voir
                                                                </button>
                                                                <button
                                                                    onClick={() =>
                                                                        acceptVerification(usr.hashId)
                                                                    }
                                                                    className="py-2 px-4 text-sm font-medium text-white ml-2 bg-[#00d7b3] hover:bg-[#01be9f] rounded-md"
                                                                >
                                                                    Accepter
                                                                </button>

                                                                <button
                                                                    onClick={() =>
                                                                        rejectVerification(usr.hashId)
                                                                    }
                                                                    className="py-2 px-4 text-sm font-medium text-white bg-red-500 ml-2 hover:bg-red-400 rounded-md"
                                                                >
                                                                    Refuser
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {current && (
                    <IdentityModalDetails
                        acceptVerification={acceptVerification}
                        rejectVerification={rejectVerification}
                        setShow={setDetails}
                        show={details}
                        user={current}
                    />
                )}
            </LayoutAdmin>
        </>
    );
}
