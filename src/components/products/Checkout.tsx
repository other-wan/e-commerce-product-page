import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useContext,
  useRef,
} from "react";
import { ProductContext } from "providers/products";
import Delete from "components/icons/Delete";
import classNames from "classnames";

interface ICheckout {
  cartCount: number;
  setCartCount: Dispatch<SetStateAction<number>>;
}

const Checkout: FunctionComponent<ICheckout> = ({
  cartCount,
  setCartCount,
}) => {
  const { state, dispatch } = useContext(ProductContext);
  const checkoutRef = useRef<HTMLDivElement>(null);

  console.log(state.count);

  return (
    <div
      ref={checkoutRef}
      className="absolute top-20 right-1/2 translate-x-1/2 w-[90%] max-w-xs min-h-[15rem] 
      bg-white rounded-lg shadow-lg z-20"
    >
      <h3 className="p-6 text-black font-bold border-b border-grayish-blue border-opacity-60">
        Cart
      </h3>
      <div className={classNames("p-6", { ["flex "]: cartCount <= 0 })}>
        {cartCount > 0 ? (
          <>
            <div className="flex items-center justify-between gap-5 mb-8">
              <img
                className="w-16 h-16 rounded-lg"
                src={state.product.thumbnails[0]}
                alt="Product"
              />
              <article className="">
                <p className="line-clamp-1 text-dark-grayish-blue font-medium">
                  Fall Limited Edition Sneakers
                </p>
                <p className="text-dark-grayish-blue font-medium">
                  {`125$ x ${cartCount}`}&nbsp;&nbsp;
                  <span className="text-black font-bold">$325</span>
                </p>
              </article>
              <button
                onClick={() => {
                  dispatch({ type: "delete", payload: 0 });
                  setCartCount(0);
                }}
              >
                <Delete />
              </button>
            </div>

            <button className="w-full bg-orange hover:opacity-60 px-6 py-4 rounded-lg text-white font-semibold">
              Checkout
            </button>
          </>
        ) : (
          <span className="block flex-1 text-center text-dark-grayish-blue font-bold">
            Your cart is empty
          </span>
        )}
      </div>
    </div>
  );
};

export default Checkout;
