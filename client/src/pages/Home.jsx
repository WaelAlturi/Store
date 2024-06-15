import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";
import Aside from "../components/Aside.jsx";
export default function Home() {
  return (
    <div className=" bg-gradient-to-b from-primary to-black w-full h-full">
      <header className="w-full h-24 ">
        <Header />
      </header>
      <main className="w-full h-auto flex">
        <aside className=" w-1/6 h-5/6 backdrop-brightness-75 rounded-r-xl">
          <Aside />
        </aside>
        <section className=" w-3/4 h-auto">
          <Main />
        </section>
      </main>
    </div>
  );
}
