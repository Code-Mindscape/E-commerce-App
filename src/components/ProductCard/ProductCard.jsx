import QuantitySelector from './QuantitySelector'
import { Rating } from '@mui/material'
import React from 'react'

function ProductCard() {
  return (
    <div className='w-full h-screen  bg-black flex items-center justify-center'>
        <div className="content w-[85%] h-[85%] overflow-hidden flex items-center justify-center rounded-xl bg-zinc-50">
            <div className="productDetails w-[60%] px-10 py-10 h-full">
                <div className="textBox h-[40%] w-full">
                      <h1 className='text-6xl leading-snug font-medium'>Product Heading</h1>
                      <p className='text-2xl'>Collection Name</p>
                      <div className='py-4 flex items-center justify-start'>
                      <Rating name="half-rating" defaultValue={4} precision={1} />
                      <p>(343)</p>
                      </div>
                </div>
                <div className="btnsBox h-[60%] w-full">
                      <h1 className='text-4xl text-zinc-800 font-medium'>99.99$</h1>
                      <QuantitySelector/>
                      <div className="CTA h-[40%] w-full flex gap-3 items-center justify-start">
                      <a href="" className='py-3 px-6 bg-black text-white rounded-md'>Buy Now</a>
                      <a href="" className='py-3 px-6 hover:bg-zinc-200 transition-all rounded-md '>Add to Cart</a>
                      </div>
                </div>
            </div>
            <div className="productVisuals w-[40%] h-full bg-green-200 ">

            </div>
        </div>
    </div>
  )
}

export default ProductCard