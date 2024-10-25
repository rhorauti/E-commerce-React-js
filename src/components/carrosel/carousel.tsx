import Slider from "react-slick";
import "./carousel.css";
import Icon from "@mdi/react";
import {
  mdiArrowRight,
  mdiCartPlus,
  mdiHeart,
  mdiHeartOutline,
  mdiLightningBolt,
  mdiStar,
} from "@mdi/js";
import { IGeneralProductInfo } from "@src/core/interfaces/IProductInfo";
import { useState } from "react";

function Arrow(props: any) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block" }} onClick={onClick} />;
}

function Carousel(props: { productsInfo: IGeneralProductInfo[] }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [productsInfo, setProductsInfo] = useState<IGeneralProductInfo[]>(props.productsInfo);

  function onSetIsFavorite(productInfo: IGeneralProductInfo): void {
    setProductsInfo((prevState) =>
      prevState.map((p) => (p.id == productInfo.id ? { ...p, isFavorite: !p.isFavorite } : p))
    );
  }

  return (
    <div className="slider-container bg-slate-300 rounded-md p-3 shadow-lg">
      <div className="flex justify-between items-center mx-2">
        <div>
          <h1 className="font-bold text-2xl">Combo de ofertas</h1>
          <p className="font-semibold">50% de desconto com tempo limitado!</p>
        </div>
        <div className="bg-slate-500 border-2 border-black rounded-full p-2 cursor-pointer hover:bg-slate-400">
          <Icon className="text-white" path={mdiArrowRight} size={1} />
        </div>
      </div>
      <Slider {...settings}>
        {productsInfo.map((productInfo, idx) => (
          <div key={idx} className="w-full h-full p-2">
            <div className="relative">
              <div onClick={() => onSetIsFavorite(productInfo)}>
                <Icon
                  className="absolute right-2 top-2 cursor-pointer border-2 border-black bg-white rounded-full p-1"
                  path={productInfo.isFavorite ? mdiHeart : mdiHeartOutline}
                  size={1}
                ></Icon>
              </div>
              <img
                src={productsInfo[idx].img}
                alt="Imagens"
                className="w-full h-full object-cover rounded-t-md border-slate-600 border-2 bg-slate-400"
              />
            </div>
            <div className="relative flex flex-col gap-1 bg-slate-200 border-x-slate-600 border-b-slate-600 border-t-none border-2 h-fit p-3 -mt-0.5 rounded-b-md">
              <p>{productInfo.description}</p>
              <div className="flex items-center">
                <Icon path={mdiStar} size={0.8} className="text-yellow-400" />
                <span className="mx-1">{productInfo.rate}</span>
                <span>({productInfo.sales})</span>
              </div>
              <span className="flex justify-center bg-green-700 w-fit px-2 py-1 text-sm rounded-lg text-white">
                <Icon path={mdiLightningBolt} size={0.7}></Icon>
                <span>{productInfo.tag}</span>
              </span>
              <div className="flex gap-2 items-center">
                {productInfo &&
                  productInfo.price &&
                  productInfo.discount &&
                  productInfo.discount > 0 && (
                    <span className="font-bold text-lg">
                      R${" "}
                      {productInfo && productInfo.price && productInfo.discount
                        ? (
                            productInfo?.price -
                            productInfo?.price * (productInfo?.discount / 100)
                          ).toFixed(2)
                        : 0}
                    </span>
                  )}
                <span className="text-slate-400 font-semibold line-through">
                  R$ {productInfo.price}
                </span>
              </div>
              <Icon
                path={mdiCartPlus}
                size={1.5}
                className="bg-black text-white p-2 absolute right-3 bottom-3 cursor-pointer rounded-full"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
