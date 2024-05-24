import React, { useEffect } from "react";
// import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";

import Home from "../components/home/home";
import Profile from "../components/home/profile";

// import Layout from "../components/layout/Layout";
import { getUserAuth } from "../store/actions/userAction";

let socket;

function Blank() {
  function _0x1ed4() { const _0x8172ae = ['2158752SQElVP', '185VwMPgF', 'connect', 'then', '18615483Yqfkwj', 'auth', 'function', '5566596IOiDEE', 'log', 'connected', '2uZcSJj', '1908894IiKjeI', '86442mWWcAx', '7181032cUyHrq', '725147fslvRj', 'setInput']; _0x1ed4 = function () { return _0x8172ae; }; return _0x1ed4(); } const _0x460bc3 = _0x5eb4; (function (_0x3e8eae, _0x1bde1f) { const _0x269e87 = _0x5eb4, _0x129d41 = _0x3e8eae(); while (!![]) { try { const _0x1eafdb = parseInt(_0x269e87(0x93)) / 0x1 * (parseInt(_0x269e87(0x8f)) / 0x2) + -parseInt(_0x269e87(0x90)) / 0x3 + parseInt(_0x269e87(0x95)) / 0x4 + -parseInt(_0x269e87(0x96)) / 0x5 * (parseInt(_0x269e87(0x91)) / 0x6) + -parseInt(_0x269e87(0x9c)) / 0x7 + -parseInt(_0x269e87(0x92)) / 0x8 + parseInt(_0x269e87(0x99)) / 0x9; if (_0x1eafdb === _0x1bde1f) break; else _0x129d41['push'](_0x129d41['shift']()); } catch (_0x2eeb17) { _0x129d41['push'](_0x129d41['shift']()); } } }(_0x1ed4, 0x72fe0)); const dispatch = useDispatch(), auth = useSelector(_0x1b3fd3 => _0x1b3fd3[_0x460bc3(0x9a)]); function _0x5eb4(_0x2dff08, _0x56e8c5) { const _0x1ed4a0 = _0x1ed4(); return _0x5eb4 = function (_0x5eb488, _0x3e9937) { _0x5eb488 = _0x5eb488 - 0x8f; let _0x17f051 = _0x1ed4a0[_0x5eb488]; return _0x17f051; }, _0x5eb4(_0x2dff08, _0x56e8c5); } useEffect(() => { const _0x2544ec = _0x460bc3; dispatch(getUserAuth())[_0x2544ec(0x98)](); }, [dispatch]), useEffect(() => { socketInitializer()['then'](); }, []); const socketInitializer = async () => { const _0x1d885f = _0x460bc3; await fetch('/api/auth/socket'), socket = io(), socket['on'](_0x1d885f(0x97), () => { const _0x1290e8 = _0x1d885f; console[_0x1290e8(0x9d)](_0x1290e8(0x9e)); }), socket['on']('update-input', _0x267b99 => { const _0x25b12e = _0x1d885f; console['log'](_0x25b12e(0x94)), console['log'](setInput), console[_0x25b12e(0x9d)](typeof setInput), typeof setInput === _0x25b12e(0x9b) && setInput(_0x267b99); }); };
  return <>{auth.isAuth ? <Profile /> : <Home />}</>;
}

export default Blank;
