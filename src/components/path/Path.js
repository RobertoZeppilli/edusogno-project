import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Path = () => {
    return (
        <section className="path">
            <div className="container">
                <div className="path-headline">
                    <h2 className="path-headline__text">
                        Cosa fa <span className="orange-text">Edusogno</span> per te? 📑
                    </h2>
                </div>

                <div className="path-boxes">
                    <div className="path-boxes__inner margin-bottom-lg">
                        <h3 className="path-boxes__inner__title">Orientamento e ammissioni 🎯</h3>
                        <p className="path-boxes__inner__content">Non sai quale Top University fa per te? Ti sei perso nella burocrazia dei tanti documenti da presentare? Non sai come far brillare il tuo profilo nel personal statement?</p>
                    </div>
                    <div className="path-boxes__inner">
                        <h3 className="path-boxes__inner__title">Certificazioni di inglese &amp; test standardizzati 🇬🇧</h3>
                        <p className="path-boxes__inner__content">Sono anni che ti prepari per un certificato di inglese ma non hai ancora ricevuto il C1? GMAT, GRE, SAT,… sì, ma come?</p>
                    </div>
                </div>
                <div className="cta-container">
                    <Link className="btn cta vvv" to="/servizi">
                        scopri i nostri servizi
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Path
