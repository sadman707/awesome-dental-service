import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Services.css'
import useAuth from '../../hooks/useAuth';



const Services = () => {
    const [services, setServices] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const { user, logOut } = useAuth();

    const showDetails = (service) => {
        // name
        // description
        // details
        // img 
        // price

        if (user.email) {
            // go to details page
            return (
                <NavLink className="btn btn-outline-danger" to={{
                    pathname: "/details",
                    serviceProps: {
                        name: service.name,
                        description: service.description,
                        details: service.details,
                        img: service.img,
                        price: service.price,

                    },
                }} >Show Details</NavLink>
            )
        } else {
            // go to login page
            return (
                <NavLink className="btn btn-outline-primary" to="/login" >Show Details</NavLink>
            )
        }


    }
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services-container">

            <h2 className="service-header">Dental Services We provide</h2>

            <div className="services">
                <div className="row">

                    {
                        services.map(service => (

                            <div className="col-md-4 ">
                                <div className="each-service">

                                    <div className="service-image">
                                        <div>
                                            <img className="image" src={service.img} alt="" />
                                        </div>


                                        <div className="service-detail text-white">
                                            <h2 className="service-main">{service.name}</h2>
                                            <h3> <span className="service-name">Price: </span> {service.price}</h3>
                                            <div>
                                                <h4 className="services-name"> <span className="service-name">Description:</span> {service.description}</h4>
                                                <h5 className="services-name"> <span className="service-name">Details:</span>  {service.details}</h5>
                                            </div>

                                            {showDetails(service)}


                                        </div>

                                    </div>


                                </div>

                            </div>

                        ))}


                </div>
            </div>

        </div>
    );
};

export default Services;