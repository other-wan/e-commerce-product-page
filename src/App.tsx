import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import Header from "components/Header";
import Description from "components/products/Description";
import Gallery from "components/products/Gallery";
import { useToggle } from "usehooks-ts";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const [showGallery, , setShowGallery] = useToggle(false);

  const isLaptop = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="min-h-screen grid grid-rows-[4rem_1fr] lg:grid-rows-[6rem_1fr] relative">
      <header className="row-start-1 row-end-2 flex items-center fixed w-full z-30 bg-white">
        <Header cartCount={cartCount} setCartCount={setCartCount} />
      </header>
      <div className="row-start-2 row-end-3 lg:flex lg:items-center lg:justify-center lg:gap-20 lg:w-[80%] lg:mx-auto">
        <Gallery setShowGallery={setShowGallery} />
        <Description setCartCount={setCartCount} />
      </div>

      {showGallery && isLaptop && (
        <div
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50
          before:content-[''] before:block before:absolute before:bg-black before:w-full before:h-full 
          before:z-[-1] before:opacity-100"
        >
          <Gallery setShowGallery={setShowGallery} showGallery={showGallery} />
        </div>
      )}
    </div>
  );
}

export default App;
