import React from 'react'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
