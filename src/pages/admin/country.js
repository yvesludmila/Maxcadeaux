import LayoutAdmin from '../../components/layout/LayoutAdmin';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import allPays from '../../utils/allCountry';
import Alert from '../../components/modal/alert';

export default function AdminCountry() {
    const [search, setSearch] = useState('');
    const [alert, setAlert] = useState(false);
    const [acceptedCountry, setAcceptedCountry] = useState([]);
    const [countries, setCountrie] = useState(allPays);

    useEffect(() => {
        getAllCountry();
    }, []);

    function searchCountries(searchString) {
        if (searchString.length > 0) {
            setCountrie(
                allPays.filter(
                    (item) =>
                        item.nom.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
                )
            );
        } else {
            setCountrie(allPays);
        }
    }

    function addOrRemove(value) {

        if (acceptedCountry.find((c) => c == value)) {
            const tmp = acceptedCountry.filter((c) => c != value);
            setAcceptedCountry(tmp);
        } else {
            setAcceptedCountry([...acceptedCountry, value]);
        }
    }

    function addCountry() {
        axios
            .post('/api/country/add', {
                data: JSON.stringify(acceptedCountry),
            })
            .then(() => {
                getAllCountry();
                setAlert(true);
            });
    }

    function getAllCountry() {
        axios.get('/api/country/list').then((res) => {
            console.log(res.data);
            if (res.data[0]) {
                console.log(res.data[0].code);
                const data = JSON.parse(res.data[0].code).map(el => el.code);
                setAcceptedCountry(data);
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
                                Pays intérdit
                            </h3>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group mb-4 text-black">
                                <input
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                        searchCountries(e.target.value);
                                    }}
                                    value={search}
                                    type="text"
                                    className="form-control border-yellow-400 text-black border-2"
                                    placeholder="Recherche un pays"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="col-lg-12 mb-2 text-black">
                                <div className="col-lg-12">
                                    <button
                                        onClick={() => addCountry()}
                                        className="btn px-4 py-2 btn-success"
                                    >
                                        Valider
                                    </button>
                                </div>
                                <div className="col-lg-12 my-4 flex flex-wrap">
                                    {acceptedCountry.map((c, index) => (
                                        <span
                                            key={index}
                                            className="bg-indigo-500 my-1 text-white px-2 rounded py-1 font-bold ml-4"
                                        >
                                            {c}
                                        </span>
                                    ))}
                                </div>
                                <div>
                                    <label>
                                        Liste des pays
                                        <span className="text-red-500 font-bold">*</span>
                                    </label>
                                </div>

                                <ul className="flex flex-wrap max-h-screen overflow-auto  text-sm font-medium text-black bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    {countries.map((e, i) => {
                                        return (
                                            <li key={i}
                                                className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                                                <div className="flex items-center pl-3">
                                                    <input
                                                        id={'chck-' + e.code}
                                                        onChange={(e) => addOrRemove(e.target.value)}
                                                        type="checkbox"
                                                        checked={acceptedCountry.includes(e.code)}
                                                        value={e.code}
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                    />
                                                    <label
                                                        htmlFor={'chck-' + e.code}
                                                        className="py-3 ml-2 w-full text-sm font-medium text-black dark:text-gray-300"
                                                    >
                                                        {e.nom}
                                                    </label>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Alert
                        content={'Ajout avec success'}
                        setShow={setAlert}
                        title={'Information'}
                        show={alert}
                        isSuccess={true}
                    />
                </div>
            </LayoutAdmin>
        </>
    );
}
