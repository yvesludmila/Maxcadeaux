import React from 'react'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Support" pageTitle="Système de support">

                <div className="support">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card ticket_final">
                                    <div className="card-header">
                                        <h4 className="card-title">Your Ticket Notification</h4>
                                        <a href="#" className="clear_notification text-warning">Clear All
                                            Notification</a>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <img src="./images/profile/2.png" alt="" className="me-3"/>
                                            <div class="flex-grow-1">
                                                <h5>Rick Henary gave responded on your ticket <span
                                                    class="badge badge-warning">New</span></h5>
                                            </div>
                                            <span>1 min ago</span>
                                        </div>
                                        <div className="d-flex">
                                            <img src="./images/profile/1.png" alt="" className="me-3"/>
                                            <div class="flex-grow-1">
                                                <h5>Jane gave responded on your ticket</h5>
                                            </div>
                                            <span>24 July 2021</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="card create_ticket">
                                    <div className="card-header">
                                        <h4 className="card-title">Your Ticket</h4>
                                        <a href="#" className="btn btn-primary">Create Ticket</a>
                                    </div>
                                    <div className="card-body create_ticket-after">
                                        <div className="ticket_after_list">
                                            <ul>
                                                <li>
                                                    <div>
                                                        <h5>I'm having issues claming with my daily hours <span
                                                            className="badge badge-success">OPEN</span></h5>
                                                        <p>Posted on 24 June 2021</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i className="fa fa-angle-right"></i></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
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