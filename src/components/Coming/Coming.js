import React from 'react';
import './Coming.css'

const Coming = () => {
    return (
        <div>
            <h1 class="coming-heading">This Services Will Be Introduced Soon!!!</h1>
            <div class="card-group p-5 gap-4">
                <div class="card bg-warning">
                    <img src="https://i.ibb.co/FW1n0pj/1.jpg" class="card-img-top coming-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Tooth Replace</h5>
                        <p class="card-text">Dentures are usually the cheapest way to replace a missing tooth or even a full mouth of teeth. these cheap tooth replacements are removable appliances with any number of frame.</p>

                    </div>
                </div>
                <div class="card bg-warning">
                    <img src="https://i.ibb.co/5rPG807/2.jpg" class="card-img-top coming-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Tooth Cap</h5>
                        <p class="card-text">Dental crowns are caps placed on top of damaged teeth. Crowns are used to protect, cover and restore the shape of your teeth when fillings don't solve the problem. Dental crowns can be made out of metals.</p>

                    </div>
                </div>
                <div class="card bg-warning">
                    <img src="https://i.ibb.co/0Qd1519/3.jpg" class="card-img-top coming-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Root Canal</h5>
                        <p class="card-text">As a general estimate, any single root canal appointment will last somewhere between 30 and 60 minutes, but in more complicated cases, the dentist may need as long as an hour and a half. </p>

                    </div>
                </div>
            </div>




        </div>
    );
};

export default Coming;