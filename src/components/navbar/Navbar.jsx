import React, { useContext } from 'react';
import logo from '../../assets/logo3.png';
import arrow_icon from '../../assets/arrow_icon.png';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';

function Navbar() {
    const { setCurrency } = useContext(CoinContext);

    const currencyHandler = (event) => {
        const selectedCurrency = event.target.value;
        switch (selectedCurrency) {
            case "usd":
                setCurrency({ name: "usd", symbol: "$" });
                break;
            case "eur":
                setCurrency({ name: "eur", symbol: "€" });
                break;
            case "inr":
                setCurrency({ name: "inr", symbol: "₹" });
                break;
            default:
                setCurrency({ name: "usd", symbol: "$" });
                break;
        }
    };

    return (
        <div className="navbar">
          <Link to={'/'}>
            <img src={logo} alt='logo' className='logo'/>
          </Link>
            <ul>
                <Link to={'/'}><li>HOME</li></Link>
                <Link to={'/aboutus'}>ABOUT US</Link>
                <Link to={'/contactus'}>CONTACT US</Link>
            </ul>
            <div className="nav-right">
                <select onChange={currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="inr">INR</option>
                </select>
                <button>Sign up <img src={arrow_icon} alt=''/></button>
            </div>
        </div>
    );
}

export default Navbar;
