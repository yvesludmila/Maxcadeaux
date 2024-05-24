import React from 'react'

import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Système de support" pageTitle="Detail Ticket">

                <div className="support">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card create_ticket_details">
                                    <div className="card-body">
                                        <div className="ticket_details">
                                            <div className="ticket_details-header">
                                                <div>
                                                    <h5>I'm having issues claming with my daily hours <span
                                                        className="badge badge-success">OPEN</span></h5>
                                                    <p>Posted on 24 June 2021</p>
                                                </div>

                                                <button className="btn btn-danger">
                                                    <span><i className="la la-close"></i></span>Close Ticket
                                                </button>
                                            </div>
                                            <div className="ticket_desc">
                                                <p>lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry.
                                                    Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    1500slorem
                                                    Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem
                                                    Ipsum
                                                    has been the industry's standard dummy text ever since the 1500s</p>
                                            </div>

                                            <div className="comment-reply">
                                                <div className="d-flex align-items-start">
                                                    <img src="./images/profile/2.png" alt="" className="me-3"/>
                                                    <div class="flex-grow-1">
                                                        <h5>Rick Henary</h5>
                                                        <span>Posted on 24 June 2021</span>
                                                        <p>lorem Ipsum is simply dummy text of the printing and
                                                            typesetting
                                                            industry.Lorem Ipsum has been the industry's standard dummy
                                                            text
                                                            ever
                                                            since the 1500slorem Ipsum is simply dummy text of the
                                                            printing and
                                                            typesetting industry.Lorem Ipsum has been the industry's
                                                            standard
                                                            dummy
                                                            text ever since the 1500s</p>
                                                    </div>
                                                    <span>REPORT</span>
                                                </div>

                                                <div className="d-flex align-items-start">
                                                    <img src="./images/profile/3.png" alt="" className="me-3"/>
                                                    <div class="flex-grow-1">
                                                        <form action="#">
                                                            <textarea name="" id="" rows="5"
                                                                      class="form-control"></textarea>
                                                            <button class="btn btn-primary">Add Response</button>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="d-flex user_admin  align-items-start">
                                                    <img src="./images/profile/4.png" alt="" className="me-3"/>
                                                    <div class="flex-grow-1 ">
                                                        <h5>Admin</h5>
                                                        <span>Posted on 24 June 2021</span>
                                                        <p>lorem Ipsum is simply dummy text of the printing and
                                                            typesetting
                                                            industry.Lorem Ipsum has been the industry's standard dummy
                                                            text
                                                            ever
                                                            since the 1500slorem Ipsum is simply dummy text of the
                                                            printing and
                                                            typesetting industry.Lorem Ipsum has been the industry's
                                                            standard
                                                            dummy
                                                            text ever since the 1500s</p>
                                                        <a href="#">Add Response</a>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start">
                                                    <img src="./images/profile/1.png" alt="" className="me-3"/>
                                                    <div class="flex-grow-1 ">
                                                        <h5>Thomas Halva </h5>
                                                        <span>Posted on 24 June 2021</span>
                                                        <p>lorem Ipsum is simply dummy text of the printing and
                                                            typesetting
                                                            industry.Lorem Ipsum has been the industry's standard dummy
                                                            text
                                                            ever
                                                            since the 1500slorem Ipsum is simply dummy text of the
                                                            printing and
                                                            typesetting industry.Lorem Ipsum has been the industry's
                                                            standard
                                                            dummy
                                                            text ever since the 1500s</p>
                                                        <a href="#">Add Response</a>
                                                    </div>
                                                    <span>REPORT</span>
                                                </div>
                                                <div className="d-flex align-items-start">
                                                    <img src="./images/profile/2.png" alt="" className="me-3"/>
                                                    <div class="flex-grow-1 ">
                                                        <h5>Bastian Swest</h5>
                                                        <span>Posted on 24 June 2021</span>
                                                        <p>lorem Ipsum is simply dummy text of the printing and
                                                            typesetting
                                                            industry.Lorem Ipsum has been the industry's standard dummy
                                                            text
                                                            ever
                                                            since the 1500slorem Ipsum is simply dummy text of the
                                                            printing and
                                                            typesetting industry.Lorem Ipsum has been the industry's
                                                            standard
                                                            dummy
                                                            text ever since the 1500s</p>
                                                        <a href="#">Add Response</a>
                                                    </div>
                                                    <span>REPORT</span>
                                                </div>
                                            </div>

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