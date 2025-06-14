import { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const carouselImages = [
    "https://picsum.photos/id/1015/800/400", // Mountain
    "https://picsum.photos/id/1025/800/400", // Dog
    "https://picsum.photos/id/1035/800/400", // Forest
    "https://picsum.photos/id/1045/800/400", // Ocean
    "https://picsum.photos/id/1055/800/400", // Desert
  ];

  const len = carouselImages.length;

  // Automatic handle of next and

  useEffect(() => {
    let timer = setInterval(() => {
      setcurrentIndex((prev) => {
        return (prev + 1) % len;
      });
    }, 5000);

    console.log("timer", timer);

    return () => clearInterval(timer);
  }, []);

  //Manually Handle next and prev
  const prevSlide = () => {
    setcurrentIndex((prev) => {
      return prev - 1 < 0 ? (prev - 1 + len) % len : (prev - 1) % len;
    });
  };

  const nextSlide = () => {
    setcurrentIndex((prev) => {
      return (prev + 1) % len;
    });
  };

  useEffect(() => {
    const keyHandler = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, []);

  return (
    <>
      <div>
        <h2> Carousel Page </h2>
        <div className="carousel-container">
          <img
            className="carousel-images"
            src={`${carouselImages[currentIndex]}`}
            alt="Carousel Image"
          />
        </div>
        <div className="container">
          <div>
            <button className="flex-items" onClick={prevSlide}>
              Prev
            </button>
            <button className="flex-items" onClick={nextSlide}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
