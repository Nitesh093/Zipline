import React from 'react'
import "./Hero.css"

function Hero() {
    return (

            <section className="section hero" aria-label="home" id="home" >
                <div className="container">

                    <div className="hero-content">

                        <h2 className="h1 hero-title">
                            <span className="span">AFTER MILES</span> We Deliver Smiles
                        </h2>

                        <p className="hero-text">
                        Reach Your Destination 100% Safe and Secure.
                        </p>

                        <a href="#" className="btn-outline">View Services</a>

                        {/*<img src="" width="116" height="116" loading="lazy"
                            className="hero-shape shape-1" alt='' />

                        <img src="../../assets/images/hero-shape.jpg" width="116" height="116" loading="lazy"
                            className="hero-shape shape-2" alt='' />*/}

                    </div>

                </div>
            </section>
    )
}

export default Hero