import { useState, useEffect  } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../Carousel.css';
import prev from "/img/prev.svg"
import next from "/img/next.svg"

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const items = [
      { id: 1, content: 'https://kpi.go.id/images/2024/Juni/Sekolah-P3SPS-1.jpg', title: "Sekolah Pedoman Perilaku Penyiaran dan Standar Program Siaran" },
      { id: 2, content: 'https://kpi.go.id/images/2024/Mei/IKPSTV-Jambi-3.jpg', title: "Diseminasi Indeks Kualitas Program Siaran Televisi" },
      { id: 3, content: 'https://kpi.go.id/images/2024/Maret/Ekosistem-Digital-2.jpg', title: "Seminar Pengembangan Ekosistem Penyiaran Digital" },
      { id: 4, content: 'https://kpi.go.id/images/2024/Juni/Evaluasi-2.jpg', title: "Evaluasi Tahunan 14 TV Berjaringan" },
      { id: 5, content: 'https://kpi.go.id/images/2024/Mei/UBB-1.JPG', title: "Study Visit Universitas Bina Bangsa" },
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
                } bg-cover bg-center flex-shrink-0 h-64 w-56 flex items-end justify-center rounded-2xl transition-all duration-500 -mx-20`}  // mx-1 for smaller margin
              >
                <div className='bg-white opacity-80 h-2/5 w-full flex items-center justify-center text-center font-bold px-2 leading-tight'>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <img 
          src={prev} 
          alt="" 
          onClick={prevSlide}
          className="absolute cursor-pointer sm:h-14 h-10 top-1/2 lg:left-0 min-[450px]:-left-14 -left-10 transform -translate-y-1/2 bg-[#EDDBD9] rounded-full shadow"
        /> */}
        <div className='absolute cursor-pointer sm:h-14 sm:w-14 h-12 w-12 top-1/2 lg:left-0 min-[450px]:-left-14 -left-10 transform -translate-y-1/2 bg-[#f9f9fbbb] rounded-full shadow flex items-center justify-center' onClick={prevSlide}>
          <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path fill="#9d262a" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
          </svg>
        </div>
        <div className='absolute cursor-pointer sm:h-14 sm:w-14 h-12 w-12 top-1/2 lg:right-0 min-[450px]:-right-14 -right-10 transform -translate-y-1/2 bg-[#f9f9fbbb] rounded-full shadow flex items-center justify-center' onClick={nextSlide}>
          <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path fill="#9d262a" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
          </svg>
        </div>
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