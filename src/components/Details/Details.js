import React from 'react';

const Details = () => {
    return (
        <div>
            <div className="card mb-3 px-5 py-4">
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src="https://i.ibb.co/7WDsjDN/1.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <h5 className="card-title">Tooth Extraction</h5>
                            <p className="card-text">Tooth extraction is very important to maintain good tooth.</p>
                            <h6 className="card-text">As you can see, it will take roughly 1-2 weeks for your tooth extraction site to completely heal; however, if you notice any of the following symptoms or signs, be sure to contact our doctors as soon as possible: Fever. Intense pain in the jaw or gums. Numbness in the mouth.</h6>

                        </div>
                    </div>
                </div>
                <br />
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src="https://i.ibb.co/2kWkP43/3.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <h5 className="card-title">Cosmetic Dentistry</h5>
                            <p className="card-text">If you’re unhappy with the smile you see every time you look in the mirror.</p>
                            <h6 className="card-text">This method of professional oral care focuses on improving the appearance of your mouth, teeth, gums, and overall smile. Common procedures include teeth whitening, veneers, fillings, and implants. Cosmetic dentistry is becoming more and more popular, with the industry as a whole projected to reach $32 billion by 2026.</h6>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;