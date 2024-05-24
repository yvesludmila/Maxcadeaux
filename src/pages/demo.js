import React from 'react'
import Link from "next/link"
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>

            {/* <div id="preloader"><i>.</i><i>.</i><i>.</i></div> */}

            <div id="main-wrapper">


                <div className="header landing @@headerClass">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <Link href="/"><a className="navbar-brand me-auto "><img src="./images/logo.png"
                                                                                             alt=""/></a></Link>
                                    <div className="header_auth my-2 text-center text-lg-end">
                                        <button href="javascriptvoid()"
                                                className="btn btn-primary my-2 mx-2">Buy Now
                                        </button>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="intro" id="intro" data-scroll-index="0">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-6 col-md-6">
                                <div className="intro-content my-5">
                                    <h1>CoinGain - Earn Free CS:GO Skins, Cryptocurrencies & Gift Cards</h1>
                                    <p>Earn Gems by Watching Videos, Playing Games & Completing Paid Surveys. Exchange
                                        them into
                                        Free Skins, Gift Cards, Cryptocurrencies, PayPal Money, CS:GO Items, Steam
                                        Items, and
                                        Various other Rewards. Join us Today & Never pay for Skins again! </p>

                                </div>
                            </div>
                            <div className="col-xl-5 col-md-6 py-md-5">
                                <div className="intro-demo_img">
                                    <img src="./images/demo/portfolio.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="demo section-padding">
                    <div className="container">
                        <div className="row py-lg-5 justify-content-center">
                            <div className="col-xl-7">
                                <div className="section-title text-center">
                                    <h2>Pages</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/dashboard.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>Dashboard</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/shop"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/shop.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>Shop</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/affiliate"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/affiliate.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>Affiliates</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/leaderboard"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/leaderboard.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>Leaderboard</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/support"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/support.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>Support</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/profile"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/profile.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>Profil</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/history"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/history.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>Historique</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/settings"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/settings.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>Paramètres</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/about"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/about.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>A propos</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/privacy-policy"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/privacy-policy.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>Privacy policy</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/term-condition"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/term-condition.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>Term Condition</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/bug-bunty"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/bug-bunty.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>Bug bunty</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/banned"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/banned.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>Banned</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/create-ticket"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/create-ticket.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>Create ticket</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/create-ticket-faq"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/create-ticket-faq.jpg" alt=""
                                                 className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>Create ticket faq</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/create-ticket-details"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/create-ticket-details.jpg" alt=""
                                                 className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>Create ticket details</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/game-skin"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/game-skin.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>Game skin</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/notification"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/notification.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>Notification</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/offer"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/offer.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>Offer</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/popup"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/popup.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>Popup</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/shop-amazon-withdraw"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/shop-amazon-withdraw.jpg" alt=""
                                                 className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>shop-amazon-withdraw</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/shop-crypto-withdraw"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/shop-crypto-withdraw.jpg" alt=""
                                                 className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>shop-crypto-withdraw</h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/shop-paypal-withdraw"><a>
                                        <div className="img-wrap">
                                            <img src="./images/demo/shop-paypal-withdraw.jpg" alt=""
                                                 className="img-fluid"/>
                                        </div>
                                    </a></Link>
                                    <h4>shop-paypal-withdraw</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="features section-padding bg-light" data-scroll-index="2">
                    <div className="container">
                        <div className="row py-lg-5 justify-content-center">
                            <div className="col-xl-7">
                                <div className="section-title text-center">
                                    <span>Problem?</span>
                                    <h2>Don't Worry, I am waiting your question</h2>
                                    <p>Refreshing my inbox, waiting for your mail </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="customer-support-content">
                                    <span><i className="fab fa-whatsapp"></i></span>
                                    <h4>+8801843666660</h4>
                                    <p>Without sleeping time, I am avaiable in Whstsapp. I recommend Whstsapp</p>
                                    <Link href="https://api.whatsapp.com/send?phone=008801843666660"><a>Send Message <i
                                        className="la la-angle-right"></i></a></Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="customer-support-content">
                                    <span><i className="fab fa-skype"></i></span>
                                    <h4>sporsho9</h4>
                                    <p>Without sleeping time, I am avaiable in skype. I also recommend Skype</p>
                                    <Link href="skype:profile_name?sporsho9"><a>Add Skype <i
                                        className="la la-angle-right"></i></a></Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="customer-support-content">
                                    <span><i className="fas fa-envelope"></i></span>
                                    <h4>imsaifun@gmail.com</h4>
                                    <p>When you send me email, I get notification, and quickly reply you</p>
                                    <Link href="mailto:imsaifun@gmail.com"><a>Send Email <i
                                        className="la la-angle-right"></i></a></Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="customer-support-content">
                                    <span><i className="fas fa-headset"></i></span>
                                    <h4>Pre sale question</h4>
                                    <p>You have need more design or customization? Dont worry about Quality</p>
                                    <Link
                                        href="https://docs.google.com/forms/d/109oFBGTIIuWEt5JbmyqQE0vUc8hLw1pKxuFpQwE5Vig"><a>Hire
                                        Now <i className="la la-angle-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="footer-link text-center text-lg-start">
                                    <Link href="#"><a className="m_logo"><img src="./images/m_logo.png"
                                                                              alt=""/></a></Link>
                                    <Link href="/privacy-policy"><a className="pr-3 pr-lg-4">Privacy
                                        Policy</a></Link>
                                    <Link href="/term-condition"><a>Term & Service</a></Link>
                                </div>
                                <div className="copy_right text-center text-lg-start">
                                    Copyright © 2021 CoinGain. All Rights Reserved.
                                </div>
                            </div>

                            <div className="col-xl-6 text-center text-lg-end py-5 py-lg-0">
                                <div className="social">
                                    <Link href="#"><a><i className="fab fa-youtube"></i></a></Link>
                                    <Link href="#"><a><i className="fab fa-instagram"></i></a></Link>
                                    <Link href="#"><a><i className="fab fa-twitter"></i></a></Link>
                                    <Link href="#"><a><i className="fab fa-facebook"></i></a></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blank