import React from 'react';
import './Header.styles.css';

function Header() {
  return (
    <header>
      <div className='navbar'>
      <div className='header-right-container'>
      <h1 className='logo'>News++</h1>
      <input placeholder='  search...'/>
      <a href='#health' className='tabs'>Health</a>
      <a href='#sports' className='tabs'>Sports</a>
      <a href='#fashion' className='tabs'>Fashion</a>
      </div>
      </div>
    </header>
  )
}

export default Header
