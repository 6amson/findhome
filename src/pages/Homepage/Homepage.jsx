import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import './homepage.scss';
import person1 from '../../assets/pic1.png';
import person2 from '../../assets/pic2.png';
import person3 from '../../assets/pic3.png';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'


export default function Homepage() {


    const mainPriParaText = useRef(null);
    const mainsecParaText = useRef(null);
    const mainTerParaText = useRef(null);
    const mainTerParaText1 = useRef(null);
    const mainTerParaText2 = useRef(null);
    const mainTerParaText3 = useRef(null);
    const mainParaPhoto = useRef(null);
    const filterDiv = useRef(null);
    const gridpropDiv = useRef(null);
    const gridpropDiv1 = useRef(null);
    const gridpropDiv2 = useRef(null);
    const gridpropDiv3 = useRef(null);
    const gridpropDiv4 = useRef(null);
    const gridpropDivTop = useRef(null);
    const gridpropDivBot = useRef(null);
    const serviceDivPic = useRef(null);
    const serviceDivButton = useRef(null);

    const isSmallScreen = useMediaQuery({ query: '(max-width: 695px)' });


    useEffect(() => {
        const tl = gsap.timeline();
        gsap.registerPlugin(ScrollTrigger);
       
            tl.to(mainPriParaText.current, {
                duration: 0.5,
                autoAlpha: 1,
                ease: 'easeIn-Out',
                delay: 0.5,
                x: -100
            })
                .to(mainsecParaText.current, {
                    duration: 0.5,
                    autoAlpha: 1,
                    ease: 'easeOut',
                    delay: 0.2,
                    y: -100
                })
                .to(mainParaPhoto.current, {
                    duration: 0.5,
                    autoAlpha: 1,
                    ease: 'power2',
                    scale: 1,
                })
                .to(mainTerParaText.current, {
                    duration: 0.5,
                    autoAlpha: 1,
                    ease: 'bounce',
                    y: 100,
                })
                .to(mainTerParaText1.current, {
                    duration: 0.3,
                    autoAlpha: 1,
                    ease: 'power2',
                    delay: 0.2,
                    y: -50
                })
                .to(mainTerParaText2.current, {
                    duration: 0.3,
                    autoAlpha: 1,
                    ease: 'power2',
                    delay: 0.1,
                    y: -50
                })
                .to(mainTerParaText3.current, {
                    duration: 0.5,
                    autoAlpha: 1,
                    ease: 'power2',
                    delay: 0.1,
                    y: -50
                })

           


            if(!isSmallScreen){
                gsap.to(serviceDivPic.current, {
                    opacity: 1,
                    duration: 1,
                    scale: 1,
                    scrollTrigger: {
                        trigger: serviceDivPic.current,
                        start: "top 300px",
                        end: "center 200px",
                        scrub: true,
                    }
                });

                gsap.to(serviceDivButton.current, {
                    duration: 0.5,
                    autoAlpha: 1,
                    ease: 'ease',
                    y: 100,
                    scrollTrigger: {
                        trigger: serviceDivPic.current,
                        start: "top 300px",
                        end: "center 200px",
                        scrub: true,
                    }
                });


                const tl1 = gsap.timeline({
                    scrollTrigger: {
                        trigger: filterDiv.current,
                        start: "top 80%",
                        end: "bottom 60%",
                        scrub: true,
                    }
                });
    
                tl1.to(filterDiv.current, {
                    opacity: 1,
                    y: 60,
                    duration: 1,
                    scale: 1,
                })

                const tl2 = gsap.timeline({
                    scrollTrigger: {
                        trigger: gridpropDiv1.current,
                        start: "top 90%",
                        end: "bottom 60%",
                        scrub: true,
                        
                    }
                });
    
                tl2.to(gridpropDiv1.current, {
                    opacity: 1,
                    x: -60,
                    duration: 1,
                })

                const tl3 = gsap.timeline({
                    scrollTrigger: {
                        trigger: gridpropDiv2.current,
                        start: "top 90%",
                        end: "bottom 60%",
                        scrub: true,
                    }
                });
    
                tl3.to(gridpropDiv2.current, {
                    opacity: 1,
                    duration: 1,
                    x: 60,
                })
                
                const tl4 = gsap.timeline({
                    scrollTrigger: {
                        trigger: gridpropDiv3.current,
                        start: "top 90%",
                        end: "bottom 60%",
                        scrub: true,
                    }
                });
    
                tl4.to(gridpropDiv3.current, {
                    opacity: 1,
                    duration: 1,
                    x: -60,
                })

                const tl5 = gsap.timeline({
                    scrollTrigger: {
                        trigger: gridpropDiv4.current,
                        start: "top 90%",
                        end: "bottom 60%",
                        scrub: true,
                    }
                });
    
                tl5.to(gridpropDiv4.current, {
                    opacity: 1,
                    duration: 1,
                    x: 60,
                })

                const tl6 = gsap.timeline({
                    scrollTrigger: {
                        trigger: gridpropDivTop.current,
                        start: "top 90%",
                        end: "bottom 60%",
                        scrub: true,
                    }
                });

                tl6.to(gridpropDivTop.current, {
                    opacity: 1,
                    duration: 1,
                })

                const tl7 = gsap.timeline({
                    scrollTrigger: {
                        trigger: gridpropDivBot.current,
                        start: "top 90%",
                        end: "bottom 60%",
                        scrub: true,
                    }
                });

                tl7.to(gridpropDivBot.current, {
                    opacity: 1,
                    duration: 1,
                })

               
            }else if(isSmallScreen){
                gsap.to(serviceDivPic.current, {
                    opacity: 1,
                    duration: 1,
                    scale: 1,
                    scrollTrigger: {
                        trigger: serviceDivPic.current,
                        start: "-900px 300px",
                        end: "-500px 200px",
                        scrub: true,
                    }
                });

                gsap.to(serviceDivButton.current, {
                    duration: 0.5,
                    autoAlpha: 1,
                    ease: 'ease',
                    y: 100,
                    scrollTrigger: {
                        trigger: gridpropDiv.current,
                        start: "-750px 400px",
                        end: "-250px 200px",
                        scrub: true,
                    }
                });


                const tl2 = gsap.timeline({
                    scrollTrigger: {
                        trigger: gridpropDiv1.current,
                        start: "-600px 300px",
                        end: "-400px 100px",
                        scrub: true,
                        // markers: true,
                    }
                });
    
                tl2.to(gridpropDiv1.current, {
                    opacity: 1,
                    x: -60,
                    duration: 1,
                })

                const tl3 = gsap.timeline({
                    scrollTrigger: {
                        trigger: gridpropDiv2.current,
                        start: "-800px 300px",
                        end: "-500px 100px",
                        scrub: true,
                        // markers: true,
                    }
                });
    
                tl3.to(gridpropDiv2.current, {
                    opacity: 1,
                    duration: 1,
                    x: 60,
                })
             
    
                gsap.to(gridpropDiv3.current, {
                    opacity: 1,
                    duration: 1,
                    x: -60,
                    scrollTrigger: {
                        trigger: gridpropDiv3.current,
                        start: "-700px 300px",
                        end: "-400px 200px",
                        scrub: true,
                        // markers: true,
                    }
                })

                // const tl5 = gsap.timeline({
                //     scrollTrigger: {
                //         trigger: gridpropDiv4.current,
                //         start: "top 90%",
                //         end: "bottom 60%",
                //         scrub: true,
                //     }
                // });
    
                gsap.to(gridpropDiv4.current, {
                    opacity: 1,
                    duration: 1,
                    x: 60,
                    scrollTrigger: {
                        trigger: gridpropDiv4.current,
                        start: "-700px 300px",
                        end: "-400px 200px",
                        scrub: true,
                        // markers: true,
                    }
                })

                const tl6 = gsap.timeline({
                    scrollTrigger: {
                        trigger: gridpropDivTop.current,
                        start: "top 90%",
                        end: "bottom 60%",
                        scrub: true,
                    }
                });

                tl6.to(gridpropDivTop.current, {
                    opacity: 1,
                    duration: 1,
                })

                const tl7 = gsap.timeline({
                    scrollTrigger: {
                        trigger: gridpropDivBot.current,
                        start: "top 90%",
                        end: "bottom 60%",
                        scrub: true,
                    }
                });

                tl7.to(gridpropDivBot.current, {
                    opacity: 1,
                    duration: 1,
                })
            }

            // console.log(mainTerParaText1.current)
        



    }, [])



    return (
        <div className='container'>
            <div className='NavDivCont'>
                < Navbar />
            </div>

            <div className='mainContainer'>

                <div className='firstCon'>
                    <div className='firstCon_mainText' ref={mainPriParaText}>
                        <div>
                            <p>Find Your Future Dream Home</p>
                        </div>

                    </div>
                    <div className='firstCon_secText' ref={mainsecParaText}>
                        <div>
                            <p>
                                Looking for the perfect home? We will work to help you find the best Properties
                                for your needs. Be it family home, for vacation, villa or investment property.
                                And we will be with you every step of the way, from finding the right home, to making an offer,
                                to sealing the deal.
                            </p>
                        </div>

                        <div>
                            <p ref={mainTerParaText}>Get Started</p>
                        </div>
                    </div>

                    <div className='firstCon_dataText'>
                        <div ref={mainTerParaText1}>
                            <p>2200<span>+</span></p>
                            <p>Listed properties</p>
                        </div>
                        <div ref={mainTerParaText2}>
                            <p>5200<span>+</span></p>
                            <p>Happy customers</p>
                        </div>
                        <div ref={mainTerParaText3}>
                            <p>200<span>+</span></p>
                            <p>Awards</p>
                        </div>
                    </div>
                </div>

                <div ref={mainParaPhoto} className='secondCon'>
                </div>

            </div>

            <div className='filterDiv'>
                <div ref={filterDiv} className='filter_Div'>
                    <div className='search_first_text'>
                        <p>Search for available properties</p>
                    </div>

                    <div className='searchDiv'>
                        <div>
                            <p>Location</p>
                            <p><span class="material-symbols-outlined">
                                location_on
                            </span></p>
                        </div>

                        <div>
                            <p>Property Type</p>
                            <p><span class="material-symbols-outlined">
                                home_work
                            </span></p>
                        </div>

                        <div>
                            <p>Budget</p>
                            <p><span class="material-symbols-outlined">
                                attach_money
                            </span></p>
                        </div>

                        <div>
                            <p>Search Now</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='latestProperties'>
                <div className='latest_Properties'>
                    <div className='first_latest_properties'>
                        <div>
                            <p>
                                Our Latest Properties
                            </p>
                        </div>
                        <div>
                            <p>
                                Explore all
                                <span class="material-symbols-outlined">
                                    arrow_right_alt
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className='latestPropDiv'>

                        <div ref={gridpropDiv1} className='gridProperties'>

                            <div className='gridPropertiesPic'>
                                <p>For sale</p>
                                <div className='divPic1'>
                                </div>
                            </div>

                            <div className='gridPropertiesText'>
                                <div>
                                    <p><span class="material-symbols-outlined">
                                        location_on
                                    </span></p>
                                    <p><span>Agric, Ikorodu, Lagos</span></p>
                                </div>

                                <div className='miscText'>
                                    <div>
                                        <p>
                                            <span class="material-symbols-outlined">
                                                bed
                                            </span>
                                        </p>
                                        <p>
                                            4 bed
                                        </p>

                                    </div>

                                    <div>
                                        <p>
                                            <span class="material-symbols-outlined">
                                                aspect_ratio
                                            </span>
                                        </p>
                                        <p>
                                            10m x 10m
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <span class="material-symbols-outlined">
                                                trending_up
                                            </span>
                                        </p>
                                        <p>
                                            1800sqft
                                        </p>
                                    </div>
                                </div>

                                <div className='realtorDiv'>
                                    <img src={person1} />
                                    <p>
                                        Rob Jack
                                    </p>
                                </div>
                            </div>


                        </div>

                        <div ref={gridpropDivTop} className='gridProperties'>

                            <div className='gridPropertiesPic'>
                                <p>For sale</p>
                                <div className='divPic2'>
                                </div>
                            </div>

                            <div className='gridPropertiesText'>
                                <div>
                                    <p><span class="material-symbols-outlined">
                                        location_on
                                    </span></p>
                                    <p><span>Oshodi, Lagos</span></p>
                                </div>

                                <div className='miscText'>
                                    <div>
                                        <p>
                                            <span class="material-symbols-outlined">
                                                bed
                                            </span>
                                        </p>
                                        <p>
                                            4 bed
                                        </p>

                                    </div>

                                    <div>
                                        <p>
                                            <span class="material-symbols-outlined">
                                                aspect_ratio
                                            </span>
                                        </p>
                                        <p>
                                            10m x 10m
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <span class="material-symbols-outlined">
                                                trending_up
                                            </span>
                                        </p>
                                        <p>
                                            1800sqft
                                        </p>
                                    </div>
                                </div>

                                <div className='realtorDiv'>
                                    <img src={person2} />
                                    <p>
                                        Pasuma Wonder
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div ref={gridpropDiv2} className='gridProperties'>

                            <div className='gridPropertiesPic'>
                                <p>For sale</p>
                                <div className='divPic3'>
                                </div>
                            </div>

                            <div className='gridPropertiesText'>
                                <div>
                                    <p><span class="material-symbols-outlined">
                                        location_on
                                    </span></p>
                                    <p><span>Mushin, Lagos</span></p>
                                </div>

                                <div className='miscText'>
                                    <div>
                                        <p>
                                            <span class="material-symbols-outlined">
                                                bed
                                            </span>
                                        </p>
                                        <p>
                                            4 bed
                                        </p>

                                    </div>

                                    <div>
                                        <p>
                                            <span class="material-symbols-outlined">
                                                aspect_ratio
                                            </span>
                                        </p>
                                        <p>
                                            10m x 10m
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <span class="material-symbols-outlined">
                                                trending_up
                                            </span>
                                        </p>
                                        <p>
                                            1800sqft
                                        </p>
                                    </div>
                                </div>

                                <div className='realtorDiv'>
                                    <img src={person3} />
                                    <p>
                                        Kunle Afolayan
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='intermission'>
                    <div>
                        <p>
                            Korede Bello
                        </p>
                        <p>Founder</p>
                    </div>

                    <div>
                        <p>
                            Our business foundation is based off our clients needs and also we're gladd
                            that we could share luxury and comfy experience with our clients.
                            <span class="material-symbols-outlined">
                                format_quote
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='servicesDiv'>
                <div className='services_Div'>
                    <div className='services_Div1'>
                        <div className='left_services_Div1'>
                            <p>
                                Villa on Victoria island, Lagos.
                            </p>
                            <div className='miscText2'>
                                <div>
                                    <p>
                                        <span class="material-symbols-outlined">
                                            bed
                                        </span>
                                    </p>
                                    <p>
                                        4Bed
                                    </p>

                                </div>

                                <div>
                                    <p>
                                        <span class="material-symbols-outlined">
                                            aspect_ratio
                                        </span>
                                    </p>
                                    <p>
                                        10mx10m
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        <span class="material-symbols-outlined">
                                            trending_up
                                        </span>
                                    </p>
                                    <p>
                                        1800sqft
                                    </p>
                                </div>
                            </div>
                            <div className='realtorDiv realtorDiv2'>
                                <img src={person3} />

                            </div>

                        </div>
                        <div className='right_services_Div1'>
                            <div ref={serviceDivPic} className='right_services_Div1Pic'>

                            </div>
                        </div>

                    </div>

                    <div ref={gridpropDiv} className='services_Div2'>
                        <div>
                            <p>OUR SERVICES</p>
                            <p>Your Comfort Is Our Priority</p>
                            <p>We can help you find the perfect property.
                                We'll show you a variety of homes in your area and
                                help you choose the best one for you needs.
                            </p>

                            <ul>
                                <li>Wider Audience</li>
                                <li>Free Marketing</li>
                                <li>No valuation</li>
                                <li>Managed viewings</li>
                            </ul>

                            <p ref={serviceDivButton}>
                                See More
                            </p>

                        </div>
                    </div>
                </div>

            </div>

            <div className='latestProperties latestProperties1'>
                <div className='latest_Properties latest_Properties1'>
                    <div className='latestPropDiv latestPropDiv1'>

                        <div ref={gridpropDiv3} className='gridProperties gridProperties1'>

                            <div className='gridPropertiesPic'>

                                <div className='divPic4'>
                                </div>
                            </div>

                            <div className='gridPropertiesText gridPropertiesText1'>
                                <p>4 July, 2023</p>
                                <p>REDEAN asks Nigerians to embrace real estate business</p>
                                <p>See More</p>

                            </div>
                        </div>

                        <div className='gridProperties gridProperties1'>

                            <div className='gridPropertiesPic'>

                                <div className='divPic5'>
                                </div>
                            </div>

                            <div ref={gridpropDivBot} className='gridPropertiesText gridPropertiesText1'>
                                <p>4 July, 2023</p>
                                <p>REDEAN asks Nigerians to embrace real estate business</p>
                                <p>See More</p>

                            </div>
                        </div>

                        <div ref={gridpropDiv4}className='gridProperties gridProperties1'>

                            <div className='gridPropertiesPic'>

                                <div className='divPic6'>
                                </div>
                            </div>

                            <div className='gridPropertiesText gridPropertiesText1'>
                                <p>4 July, 2023</p>
                                <p>REDEAN asks Nigerians to embrace real estate business</p>
                                <p>See More</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <footer>
                < Footer />
            </footer>
        </div>
    )
}