import './navbar.css';
import { useRef, useState, useEffect } from 'react';
import logo from '../../assets/houselogobg.png'

export default function Navbar() {

    const [onScreen, setOnScreen] = useState(false);
    const navigationMenuProto = useRef('');

    const menuBarProto = useRef('');

    const handleDesent = () => {
        if (onScreen == false) {
            setOnScreen(true);
            menuBarProto.current.style.opacity = 1;
            menuBarProto.current.style.display = 'block';
            menuBarProto.current.style.top = '-7rem';
            console.log(menuBarProto.current.style.top, menuBarProto.current.style.opacity);
        } else if (onScreen == true) {
            menuBarProto.current.style.top = '-10rem';
            menuBarProto.current.style.opacity = 0;
            menuBarProto.current.style.display = 'none';
            setOnScreen(false);
            console.log(menuBarProto.current.style.top, menuBarProto.current.style.opacity);
        }
    }


    return (
        <div className='NavContainer'>
            <nav className="directNavCon">
                <div className='logoDiv'>
                    <img src={logo} alt='logo' />
                </div>
                <div ref={menuBarProto} className='menuCon'>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Properties</li>
                        <li>Agents</li>
                    </ul>
                </div>
                <div className='hamburger'>
                    <span onClick={handleDesent} class="material-symbols-outlined">
                        menu
                    </span>
                </div>
                <div className='btnCon'>
                    <p>Find A Home</p>
                </div>
            </nav>

        </div>
    )
}