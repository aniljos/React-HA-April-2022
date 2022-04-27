
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppThemeContext } from '../context/AppThemeContext';
import ThemeSwitcherButton from '../context/ThemeSwitcherButton';


const Header = React.memo(()=>{

    const theme = useContext(AppThemeContext);

    function selectTheme(){
        if(theme.state.mode === "light"){
            return "navbar-light bg-light"
        }

        if(theme.state.mode === "dark"){
            return "navbar-dark bg-dark"
        }

        return "navbar-dark bg-dark"

    }

    return (
        <nav className={`navbar navbar-expand-lg ${selectTheme()}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              React
            </a>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/counter">
                  Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/search">
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/hooks">
                  React Hooks
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/gadgets">
                  Gadget Store
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/gadgets-redux">
                  Gadget Store Redux
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/cart">
                  View Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/reducer">
                  Reducer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/customers">
                  Customers
                </Link>
              </li>
              <li className="nav-item">
                <ThemeSwitcherButton/>
              </li>
            </ul>
          </div>
        </nav>
    );
});

export default Header;