import { useState } from 'react';
import '../styles/Header.css';
import playshifuLogo from '../../public/playshifu-logo.jpg';

const Header = () => {
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [cartCount] = useState(0);

  return (
    <header>
      <div className="announcement-bar">
        <p>Never-before offers - Upto 25% OFF!</p>
      </div>
      
      <div className="main-header">
        <div className="header-content">
          <div className="search-country">
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
            <button className="country-selector">
              <img 
                src={`https://flagcdn.com/${selectedCountry.toLowerCase()}.svg`} 
                alt={selectedCountry}
                width="20"
              />
            </button>
          </div>

          <div className="logo">
            <img src={playshifuLogo} alt="PlayShifu" />
          </div>

          <div className="user-cart">
            <button className="cart-btn">
              <i className="fas fa-shopping-cart"></i>
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>
            <button className="user-btn">
              <i className="fas fa-user"></i>
            </button>
          </div>
        </div>

        <nav className="main-nav">
          <ul>
            <li className="has-dropdown">
              <button>Shop By Category</button>
            </li>
            <li className="has-dropdown">
              <button>Shop By Age</button>
            </li>
            <li>
              <button className="sale-btn">Super Saver Deals</button>
            </li>
            <li>
              <button>Birthday Gifts</button>
            </li>
            <li>
              <button>Return Gifts</button>
            </li>
            <li>
              <button>Shop All</button>
            </li>
            <li className="has-dropdown">
              <button>More</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 