import { useState } from "react";
import { Footer, HighLight_Template, Navigation, ProductCard } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="Main w-full min-h-screen flex items-center justify-center flex-col">
        <div className="header w-full flex flex-col">
          <Navigation />
        </div>
        <div className="main w-full flex-auto">
          {/* <div className="content w-[80%] m-auto h-full py-10">
            <HighLight_Template HLHeading={"BEST SELLER"} />
            <HighLight_Template HLHeading={"Explore Outfits"}  />
            <HighLight_Template HLHeading={"Shoe Collection"}  />
            <HighLight_Template HLHeading={"Accessories"}  />
          </div> */}
          <ProductCard/>
        </div>
        <div className="footer w-full bg-green-300 flex flex-col">
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
