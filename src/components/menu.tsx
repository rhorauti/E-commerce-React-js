import { mdiAccountOutline, mdiCartOutline, mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";

function Menu() {
  return (
    <div className="sticky top-0 py-2 px-6 bg-gray-200 flex justify-between items-center">
      <img
        src={"/img/logo-google.webp"}
        className="cursor-pointer"
        width="25"
        alt="Logo My Company"
      />
      <div className="flex gap-6 my-1">
        <div className="relative flex">
          <input
            type="text"
            className="bg-transparent border-2 border-black rounded-2xl pr-10 pl-4"
          />
          <div className="absolute right-3 top-2 cursor-pointer">
            <Icon path={mdiMagnify} size={1}></Icon>
          </div>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <Icon
            className="flex justify-items-center"
            path={mdiCartOutline}
            size={1}
          ></Icon>
          <span className="text-xs">Carrinho</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <Icon
            className="flex justify-items-center"
            path={mdiAccountOutline}
            size={1}
          ></Icon>
          <span className="text-xs">Minha conta</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
