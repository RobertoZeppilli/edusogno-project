import React from 'react';
import './styles.css';
import play from '../../assets/play.png';
import { Link } from 'react-router-dom';

const Stories = () => {
    return (
        <section className="stories">
            <div className="clouds">
                <div className="container">
                    <div className="stories-headline">
                        <h2 className="stories-headline__text">
                            Storie di successo ⭐️
                        </h2>
                    </div>

                    <div className="stories-content">
                        <div className="stories-content__video flex-center">
                            <img src={play} alt="play button" />
                        </div>
                        <div className="stories-content__text">
                            <h3 className="stories-content__text__name">
                                Serena, 20 anni
                            </h3>
                            <p>“… Ho ricevuto la lettera di ammissione al master in Robotics, System and Control del Politecnico di Zurigo. Voglio fare un ringraziamento speciale a tutto il team di Edusogno che mi ha seguito per preparare l’application.”</p>
                        </div>
                    </div>
                    <div className="stories-content">
                        <div className="stories-content__video flex-center">
                            <img src={play} alt="play button" />
                        </div>
                        <div className="stories-content__text">
                            <h3 className="stories-content__text__name">
                                Lorenzo, 21 anni
                            </h3>
                            <p>“… volevo ringraziare Domenico e tutto il team di Edusogno perché questa settimana mi è arrivata la lettera di ammissione al Master in Computational Science all’Imperial College di Londra. “</p>
                        </div>
                    </div>

                    <div className="cta-container">
                        <Link className="btn cta" to="/servizi">
                            altre testimonianze
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stories
