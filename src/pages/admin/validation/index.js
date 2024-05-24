import axios from 'axios';
import React, {useEffect} from 'react';
import {useState} from 'react';
import LayoutAdmin from '../../../components/layout/LayoutAdmin';
import config from '../../../utils/config';
import convertDate from '../../../utils/converDate';

export default function ValidationAdmin() {
    const [isUpdateds, setIsUpdateds] = useState('');
    const [allValidation, setAllValidation] = useState([]);
    const [allUser, setAllUser] = useState([]);
    const [filtreValidation, setFiltreValidation] = useState([]);
    const [countEnAttent, setCountEnAttent] = useState(0);
    const [countPreEnAttent, setCountPreEnAttent] = useState(0);
    const [etat, setEtat] = useState('');

    const [allChecked, setAllChecked] = useState([]);
    const [allCheckedTest, setAllCheckedTest] = useState(true);

    useEffect(() => {
        getAllValidation();
    }, []);

    async function getAllValidation() {
        await axios.get(`/api/validation/all`).then(async (res) => {
            if (res.status == 200) {
                const result = await res.data.request;
                //efa nalaiko ze = "PENDING" OR = "PENDING_VALIDATION"
                //filtreko eto amzay ze PENDING sy PENDING_VALIDATION
                setAllValidation(result);
                const enattente = result.filter((re) => {
                    return re.etat == 'PENDING';
                });
                const prenattente = result.filter((re) => {
                    return re.etat == 'PENDING_VALIDATION';
                });
                setCountPreEnAttent(prenattente.length);
                setCountEnAttent(enattente.length);
            }
        });
    }

    useEffect(async () => {
        await getUser();
    }, []);

    useEffect(async () => {
        await validation(etat);
        setAllChecked([]);
    }, [etat, isUpdateds]);

    async function getUser() {
        await axios.post(`/api/user/all`).then((res) => {
            setAllUser(res.data.all);
        });
    }

    function getNameUser(id) {
        const user = allUser?.filter((us) => {
            return us.hashId == id || us.id == id;
        });
        if (user.length == 0) {
            return '';
        } else {
            const nom = user[0].nom;
            const prenom = user[0].prenom;
            return `${prenom} ${nom.charAt(0)}`;
        }
    }

    async function validation(etat) {
        const attente = allValidation?.filter((e) => {
            return e.etat == etat;
        });
        setFiltreValidation(attente);
    }

    function checkeAll() {
        const x = [];
        setAllCheckedTest(!allCheckedTest);
        if (allCheckedTest) {
            filtreValidation.forEach((e) => {
                x.push(e.id_histo_offers);
            });
        }
        setAllChecked(x);
    }

    function checked(id) {
        if (allChecked.includes(id)) {
            const i = allChecked.indexOf(id);
            allChecked.splice(i, 1);
        } else {
            setAllChecked([...allChecked, id]);
        }
    }

    async function update(etat) {
        allChecked.forEach(async (e) => {
            await axios
                .put(`/api/validation/validate/${e}`, {etat})
                .then(async (res) => {
                    await getAllValidation();
                    await setIsUpdateds('OK');
                });
        });

        setAllChecked([]);
        setIsUpdateds('');
    }

    return (
        <>
            <LayoutAdmin>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-12 flex justify-between items-center border-l-[6px]  border-yellow-500 mb-2 py-1">
                            <h3 className="text-black ">Administration de validations</h3>
                            <div>
                                <button
                                    onClick={() => getAllValidation()}
                                    className="py-2 px-4 text-sm font-medium text-white bg-[#00d7b3] hover:bg-[#01be9f] rounded-md"
                                >
                                    <i className="fa fa-sync"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-12 bg-gray-100 pt-4">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card h-[200px] text-center  py-3 mx-2">
                                        <div className="text-slate-600 font-bold">
                                            Pré-validation
                                        </div>
                                        <div className="h-[50%] text-5xl py-4">
                                            {countPreEnAttent}
                                        </div>
                                        <div>Cliquez pour voir les pré-validations</div>
                                        <div className="py-2">
                                            <button
                                                onClick={() => {
                                                    setEtat('PENDING_VALIDATION');
                                                    validation(etat);
                                                }}
                                                className="py-2 px-4 text-sm font-medium text-white bg-[#00d7b3] hover:bg-[#01be9f] rounded-md"
                                            >
                                                Voir
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card h-[200px] text-center  py-3 mx-2">
                                        <div className="text-slate-600 font-bold">Validation</div>
                                        <div className="h-[50%] text-5xl py-4">{countEnAttent}</div>
                                        <div>Cliquez pour voir les validations</div>
                                        <div className="py-2">
                                            <button
                                                onClick={() => {
                                                    setEtat('PENDING');
                                                    validation(etat);
                                                }}
                                                className="py-2 px-4 text-sm font-medium text-white bg-[#00d7b3] hover:bg-[#01be9f] rounded-md"
                                            >
                                                Voir
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {filtreValidation.length != 0 && (
                            <div className="col-lg-12 py-2 text-end">
                                <button
                                    onClick={() => {
                                        update(
                                            etat == 'PENDING_VALIDATION' ? 'PENDING' : 'ACCEPTED'
                                        );
                                    }}
                                    className="bg-[#00d7b3] mr-2 px-4 py-1 text-sm rounded-md"
                                >
                                    {etat == 'PENDING_VALIDATION' ? 'Pre-valider' : 'Valider'}
                                </button>
                                <button
                                    onClick={() => {
                                        update('REFUSED');
                                    }}
                                    className="bg-[#e61852] mr-2 px-4 py-1 text-sm rounded-md"
                                >
                                    Refuser
                                </button>
                            </div>
                        )}
                        {filtreValidation.length != 0 && (
                            <div className="col-lg-12">
                                <div className="overflow-x-auto">
                                    <div className="min-w-screen flex items-center justify-center  font-sans">
                                        <div className="w-full">
                                            <div className="bg-white shadow-md rounded ">
                                                <table className="min-w-max w-full max-h-screen table-auto">
                                                    <thead>
                                                    <tr className=" text-gray-400  uppercase text-sm leading-normal">
                                                        <th className="py-3 px-2 text-left">
                                                            <div
                                                                className="flex items-center cursor-pointer max-w-[200px]">
                                                                <input
                                                                    type="checkbox"
                                                                    onClick={() => {
                                                                        checkeAll();
                                                                    }}
                                                                    // checked={allChecked.length != 0}
                                                                />
                                                            </div>
                                                        </th>
                                                        <th className="py-3 px-6 text-left">DATE</th>
                                                        <th className="py-3 px-6 text-left">
                                                            UTILISATEUR/IP
                                                        </th>
                                                        <th className="py-3 px-6 text-left">CAMPAGNE</th>
                                                        <th className="py-3 px-6 text-right">GAINS</th>
                                                    </tr>
                                                    </thead>

                                                    <tbody className="text-gray-600 text-sm font-light">
                                                    {filtreValidation?.map((val, i) => {
                                                        return (
                                                            <tr
                                                                key={i}
                                                                className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100"
                                                            >
                                                                <td className="py-3 px-2 text-left">
                                                                    <div
                                                                        className="flex items-center cursor-pointer max-w-[200px]">
                                                                        <input
                                                                            type="checkbox"
                                                                            onChange={() => {
                                                                                checked(val.id_histo_offers);
                                                                                setEtat(etat);
                                                                                validation(etat);
                                                                            }}
                                                                            checked={allChecked.includes(
                                                                                val.id_histo_offers
                                                                            )}
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-6 text-left">
                                                                    <div
                                                                        className="flex items-center cursor-pointer max-w-[200px]">
                                      <span className="font-medium ">
                                        Le {val.dateHisto}
                                      </span>
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-6 text-left">
                                                                    <div
                                                                        className="flex items-center max-w-[150px] font-medium">
                                      <span
                                          className={
                                              val.premium == 1 ? 'text-yellow-500' : ''
                                          }
                                      >
                                        {getNameUser(val.idUser)}
                                      </span>
                                                                        <span className="text-[11px] ml-2 font-light">
                                        {' '}
                                                                            {val.ipMision}
                                      </span>
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-6 text-left">
                                                                    <div className="flex items-center font-medium">
                                                                        {val.offreNom}
                                                                        {''}
                                                                        <span
                                                                            className="text-[10px] ml-2 text-info font-light">
                                        {val.offerwall}
                                      </span>
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-6 text-right">
                                                                    <div>{val?.remuneration?.toFixed(2)} €</div>
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
                        )}
                    </div>
                </div>
            </LayoutAdmin>
        </>
    );
}
