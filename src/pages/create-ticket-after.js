import React from "react";

import Layout from "../components/layout/Layout";

function Blank() {
  return (
    <Layout subTitle="Support" pageTitle="Système de support">
        <div className="support">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="card blank_notification">
                  <div className="card-header">
                    <h4 className="card-title">Your Ticket Notification</h4>
                    <a href="#" className="clear_notification text-warning">
                      Clear All Notification
                    </a>
                  </div>
                  <div className="card-body">
                    <p>Opps sorry, There are no notification to show </p>
                  </div>
                </div>

                <div className="card create_ticket">
                  <div className="card-header">
                    <h4 className="card-title">Your Ticket</h4>
                    <a href="#" className="btn btn-primary">
                      Create Ticket
                    </a>
                  </div>
                  <div className="card-body create_ticket-after">
                    <div className="ticket_after_list">
                      <ul>
                        <li>
                          <div>
                            <h5>
                              I'm having issues claming with my daily hours{" "}
                              <span className="badge badge-success">OPEN</span>
                            </h5>
                            <p>Posted on 24 June 2021</p>
                          </div>
                          <a href="#">
                            <span>
                              <i className="fa fa-angle-right"></i>
                            </span>
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
  );
}

export default Blank;
