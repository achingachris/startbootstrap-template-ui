import React from 'react'
import Image from 'next/image'

const Footer = () => {
  // get current year
  const currentYear = new Date().getFullYear()
  return (
    <div className='container'>
      <footer className='row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
        <div className='col mb-3'>
          <p className='d-flex align-items-center mb-3 link-dark text-decoration-none'>
            <Image
              src='/transparent-logo.png'
              width={40}
              height={40}
              alt='Aries Air Transparent Logo'
            />
          </p>
          <p className='text-muted'>AriesAir© {currentYear}</p>
        </div>
        <div className='col mb-3' />
        <div className='col mb-3'>
          <h5>Section</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-muted'>
                Home
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-muted'>
                Features
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-muted'>
                Pricing
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-muted'>
                FAQs
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-muted'>
                About
              </a>
            </li>
          </ul>
        </div>
        <div className='col mb-3'>
          <h5>Section</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-muted'>
                Home
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-muted'>
                Features
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-muted'>
                Pricing
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-muted'>
                FAQs
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-muted'>
                About
              </a>
            </li>
          </ul>
        </div>
        <div className='col mb-3'>
          <h5>Section</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-muted'>
                Home
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-muted'>
                Features
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-muted'>
                Pricing
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-muted'>
                FAQs
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-muted'>
                About
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
