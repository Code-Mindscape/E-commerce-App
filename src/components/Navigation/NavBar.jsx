import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

function NavBar() {
  return (
    <div className='w-full py-4 bg-zinc-100 flex'>
        <div className="searchBar w-[80%] gap-1 h-full flex items-center justify-center">
            <input 
            className='text-sm w-[60%] shadow-md focus:border-[2px] outline-none border-zinc-800/35 border-[1px] py-2 px-2'
            type="search" 
            placeholder='Search products here'/>
            <input 
            className='cursor-pointer text-sm outline-none shadow-md bg-zinc-800 text-white py-2 px-3'
            type="submit"
            value={"search"} 
            placeholder='Search products here'/>
        </div>
        <div className="CartBtn w-[20%] h-full flex items-center justify-center">
            <a href="/" className='cursor-pointer inline-block shadow-md py-3 px-5 rounded-md bg-white'><FaCartShopping/></a>
        </div>
    </div>
  )
}

export default NavBar