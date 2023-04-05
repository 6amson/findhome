import './footer.scss';
import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';


export default function Footer() {

    const footerPic1 = useRef(null);
    const footerPic2 = useRef(null);
    const footerDiv = useRef(null);
    const isSmallScreen = useMediaQuery({ query: '(max-width: 695px)' });

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if(!isSmallScreen){
            gsap.to(footerDiv.current, {
                backgroundColor:  '#010417',
                duration: 1,
                scrollTrigger: {
                    trigger: footerDiv.current,
                    start: "-200px 300px",
                    end: "-50px 200px",
                    scrub: true,
                }
            })

            gsap.to(footerPic1.current, {
                x: '200px',
                autoAlpha: 1,
                duration: 1,
                ease: 'easeIn-Out',
                scrollTrigger: {
                    trigger: footerDiv.current,
                    start: "-200px 300px",
                    end: "-50px 200px",
                    scrub: true,
                }
            })

            gsap.to(footerPic2.current, {
                y: '100px',
                autoAlpha: 1,
                duration: 1,
                ease: 'easeOut',
                scrollTrigger: {
                    trigger: footerDiv.current,
                    start: "-200px 300px",
                    end: "-50px 200px",
                    scrub: true,
                }
            })
        }else if(isSmallScreen){
            gsap.to(footerDiv.current, {
                backgroundColor:  '#010417',
                duration: 1,
                scrollTrigger: {
                    trigger: footerDiv.current,
                    start: "-800px 300px",
                    end: "-600px 200px",
                    scrub: true,
                }
            })
        }

    }, [])

    return (
        <div className='footerDiv'>
            <div ref={footerDiv} className='footerDivUpper'>
                <div className='footerUpper1'>
                    <div ref={footerPic1} className='div7'></div>
                    <div>
                        <p>Anthony Joshua</p>
                        <p>I am glad i contacted findhome for my property,
                            their customer service is so good and exceptional. Highly recommended for anyone.
                        </p>
                        <p>Boxer</p>

                    </div>
                </div>

                <div className='footerUpper2'>
                    <div ref={footerPic2} className='div8'></div>
                    <div>
                        <p>Simisola</p>
                        <p>I am glad i contacted findhome for my property,
                            their customer service is so good and exceptional. Highly recommended for anyone.
                        </p>
                        <p>Artist</p>

                    </div>
                </div>
            </div>

            <div className='footerDivLower'>
                <div className="item">
                    <h3>Services</h3>
                    <ul>
                        <li>Real estate evaluation</li>
                        <li>Rentals</li>
                        <li>Lease</li>
                        <li>Morgage</li>
                    </ul>
                </div>

                <div className="item">
                    <h3>About</h3>
                    <ul>
                        <li>Company</li>
                        <li>Team</li>
                        <li>Legacy</li>
                    </ul>
                </div>

                <div className="item">
                    <h3>Contact</h3>
                    <ul>
                        <li>No 9, life is but a game street, Off Clifford Avenue</li>
                        <li>Lesotho, Porto, frodo, Obrigado,</li>
                        <li>Cardiff, England</li>
                        <li>email: mrmoneyrora@ecstatic.com</li>
                    </ul>
                </div>

            </div>    
        </div>
    )
}