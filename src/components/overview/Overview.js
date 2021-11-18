import React from 'react';
import './styles.css';

import play from '../../assets/play.png';

const Overview = () => {
    return (
        <section className="overview">
            <div className="container">
                <div className="overview-headline">
                    <h2 className="overview-headline__text">Studiare nelle <span className="orange-text">migliori università del pianeta</span> non è mai stato così facile.
                    </h2>
                </div>
                <div className="overview-content container-md flex-start">
                    <div className="overview-content__left flex-center">
                        <div className="overview-content__left__image">
                            <img src={play} alt="play button" />
                        </div>
                    </div>
                    <div className="overview-content__right">
                        <p>
                            <strong>Edusogno</strong> mette al tuo servizio studenti ed ex studenti provenienti dalle <strong>più prestigiose università</strong> del mondo (Oxford, Cambridge, ETH, etc.) che ti guideranno durante tutto il processo di <strong>orientamento</strong>, costruzione ed invio della candidatura.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview
