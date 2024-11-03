import {
  mdiAccountOutline,
  mdiCartOutline,
  mdiHeartOutline,
  mdiHomeCircleOutline,
  mdiMagnify,
  mdiMenu,
} from "@mdi/js";
import Icon from "@mdi/react";

function Menu() {
  const menuSearchItems = [
    { id: 1, description: "Eletrônicos" },
    { id: 2, description: "Higiene" },
    { id: 3, description: "Cozinha" },
    { id: 4, description: "Celulares" },
  ];
  const menuItems = [
    { id: 1, description: "Celulares" },
    { id: 2, description: "Tablets" },
    { id: 3, description: "Smartwatch" },
    { id: 4, description: "Acessórios" },
  ];

  return (
    <>
      <div className="flex flex-col gap-1 sticky top-0 bg-blue-950 text-white z-10">
        <div className="flex py-2 md:px-4">
          <img
            src={"/img/logo.png"}
            className="hidden md:block cursor-pointer"
            width="40"
            alt="Logo My Company"
          />
          <div className="flex items-center gap-6 md:mx-4 mx-2 w-full">
            <div className="flex grow p-2 md:w-full overflow-auto">
              <select
                name="search-products"
                id="search-products"
                className="px-4 bg-slate-300 text-black md:w-40 border border-r-0 border-black rounded-s-lg"
              >
                {menuSearchItems.map((item) => (
                  <option value={item.id}>{item.description}</option>
                ))}
              </select>
              <input
                type="search"
                className="bg-white border grow md:w-full text-black border-black px-4 py-1"
              />
              <button className="flex justify-center items-center md:w-14 border border-l-0 border-black py-1 px-2 bg-blue-600 cursor-pointer rounded-e-lg">
                <Icon path={mdiMagnify} size={1}></Icon>
              </button>
            </div>
            <div className="hidden md:flex md:flex-col md:items-center md:cursor-pointer md:text-center">
              <Icon path={mdiHeartOutline} size={1}></Icon>
              <span className="text-xs whitespace-nowrap">Lista de desejos</span>
            </div>
            <div className="hidden md:flex md:flex-col md:items-center md:cursor-pointer md:text-center">
              <Icon className="text-center whitespace-nowrap" path={mdiCartOutline} size={1}></Icon>
              <span className="text-xs">Carrinho</span>
            </div>
            <div className="hidden md:flex md:flex-col md:items-center md:cursor-pointer md:text-center">
              <Icon path={mdiAccountOutline} size={1}></Icon>
              <span className="text-xs whitespace-nowrap">Olá, Rafael</span>
            </div>
          </div>
        </div>
        <ul className="flex justify-center items-center gap-3 p-2 bg-blue-800 w-full overflow-auto relative">
          <li className="flex gap-2 px-3 py-1 rounded-2xl bg-slate-300 text-black hover:bg-slate-200 cursor-pointer">
            <Icon path={mdiMenu} size={1} />
            <span>Todos</span>
          </li>
          {menuSearchItems.map((item, index) => (
            <li key={index} className="cursor-pointer relative transition-all px-3 py-1">
              <span className="z-10">{item.description}</span>
              <span className="absolute inset-0 transition-all border-2 border-transparent rounded-2xl hover:border-white -z-1" />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          <li></li>
        </ul>
      </div>

      <div className="md:hidden w-full flex items-center justify-evenly fixed bottom-0 left-0 p-4 bg-blue-950 text-white z-10">
        <div className="flex flex-col items-center cursor-pointer text-center">
          <Icon path={mdiHomeCircleOutline} size={1}></Icon>
          <span className="text-xs whitespace-nowrap">Inicio</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer text-center">
          <Icon path={mdiHeartOutline} size={1}></Icon>
          <span className="text-xs whitespace-nowrap">Lista de desejos</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer text-center">
          <Icon className="text-center whitespace-nowrap" path={mdiCartOutline} size={1}></Icon>
          <span className="text-xs">Carrinho</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer text-center">
          <Icon path={mdiAccountOutline} size={1}></Icon>
          <span className="text-xs whitespace-nowrap">Olá, Rafael</span>
        </div>
      </div>
    </>
  );
}

export default Menu;
