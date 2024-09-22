import { useState } from "react";
import { Footer, HighLight_Template, HomePage, Navigation, ProductCard } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="Main w-full min-h-screen flex items-center justify-center flex-col">
        <div className="header w-full flex flex-col">
          <Navigation />
        </div>
        <div className="main w-full flex-auto">
        <HomePage/>
        </div>
        <div className="footer w-full bg-green-300 flex flex-col">
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
