import React from 'react'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>

            <div className="banned">
                <div className="container h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-xl-8">
                            <div className="banned-content">
                                <img src="./images/banned.png" alt=""/>
                                <h3>Opps Sorry, You have been banned</h3>
                                <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been
                                    the industry's standard dummy text ever since the 1500s</p>
                                <button className="btn btn-primary">Sign Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Blank
