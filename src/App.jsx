import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import Sidebar from "./Components/Sidebar";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
    </div>
  );
}
