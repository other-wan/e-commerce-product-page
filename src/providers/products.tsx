import {
  createContext,
  Dispatch,
  FunctionComponent,
  ReactNode,
  useReducer,
} from "react";
import { IProduct, Product } from "configs/productsConfig";

interface IProductState {
  product: IProduct;
  count: number;
}

interface IProductProvider {
  children: ReactNode;
}

interface IProductAction {
  type: "increment" | "decrement" | "delete";
  payload: number;
}

const initialState = {
  product: Product,
  count: 0,
};

const productReducer = (state: IProductState, action: IProductAction) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };

    case "decrement":
      return { ...state, count: state.count - action.payload };

    case "delete":
      return { ...state, count: action.payload };

    default:
      return state;
  }
};

export const ProductContext = createContext<{
  state: IProductState;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const ProductProvider: FunctionComponent<IProductProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
