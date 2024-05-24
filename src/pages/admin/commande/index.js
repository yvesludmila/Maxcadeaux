import axios from "axios";
import React, {useEffect} from "react";
import {useState} from "react";
import LayoutAdmin from "../../../components/layout/LayoutAdmin";
// import config from "../../../utils/config";

export default function ValidationAdmin() {
    const [validated, setValidated] = useState([]);
    const [allChecked, setAllChecked] = useState([]);
    const [isUpdated, setIsUpdated] = useState("");
    const [codePromo, setCodePromo] = useState({});
    const [allCheckedTest, setAllCheckedTest] = useState(true);

    useEffect(() => {
        getAllValidation().then();
    }, [isUpdated]);

    async function getAllValidation() {
        await axios.get(`/api/command/all`).then(async (res) => {
            if (res.status === 200) {
                const result = await res.data;
                setValidated(result);
            }
        });
    }

    function checkedAll() {
        setAllCheckedTest(!allCheckedTest);
        // console.log("allCheckedTest ==> ", allCheckedTest);
        const x = [];
        if (allCheckedTest === true) {
            validated.forEach((e) => {
                x.push(e.id);
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
        getAllValidation();
    }

    async function update(etat) {
        await allChecked.forEach(async (e) => {
            await axios
                .put(`/api/command/validate/${e}`, {etat, codePromo: codePromo[e]})
                .then(async (res) => {
                    await getAllValidation();
                    await setIsUpdated('OK');
                    await setCodePromo('');
                    let _elt = document.getElementById('code-prom');
                    // console.log('codePromo');
                    // console.log(codePromo);
                    // console.log(_elt);
                    if (!_elt) {
                        _elt = document.getElementById('code-promo');
                    }

                    if (_elt) {
                        _elt.value = '';
                    }
                });
        });

        setAllChecked([]);
        setIsUpdated('');
    }

    function handeChange(i, e) {
        setCodePromo({...codePromo, [i]: e.target.value});
    }

    return (
        <>
            <LayoutAdmin>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-12 flex justify-between items-center border-l-[6px]  border-yellow-500 mb-2 py-1">
                            <h3 className="text-black ">Administration des commandes</h3>
                            <div>
                                <button
                                    onClick={() => getAllValidation()}
                                    className="py-2 px-4 text-sm font-medium text-white bg-[#00d7b3] hover:bg-[#01be9f] rounded-md"
                                >
                                    <i className="fa fa-sync"></i>
                                </button>
                            </div>
                        </div>
                        {validated.length > 0 && (
                            <div className="col-lg-12 py-2 text-end">
                                <button
                                    onClick={() => {
                                        update('ACCEPTED').then();
                                    }}
                                    className="bg-[#00d7b3] mr-2 px-4 py-1 text-sm rounded-md"
                                >
                                    Valider
                                </button>
                                <button
                                    onClick={() => {
                                        update('REFUSED').then();
                                    }}
                                    className="bg-[#e61852] mr-2 px-4 py-1 text-sm rounded-md"
                                >
                                    Refuser
                                </button>
                            </div>
                        )}
                        {validated?.length > 0 && (
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
                                                                        checkedAll();
                                                                    }}
                                                                    //checked={allChecked.length != 0?true:false}
                                                                />
                                                            </div>
                                                        </th>
                                                        <th className="py-3 px-6 text-left">USER</th>
                                                        <th className="py-3 px-6 text-left">SHOP</th>
                                                        <th className="py-3 px-6 text-left">CATEGORIE</th>
                                                        <th className="py-3 px-6 text-left">
                                                            Code Promos/PAYPAL/RIB
                                                        </th>
                                                        <th className="py-3 px-6 text-right">MONTANT</th>
                                                    </tr>
                                                    </thead>

                                                    <tbody className="text-gray-600 text-sm font-light">
                                                    {validated?.map((val, i) => {
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
                                                                                checked(val.id);
                                                                            }}
                                                                            checked={allChecked?.includes(val.id)}
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-6 text-left">
                                                                    <div className="flex items-center font-medium">
                                                                        {val.uprenom ?? ''}
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-6 text-left">
                                                                    <div className="flex items-center font-medium">
                                                                        {val.bnom ?? ''}
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-6 text-left">
                                                                    <div>{val.cnom ?? ''} </div>
                                                                </td>
                                                                <td className="py-3 px-6 text-left">
                                                                    <div>
                                                                        {val.cnom === "Carte-Cadeaux" ? (
                                                                            <input
                                                                                id="code-prom"
                                                                                onChange={(e) => {
                                                                                    handeChange(val.id, e);
                                                                                }}
                                                                                value={codePromo[val.id]}
                                                                                type="text"
                                                                                className="border-yellow-400 border-2"
                                                                            />
                                                                        ) : ''}
                                                                        {val.bnom === "Paypal" ? val.paypal : ''}
                                                                        {val.bnom === "Virement Bancaire"
                                                                            ? ((val.iban != null && val.iban + " - ") +
                                                                            (val.skrill != null && val.skrill + " - ") +
                                                                            (val.swift != null ? val.swift : " - "))
                                                                            : ''}
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-6 text-right">
                                                                    <div>{val.amount ?? 0} €</div>
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
