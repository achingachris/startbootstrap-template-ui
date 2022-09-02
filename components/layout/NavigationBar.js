import React from 'react'
import Image from 'next/image'

const NavigationBar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <Image
            src='/transparent-logo.png'
            width={40}
            height={40}
            alt='Aries Air Transparent Logo'
          />
        </a>

        {/* <a class="navbar-brand" href="#">
      <img src="https://placeholder.pics/svg/150x50/888888/EEE/Logo" alt="..." height="36">
    </a> */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Click Me!
              </a>
              <div
                className='dropdown-menu dropdown-menu-end animate slideIn'
                aria-labelledby='navbarDropdown'
              >
                <a className='dropdown-item' href='#'>
                  Action
                </a>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
                <div className='dropdown-divider' />
                <a className='dropdown-item' href='#'>
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
