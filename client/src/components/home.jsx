import Header from "./Header";
import Main from "./Main";
export default function Home() {
  return (
    <>
      <header className="w-full h-24 ">
        <Header />
      </header>
      <main className="w-full h-screen bg-gradient-to-r from-blue-400 to-cyan-600 ">
        <Main />
      </main>
    </>
  );
}
