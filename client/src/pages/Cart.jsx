import Header from "../components/Header.jsx";
import Main from "../components/Cart/Main.jsx";
export default function Cart() {
  return (
    <div className=" bg-gradient-to-b from-primary to-black w-full min-h-screen max-h-full">
      <header className="w-full h-24 ">
        <Header />
      </header>
      <main className="w-full h-auto">
        <Main />
      </main>
    </div>
  );
}
