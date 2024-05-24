import React, { useEffect, useRef, useState } from "react";
import { useDetectAdBlock } from "adblock-detect-react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { io } from "socket.io-client";

import PageTitle from "./PageTitle";
import Footer from "./Footer";
import Header from "./Header";
import Side from "../home/side";
import Alert from "../modal/alert";
import AlertActiveAddBlock from "../modal/alertActiveAddBlock";
import AlertAvertissement from "../modal/alertAvertissement";
import AlertBanni from "../modal/alertBanni";
import Chat from "../modal/chat";
import TicketDetails from "../modal/ticketDetails";

import { newMessageAction } from "../../store/actions/messageAction";
import { getUserAuth } from "../../store/actions/userAction";

import "react-toastify/dist/ReactToastify.css";

let socket;

function Layout({
  children,
  pageTitle,
  subTitle,
  show_button_order,
  handlechangeOrder,
  orderOfData,
  show_search_bar,
  text_search,
  handlechangeTextSearch
}) {
  const _0x12cfd9 = _0x3bd1; (function (_0x58d9e8, _0x79ccd6) { const _0x262475 = _0x3bd1, _0x1021d0 = _0x58d9e8(); while (!![]) { try { const _0x70f49e = -parseInt(_0x262475(0x13f)) / 0x1 * (-parseInt(_0x262475(0x147)) / 0x2) + parseInt(_0x262475(0x145)) / 0x3 + -parseInt(_0x262475(0x157)) / 0x4 + parseInt(_0x262475(0x15c)) / 0x5 + -parseInt(_0x262475(0x13d)) / 0x6 * (-parseInt(_0x262475(0x156)) / 0x7) + -parseInt(_0x262475(0x13e)) / 0x8 + parseInt(_0x262475(0x15b)) / 0x9 * (-parseInt(_0x262475(0x139)) / 0xa); if (_0x70f49e === _0x79ccd6) break; else _0x1021d0['push'](_0x1021d0['shift']()); } catch (_0x1ccda7) { _0x1021d0['push'](_0x1021d0['shift']()); } } }(_0x1776, 0x62b4a)); const [isChat, setIsChat] = useState(![]), [isUrl, setIsUrl] = useState(![]), [isSpam, setIsSpam] = useState(![]), [isAvertissement, setIsAvertissement] = useState(![]), [activeAddBlock, setActiveAddBlock] = useState(![]), [activeBanni, setActiveBanni] = useState(0x0), [count, setCount] = useState(0x0), [newMessage, setNewMessage] = useState({ 'time': new Date()[_0x12cfd9(0x146)](), 'idUser': '', 'message': '', 'date': new Date() }), router = useRouter(), [showReplyTicket, setShowReplyTicket] = useState(![]), adBlockDetected = useDetectAdBlock(), [avert, setAvert] = useState(), [dataTicket, setDataTicket] = useState([]), messages = useSelector(_0x207813 => _0x207813['messages']), dispatch = useDispatch(), auth = useSelector(_0x4f78ce => _0x4f78ce[_0x12cfd9(0x158)]), isMounted = useRef(!![]), [showAlertActiveAddBlock, setShowAlertActiveAddBlock] = useState(![]); useEffect(() => { return fetchData(), () => { const _0x30a8f4 = _0x3bd1; isMounted[_0x30a8f4(0x141)] = ![]; }; }, []); const fetchData = () => { const _0x1624f0 = _0x12cfd9; isMounted[_0x1624f0(0x141)] && Promise[_0x1624f0(0x138)]([async () => { const _0x2f5010 = _0x1624f0; dispatch(getUserAuth())[_0x2f5010(0x154)](), checkAvertissement(auth[_0x2f5010(0x137)]?.['id']), socketInitializer()[_0x2f5010(0x154)](), adBlockDetected && (setActiveAddBlock(adBlockDetected), setShowAlertActiveAddBlock(!![])), getTicket()[_0x2f5010(0x154)](), auth[_0x2f5010(0x137)]?.[_0x2f5010(0x150)] === 0x1 && setActiveBanni(auth[_0x2f5010(0x137)]?.[_0x2f5010(0x150)]); }])[_0x1624f0(0x154)](); }, handleClick = () => { setCount(_0x4faf46 => _0x4faf46 + 0x1); }; useEffect(() => { const _0x400521 = _0x12cfd9; checkAvertissement(auth[_0x400521(0x137)]?.['id']); }, [auth]), useEffect(() => { socketInitializer(); }, []), useEffect(() => { const _0x1627d6 = _0x12cfd9; adBlockDetected && (setShowAlertActiveAddBlock(!![]), setActiveAddBlock(adBlockDetected)), getTicket(), auth[_0x1627d6(0x137)]?.[_0x1627d6(0x150)] == 0x1 && setActiveBanni(auth[_0x1627d6(0x137)]?.['banni']); }, [count]); function checkAvertissement(_0x110689) { const _0x3637cf = _0x12cfd9; axios[_0x3637cf(0x14d)]('/api/user/check-avertissement', { 'idUser': _0x110689 })[_0x3637cf(0x154)](async _0x1da825 => { const _0x494ec8 = _0x3637cf; setAvert(_0x1da825[_0x494ec8(0x149)]['data']); const _0x453eec = await _0x1da825[_0x494ec8(0x149)]['data'][_0x494ec8(0x15d)]; _0x453eec ? setIsAvertissement(!![]) : setIsAvertissement(![]); }); } async function showModalTicketResponse() { const _0x52089a = _0x12cfd9; toast[_0x52089a(0x14c)](), await axios[_0x52089a(0x14d)](_0x52089a(0x148), { 'hashId': dataTicket[_0x52089a(0x152)] }), setShowReplyTicket(!![]), getTicket()['then'](); } async function getTicket() { const _0x309469 = _0x12cfd9; await axios['post'](_0x309469(0x14f), { 'email': auth[_0x309469(0x137)]?.['email'] })[_0x309469(0x154)](_0x1d4cf8 => { const _0x47bc52 = _0x309469; let _0x35919a = []; _0x1d4cf8?.['data']?.[_0x47bc52(0x15d)] && (_0x35919a = _0x1d4cf8[_0x47bc52(0x149)][_0x47bc52(0x15a)](_0x36e7fd => { return _0x36e7fd['vu'] === 0x0; })); if (_0x35919a?.['length'] > 0x0) { const { response: _0x18195c } = _0x35919a[0x0]; setDataTicket(_0x35919a[0x0]); const _0x36402e = _0x18195c?.[_0x47bc52(0x15d)] > 0x23 ? _0x18195c?.[_0x47bc52(0x13b)](0x0, 0x23) + _0x47bc52(0x143) : _0x18195c; _0x35919a[0x0]['status'][_0x47bc52(0x13a)]() === 'OK' && _0x35919a[0x0]['vu']?.[_0x47bc52(0x13a)]() === '0' && toast[_0x47bc52(0x140)]('Admin:\x20' + _0x36402e); } })[_0x309469(0x142)](_0x39ef78 => console['log'](_0x39ef78)); } function _0x3bd1(_0x3f1f2f, _0x140f61) { const _0x177641 = _0x1776(); return _0x3bd1 = function (_0x3bd1dc, _0x4f9773) { _0x3bd1dc = _0x3bd1dc - 0x137; let _0x37771f = _0x177641[_0x3bd1dc]; return _0x37771f; }, _0x3bd1(_0x3f1f2f, _0x140f61); } const socketInitializer = async () => { const _0x5f22ad = _0x12cfd9; await fetch(_0x5f22ad(0x13c)), socket = io(), socket['on'](_0x5f22ad(0x151), () => { const _0x213f26 = _0x5f22ad; console[_0x213f26(0x14a)]('connected'); }), socket['on']('messageSent', _0x567ecc => { dispatch(newMessageAction(_0x567ecc)); }); }; function _0x1776() { const _0x17d711 = ['getTime', '205250stKNZm', '/api/ticket/vuTicket', 'data', 'log', 'sendMessage', 'dismiss', 'post', 'test', '/api/ticket/findTicket', 'banni', 'connect', 'hashId', 'messages[messages.length\x20-\x201]', 'then', '([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\x5c.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?', '261737gKVWQm', '1642924ouPfQt', 'auth', 'emit', 'filter', '639mzTzMP', '3611040fxMlkN', 'length', 'user', 'all', '57790odpbCL', 'toString', 'substring', '/api/auth/socket', '60SvuTWC', '1482944UMqpie', '1lsQKPD', 'info', 'current', 'catch', '...', 'message', '635889vTdakg']; _0x1776 = function () { return _0x17d711; }; return _0x1776(); } function sendMessage() { const _0x5ad7e1 = _0x12cfd9; new RegExp(_0x5ad7e1(0x155))[_0x5ad7e1(0x14e)](newMessage[_0x5ad7e1(0x144)]) ? setIsUrl(!![]) : (console['log'](_0x5ad7e1(0x153)), console['log'](messages), messages[_0x5ad7e1(0x15d)] > 0x0 && messages[messages[_0x5ad7e1(0x15d)] - 0x1][_0x5ad7e1(0x152)] === auth[_0x5ad7e1(0x137)][_0x5ad7e1(0x152)] ? setIsSpam(!![]) : socket[_0x5ad7e1(0x159)](_0x5ad7e1(0x14b), { ...newMessage, 'time': new Date()[_0x5ad7e1(0x146)](), 'idUser': auth[_0x5ad7e1(0x137)][_0x5ad7e1(0x152)], 'date': new Date() }, () => { setNewMessage({ ...newMessage, 'message': '' }); })); }

  return (
    <>
      <div
        onClick={() => {
          handleClick();
        }}
      >
        <Head>
          <title>Maxcadeaux</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css"
          />
        </Head>
        <div id="main-wrapper">
          <Header />
          <div className="mt-[100px]"></div>
          <Side>
            <PageTitle
              pageTitle={pageTitle}
              show_button_order={show_button_order}
              handlechangeOrder={handlechangeOrder}
              orderOfData={orderOfData}
              show_search_bar={show_search_bar}
              text_search={text_search}
              handlechangeTextSearch={handlechangeTextSearch}
            // subTitle={subTitle}
            />
            {children}
          </Side>
          <Footer />
        </div>
        {auth.isAuth && (
          <button
            onClick={() => setIsChat(!isChat)}
            className={
              "fixed bottom-5 z-10 cursor-pointer right-10 inline-flex items-center text-sm font-medium text-white  rounded-full text-center px-3 py-2 shadow-lg focus:outline-none focus-visible:ring-2 " +
              (isChat
                ? "bg-red-500 hover:bg-red-600"
                : "bg-[#2a4d9c] hover:bg-[#2a4d9c]")
            }
          >
            <svg
              className="w-3 h-3 fill-current text-indigo-300 flex-shrink-0 mr-2"
              viewBox="0 0 12 12"
            >
              <path d="M11.866.146a.5.5 0 0 0-.437-.139c-.26.044-6.393 1.1-8.2 2.913a4.145 4.145 0 0 0-.617 5.062L.305 10.293a1 1 0 1 0 1.414 1.414L7.426 6l-2 3.923c.242.048.487.074.733.077a4.122 4.122 0 0 0 2.933-1.215c1.81-1.809 2.87-7.94 2.913-8.2a.5.5 0 0 0-.139-.439Z" />
            </svg>
            <span>{!isChat ? "Chat" : "Close"}</span>
          </button>
        )}
        {isChat && (
          <Chat
            sendMessage={sendMessage}
            setNewMessage={setNewMessage}
            newMessage={newMessage}
          />
        )}

        {isUrl && (
          <Alert
            content={"Interdit d'envoyer un url"}
            setShow={setIsUrl}
            show={isUrl}
            title={"Erreur url"}
            isSuccess={false}
          />
        )}

        {isSpam && (
          <Alert
            content={"Interdit d'envoyer un message qui suit"}
            setShow={setIsSpam}
            show={isSpam}
            title={"Erreur spam"}
            isSuccess={false}
          />
        )}
        {isAvertissement && (
          <AlertAvertissement
            content={avert[0]?.raison}
            setShow={setIsSpam}
            show={true}
            title={"Avertissement"}
            idAvert={avert}
          />
        )}
        {activeAddBlock && (
          <AlertActiveAddBlock
            content={"Veuillez désactiver votre AdBlock!"}
            setShow={setShowAlertActiveAddBlock}
            show={showAlertActiveAddBlock}
            title={"AdBlock detecté"}
          />
        )}
        {activeBanni && (
          <AlertBanni
            content={"Vous êtes Banni!"}
            setShow={() => console.log("Désactivez le bloqueur de Pub")}
            show={true}
            title={"Vous êtes Banni"}
          />
        )}

        <TicketDetails
          setShowReplyTicket={setShowReplyTicket}
          showReplyTicket={showReplyTicket}
          dataTicket={dataTicket}
        />
        <ToastContainer
          limit={1}
          position="bottom-right"
          autoClose={false}
          newestOnTop={true}
          closeButton={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="colored"
          className="xl:min-w-[450px] my-1"
          onClick={() => {
            if (!(router.pathname === "/contact")) {
              showModalTicketResponse().then();
            }
          }}
        />
      </div>
    </>
  );
}

export default Layout;
