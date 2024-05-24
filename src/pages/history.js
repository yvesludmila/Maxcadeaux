import React from 'react'

import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Back to Home" pageTitle="Earning History">
                <div className="history">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="history_header">
                                    <div className="select_search">
                                        <div className="select_box">
                                            <select className="form-control">

                                                <option> Earnings</option>
                                                <option> Withdrawals</option>
                                                <option> Reversals</option>

                                            </select>
                                        </div>
                                        <div className="search">
                                            <form action="#">
                                                <input type="text" className="form-control"
                                                       placeholder="Search history"/>
                                                <span><i className="fa fa-search"></i></span>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="duration-option">
                                        <a className="active" href="#">All time</a>
                                        <a href="#">24 H</a>
                                        <a href="#">7D</a>
                                        <a href="#">14D</a>
                                        <a href="#">30D</a>
                                    </div>
                                </div>

                                <div className="history_table">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Type</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Gems</th>
                                                <th scope="col">Date</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>124412112414</td>
                                                <td>Offer Toro</td>
                                                <td>John Pemad</td>
                                                <td>13.200 <span><img src="./images/svg/gem.svg" alt=""/></span></td>
                                                <td>02 : 24 am</td>
                                            </tr>
                                            <tr>
                                                <td>124412112414</td>
                                                <td>Offer Toro</td>
                                                <td>John Pemad</td>
                                                <td>13.200 <span><img src="./images/svg/gem.svg" alt=""/></span></td>
                                                <td>02 : 24 am</td>
                                            </tr>
                                            <tr>
                                                <td>124412112414</td>
                                                <td>Offer Toro</td>
                                                <td>John Pemad</td>
                                                <td>13.200 <span><img src="./images/svg/gem.svg" alt=""/></span></td>
                                                <td>02 : 24 am</td>
                                            </tr>
                                            <tr>
                                                <td>124412112414</td>
                                                <td>Offer Toro</td>
                                                <td>John Pemad</td>
                                                <td>13.200 <span><img src="./images/svg/gem.svg" alt=""/></span></td>
                                                <td>02 : 24 am</td>
                                            </tr>
                                            <tr>
                                                <td>124412112414</td>
                                                <td>Offer Toro</td>
                                                <td>John Pemad</td>
                                                <td>13.200 <span><img src="./images/svg/gem.svg" alt=""/></span></td>
                                                <td>02 : 24 am</td>
                                            </tr>
                                            <tr>
                                                <td>124412112414</td>
                                                <td>Offer Toro</td>
                                                <td>John Pemad</td>
                                                <td>13.200 <span><img src="./images/svg/gem.svg" alt=""/></span></td>
                                                <td>02 : 24 am</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <nav className="history_pagination">
                                    <ul className="pagination justify-content-end">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#"><span><i className="fa fa-angle-left"></i></span></a>
                                        </li>
                                        <li className="page-item"><a className="page-link active" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#"><span><i
                                                className="fa fa-angle-right"></i></span></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}

export default Blank