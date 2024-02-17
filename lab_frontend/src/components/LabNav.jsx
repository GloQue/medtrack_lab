/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import "../components/LabNav.css";

function LabNav({ handleOnChange }) {
  return (
    <nav className="nav_bar">
      <div className="nav_bar_menu">
          <NavLink activeclassname="active" to="/">
            MedTrack
          </NavLink>

        <Link to={"/"}>
          <li>Home</li>
        </Link>
        
      </div>
      <div className="nav_bar_searchContainer">
        <input
          type="search"
          className="nav_bar_search"
          placeholder="Search lab name"
          onChange={handleOnChange}
        />
        <CiSearch className="nav_search_icon" />
      </div>
    </nav>
  );
}

export default LabNav;
