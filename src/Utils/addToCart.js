import { useContext } from "react";
import { MovieContext } from "../Context";

const { cartData, setCartData } = useContext(MovieContext);

const addToCart = (event, movie) => {
  event.stopPropagation();
  const found = cartData.find((item) => item.id === movie.id);
  if (!found) {
    setCartData([...cartData, movie]);
  } else {
    alert("Movie already in the cart");
  }
};

export { addToCart };
