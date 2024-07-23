import Action from "../../assets/ActionIcon.png";
import Adventure from "../../assets/AdventureIcon.png";
import Cards from "../../assets/CardsIcon.png";
import CO from "../../assets/COIcon.png";
import Simulator from "../../assets/SimulatorIcon.png";
import Survival from "../../assets/SurvivalIcon.png";
export default function Aside({ Genre }) {
  const handleClick = async (event) => {
    try {
      const genreText = event.target.innerText;
      Genre(genreText);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ul className="flex flex-col items-center w-full h-screen mt-5 pb-10">
      <li className="flex flex-col items-center text-center text-white mb-10">
        <img src={Action} className="h-10 w-10 mb-2" />
        <span
          className="text-xl transition duration-300 ease-in-out hover:text-zinc-500 cursor-pointer"
          onClick={handleClick}
        >
          Action
        </span>
      </li>
      <li className="flex flex-col items-center text-center text-white mb-10">
        <img src={Adventure} className="h-10 w-10 mb-2" />
        <span
          className="text-xl transition duration-300 ease-in-out hover:text-zinc-500 cursor-pointer"
          onClick={Genre}
        >
          Adventure
        </span>
      </li>
      <li className="flex flex-col items-center text-center text-white mb-10">
        <img src={Cards} className="h-10 w-10 mb-2" />
        <span
          className="text-xl transition duration-300 ease-in-out hover:text-zinc-500 cursor-pointer"
          onClick={handleClick}
        >
          Cards
        </span>
      </li>
      <li className="flex flex-col items-center text-center text-white mb-10">
        <img src={CO} className="h-10 w-10 mb-2" />
        <span
          className="text-xl transition duration-300 ease-in-out hover:text-zinc-500 cursor-pointer"
          onClick={handleClick}
        >
          CO-OP
        </span>
      </li>
      <li className="flex flex-col items-center text-center text-white mb-10">
        <img src={Survival} className="h-10 w-10 mb-2" />
        <span
          className="text-xl transition duration-300 ease-in-out hover:text-zinc-500 cursor-pointer"
          onClick={handleClick}
        >
          Survival
        </span>
      </li>
      <li className="flex flex-col items-center text-center text-white mb-10">
        <img src={Simulator} className="h-10 w-10 mb-2" />
        <span
          className="text-xl transition duration-300 ease-in-out hover:text-zinc-500 cursor-pointer"
          onClick={handleClick}
        >
          Simulator
        </span>
      </li>
    </ul>
  );
}
