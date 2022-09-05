
import { useContext, useReducer } from "react";
import SneakerContext from "../../../contexts/SneakerContext";
import "./Product.css";


const reducer = (state, action) => {
    switch(action.type) {
        case "INCREASE":
            return state += 1;

            case "DECREASE":
                return state -= 1;

            case "RESET":
                return state = 0;

        default:
            return state;
    }
}

const Product = ({iconAdd, iconMinus, iconCart}) => {
    const {sneakers, setSneakersCount } = useContext(SneakerContext);
    const [state, dispatch] = useReducer(reducer, 0);

    return ( 
        <section className="product">
            <article className="product-desc">
                <h1>{sneakers.company}</h1>
                <h2>{sneakers.type}</h2>
                <p>{sneakers.description}</p>
            </article>
            <section className="add-to-card" >
                <div className="product-price container-between">
                    <h4>{`${sneakers.price.original_price * sneakers.price.slashed_rate}.00`}</h4>
                    <h6 className="b-pale-orange ">{sneakers.price.slashed_rate * 100}%</h6>
                    <p className="price-text">${sneakers.price.original_price}</p>
                </div>
                <form action="" onSubmit={(e) => {
                    e.preventDefault();

                    setSneakersCount(state);
                }}>
                    <div className="product-count b-grayish-blue container-between">
                        <button type="button" className="btn-increase" onClick={() => dispatch({type: "INCREASE"})}>
                            <img src={iconAdd} alt="Add" />
                        </button>

                        <h3 className="count">{state}</h3>

                        <button type="button" className="btn-decrease" onClick={() => dispatch({type: "DECREASE"})} disabled={state <= 0}>
                            <img src={iconMinus} alt="Minus" />
                        </button>
                    </div>

                    <div className="btn-container container-center">
                        <button type="submit" className="btn-primary container-center">
                            <img src={iconCart} alt="Cart" />
                            Add to cart
                        </button>
                    </div>
                </form>
            </section>
        </section>
     );
}
 
export default Product;