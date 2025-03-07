import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {


  const {userInfo} = useSelector((state) => state.auth)

  return (
    <div className="header">
      <Link>
        <img
          className="header_logo"
          src=" http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

        <div className="header_search">
          <input className="header_searchInput" type="text" />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      

      <div className="header_nav">
        <Link to="./login">
          <div className="header_option">
            <span className="header_optionLineOne">Hello {userInfo  ? "Jed" : "Guest" }</span>
            <span className="header_optionLineTwo" >{userInfo ? "Sign Out" : "Sign Out" }</span>
          </div>
        </Link>
        <Link to="./Orders">
          <div className="header_option">
            <span className="header_optionLineOne">Returns2</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">Orders</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <FontAwesomeIcon icon={faCartShopping} />
            <span>5</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
