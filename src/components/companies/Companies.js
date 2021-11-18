import React from 'react';
import './styles.css';
import { companies } from '../../data/companies';

const Companies = () => {
    return (
        <section className="companies">
            <div className="container flex-col">
                <div className="companies-logos__headline">
                    <h2>Parlano di noi 🗣</h2>
                </div>
                <div className="companies-logos">
                    {
                        companies.map(company => {
                            return (
                                <div key={company}className="company-logo__container">
                                    <img className="company" src={company} alt="company" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Companies
