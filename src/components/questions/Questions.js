import React from 'react';
import './styles.css';
import { questions } from '../../data/questions';
import whatsapp from '../../assets/whatsapp.png';
import placeholder from '../../assets/placeholder.png';
import { Link } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";


const Questions = () => {
    const scrollTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <section className="questions">
            <div className="container">
                <div className="questions-headline">
                    <h2 className="questions-headline__text">
                        Domande più frequenti ⁉️
                    </h2>
                </div>

                <div className="questions-container">
                    {
                        questions.map(question => {
                            return (
                                <div key={question} className="question">
                                    <p>{question}</p>
                                    <FaChevronDown className="down-arrow" />
                                </div>
                            )
                        })
                    }
                </div>

                <div className="questions-cta">
                    <Link className="btn cta-white" to="/faq">
                        leggi le domande più frequenti
                    </Link>
                    <Link className="btn cta-white" to="/">
                        contattaci
                        <img src={whatsapp} alt="whatsapp icon" />
                    </Link>
                    <div className="up">
                        <img src={placeholder} alt="up" onClick={scrollTop} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Questions
