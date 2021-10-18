import React from 'react';
import './Coming.css'

const Coming = () => {
    return (
        <div>
            <div className="row row-style-coming">
                <h1>This advance treatments are coming soon!!!</h1>
                <div className="cold-lg-6 col-style-coming">
                    <div className="inner-style-coming">
                        <div>
                            <h2>Node Js</h2>
                            <h3>This is all you need!!</h3>
                        </div>
                        <div>
                            <img className="image-coming" src="https://i.ibb.co/hV7ZngV/m1.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className="cold-lg-6 col-style-coming">
                    <div className="inner-style-coming">
                        <div>
                            <h2>Jquerry</h2>
                            <h3>This is all you need!!</h3>
                        </div>
                        <div>
                            <img className="image-coming" src="https://i.ibb.co/GsTqzYd/m2.png" alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Coming;