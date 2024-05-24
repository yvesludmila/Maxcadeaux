import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import IdentityModal from '../components/modal/identity';
import IdentityPendingModal from '../components/modal/identityPending';
import IdentityRejectedModal from '../components/modal/identityRejected';
import ChooseMission from '../components/modal/mission';
import { getActiveMission } from '../store/actions/mission';
import { createValidation } from '../store/actions/validation';
import { generatePageNumbers, filterObjectsByName } from '../utils/pagination';

function Blank() {
    const dispatch = useDispatch();
    const [valuePage, setValuePage] = useState({ start: 0, end: 12 });
    const missions = useSelector((state) => state.mission);
    const auth = useSelector((state) => state.auth);
    const [current, setCurrent] = useState(null);
    const [show, setShow] = useState(false);
    const [missionFilter, setMissionFilter] = useState([]);
    const [text_search, setTextSearch] = useState('');

    useEffect(() => {
        dispatch(getActiveMission());
    }, [dispatch]);

    function handlechangeTextSearch(e) {
        e.preventDefault();
        setTextSearch(e.target.value);
        if (e.target.value.length > 0) {
            setMissionFilter(filterObjectsByName(missionFilter, e.target.value));
        }
        else {
            pagination();
        }
    }

    useEffect(() => {
        if (missions) {
            pagination();
        }
    }, []);

    useEffect(() => {
        if (missions) {
            pagination();
        }
    }, [missions]);

    function pagination() {
        const x = missions?.filter((mission) => {
            return (
                auth.user
                && (mission.pays === '' || mission.pays.includes(auth.user.pays))
                && ((mission.premium === 1 && auth.user.premium === 1) ||
                    mission.premium === 0)
            );
        });
        console.log('X ', x);
        setMissionFilter(x);
    }

    console.log('MISSION ', missions);
    const pageSize = 12;
    const totalPages = Math.ceil(missionFilter.length / pageSize);
    const currentPage = valuePage.start / pageSize + 1;

    return (
        <>
            <Layout
                subTitle="offres concours"
                pageTitle="Missions"
                show_search_bar={true}
                text_search={text_search}
                handlechangeTextSearch={handlechangeTextSearch}
            >
                <div
                    className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-2 py-2 shadow-md mb-3"
                    role="alert"
                >
                    <div className="flex">
                        <div className="py-1">
                            <svg
                                className="fill-current h-6 w-6 text-teal-500 mr-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm">
                                Dès le moment où vous avez participé à l'une des offres
                                proposées par l'un des partenaires ci-dessous, vous devez
                                patienter quelques minutes avant que votre participation ne soit
                                prise en compte et que votre commission soit créditée à votre
                                compte.
                            </p>
                            <p className="text-sm">
                                Vous pouvez suivre vos participations en cliquant{' '}
                                <span className="font-extrabold cursor-pointer text-black">
                                    <Link href="/offer">ici</Link>
                                </span>
                                .
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container px-3 mx-auto min-h-[54vh]">
                    <div className="col-lg-12  ">
                        <div className="overflow-x-auto">
                            <div className="min-w-screen flex items-center justify-center font-sans">
                                <div className="w-full">
                                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
                                        {missionFilter?.length > 0 &&
                                            missionFilter
                                                .slice(valuePage.start, valuePage.end)
                                                .map((mission) => (
                                                    <div
                                                        onClick={() => {
                                                            setCurrent(mission);
                                                            setShow(true);
                                                        }}
                                                        key={mission.id}
                                                        className="mb-2"
                                                    >
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                            }}
                                                            className="rounded-md shadow-md cursor-pointer relative h-56 "
                                                        >
                                                            <div
                                                                className="absolute right-5 top-3 text-white text-xs font-bold rounded bg-green-500  px-2 py-1">
                                                                {mission.remuneration}€
                                                            </div>
                                                            {mission.premium === 1 && (
                                                                <div
                                                                    className="absolute left-2 top-3 text-white text-xs font-bold rounded bg-yellow-600 px-2 py-1">
                                                                    PREMIUM
                                                                </div>
                                                            )}

                                                            <div className="h-3/4">
                                                                <img
                                                                    className="w-full rounded-t-md h-full object-cover"
                                                                    src={
                                                                        mission.image === ''
                                                                            ? 'https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-760x400.png'
                                                                            : './uploads/' + mission.image
                                                                    }
                                                                />
                                                            </div>
                                                            <div
                                                                className="h-1/4 flex pl-4 text-black text-sm font-bold flex items-center">
                                                                <p className="m-0 text-gray-500 text-md">
                                                                    {mission.nom}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                    </div>
                                    <div className="mt-4 flex justify-center">
                                        <ul className="flex space-x-2 items-center">
                                            {generatePageNumbers(totalPages).map((pageNumber) => (
                                                <li key={pageNumber}>
                                                    <button
                                                        onClick={() => {
                                                            setValuePage({
                                                                start: (pageNumber - 1) * pageSize,
                                                                end: pageNumber * pageSize,
                                                            });
                                                        }}
                                                        className={`text-white text-sm font-extrabold rounded btn ${currentPage === pageNumber ? 'btn-primary' : 'btn-secondary'
                                                            }`}
                                                    >
                                                        {pageNumber}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* <div className="mt-4">
                                        <button
                                            onClick={() => {
                                                setValuePage({
                                                    start: valuePage.start - 12,
                                                    end: valuePage.end - 12,
                                                });
                                            }}
                                            disabled={valuePage.start === 0 ? true : false}
                                            className="mr-2 text-white text-sm font-extrabold rounded btn btn-primary "
                                        >
                                            Précédent
                                        </button>

                                        <button
                                            onClick={() => {
                                                setValuePage({
                                                    start: valuePage.start + 12,
                                                    end: valuePage.end + 12,
                                                });
                                            }}
                                            className="px-4 text-white text-sm font-extrabold rounded btn btn-primary "
                                            disabled={
                                                valuePage.end >= missionFilter?.length ? true : false
                                            }
                                        >
                                            Suivant
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            {show && current && (
                <ChooseMission
                    auth={auth}
                    mission={current}
                    show={show}
                    setShow={setShow}
                />
            )}
        </>
    );
}

export default Blank;
