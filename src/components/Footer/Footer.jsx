import './footer.scss';
import { useRef, useState, useEffect } from 'react';

export default function Footer() {

    return (
        <div className='footerDiv'>
            <div className='footerDivUpper'>
                <div className='footerUpper1'>
                    <div className='div7'></div>
                    <div>
                        <p>Anthony Joshua</p>
                        <p>I am glad i contacted findhome for my property,
                            their customer service is so good and exceptional. Highly recommended for anyone.
                        </p>
                        <p>Boxer</p>

                    </div>
                </div>

                <div className='footerUpper2'>
                    <div className='div8'></div>
                    <div>
                        <p>Tiwa savage</p>
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
                        <li>Web design</li>
                        <li>Development</li>
                        <li>Hosting</li>
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
                    <h3>Careers</h3>
                    <ul>
                        <li>Job openings</li>
                        <li>Employee success</li>
                        <li>Benefits</li>
                    </ul>
                </div>

            </div>    
        </div>
    )
}