import Carousel from "@src/components/carrosel/carousel";
import Menu from "@src/components/menu/menu";
import { productsInfo } from "./mock";

function Home() {
  return (
    <div className="bg-standard-white w-full h-screen">
      <Menu />
      <div className="flex flex-col gap-4 p-4">
        <div className="w-full">
          <Carousel productsInfo={productsInfo} />
        </div>
        <div className="w-full">
          <Carousel productsInfo={productsInfo} />
        </div>
      </div>
    </div>
  );
}

export default Home;
