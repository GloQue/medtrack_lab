import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import "../components/LabNav.css";

function LabNav({handleSearchField}) {
  return (
    <nav className="nav_bar">
      <div className="nav_bar_menu">
          <Link to={"/"}>
            <span>Home</span>
          </Link>

          <Link to={"/pharmacy"}>
            <span>Pharmacy</span>
          </Link>
      </div>
      <div className="nav_bar_searchContainer">
        <input
          type="search"
          className="nav_bar_search"
          placeholder="Search lab name"
          onChange={handleSearchField}
        />
        <CiSearch className="nav_search_icon" />
      </div>
    </nav>
  );
}

export default LabNav;
