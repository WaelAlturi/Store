import Action from "../assets/ActionIcon.png";
import Adventure from "../assets/AdventureIcon.png";
import Cards from "../assets/CardsIcon.png";
import CO from "../assets/COIcon.png";
import Simulator from "../assets/SimulatorIcon.png";
import Survival from "../assets/SurvivalIcon.png";

export default function Aside() {
  return (
    <ul className=" flex justify-center w-full h-screen mt-5 pb-10">
      <li className="flex flex-col w-1/4 pb-10 text-white">
        <img src={Action} className="h-10 w-10 mb-14 mt-5" />
        <img src={Adventure} className="h-10 w-8 mb-14" />
        <img src={Cards} className="h-10 w-8 mb-14" />
        <img src={CO} className="h-10 w-10 mb-14" />
        <img src={Survival} className="h-10 w-10 mb-14" />
        <img src={Simulator} className="h-10 w-10 mb-14" />
      </li>
      <li className="flex flex-col w-2/4 text-center pb-10 text-white">
        <p className="h-10 w-full mb-14 mt-5 pt-3 ">
          <span className="text-xl">Action</span>
        </p>
        <p className="h-10 w-full mb-14 pt-3">
          <span className="text-xl">Adventure</span>
        </p>
        <p className="h-10 w-full mb-14 pt-3">
          <span className="text-xl">Cards</span>
        </p>
        <p className="h-10 w-full mb-14 pt-3">
          <span className="text-xl">CO-OP</span>
        </p>
        <p className="h-10 w-full mb-14 pt-3">
          <span className="text-xl">Survival</span>
        </p>
        <p className="h-10 w-full mb-14 pt-3">
          <span className="text-xl">Simulator</span>
        </p>
      </li>
    </ul>
  );
}
