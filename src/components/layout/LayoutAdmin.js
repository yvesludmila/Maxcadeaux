import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import Head from "next/head";
import SideAdmin from "./SideAdmin";

function Layout({children}) {
    return (
        <>
            <Head>
                <title>dracocashback</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div id="main-wrapper">
                <HeaderAdmin/>
                <SideAdmin>{children}</SideAdmin>
            </div>
        </>
    );
}

export default Layout;
