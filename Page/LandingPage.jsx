import React from 'react';
import { Fragment } from 'react';
import NavBar from '../Components/Navbar';
import LearnMore from '../Components/LearnMore';
import Models from '../Components/Models';
import Main from '../Components/Main';
import Section1 from '../Components/Section-1';
import Section2 from '../Components/Section-2';
import Section3 from '../Components/Section-3';
import Footer from '../Components/Footer';

const LandingPage = () => {
    return <Fragment>
            <NavBar />
            <LearnMore />
            <Models />
            <Main />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
        </Fragment>


    ;
}

export default LandingPage;
