import { useContext, useState } from "react";
import { MovieContext } from "../Context";
import { getImageURL } from "../Utils/getImageURL";
import MovieDetails from "./MovieDetails";
import Rating from "./Rating";

/* eslint-disable react/prop-types */
export default function Movie({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { cartData, setCartData } = useContext(MovieContext);
  // console.log(cartData);

  const handleMovieDetails = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleAddCart = (event, movie) => {
    event.stopPropagation();
    const found = cartData.find((item) => item.id === movie.id);
    if (!found) {
      setCartData([...cartData, movie]);
    } else {
      alert("Movie already in the cart");
    }
  };

  return (
    <div>
      {showModal && (
        <MovieDetails
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieDetails(movie)}>
          <img
            className="w-full object-cover"
            src={getImageURL(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating}></Rating>
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span onClick={(e) => handleAddCart(e, movie)}>
                ${movie.price} | Add to Cart
              </span>
            </a>
          </figcaption>
        </a>
      </figure>
    </div>
  );
}
