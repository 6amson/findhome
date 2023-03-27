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