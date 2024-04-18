import axios from "axios";
import URL from "../URL.js";

export default function Main() {
  const Games = () => {
    try {
      axios
        .get(URL.gamesData)
        .then((items) => {
          console.log(items.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={Games}>hi</button>
    </>
  );
}
