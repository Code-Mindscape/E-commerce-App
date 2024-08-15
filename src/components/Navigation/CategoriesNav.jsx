import React from 'react'

function CategoriesNav() {
  return (
    <div className='categoryNav w-full py-3 bg-zinc-900 flex items-center justify-center'>
        <ul className='categoryUL flex text-white w-[85%] gap-5'>
            <li><a href="/">Shirts</a></li>
            <li><a href="/">Pants</a></li>
            <li><a href="/">Shoes</a></li>
            <li><a href="/">Accessories</a></li>
        </ul>
    </div>
  )
}

export default CategoriesNav