import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import Sidebar from "./Components/Sidebar";
import { MovieContext } from "./Context";

export default function App() {
  const [cartData, setCartData] = useState([]);
  console.log("cart data", cartData);

  return (
    <div>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </div>
  );
}
