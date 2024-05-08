import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";
export default function Home() {
  return (
    <>
      <header className="w-full h-24 ">
        <Header />
      </header>
      <main className="w-full h-auto">
        <Main />
      </main>
    </>
  );
}
