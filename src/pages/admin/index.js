import React, {useEffect} from "react";
import {useState} from "react";
import useClickOutside from "../../utils/outsideClick";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuth, logoutUser} from "../../store/actions/userAction";
import {useRouter} from "next/dist/client/router";
import LayoutAdmin from "../../components/layout/LayoutAdmin";
import SideAdmin from "../../components/layout/SideAdmin";
import {authMiddleware} from '../../store/middleware/authMiddleware';

function Blank() {
    const [openClass, setOpenClass] = useState(false);
    const [show, setShow] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const router = useRouter();
    const result = authMiddleware(router.req);

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(getUserAuth());
    }, [dispatch]);

    const handleOpen = () => setOpenClass(!openClass);
    const handleShow = () => setShow(!show);

    let domNode = useClickOutside(() => {
        setOpenClass(false);
    });

    function logout() {
        dispatch(logoutUser()).then(() => {
            router.push("/");
        });
    }

    return (
        <>
            <LayoutAdmin></LayoutAdmin>
        </>
    );
}

export default Blank;
