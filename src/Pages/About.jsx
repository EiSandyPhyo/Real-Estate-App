import React, { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const About = () => {
    const slides = [
        {
          id: 1,
          img: "https://hously-react.vercel.app/static/media/01.6ac85de7298319b1f8d5.jpg",
          personName: "Calvin Carlo",
          job: "Manager",
          text: " Hously made the processes so easy. Hously instantly increased the amount of interest and ultimately saved us over $10,000. ",
        },
        {
          id: 2,
          img: "https://hously-react.vercel.app/static/media/04.35463172278c4051b5f4.jpg",
          personName: "Christa Smith",
          job: "Manager",
          text: " I highly recommend Hously as the new way to sell your home 'by owner'. My home sold in 24 hours for the asking price. Best $400 you could spend to sell your home. ",
        },
        {
          id: 3,
          img: "https://hously-react.vercel.app/static/media/02.7df14e12e444ad660802.jpg",
          personName: "Christina Jalk",
          job: "Manager",
          text: " My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable! ",
        },
        {
          id: 4,
          img: "https://hously-react.vercel.app/static/media/03.ba5f8794c055cc1488b5.jpg",
          personName: "Lily June",
          job: "Manager",
          text: " Great experience all around! Easy to use and efficient. ",
        },
      ];

      const [current, setCurrent] = useState(0);
    
      const prev = () => {
        setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1)); //0 === ? 4-1 : 0-1 //0
      };
    
      const next = () => {
        setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1)); //0 === 4-1 ? 0 : 0+1 //1
      };
    
      const [autoSlide, setAutoSlide] = useState(true);
      const autoSlideInterval = 3000;
    
      useEffect(()=>{
        if(!autoSlide) return
        const slideInterval = setInterval( next, autoSlideInterval);
        return () => clearInterval(slideInterval);
      },[])
    
      console.log(autoSlide);

  return (
    <div>
        {/* what our client say */}
      <div className="container-2xl mt-16 lg:mt-24 mb-20 ">
        <div className="flex-center-center flex-col">
          <h1 className="sub-header  ">What Our Client Say ?</h1>
          <p className="paragraph">
            A great platform to buy, sell and rent your properties without any
            agent or commissions.
          </p>
        </div>

        <div className="flex-center-center mt-8">
          <div className="relative max-w-lg">
            {" "}
            {/* max-w-lg */}
            <div className="overflow-hidden relative">
              <div className="flex ">
                {slides?.map((slide) => {
                  return (
                    <img
                      src={slide.img}
                      alt={slide.id}
                      key={slide.id}
                      className="transition-transform ease-out duration-500"
                      style={{ transform: `translateX(-${current * 100}%)` }}
                    />
                  );
                })}
                <div className="absolute inset-0 flex-between-center p-4">
                  <button
                    onClick={prev}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                  >
                    <BiChevronLeft size={40} />
                  </button>
                  <button
                    onClick={next}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                  >
                    <BiChevronRight size={40} />
                  </button>
                </div>
                <div className="absolute bottom-4 left-0 right-0">
                    <div className="flex-center-center gap-2">
                        {slides.map((_, i)=>{
                            return(
                                <div className={` transition-all w-3 h-3 bg-white rounded-full ${current === i ? "p-2" : "bg-opacity-50"}
                                `} key={i}>
                                </div>
                            )
                        })}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About