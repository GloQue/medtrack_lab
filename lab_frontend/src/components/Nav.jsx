/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import "../components/Nav.css";

function Nav({ handleOnChange }) {
  return (
    <nav className="nav_bar">
      <div className="nav_bar_menu">
        <span>
          <NavLink activeclassname="active" to="/">
            MedTrack
          </NavLink>
        </span>

        <Link to={"/"}>
          <li>Home</li>
        </Link>

        <Link to={"/lab"}>
          <li>Labs</li>
        </Link>
      </div>
      <div className="nav_bar_searchContainer">
        <input
          type="search"
          className="nav_bar_search"
          placeholder="Search by Name or Code"
          onChange={handleOnChange}
        />
        <CiSearch className="nav_search_icon" />
      </div>
    </nav>
  );
}

export default Nav;
