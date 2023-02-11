import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Import Css File
import './Navbar.css'

// Import Icons
import { AiOutlineBars } from 'react-icons/ai'

function Navbar() {

  const [isOpen,setIsOpen]=useState(false);
  const [screenWidth,setScreenWidth]=useState(window.innerWidth);

  const toggleNav=()=>{
    setIsOpen(!isOpen);
  }

  useEffect(()=>{
    const change=()=>{
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize',change)

    return(()=>{
      window.removeEventListener('resize',change)
    })

  },[]);


  return (
    <div className='navContainer'>
      <div className="navigation">
        <div className="navHome">
          <h1>Icon</h1>
        </div>
        {(isOpen || screenWidth > 760) && (
          <div className="navList">
            <ul>
              <Link to={'/'}>
                <li onClick={toggleNav}>Home</li>
              </Link>
              <Link to={'/List'}>
                <li onClick={toggleNav}>Item List</li>
              </Link>
              <Link to={'/Contact'}>
                <li onClick={toggleNav}>Contact Us</li>
              </Link>
            </ul>
          </div>
          )}
        </div>
      <div className="bar" onClick={toggleNav}>
        <AiOutlineBars className='icon'/>
      </div>
    </div>
  )
}

export default Navbar
