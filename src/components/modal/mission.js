import React from 'react';
import {Fragment, useRef, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import convertDate from '../../utils/converDate';
import {useDispatch} from 'react-redux';
import {createValidation} from '../../store/actions/validation';
import axios from 'axios';
import {getUserAuth} from '../../store/actions/userAction';
import Alert from './alert';
import {data} from 'autoprefixer';

function ChooseMission({mission, auth, show, setShow}) {
    const cancelButtonRef = useRef(null);
    const [current, setCurrent] = useState(false);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [alert, setAlert] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    function showMission(mission) {
        window.open(mission.url, '_blank');
    }

    console.log(mission);

    async function sendMission() {
        let idx = 0;
        const link = mission.url.split(',');
        const result = await axios.get(
            `/api/validation/ip?userID=${
                auth.user.hashId
            }&date=${new Date().toLocaleDateString()}&offre=${mission.idoffre}`
        );
        const response = await axios.get(
            'https://ipinfo.io/json?token=0567502d77f05a'
        );
        const ip2 = response.data.ip.split('.');
        if (result.data.length > 0) {
            let exist = false;
            for (const d of result.data) {
                const ip1 = d.ip.split('.');
                if (ip1[2] === ip2[2]) {
                    exist = true;
                }
            }

            if (exist) {
                setIsSuccess(false);
                setContent(
                    'Offre deja faite avec cette ip vous devez changer un adresse ip!'
                );
                setTitle('Erreur');
                setAlert(true);
            } else {
                const link = mission.url.split(',');
                if (result.data.length >= link.length) {
                    setIsSuccess(false);
                    setContent(
                        "Vous devez attendre jusqu'à minuit pour pouvoir refaire cet offre !"
                    );
                    setTitle('Erreur');
                    setAlert(true);
                } else {
                    idx = result.data.length;

                    dispatch(
                        createValidation({
                            idUser: auth.user.hashId,
                            offerwall: 'Mission',
                            idt: idx,
                            regie: link[idx],
                            remuneration: mission.remuneration,
                            date: new Date().toLocaleDateString(),
                            dateUsTime: new Date(),
                            data: mission.idoffre,
                            etat: 'PENDING_VALIDATION',
                            ip: response.data.ip,
                        })
                    );

                    window.open(link[idx], 'blank');
                    setIsSuccess(true);
                    setContent('Offre faite!');
                    setTitle('Information');
                    setAlert(true);
                }
            }
        } else {
            dispatch(
                createValidation({
                    idUser: auth.user.hashId,
                    offerwall: 'Mission',
                    idt: idx,
                    regie: link[idx],
                    remuneration: mission.remuneration,
                    date: new Date().toLocaleDateString(),
                    dateUsTime: new Date(),
                    data: mission.idoffre,
                    etat: 'PENDING_VALIDATION',
                    ip: response.data.ip,
                })
            );
            setIsSuccess(true);
            setContent('Offre faite !');
            setTitle('Information');
            setAlert(true);
            window.open(link[idx], 'blank');
        }
    }

    return (
        <>
            <Transition.Root show={show} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setShow}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="md:flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel
                                    className="relative lg:min-w-[600px] text-black transform overflow-hidden rounded-lg bg-transparent text-left transition-all sm:my-8 ">
                                    <div className="col-xl-12 col-lg-12">
                                        <div className="flex justify-center ">
                                            <div
                                                className="card lg:w-[60vw] min-h-[50vh] "
                                                style={{
                                                    borderRadius: '0 !important',
                                                    maxWidth: '80vw',
                                                    minWidth: '8vw',
                                                }}
                                            >
                                                <div className="card-header flex justify-between items-center">
                                                    <h3>{mission.nom}</h3>
                                                    <div
                                                        className="text-red-500 text-2xl cursor-pointer"
                                                        onClick={() => setShow(false)}
                                                    >
                                                        <i className="fa fa-window-close "></i>
                                                    </div>
                                                </div>
                                                <div
                                                    className="card-body w-full"
                                                    style={{
                                                        background: 'rgb(245 245 255)',
                                                        borderRadius: '0px',
                                                    }}
                                                >
                                                    <div className="flex flex-wrap">
                                                        <div className="col-lg-3 px-2 mb-2">
                                                            <img
                                                                className="w-full h-[150px] object-cover shadow-xl rounded-lg"
                                                                src={
                                                                    mission.image === ''
                                                                        ? 'https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-760x400.png'
                                                                        : './uploads/' + mission.image
                                                                }
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="col-lg-9 px-2 flex flex-col justify-between">
                                                            <div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: mission.description,
                                                                }}
                                                            ></div>
                                                            <div
                                                                className="p-3 mt-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
                                                                role="alert"
                                                            >
                                                                En participant à cette offre, vous serez
                                                                récompensé de
                                                                <span className="font-medium">
                                  {' ' + mission.remuneration} €
                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-footer text-end">
                                                    <button
                                                        onClick={(e) => {
                                                            sendMission();
                                                        }}
                                                        type="button"
                                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                                    >
                                                        Ouvrir
                                                    </button>
                                                    <button
                                                        onClick={() => setShow(false)}
                                                        type="button"
                                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                                    >
                                                        Fermer
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <Alert
                content={content}
                setShow={setAlert}
                title={title}
                show={alert}
                isSuccess={isSuccess}
            />
        </>
    );
}

export default ChooseMission;
