import React from 'react';
import './styles.css';

import Hero from '../../components/hero/Hero';
import Companies from '../../components/companies/Companies';
import Overview from '../../components/overview/Overview';
import Numbers from '../../components/numbers/Numbers';
import Team from '../../components/team/Team';
import Path from '../../components/path/Path';
import Stories from '../../components/stories/Stories';
import Questions from '../../components/questions/Questions';

const Home = () => {
    return (
        <>
            <Hero />
            <Companies />
            <Overview />
            <Numbers />
            <Team />
            <Path />
            <Stories />
            <Questions />
        </>
    )
}

export default Home
