import React from 'react'
import Image from '../../assets/1.jpeg'

function HighLight_Template({HLHeading, products=[]}) {
  return (
    <div className='w-full h-[400px] px-5 py-4'>
        <div className="headingBox w-full h-[10%]  flex items-center justify-between">
            <h1 className='font-normal text-3xl'>{HLHeading}</h1>
            <a id='hlHyperLink' href="/" className='font-normal text-md'>Explore</a>
        </div>
        <div className="imagesBox w-full h-[85%] py-3">
            <div className="imagesWrapper w-full h-[400px] flex items-center justify-center gap-6">
                <div className="image w-[200px] h-full object-cover">
                    <img src={Image} className='w-full' alt="" />
                </div>
                <div className="image w-[200px] h-full object-cover">
                    <img src={Image} className='w-full' alt="" />
                </div>
                <div className="image w-[200px] h-full object-cover">
                    <img src={Image} className='w-full' alt="" />
                </div>
                <div className="image w-[200px] h-full object-cover">
                    <img src={Image} className='w-full' alt="" />
                </div>
                <div className="image w-[200px] h-full object-cover">
                    <img src={Image} className='w-full' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HighLight_Template