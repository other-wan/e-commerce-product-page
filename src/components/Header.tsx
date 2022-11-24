import { FunctionComponent, useContext, useEffect, useState } from "react";
import { ProductContext } from "providers/products";
import { useLayoutEffect } from "react";
import { useToggle } from "usehooks-ts";
import classNames from "classnames";

import { NavLinks } from "configs/navLinksConfig";
import Cart from "./icons/Cart";
import Menu from "./icons/Menu";
import Close from "./icons/Close";
import Logo from "./icons/Logo";
import ListManager from "./ListManager";

interface IHeader {
  cartCount: number;
}

const Header: FunctionComponent<IHeader> = ({ cartCount }) => {
  const [active, toggleActive, setActive] = useToggle(false);

  useLayoutEffect(() => {
    if (window.innerWidth >= 1024) {
      setActive(false);
    }
  }, []);

  // console.log(cartCount);

  return (
    <div className="py-5 h-16 lg:h-24 lg:border-b border-b-grayish-blue border-opacity-40 flex items-center justify-between w-[90%] mx-auto lg:w-[85%]">
      <div className="flex gap-5 items-center lg:gap-10">
        <button className="lg:hidden z-50" onClick={toggleActive}>
          <Menu
            className={classNames({ ["hidden"]: active, ["block"]: !active })}
          />
          <Close
            color="#69707D"
            className={classNames({ ["block"]: active, ["hidden"]: !active })}
          />
        </button>

        <Logo className="shrink-0" />

        <nav
          className={classNames(
            "absolute top-0 h-screen w-3/4 z-30 bg-white lg:left-0 lg:w-full lg:static lg:h-full",
            {
              ["-left-[1000px]"]: !active,
              ["left-0"]: active,
            }
          )}
        >
          <ListManager
            data={NavLinks}
            renderItem={(item) => (
              <p className="text-lg font-medium text-dark-grayish-blue">
                {item.name}
              </p>
            )}
            className={{
              list: "pt-20 flex flex-col gap-4 w-[90%] mx-auto lg:p-0 lg:m-0 lg:flex-row lg:w-full",
              item: "",
            }}
          />
        </nav>
      </div>
      <div className="flex gap-5 lg:gap-10 items-center">
        <button className="relative">
          {cartCount > 0 ? (
            <span className="absolute -top-1 -right-1 text-[0.5rem] font-semibold bg-orange text-white px-2 rounded-xl">
              {cartCount}
            </span>
          ) : null}
          <Cart color="#69707D" />
        </button>
        <div className="w-6 h-6 lg:h-10 lg:w-10 overflow-hidden rounded-full hover:ring-2 hover:ring-orange">
          <img
            src="https://res.cloudinary.com/yheenca/image/upload/v1669131995/sneakers/image-avatar_ihuowg.png"
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
