import React from 'react';
import './styles.css';

import { numbers } from '../../data/numbers';

const Numbers = () => {
    return (
        <section className="numbers">
            <div className="container-md">
                <div className="numbers-headline">
                    <h2 className="numbers-headline__text">Perchè scegliere <span className="orange-text">Edusogno</span> 🤔
                    </h2>
                </div>

                <div className="numbers-container">
                    {
                        numbers.map(num => {
                            const { boxTitle, boxText, number, tagline, symbol, reverse } = num
                            return (
                                <div className={reverse ? 'reverse' : 'numbers-box'} key={number}>
                                    <div className={`${reverse ? 'margin-top numbers-box__inner' : 'margin-bottom numbers-box__inner'}`}>
                                        <h4>{boxTitle}</h4>
                                        <p>{boxText}</p>
                                    </div>
                                    <div className="numbers-box__text">
                                        <h4>{number}{symbol ? '%' : ''}</h4>
                                        <p>{tagline}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Numbers
