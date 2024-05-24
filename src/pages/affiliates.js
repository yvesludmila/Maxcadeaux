import React from "react";
import Layout from "../components/layout/Layout";

function Blank() {
    return (
        <>
            <Layout subTitle="Affiliates" pageTitle="Earn free coins">
                <div className="affiliates">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3">
                                <div className="credit">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Your Credit</h4>
                                            <div className="credit-content">
                                                <div className="invited d-flex justify-content-between">
                                                    <h6>Invited</h6>
                                                    <h6 className="text-primary">12</h6>
                                                </div>
                                                <div className="earnings d-flex justify-content-between">
                                                    <h6>Earnings</h6>
                                                    <h6 className="text-primary">
                                                        111 <img src="./images/svg/gem.svg" alt=""/>
                                                    </h6>
                                                </div>

                                                <button className="btn btn-primary">CLAIM REWARDS</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9">
                                <div className="refferal_link">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Referral link</h4>
                                            <p>
                                                Your earn 5% of the Coins your referrals earn through an
                                                offer ! Give them this link to sign up and you're good
                                                to go
                                            </p>

                                            <div className="referral_form">
                                                <form action="#">
                                                    <div className="form-row align-items-center">
                                                        <div className="form-group col-xl-8">
                                                            <label htmlFor="">Your Referral Link</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Your Referral link"
                                                            />
                                                            <div className="edit_copy">
                                <span>
                                  <img src="./images/svg/copy.svg" alt=""/>
                                </span>
                                                                <span>
                                  <img src="./images/svg/edit.svg" alt=""/>
                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="form-social col-xl-4">
                                                            <a href="#" className="facebook">
                                <span>
                                  <i className="fab fa-facebook-square"></i>
                                </span>
                                                            </a>
                                                            <a href="#" className="twitter">
                                <span>
                                  <i className="fab fa-twitter"></i>
                                </span>
                                                            </a>
                                                            <a href="#" className="reddit">
                                <span>
                                  <i className="fab fa-reddit-alien"></i>
                                </span>
                                                            </a>
                                                            <a href="#" className="email">
                                <span>
                                  <i className="fa fa-envelope"></i>
                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="refferal_level">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Referral level</h4>
                                            <span>Current Bonus : 5%</span>
                                        </div>
                                        <div className="card-body">
                                            <div className="referral-progress-content">
                                                <div className="progress-popup first">
                                                    <h5>
                                                        Bronze <span className="divider">|</span>
                                                        <span>5%</span>
                                                    </h5>
                                                    <p>Referral : 0</p>
                                                </div>
                                                <div className="progress-popup middle">
                                                    <h5>
                                                        Bronze <span className="divider">|</span>
                                                        <span>5%</span>
                                                    </h5>
                                                    <p>Referral : 0</p>
                                                </div>
                                                <div className="progress-popup last">
                                                    <h5>
                                                        Bronze <span className="divider">|</span>
                                                        <span>5%</span>
                                                    </h5>
                                                    <p>Referral : 0</p>
                                                </div>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar w-50"
                                                        role="progressbar"
                                                        aria-valuenow="75"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
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
    );
}

export default Blank;
