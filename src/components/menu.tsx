import { mdiAccountOutline, mdiCartOutline, mdiHeartOutline, mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";

function Menu() {
  return (
    <div className="sticky top-0 py-2 md:px-4 bg-blue-950 flex items-center text-white">
      <img
        src={"/img/logo.png"}
        className="hidden md:block cursor-pointer"
        width="40"
        alt="Logo My Company"
      />
      <div className="flex gap-6 my-1 mx-4 w-full">
        <div className="flex justify-end w-full ml-4">
          <select name="search-products" id="search-products" className="px-2 bg-gray-200 shrink md:shrink-0 text-black w-full md:w-40 border border-r-0 border-black rounded-s-lg">
            <option value="1">Eletrônicos</option>
            <option value="2">Higiene</option>
            <option value="3">Cozinha</option>
            <option value="4">Celular</option>
          </select>
          <input
            type="text"
            className="bg-white border grow-2 md:grow-0 md:w-full text-black border-black px-4"
          />
          <button className="flex justify-center items-center w-full md:w-14 border border-l-0 border-black shrink md:shrink-0 px-2 bg-blue-600 cursor-pointer rounded-e-lg">
            <Icon path={mdiMagnify} size={1}></Icon>
          </button>
        </div>
        <div className="hidden md:flex md:flex-col md:items-center md:cursor-pointer md:text-center">
          <Icon
            path={mdiHeartOutline}
            size={1}
          ></Icon>
          <span className="text-xs whitespace-nowrap">Lista de desejos</span>
        </div>
        <div className="hidden md:flex md:flex-col md:items-center md:cursor-pointer md:text-center">
          <Icon
          className="text-center whitespace-nowrap"
            path={mdiCartOutline}
            size={1}
          ></Icon>
          <span className="text-xs">Carrinho</span>
        </div>
        <div className="hidden md:flex md:flex-col md:items-center md:cursor-pointer md:text-center">
          <Icon
            path={mdiAccountOutline}
            size={1}
          ></Icon>
          <span className="text-xs whitespace-nowrap">Olá, Rafael</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
