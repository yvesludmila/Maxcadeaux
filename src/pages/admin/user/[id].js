import axios from 'axios';
import {useRouter} from 'next/dist/client/router';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import LayoutAdmin from '../../../components/layout/LayoutAdmin';
import config from '../../../utils/config';

export default function UserAdmin() {
    const router = useRouter();
    const data = router.query;
    const [showMessage, setShowMessage] = useState({
        err: false,
        succ: false,
        message: '',
    });
    const [solde, setSolde] = useState(0);
    const [newSolde, setNewSolde] = useState();

    useEffect(() => {
        setSolde(parseFloat(data.euros));
    }, [data]);

    async function updateSolde(e, type) {
        e.preventDefault();
        if (!newSolde) {
            setShowMessage({
                err: true,
                succ: false,
                message: `Veuillez ajouter le montant`,
            });
            return;
        }
        await axios
            .put(`/api/user/update-solde`, {
                id: data.id,
                value: newSolde,
                type,
            })
            .then((res) => {
                if (res.status == 200) {
                    if (type == 'AJOUTER') {
                        setSolde(parseFloat(solde) + parseFloat(newSolde));
                        setShowMessage({
                            err: false,
                            succ: true,
                            message: `L'utilisateur a bien été crédité de ${newSolde} € !`,
                        });
                        router.replace({
                            query: {
                                ...data,
                                euros: parseFloat(solde) + parseFloat(newSolde),
                            },
                        });
                    }
                    if (type == 'REDUIRE') {
                        setShowMessage({
                            err: false,
                            succ: true,
                            message: `L'utilisateur a bien été déduit de ${newSolde} € !`,
                        });
                        setSolde(parseFloat(solde) - parseFloat(newSolde));
                        router.replace({
                            query: {
                                ...data,
                                euros: parseFloat(solde) - parseFloat(newSolde),
                            },
                        });
                    }
                    setNewSolde('');
                }
            })
            .catch((err) => {
                setShowMessage({
                    err: true,
                    succ: false,
                    message: `Erreur`,
                });
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
                                Ajustement solde de {data.nom} {data.prenom}
                            </h3>
                        </div>
                        <div className="col-lg-12  ">
                            <div className="overflow-x-auto">
                                <div className="col-lg-6 mb-2">
                                    <div
                                        className="bg-green-100 border border-green-400 text-green-700 mt-4 px-4 py-3 rounded relative"
                                        role="alert"
                                        style={{
                                            display: showMessage.succ ? 'block' : 'none',
                                        }}
                                    >
                    <span className="block sm:inline">
                      {showMessage.message}
                    </span>
                                        <span
                                            className="absolute top-0 bottom-0 right-0 px-4 py-3"
                                            onClick={() => {
                                                setShowMessage({
                                                    err: false,
                                                    succ: false,
                                                    message: '',
                                                });
                                            }}
                                        >
                      <svg
                          className="fill-current h-6 w-6 text-green-500"
                          role="button"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                      >
                        <title>Close</title>
                        <path
                            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                      </svg>
                    </span>
                                    </div>
                                    <div
                                        className="bg-red-100 border border-red-400 text-red-700 mt-4 px-4 py-3 rounded relative"
                                        role="alert"
                                        style={{
                                            display: showMessage.err ? 'block' : 'none',
                                        }}
                                    >
                    <span className="block sm:inline">
                      {showMessage.message}
                    </span>
                                        <span
                                            className="absolute top-0 bottom-0 right-0 px-4 py-3"
                                            onClick={() => {
                                                setShowMessage({
                                                    err: false,
                                                    succ: false,
                                                    message: '',
                                                });
                                            }}
                                        >
                      <svg
                          className="fill-current h-6 w-6 text-red-500"
                          role="button"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                      >
                        <title>Close</title>
                        <path
                            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                      </svg>
                    </span>
                                    </div>
                                </div>
                                <form>
                                    <h5>
                                        Solde actuel :{' '}
                                        <span className="font-bold text-xl">
                      {solde?.toFixed(4)}€
                    </span>
                                    </h5>
                                    <div className="col-lg-6">
                                        <div className="form-group mb-4 text-black">
                                            <input
                                                required
                                                type="number"
                                                step="0.01"
                                                min="0.01"
                                                className="form-control border-yellow-400 text-black border-2"
                                                placeholder="Entrer le montant"
                                                onChange={(e) => {
                                                    setNewSolde(e.target.value);
                                                }}
                                                value={newSolde}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button
                                            onClick={(e) => {
                                                updateSolde(e, 'AJOUTER');
                                            }}
                                            className="bg-[#00d7b3] mr-2 px-4 py-1 text-sm rounded-md"
                                        >
                                            Ajouter
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                updateSolde(e, 'REDUIRE');
                                            }}
                                            className="bg-[#e61852] mr-2 px-4 py-1 text-sm rounded-md"
                                        >
                                            Réduire
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAdmin>
        </>
    );
}
