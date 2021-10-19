

import React from 'react';
import { useLocation } from "react-router-dom";

const Details = (props) => {
    let location = useLocation();
    console.log(location.serviceProps);
    let serviceDetails = location.serviceProps;
    return (
        <div>
            <div className="card mb-5 px-5 py-4">
                <div className="row g-0 p-5">
                    <div className="col-md-3">
                        <img src={serviceDetails.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <h5 className="card-title">{serviceDetails.name}</h5>
                            <p className="card-text">{serviceDetails.description}.</p>
                            <h6 className="card-text">{serviceDetails.details}</h6>

                        </div>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
};

export default Details;