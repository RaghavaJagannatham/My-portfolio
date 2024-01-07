import React, { useState } from "react"
import "./header.css"

const Header = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <img id="logo" src='https://events.dhigna.com/storage/settings/November2023/dFsJR7Xvn3U0FzGNo6Lh.png' alt='' />
            </div>
            {/*<ul className='flexSB'>*/}
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>Categories</a>
              </li>
              <li>
                <a href='/'>Registration</a>
              </li>
              <li>
                <a href='/'>Login</a>
              </li>
              <li>
                <a href="/">
                
                  <input type="text" placeholder="Search..." className="search-input" />
                  <button className="search-button">Search</button>
                
                </a>
                
              </li>
              
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
            {/* <i className='fa fa-search'></i> */}
            <i class='fas fa-bell'></i>
            <i className='fas fa-user'></i>
            
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
