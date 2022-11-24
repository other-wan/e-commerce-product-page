import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "splide.css";

import { ProductContext } from "providers/products";
import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useContext,
  useLayoutEffect,
  useRef,
} from "react";
import { useMediaQuery } from "usehooks-ts";

interface IGallery {
  setShowGallery: Dispatch<SetStateAction<boolean>>;
}

const Gallery: FunctionComponent<IGallery> = ({ setShowGallery }) => {
  const { state } = useContext(ProductContext);

  const mainRef = useRef<Splide>(null);
  const thumbsRef = useRef<Splide>(null);

  useLayoutEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const isLaptop = useMediaQuery("(min-width:1024px)");

  return (
    <section className="lg:flex-initial lg:w-[40%]">
      <Splide
        onClick={() => setShowGallery(true)}
        className="-pointer"
        ref={mainRef}
        options={{
          arrows: !isLaptop,
          type: "slide",
          perPage: 1,
          pagination: false,
          fixedHeight: "50vh",
          classes: {
            arrow: "splide__arrow bg-white",
          },
        }}
      >
        {state.product.images.map((src) => (
          <SplideSlide key={src}>
            <img
              className="w-full h-full object-cover object-top"
              src={src}
              alt="Sneakers"
            />
          </SplideSlide>
        ))}
      </Splide>

      <Splide
        className="mt-8 cursor hidden lg:block"
        onClick={() => null}
        ref={thumbsRef}
        options={{
          type: "slide",
          pagination: false,
          arrows: false,
          rewind: true,
          gap: 10,
          perPage: 4,
          fixedHeight: 70,
          // cover: true,
          isNavigation: true,
          classes: {},
        }}
      >
        {state.product.thumbnails.map((src) => (
          <SplideSlide key={src}>
            <img
              className="w-full h-full object-cover object-top"
              src={src}
              alt="Sneakers"
            />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default Gallery;
