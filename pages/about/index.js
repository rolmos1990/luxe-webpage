import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import VideosSection from '../../components/VideosSection/VideosSection';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo-2.svg'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import FunfactSecion from '../../components/FunfactSection/FunfactSection';
import CustomersSection from '../../components/CustomersSection/CustomersSection';


const AboutPage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
             <FunfactSecion hclass="funfact-section" />
            <About />
            <VideosSection />
            <TestimonialSection />
            <CustomersSection />
            <CtaSection />
            <BlogSection />
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
    )
};
export default AboutPage;
