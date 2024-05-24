import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuth } from '../../store/actions/userAction';
import ChartData from '../chart/chart';
import Layout from '../layout/Layout';
import CardHeader from './cardHeader';

import { CurrencyEuroIcon } from '@heroicons/react/solid';
import { ShoppingBagIcon } from '@heroicons/react/outline';
function Profile() {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const [name, setName] = useState('Gain Validé');
  const [total, setTotal] = useState({
    accepted: 0,
    attente: 0,
    commande: 0,
  });
  const [dataMission, setDataMission] = useState({
    gain: [],
    pending: [],
    commande: [],
  });
  useEffect(() => {
    // Perform logic that requires access to the Redux store
    const fetchData = async () => {
      try {
        // Dispatch actions only if the component is still mounted

        dispatch(getUserAuth()).then();
        getStatistiqueUser();
      } catch (error) {
        // Handle errors
      }
    };

    // Fetch data when the component mounts
    fetchData().then();
  }, []);

  // useEffect(() => {
  // }, [auth]);

  function getStatistiqueUser() {
    axios
      .get(`/api/statistiques/${auth.user.hashId}`)
      .then(async (res) => {
        setTotal(res.data.total);
        setDataMission(res.data.mission);
        console.log('STATISTIQUE ========== ', res.data.mission);
      });
  }

  return (
    <>
      <Layout subTitle="Back to Home" pageTitle="Profil">
        <div className="profile">
          <div className="">
            <div className="row">
              <div className="col-xl-12">
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="coinEarn">
                    <div className="profile_chart">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex lg:justify-between justify-center flex-wrap">
                            <CardHeader
                              icon={<CurrencyEuroIcon className='h-14 text-white' />}
                              texte={'Gains validé'}
                              setName={setName}
                              nombre={total?.gain ? total?.gain : 0}
                              style={'hover:!bg-indigo-400 !bg-indigo-500'}
                            />
                            <CardHeader
                              icon={<CurrencyEuroIcon className='h-14 text-white' />}
                              texte={'Gains en attente'}
                              setName={setName}
                              nombre={total?.attente ? total?.attente : 0}
                              style={'hover:!bg-green-400 !bg-green-500'}
                            />
                            <CardHeader
                              icon={<ShoppingBagIcon className='h-14 text-white' />}
                              texte={'Mes commandes'}
                              setName={setName}
                              nombre={total?.commande ? total?.commande : 0}
                              style={'hover:!bg-yellow-400 !bg-yellow-500'}
                            />
                          </div>
                        </div>
                        <div className="mt-5 -px-5">
                          <ChartData name={name} dataMission={dataMission} />
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
      {/* <Layout subTitle="Back to Home" pageTitle="Accueil">
        <div className="profile">
          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="profile_card">
                  <div className="d-flex">
                    <img src="./images/profile/profile.png" alt="" />
                    <div className="flex-grow-1">
                      <h4>{auth?.user?.nom + " " + auth?.user?.prenom}</h4>
                      <p>{auth?.user?.email}</p>
                    </div>
                  </div>
                  <div className="profile-reg">
                    <div className="registered">
                      <h5>25 June 2021</h5>
                      <p>Registered</p>
                    </div>
                    <span className="reg_divider"></span>
                    <div className="rank">
                      <h5>User</h5>
                      <p>Rank</p>
                    </div>
                  </div>
                  <div className="profile_list">
                    <ul className="nav nav-tabs">
                      <li>
                        <a data-bs-toggle="tab" href="#coinEarn" className="active">
                          <span className="icons usd">
                            <i className="fa fa-usd"></i>
                          </span>
                          Coin Earned
                          <span>
                            <i className="la la-angle-right"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#offers">
                          <span className="icons gift">
                            <i className="fa fa-gift"></i>
                          </span>
                          Offers Completed
                          <span>
                            <i className="la la-angle-right"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#order">
                          <span className="icons cart">
                            <i className="fa fa-cart-plus"></i>
                          </span>
                          Order Placed
                          <span>
                            <i className="la la-angle-right"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tab" href="#referrals">
                          <span className="icons link">
                            <i className="fa fa-link"></i>
                          </span>
                          Referrals
                          <span>
                            <i className="la la-angle-right"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="coinEarn">
                    <div className="profile_chart">
                      <div className="card">
                        <div className="card-header">
                          <h4 className="card-title">
                            <span className="icons usd">
                              <i className="fa fa-usd"></i>
                            </span>
                            Coin Earned
                            <span className="active">All Time</span>
                          </h4>
                          <div className="duration-option">
                            <a className="active" href="#">
                              All time
                            </a>
                            <a href="#">24 H</a>
                            <a href="#">7D</a>
                            <a href="#">14D</a>
                            <a href="#">30D</a>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="chart_current_data">
                            <h3>406</h3>
                            <p>Coin Earned</p>
                          </div>
                          <ChartData />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="offers">
                    <div className="profile_chart">
                      <div className="card">
                        <div className="card-header">
                          <h4 className="card-title">
                            <span className="icons gift">
                              <i className="fa fa-gift"></i>
                            </span>
                            Offers Completed
                            <span className="active">All Time</span>
                          </h4>
                          <div className="duration-option">
                            <a href="#">All time</a>
                            <a className="active" href="#">
                              24 H
                            </a>
                            <a href="#">7D</a>
                            <a href="#">14D</a>
                            <a href="#">30D</a>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="chart_current_data">
                            <h3>406</h3>
                            <p>Offer Completed</p>
                          </div>
                          <canvas id="offer_completed"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="order">
                    <div className="profile_chart">
                      <div className="card">
                        <div className="card-header">
                          <h4 className="card-title">
                            <span className="icons link">
                              <i className="fa fa-link"></i>
                            </span>
                            Referrals Link
                            <span className="active">All Time</span>
                          </h4>
                          <div className="duration-option">
                            <a href="#">All time</a>
                            <a href="#">24 H</a>
                            <a href="#">7D</a>
                            <a className="active" href="#">
                              14D
                            </a>
                            <a href="#">30D</a>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="chart_current_data">
                            <h3>406</h3>
                            <p>Referrals Link</p>
                          </div>
                          <canvas id="refferal_link"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="referrals">
                    <div className="profile_chart">
                      <div className="card">
                        <div className="card-header">
                          <h4 className="card-title">
                            <span className="icons cart">
                              <i className="fa fa-cart-plus"></i>
                            </span>
                            Order Placed
                            <span className="active">All Time</span>
                          </h4>
                          <div className="duration-option">
                            <a href="#">All time</a>
                            <a href="#">24 H</a>
                            <a className="active" href="#">
                              7D
                            </a>
                            <a href="#">14D</a>
                            <a href="#">30D</a>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="chart_current_data">
                            <h3>406</h3>
                            <p>Order Placed</p>
                          </div>
                          <canvas id="order_placed"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout> */}
    </>
  );
}

export default Profile;
