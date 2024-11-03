import Carousel from "@src/components/carrosel/carousel";
import Menu from "@src/components/menu/menu";
import { productsInfo } from "./mock";
import CardGrid from "@src/components/card-grid/card-grid";
import Footer from "@src/components/footer/footer";
// import { store } from "@src/store/store";

function Home() {
  // const productsInfo = store.getState().products.productsInfo;

  return (
    <div className="bg-standard-white w-full h-screen">
      <Menu />
      <div className="flex flex-col gap-4 p-4">
        <Carousel
          itemList={productsInfo}
          title="Combo de ofertas!"
          description="50% de desconto com tempo limitado!"
          carouselBackgroundColor="bg-green-400"
          arrowBackgroundColor="bg-green-600"
          slideType="products"
        />
        <Carousel
          itemList={productsInfo}
          title="Aproveite o frete grátis!"
          carouselBackgroundColor="bg-red-300"
          arrowBackgroundColor="bg-red-500"
          slideType="products"
        />
        <CardGrid itemList={productsInfo} title="Você também vai amar!"></CardGrid>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
