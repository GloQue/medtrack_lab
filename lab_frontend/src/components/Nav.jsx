import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import '../components/Nav.css'

function Nav({filtered}) {

  return (
    <nav className='nav_bar'>
      <div className='nav_bar_menu'>
        <span><NavLink activeclassname='active' to='/'>MedTrack</NavLink></span>
      </div>
      <div className='nav_bar_searchContainer'>
        <input type='search' className='nav_bar_search' placeholder='Search by Name or Code' onChange={filtered}/>
        <CiSearch className='nav_search_icon'/>
      </div>   
    </nav>
  )
}

export default Nav

