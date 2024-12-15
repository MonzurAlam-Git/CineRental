import { useContext, useState } from "react";
import moon from "../assets/icons/moon.svg";
import Logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import cart from "../assets/shopping-cart.svg";
import { MovieContext } from "../Context";
import Cart from "./Cart";
export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const handleCartClose = () => {
    setShowCart(false);
  };

  const { cartData, setCartData } = useContext(MovieContext);

  return (
    <header>
      {showCart && <Cart onClose={handleCartClose} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              onClick={() => setShowCart(true)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={cart} width="24" height="24" alt="" />
              {cartData.length > 0 && (
                <span className="rounded-full absolute left-[28px] top-[-12px] bg-[#12CF6F] text-white  text-center p-[2px] w-[30px] h-[30px]">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
