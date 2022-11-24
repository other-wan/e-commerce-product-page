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
import Close from "components/icons/Close";

interface IFullGallery {
  setShowGallery: Dispatch<SetStateAction<boolean>>;
  showGallery: boolean;
}

const FullGallery: FunctionComponent<IFullGallery> = ({
  setShowGallery,
  showGallery,
}) => {
  const { state } = useContext(ProductContext);

  const mainRef = useRef<Splide>(null);
  const thumbsRef = useRef<Splide>(null);

  useLayoutEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  return (
    <section className="lg:flex-initial lg:w-[35%]">
      {showGallery && (
        <button
          className="block ml-auto mb-2"
          onClick={() => setShowGallery(false)}
        >
          <Close color="#FFFFFF" />
        </button>
      )}
      <Splide
        onClick={() => setShowGallery(true)}
        className="mb-8 cursor-pointer"
        ref={mainRef}
        options={{
          arrows: true,
          type: "slide",
          perPage: 1,
          pagination: false,
          width: "100%",
          fixedHeight: "65vh",
          fixedWidth: "100%",
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
        onClick={() => null}
        ref={thumbsRef}
        options={{
          type: "slide",
          pagination: false,
          arrows: false,
          rewind: true,
          gap: 10,
          perPage: 4,
          fixedHeight: 80,
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

export default FullGallery;
