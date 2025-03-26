import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '/public/images/testimonial/1.jpg';
import image2 from '/public/images/testimonial/2.jpg';
import image3 from '/public/images/testimonial/3.jpg';
import liderd12 from "/public/images/slider/1.png"

import Shape1 from "/public/images/testimonial/star.svg";
import Shape2 from "/public/images/testimonial/star-1.svg";
import Shape3 from "/public/images/testimonial/quote.png";
import Image from 'next/image';

const TestimonialData = [
    {
        id: "01",
        text: "Secure transactions and versatile options. My customers love the smooth checkout process. Thanks for boosting our online sales!",
        subtitle: "07 Mar 2023",
        title: "David Martinez",
        image: image1
    },
    {
        id: "02",
        text: "Impressed with the seamless payment experience. This gateway is a game-changer for my business. Kudos to the team!",
        subtitle: "27 Apr 2022",
        title: "Michael Brown",
        image: image2
    },
    {
        id: "03",
        text: "Reliable and user-friendly. The payment gateway integration was effortless, and the support team was responsive. Highly recommended for businesses seeking hassle-free transactions.",
        subtitle: "12 Jun 2022",
        title: "Sophia Johnson",
        image: image3
    },
  
]



const TestimonialSection = () => {
    const ClickHandlar = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        infinite: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                dots: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                dots: true,
            }
        },

        ]
    };
    return (
        <section className="testimonial-section section-padding">
            <div className="container flex flex-col gap-6">
                <div className="row align-content-center bg-blue-200 p-4">
                    <div className="col-xl-6 col-12">
                        <div className="section-title">
                            <h2>Discover Our Trusted Payment Solutions</h2>
                            <p>Innovating seamless transactions. Trust our payment gateway for secure, global, and user-centric solutions.!. </p>
                            {/* <div className="testimonial-btn">
                                <Link href="/about" className="theme-btn" onClick={ClickHandlar}> Get in Touch <i className="ti-arrow-right"></i></Link>
                            </div> */}
                            
                        </div>
                        
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="image">
                            <Image src={liderd12} alt="" />
                            <div className="bg-shape">
                                {/* <svg width="652" height="668" viewBox="0 0 652 668" fill="none">
                                    <path
                                        d="M0 367.646C0 360.448 3.86838 353.805 10.129 350.252L622.129 2.95135C635.462 -4.6148 652 5.01565 652 20.3457V648C652 659.046 643.046 668 632 668H20C8.95432 668 0 659.046 0 648V367.646Z" />
                                </svg> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-content-center bg-blue-200 p-4">
                    <div className="col-xl-6 col-12">
                        <div className="image">
                            <Image src={liderd12} alt="" />
                            {/* <div className="bg-shape">
                                <svg width="652" height="668" viewBox="0 0 652 668" fill="none">
                                    <path
                                        d="M0 367.646C0 360.448 3.86838 353.805 10.129 350.252L622.129 2.95135C635.462 -4.6148 652 5.01565 652 20.3457V648C652 659.046 643.046 668 632 668H20C8.95432 668 0 659.046 0 648V367.646Z" />
                                </svg>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="section-title">
                            <h2>Transparent Insights: Unlock Actionable Statistics with Our Payment Gateway</h2>
                            <p>Gain transparent insights into your transactions and business performance with our advanced payment gateway analytics. 
                                Empower informed decisions for growth and success. </p>
                            <div className="testimonial-btn">
                                <Link href="/about" className="theme-btn" onClick={ClickHandlar}> Learn More <i className="ti-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div> 
                    <div className="testimonial-slider">
                    <div className="section-title pt-30">
                            <h2>Satisfied Users</h2>
                            <p>Join thousands of satisfied users who rely on our payment gateway
                            for smooth, secure, and efficient transactions.</p>
                        </div>
                            <Slider {...settings}>
                                {TestimonialData.map((Testimonials, tky) => (
                                    <div className="item" key={tky}>
                                        <div className="client">
                                            <div className="image">
                                                <Image src={Testimonials.image} alt="" />
                                            </div>
                                            <div className="text">
                                                <h2>{Testimonials.title}</h2>
                                                <span>{Testimonials.subtitle}</span>
                                            </div>
                                        </div>
                                        <div className="reting">
                                            <ul>
                                                <li><Image src={Shape1} alt="" /></li>
                                                <li><Image src={Shape1} alt="" /></li>
                                                <li><Image src={Shape1} alt="" /></li>
                                                <li><Image src={Shape1} alt="" /></li>
                                                <li><Image src={Shape2} alt="" /></li>
                                            </ul>
                                            <span>(4.0)</span>
                                        </div>
                                        <p>{Testimonials.text}</p>
                                        <div className="icon">
                                            <Image src={Shape3} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                </div>
            </div>
        </section>
        
    );
}

export default TestimonialSection







