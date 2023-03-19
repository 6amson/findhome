import './homepage.css';
import person1 from '../../assets/pic1.png';
import person2 from '../../assets/pic2.png';
import person3 from '../../assets/pic3.png';
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

                        <div className='gridProperties'>

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

                        <div className='gridProperties'>

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


                        <div className='gridProperties'>

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
        </div>
    )
}