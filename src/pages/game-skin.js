import React from 'react'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Back to Shop" pageTitle="Withdraw to Game - Skin">
                <div className="game_skin">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3">
                                <div className="game_skin-category card">
                                    <div className="card-header">
                                        <h4 className="card-title">Category</h4>
                                    </div>
                                    <div className=" card-body game_skin-category-list">
                                        <ul className="nav nav-tabs">
                                            <li className="active">
                                                <a data-bs-toggle="tab" href="#csgo" className="active">
                                                    <span className="checkbox"></span>
                                                    <div className="d-flex csga">
                                                        <img src="./images/game/csgo.png" alt="" className="me-3"/>
                                                        <div className="flex-grow-1">
                                                            <p>CSGo Skin </p>
                                                        </div>
                                                        <span>(123)</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a data-bs-toggle="tab" href="#dota">
                                                    <span className="checkbox"></span>
                                                    <div className="d-flex dota mb-0">
                                                        <img src="./images/game/dota.png" alt="" className="me-3"/>
                                                        <div className="flex-grow-1">
                                                            <p>Dota Skin </p>
                                                        </div>
                                                        <span>(123)</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9">

                                <div className="game_skin-header">
                                    <div className="search_box">
                                        <form action="#">
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                       placeholder="Search items by keywords, price, etc"/>
                                                <span><i className="la la-search"></i></span>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="sort_by">
                                        <div className="drop-menu form-control">
                                            <div className="select">
                                                <span>Sort By</span>
                                                <i className="fa fa-angle-right"></i>
                                            </div>
                                            <input type="hidden" name="gender"/>
                                            <ul className="dropeddown">
                                                <li> Featured</li>
                                                <li> Price : High - Low</li>
                                                <li> Price : Low - High</li>
                                                <li> A - Z</li>
                                                <li> Z - A</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="game_skin-content">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="csgo">
                                            <div className="row">
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card active">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img">
                                                            <img src="./images/game/knife.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Karambit</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img">
                                                            <img src="./images/game/knife.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Karambit</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img">
                                                            <img src="./images/game/knife.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Karambit</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img">
                                                            <img src="./images/game/knife.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Karambit</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img">
                                                            <img src="./images/game/knife.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Karambit</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img">
                                                            <img src="./images/game/knife.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Karambit</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img">
                                                            <img src="./images/game/knife.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Karambit</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img">
                                                            <img src="./images/game/knife.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Karambit</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img">
                                                            <img src="./images/game/knife.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Karambit</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img">
                                                            <img src="./images/game/knife.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Karambit</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img">
                                                            <img src="./images/game/knife.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Karambit</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img">
                                                            <img src="./images/game/knife.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Karambit</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="dota">
                                            <div className="row">
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card active">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img dota_skin">
                                                            <img src="./images/game/dota_skin.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Dota Skin</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img dota_skin">
                                                            <img src="./images/game/dota_skin.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Dota Skin</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img dota_skin">
                                                            <img src="./images/game/dota_skin.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Dota Skin</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img dota_skin">
                                                            <img src="./images/game/dota_skin.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Dota Skin</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img dota_skin">
                                                            <img src="./images/game/dota_skin.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Dota Skin</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img dota_skin">
                                                            <img src="./images/game/dota_skin.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Dota Skin</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img dota_skin">
                                                            <img src="./images/game/dota_skin.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Dota Skin</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img dota_skin">
                                                            <img src="./images/game/dota_skin.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Dota Skin</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img dota_skin">
                                                            <img src="./images/game/dota_skin.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Dota Skin</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img dota_skin">
                                                            <img src="./images/game/dota_skin.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Dota Skin</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img dota_skin">
                                                            <img src="./images/game/dota_skin.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Dota Skin</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3">
                                                    <div className="game_skin-card">
                                                        <h5>421.300 <img src="./images/svg/gem.svg" alt=""/></h5>
                                                        <div className="game_skin-img dota_skin">
                                                            <img src="./images/game/dota_skin.png" alt=""
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div className="game_skin-info">
                                                            <div className="game_skin-text">
                                                                <span>FV:0.1</span>
                                                                <h6>Dota Skin</h6>
                                                                <p>Fade (Factory New)</p>
                                                            </div>
                                                            <a href="#">
                                                                <span><i className="fa fa-angle-right"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <a href="#" className="load_more">LOAD MORE</a>
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