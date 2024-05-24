import React from 'react'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Back to Shop" pageTitle="Withdraw to PayPal">

                <div className="shop_withdraw">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3">
                                <div className="shop_card_desc">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="icon paypal">
                                                <span><img src="./images/svg/paypal.svg" alt=""/></span>
                                            </div>
                                            <h4 className="card-title">Paypal</h4>
                                        </div>
                                        <div className="card-body">
                                            <h5>Description :</h5>
                                            <p>PayPal is accepted where you shop - on over 75% of online merchants, from
                                                big
                                                brands
                                                to boutique sites. We send USD balance to your PayPal account. Start
                                                shopping
                                                now!
                                            </p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="website">
                                                <span><img src="./images/svg/plane.svg" alt=""/></span>
                                                <a href="#">
                                                    <p>Website</p>
                                                </a>
                                            </div>
                                            <div className="help">
                                                <span><img src="./images/svg/help.svg" alt=""/></span>
                                                <a href="#">
                                                    <p>Help</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9">
                                <div className="shop_card_content">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Paypal</h4>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="form-group">
                                                    <label>Choose Amount</label>
                                                    <ul className="choose_amount">
                                                        <li className="wave-effect active">$2.50</li>
                                                        <li className="wave-effect">$2.50</li>
                                                        <li className="wave-effect">$2.50</li>
                                                        <li className="wave-effect">$2.50</li>
                                                        <li className="wave-effect">$2.50</li>
                                                        <li className="wave-effect">$2.50</li>
                                                        <li className="wave-effect">$2.50</li>
                                                    </ul>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="">Set PayPal address</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Enter paypal address"/>
                                                </div>
                                                <div className="form-button">
                                                    <p>USD account balance will be sent to your PayPal account. PayPal
                                                        charges
                                                        you a
                                                        transaction fee of 2.9% + $0.30.</p>
                                                    <button type="button" className="btn btn-primary"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#popup_claim">Withdraw
                                                    </button>
                                                </div>
                                            </form>
                                            <div className="alert alert-warning alert-dismissible fade show"
                                                 role="alert">
                                                Payment of 30,000G will be equivalent to $2.50 withdrawals
                                                <div className="close" data-bs-dismiss="alert" aria-label="Close">
                                                    <span><i className="la la-close"></i></span>
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