import React from "react";
import {HighLight_Template, HomeImgSlider} from "../index";
import {ProductCard} from "../index";
import LoginPage from "../Admin/LoginPage";

export default function HomePage(){
    return(

        <div className="main w-full flex-auto">
        <div className="content w-[80%] m-auto h-full py-10">
        <div className='w-full h-[500px] bg-red-200'>
            <HomeImgSlider/>
        </div>
          <HighLight_Template HLHeading={"BEST SELLER"} />
          <HighLight_Template HLHeading={"Explore Outfits"}  />
          <HighLight_Template HLHeading={"Shoe Collection"}  />
        </div>
        <LoginPage/>
      </div>
        
    )
}