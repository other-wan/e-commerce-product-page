import {
  Dispatch,
  FormEvent,
  FunctionComponent,
  SetStateAction,
  useContext,
} from "react";
import { ProductContext } from "providers/products";

import Minus from "components/icons/Minus";
import Cart from "components/icons/Cart";
import Plus from "components/icons/Plus";

interface IDescription {
  setCartCount: Dispatch<SetStateAction<number>>;
}

const Description: FunctionComponent<IDescription> = ({ setCartCount }) => {
  const { state, dispatch } = useContext(ProductContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setCartCount(state.count);
  };

  return (
    <section className="w-[90%] mx-auto py-8  lg:mx-0 lg:flex-initial lg:w-[45%]">
      <article className="mb-7">
        <h1 className="text-xs tracking-widest uppercase mb-2 text-orange font-semibold">
          Sneaker company
        </h1>
        <h2 className="text-3xl mb-2 font-bold">
          Fall Limited Edition Sneakers
        </h2>
        <p className="text-dark-grayish-blue font-medium">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </article>
      <div className="flex items-center justify-between gap-4 mb-7 lg:flex-wrap">
        <p className="text-2xl font-bold">$125.00</p>
        <p className="box-border w-min h-min mr-auto py-1 px-2 bg-pale-orange text-orange text-xs rounded-md font-semibold tracking-widest">
          50%
        </p>
        <p className="font-semibold text-grayish-blue line-through lg:basis-full">
          $250.00
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="lg:flex lg:items-center lg:gap-5"
      >
        <div className="flex items-center justify-between bg-light-grayish-blue mb-5 rounded-lg box-border p-4 lg:w-[20rem] lg:m-0">
          <button
            type="button"
            className="hover:opacity-60"
            disabled={state.count <= 0}
            onClick={() => dispatch({ type: "decrement", payload: 1 })}
          >
            <Minus disable={state.count <= 0} />
          </button>
          <span className="font-semibold">{state.count}</span>
          <button
            type="button"
            className="hover:opacity-60"
            onClick={() => dispatch({ type: "increment", payload: 1 })}
          >
            <Plus />
          </button>
        </div>

        <button className="flex items-center justify-center gap-4 w-full bg-orange hover:opacity-60 px-6 py-4 rounded-lg text-white font-semibold">
          <Cart color="#FFFFFF" />
          Add to cart
        </button>
      </form>
    </section>
  );
};

export default Description;
