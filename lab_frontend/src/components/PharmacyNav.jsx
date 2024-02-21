import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import '../components/PharmacyNav.css'

function PharmacyNav({handleOnChange}) {
  return (
    <nav className="nav_bar_pharmacy">
      <div className="nav_bar_menu_pharmacy">
          <NavLink activeclassname="active" to="/">
            MedTrack
          </NavLink>

          <Link to={"/labs"}>
          <span>Labs</span>
          </Link>

        <Link to={"/"}>
          <span>Home</span>
        </Link>
        
      </div>
      <div className="nav_bar_searchContainer_pharmacy">
        <input type="search" className="nav_bar_search_pharmacy" placeholder="Search for drug" onChange={handleOnChange}/>
        <CiSearch className="nav_search_icon_pharmacy"/>
      </div>
    </nav>
  );
}

export default PharmacyNav;