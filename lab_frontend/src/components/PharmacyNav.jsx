import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import '../components/PharmacyNav.css'

function PharmacyNav() {
  return (
    <nav className="nav_bar_pharmacy">
      <div className="nav_bar_menu_pharmacy">
          <NavLink activeclassname="active" to="/">
            MedTrack
          </NavLink>

        <Link to={"/"}>
          <li>Home</li>
        </Link>
        
      </div>
      <div className="nav_bar_searchContainer_pharmacy">
        <input type="search" className="nav_bar_search_pharmacy" placeholder="Search drug name" />
        <CiSearch className="nav_search_icon_pharmacy" />
      </div>
    </nav>
  );
}

export default PharmacyNav;