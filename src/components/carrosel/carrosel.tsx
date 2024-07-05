import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";

interface CarouselProps {
  carroselHeight: number;
}

const listaImg = ['/img/img1.jpg', '/img/img2.jpg', '/img/img3.jpg', '/img/img4.jpg', '/img/img5.jpg', '/img/img6.jpg', '/img/img3.jpg', '/img/img2.jpg']

function Carrosel(props: CarouselProps) {

  const [currentIdx, setCurrentIdx] = useState(1);
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    prevSlide();
    nextSlide();
  }, [currentIdx])

  function prevSlide() {
    if(currentIdx > 0) {
      setCurrentIdx(prevIdx => prevIdx - 1);
      console.log(currentIdx)
      setSize();
    } else {
      setBtnDisabled(true);
    }
  }

  function nextSlide() {
    if(currentIdx < listaImg.length) {
      setCurrentIdx(prevIdx => prevIdx + 1);
      console.log(currentIdx)
      setSize();
    } else {
      setBtnDisabled(true);
    }
  }

  function setSize() {
    const carroselSlider = document.getElementsByClassName('carrosel-slider')[0];
      //@ts-ignore
      carroselSlider.style.marginLeft = `${-currentIdx * props.carroselHeight - 16}px`;
  }

  return (
    <div
      className="flex s-full"
    >
      <div onClick={prevSlide} className="flex grow-0 cursor-pointer items-center hover:bg-gray-400">
        <Icon path={mdiArrowLeft} size={1} />
      </div>
      <div className="carrosel-container h-full grow overflow-hidden" style={{width: `${props.carroselHeight}px`}}>
        <div className="carrosel-slider flex m-auto h-full overflow-hidden transition-slider" style={{width: `${props.carroselHeight * listaImg.length}px`}}>
            {listaImg.map((img, idx) => 
              <div key={idx} className="carrosel-slide h-full">
                  <img src={img} alt="Imagens" className="object-cover px-1 rounded-lg" style={{height: `${props.carroselHeight}px`, width: `${props.carroselHeight}px`}}/>
              </div>
            )}
        </div>
      </div>
      <div onClick={nextSlide} className="flex grow-0 cursor-pointer items-center hover:bg-gray-400">
        <Icon path={mdiArrowRight} size={1} />
      </div>
    </div>
  );
}

export default Carrosel;
