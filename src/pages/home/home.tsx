import Icon from "@mdi/react";
import Carrosel from "../../components/carrosel/carrosel";
import Menu from "../../components/menu";
import { mdiArrowRight } from "@mdi/js";

function Home() {
  return (
    <div className="bg-standard-white w-full h-screen">
      <Menu />
      <div className="p-2">
        <div className="flex justify-between items-center my-3 mx-6">
          <p className="bg-green-400 py-1 px-2 rounded-md">BigSave</p>
          <p className="flex">
            <span className="font-semibold mr-2 cursor-pointer">Ver tudo</span>
            <Icon path={mdiArrowRight} size={1} />
          </p>
        </div>
        <Carrosel carroselHeight={250} />
      </div>
    </div>
  );
}

export default Home;
