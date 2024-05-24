import React from 'react'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Leaderboard" pageTitle="CoinGain Top Ranking">
                <div className="leaderboard">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="leaderboard_top_rank">
                                    <div className="ani-17">
                                        <img src="./images/svg/ani-17.png" alt=""/>
                                    </div>
                                    <div className="ani-18">
                                        <img src="./images/svg/ani-18.png" alt=""/>
                                    </div>
                                    <div className="top_rank">
                                        <div className="d-flex crown rank_ani1">
                                            <div className="rank_icon">
                                                <img src="./images/svg/crown.svg" alt=""/>
                                            </div>
                                            <div className="flex-grow-1">
                                                <span className="circle"></span>
                                                <h6>First 1</h6>
                                                <h5>Peter Jay Smith Was</h5>
                                                <p>19.280G</p>
                                            </div>
                                            <div className="prize">
                                                <h4> 9.800</h4>
                                                <div className="prize_gem">
                                                    <span>Prize</span>
                                                    <img src="./images/svg/gem.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex cup rank_ani2">
                                            <div className="rank_icon">
                                                <img src="./images/svg/cup.svg" alt=""/>
                                            </div>
                                            <div className="flex-grow-1">
                                                <span className="circle"></span>
                                                <h6>Second 2</h6>
                                                <h5>Peter Jay Smith Was</h5>
                                                <p>19.280G</p>
                                            </div>
                                            <div className="prize">
                                                <h4> 9.800</h4>
                                                <div className="prize_gem">
                                                    <span>Prize</span>
                                                    <img src="./images/svg/gem.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex medal rank_ani1">
                                            <div className="rank_icon">
                                                <img src="./images/svg/medal.svg" alt=""/>
                                            </div>
                                            <div className="flex-grow-1">
                                                <span className="circle"></span>
                                                <h6>Third 3</h6>
                                                <h5>Peter Jay Smith Was</h5>
                                                <p>19.280G</p>
                                            </div>
                                            <div className="prize">
                                                <h4> 9.800</h4>
                                                <div className="prize_gem">
                                                    <span>Prize</span>
                                                    <img src="./images/svg/gem.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="col-xl-6">

                                <div className="leaderboard_content">
                                    <div className="leaderboard_tab">
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="alltime">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">Place</th>
                                                            <th scope="col">User</th>
                                                            <th scope="col">Credit <img src="./images/svg/gem.svg"
                                                                                        alt=""/>
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <th scope="row">04</th>
                                                            <td className="user_circle"><span
                                                                className="circle user1"></span>
                                                                <span>Yeremias NJ</span>
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">05</th>
                                                            <td className="user_circle"><span
                                                                className="circle user2"></span> John
                                                                Pentol
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">06</th>
                                                            <td className="user_circle"><span
                                                                className="circle user3"></span>
                                                                Magda
                                                                Hera
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">07</th>
                                                            <td className="user_circle"><span
                                                                className="circle user4"></span>
                                                                Danielad
                                                                Dan
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">08</th>
                                                            <td className="user_circle"><span
                                                                className="circle user5"></span>
                                                                Henry
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">09</th>
                                                            <td className="user_circle"><span
                                                                className="circle user6"></span>
                                                                Thomas C
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">10</th>
                                                            <td className="user_circle"><span
                                                                className="circle user7"></span>
                                                                Paijoo
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="week">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">Place</th>
                                                            <th scope="col">User</th>
                                                            <th scope="col">Credit <img src="./images/svg/gem.svg"
                                                                                        alt=""/>
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <th scope="row">04</th>
                                                            <td className="user_circle"><span
                                                                className="circle user1"></span>
                                                                Yeremias
                                                                NJ
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">05</th>
                                                            <td className="user_circle"><span
                                                                className="circle user2"></span> John
                                                                Pentol
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">06</th>
                                                            <td className="user_circle"><span
                                                                className="circle user3"></span>
                                                                Magda
                                                                Hera
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">07</th>
                                                            <td className="user_circle"><span
                                                                className="circle user3"></span>
                                                                Danielad
                                                                Dan
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">08</th>
                                                            <td className="user_circle"><span
                                                                className="circle user3"></span>
                                                                Henry
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">09</th>
                                                            <td className="user_circle"><span
                                                                className="circle user3"></span>
                                                                Thomas C
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">10</th>
                                                            <td className="user_circle"><span
                                                                className="circle user3"></span>
                                                                Paijoo
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="month">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">Place</th>
                                                            <th scope="col">User</th>
                                                            <th scope="col">Credit <img src="./images/svg/gem.svg"
                                                                                        alt=""/>
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <th scope="row">04</th>
                                                            <td className="user_circle"><span
                                                                className="circle user1"></span>
                                                                Yeremias
                                                                NJ
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">05</th>
                                                            <td className="user_circle"><span
                                                                className="circle user2"></span> John
                                                                Pentol
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">06</th>
                                                            <td className="user_circle"><span
                                                                className="circle user3"></span>
                                                                Magda
                                                                Hera
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">07</th>
                                                            <td className="user_circle"><span
                                                                className="circle user3"></span>
                                                                Danielad
                                                                Dan
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">08</th>
                                                            <td className="user_circle"><span
                                                                className="circle user3"></span>
                                                                Henry
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">09</th>
                                                            <td className="user_circle"><span
                                                                className="circle user3"></span>
                                                                Thomas C
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">10</th>
                                                            <td className="user_circle"><span
                                                                className="circle user3"></span>
                                                                Paijoo
                                                            </td>
                                                            <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="load_more">
                                        <a href="#">Load More</a>
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