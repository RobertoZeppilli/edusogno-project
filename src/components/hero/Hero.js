import React from 'react';
import './styles.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="container flex">
                <div className="hero-headline">
                    <h1 className="hero-headline__main">Tutti possono entrare in una Top University 🎓</h1>
                    <p className="hero-headline__subtitle">Sogni di studiare in una Top University all’estero per una carriera brillante?</p>
                    <p className="hero-headline__subtitle__subtitle">Sei nel posto giusto! 😁</p>

                    <button type="button" className="btn cta">
                        scopri i nostri servizi
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
