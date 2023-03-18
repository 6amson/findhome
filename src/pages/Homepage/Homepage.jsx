import './homepage.css'
import main1 from '../../assets/main.jpg';
import Navbar from '../../components/Navbar/Navbar'

export default function Homepage() {
    return (
        <div className='container'>
            <div className='NavDivCont'>
                < Navbar />
            </div>

            <div className='mainContainer'>

                <div className='firstCon'>
                    <div className='firstCon_mainText'>
                        <div>
                            <p>Find Your Future Dream Home</p>
                        </div>

                    </div>
                    <div className='firstCon_secText'>
                        <div>
                            <p>
                                Looking for the perfect home? We will work to help you find the best Properties
                                for your needs. Be it family home, for vacation, villa or investment property.
                                And we will be with you every step of the way, from finding the right home, to making an offer,
                                to sealing the deal.
                            </p>
                        </div>

                        <div>
                            <p>Get Started</p>
                        </div>
                    </div>

                    <div className='firstCon_dataText'>
                        <div>
                            <p>2200<span>+</span></p>
                            <p>Listed properties</p>
                        </div>
                        <div>
                            <p>5200<span>+</span></p>
                            <p>Happy customers</p>
                        </div>
                        <div>
                            <p>200<span>+</span></p>
                            <p>Awards</p>
                        </div>
                    </div>
                </div>

                <div className='secondCon'>
                    {/* <img src={main1} /> */}
                </div>

            </div>

            <div className='filterDiv'>
                <div className='filter_Div'>
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
        </div>
    )
}