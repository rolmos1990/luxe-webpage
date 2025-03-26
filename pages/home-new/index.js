import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar-new/Navbar'
import Hero from '../../components/hero-new/hero-new';
import ServiceSection from '../../components/ServiceSection-new/ServiceSection';
import TestimonialSection from '../../components/TestimonialSection(Solutionpay)/TestimonialSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Phone from '/public/images/telephone.svg'
import Logo from '/public/images/logo.svg'

const HomePage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} telephone={Phone} hclass={"wpo-site-header s1"} />
            <Hero />
            <ServiceSection hclass={'services-section'} />
            <TestimonialSection />
            <Footer />
            <Scrollbar />
            <CursorMaus/>
        </Fragment>
    )
};
export default HomePage;