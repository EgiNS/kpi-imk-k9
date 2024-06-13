import { useState, useEffect  } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../Carousel.css';
import prev from "/img/prev.svg"
import next from "/img/next.svg"

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const items = [
      { id: 1, content: 'https://kpi.go.id/images/2024/Mei/FMPP-Smg-3.jpg' },
      { id: 2, content: 'https://kpi.go.id/images/2024/Mei/IKPSTV-Jambi-3.jpg' },
      { id: 3, content: 'https://kpi.go.id/images/2024/Maret/Ekosistem-Digital-2.jpg' },
      { id: 4, content: 'https://kpi.go.id/images/2024/Mei/UBB-1.JPG' },
      { id: 5, content: 'https://kpi.go.id/images/2024/Maret/NTB-1.jpg' },
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change slide every 3 seconds
  
      return () => {
        clearInterval(interval); // Cleanup interval on component unmount
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]); // Re-run effect when currentIndex changes
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };
  
    const getVisibleSlides = () => {
      const visibleSlides = [];
      for (let i = 0; i < 3; i++) {
        visibleSlides.push(items[(currentIndex + i) % items.length]);
      }
      return visibleSlides;
    };
  
    return (
      <div className="relative w-3/4 max-w-5xl mx-auto">
        <div className="flex items-center justify-center overflow-hidden py-10 pt-20">
          {getVisibleSlides().map((item, index) => (
            <div key={item.id}>
              <div
                style={{backgroundImage: `url(${item.content})`}}
                className={`carousel-item ${
                  index === 0 ? 'prevSlide' : index === 1 ? 'activeSlide' : 'nextSlide'
                } bg-cover bg-center flex-shrink-0 h-64 w-56 flex items-center justify-center rounded-2xl transition-all duration-500 -mx-20`}  // mx-1 for smaller margin
              ></div>
            </div>
          ))}
        </div>
        <img 
          src={prev} 
          alt="" 
          onClick={prevSlide}
          className="absolute cursor-pointer sm:h-14 h-10 top-1/2 lg:left-0 min-[450px]:-left-14 -left-10 transform -translate-y-1/2 bg-[#EDDBD9] rounded-full shadow"
        />
        <img 
          src={next} 
          alt="" 
          onClick={nextSlide}
          className="absolute cursor-pointer sm:h-14 h-10 top-1/2 lg:right-0 min-[450px]:-right-14 -right-10 transform -translate-y-1/2 bg-[#EDDBD9] rounded-full shadow"
        />
        <div className="flex justify-center items-center space-x-2 mt-4">
          {items.map((_, index) => (
            <span
              key={index}
              className={`rounded-full bg-[#EDDBD9] ${index === currentIndex ? 'h-4 w-4' : 'h-2 w-2'}`}
            ></span>
          ))}
        </div>
      </div>
    );
  };
  
  export default Carousel;