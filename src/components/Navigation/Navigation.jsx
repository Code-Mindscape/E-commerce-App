import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import CategoriesNav from './CategoriesNav'

function Navigation() {
  return (
    <div className='w-full flex flex-col'>
        <Header/>
        <NavBar/>
        <CategoriesNav/>
    </div>
  )
}

export default Navigation