
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import { laptopProducts } from '../../public/dummyData/page';

export default function Carousel({category}) {

  // here we are getting the category carousel

  

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="py-24"
      >
      { category.map(function(product){
         
         return(
          <>
          <SwiperSlide>
            <img src={product.img_url}/>
          </SwiperSlide>
          </>
         )
       })}
      </Swiper>
    </>
  );
}
