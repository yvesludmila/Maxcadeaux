import React from 'react'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Welcome" pageTitle="Thomas">

                <div className="popup">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="popup_content claim pt-5">
                                    <span className="popup_icon">
                                        <img src="./images/popup/1.svg" alt=""/>
                                    </span>
                                    <h4>Claim your bonus!</h4>
                                    <p>Enter a Bonus code and get rewarded with gems! Bonus codes are post regularly on
                                        our
                                        <a href="#">Twitter</a>.
                                    </p>

                                    <form action="#">
                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                                   placeholder="Enter bonus code here"/>
                                            <span>Cancel</span>
                                        </div>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#popup_claim1">Claim
                                        </button>
                                    </form>
                                </div>
                            </div>


                            <div className="col-xl-6">
                                <div className="popup_content claim pt-5">
                                    <span className="popup_icon">
                                        <img src="./images/popup/2.svg" alt=""/>
                                    </span>
                                    <h4>Wohoo Congratulations! </h4>
                                    <p>Claimed the bonus code has been successful, please press the continue button or
                                        you have
                                        another code bonus</p>

                                    <button type="button" className="btn btn-primary mt-5" data-bs-toggle="modal"
                                            data-bs-target="#popup_claim2">CONTINUE
                                    </button>
                                </div>
                            </div>


                            <div className="col-xl-6">
                                <div className="popup_content claim pt-5">
                                    <span className="popup_icon">
                                        <img src="./images/popup/3.svg" alt=""/>
                                    </span>
                                    <h4>Oops sorry! the code doesn't work</h4>
                                    <p>Please, try again to enter the correct code</p>
                                    <a href="#" className="btn btn-outline-warning me-3">Cancel</a>
                                    <a href="#" className="btn btn-primary" data-bs-toggle="modal"
                                       data-bs-target="#popup_claim3">TRY
                                        AGAIN</a>
                                </div>
                            </div>


                            <div className="col-xl-6">
                                <div className="popup_content claim pt-5">
                                    <span className="popup_icon">
                                        <img src="./images/popup/4.svg" alt=""/>
                                    </span>
                                    <h4>Free Gems bonus!</h4>
                                    <p>Earn free money by clicking claim now every single day!</p>
                                    <a href="#" className="btn btn-primary" data-bs-toggle="modal"
                                       data-bs-target="#popup_claim4">CLAIM</a>
                                </div>
                            </div>


                            <div className="col-xl-6">
                                <div className="popup_content claim pt-5">
                                    <span className="popup_icon">
                                        <img src="./images/popup/5.svg" alt=""/>
                                    </span>
                                    <h4>Wohoo Congratulations! </h4>
                                    <p>Earn free money by clicking claim now every single day!</p>
                                    <a href="#" className="btn btn-primary" data-bs-toggle="modal"
                                       data-bs-target="#popup_claim5">Continue</a>
                                </div>
                            </div>


                            <div className="col-xl-6">
                                <div className="popup_content claim pt-5">
                                    <span className="popup_icon">
                                        <img src="./images/popup/6.svg" alt=""/>
                                    </span>
                                    <h4>Oops sorry! there was an error</h4>
                                    <p>Earn free money by clicking claim now every single day!</p>
                                    <p>Please, try again </p>
                                    <a href="#" className="btn btn-outline-warning me-3">Cancel</a>
                                    <a href="#" className="btn btn-primary" data-bs-toggle="modal"
                                       data-bs-target="#popup_claim6">TRY
                                        AGAIN</a>
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