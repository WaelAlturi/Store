import Header from "../components/Header.jsx";
import Main from "../components/Home/Main.jsx";
import Aside from "../components/Home/Aside.jsx";
import { useState } from "react";
export default function Home() {
  const [genreData, setGenreData] = useState(null);
  const fetchGenre = async (genre) => {
    try {
      console.log(genre);
      setGenreData(genre);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" bg-gradient-to-b from-primary to-black w-full h-full">
      <header className="w-full h-24 ">
        <Header />
      </header>
      <main className="w-full h-auto flex">
        <aside className=" w-1/6 h-5/6 backdrop-brightness-75 rounded-r-xl">
          <Aside Genre={fetchGenre} />
        </aside>
        <section className=" w-3/4 h-auto">
          <Main Genre={genreData} />
        </section>
      </main>
    </div>
  );
}
