import React from 'react'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Support" pageTitle="Système de support">

                <div className="notification_alert">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="notification_card">
                                    <h5>Verify Email :</h5>

                                    <div className="notification alert verify_email alert-dismissible fade show">
                                        <div className="d-flex">
                                            <div className="alert_icon me-3">
                                                <span><i className="fa fa-envelope"></i></span>
                                            </div>
                                            <p>Please verify your e-mail address on the settings</p>
                                        </div>
                                        <span className="close" data-bs-dismiss="alert" aria-label="Close">
                                <i className="la la-close"></i>
                            </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="notification_card">
                                    <h5>Information Alert :</h5>

                                    <div className="notification alert information_alert alert-dismissible fade show">
                                        <div className="d-flex">
                                            <div className="alert_icon me-3">
                                                <span><i className="fa fa-bell"></i></span>
                                            </div>
                                            <p>The maximum number of items for exchange </p>
                                        </div>
                                        <span className="close" data-bs-dismiss="alert" aria-label="Close">
                                <i className="la la-close"></i>
                            </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="notification_card">
                                    <h5>Information Attention :</h5>

                                    <div
                                        className="notification alert information_ttention alert-dismissible fade show">
                                        <div className="d-flex">
                                            <div className="alert_icon me-3">
                                                <span><i className="fa fa-exclamation-triangle"></i></span>
                                            </div>
                                            <p>The maximum number of items for exchange</p>
                                        </div>
                                        <span className="close" data-bs-dismiss="alert" aria-label="Close">
                                <i className="la la-close"></i>
                            </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="notification_card">
                                    <h5>Success :</h5>

                                    <div className="notification alert success alert-dismissible fade show">
                                        <div className="d-flex">
                                            <div className="alert_icon me-3">
                                                <span><i className="fa fa-check-circle"></i></span>
                                            </div>
                                            <p>Link copied to clipboard, and earnings claimed</p>
                                        </div>
                                        <span className="close" data-bs-dismiss="alert" aria-label="Close">
                                <i className="la la-close"></i>
                            </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="notification_card">
                                    <h5>Verify Email :</h5>

                                    <div className="notification alert failure alert-dismissible fade show">
                                        <div className="d-flex">
                                            <div className="alert_icon me-3">
                                                <span><i className="fa fa-times-circle"></i></span>
                                            </div>
                                            <p>Fail copied link to clipboard</p>
                                        </div>
                                        <span className="close" data-bs-dismiss="alert" aria-label="Close">
                                <i className="la la-close"></i>
                            </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="notification_card">
                                    <h5>Verify Email :</h5>

                                    <div className="notification alert cookies alert-dismissible fade show">
                                        <div className="d-flex">
                                            <div className="alert_icon me-3">
                                                <span><i className="fa fa-envelope"></i></span>
                                            </div>
                                            <p>Coockies help us to provide our service. By continuing to use the site,
                                                you agree
                                                to
                                                <a href="#">Our Use of Cookies</a>
                                            </p>
                                        </div>
                                        <span className="close" data-bs-dismiss="alert" aria-label="Close">
                                <i className="la la-close"></i>
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}

export default Blank