
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

export default function Carousel({categoryy}) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProduct() {
      try {
        const resp = await fetch('/user/fetchAllProducts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ category: categoryy }),
        });

        const res = await resp.json();
        console.log("from carousel: ", res);
        setProducts(res.data);
      } catch (e) {
        console.log(`Error while fetching the ${categoryy}`, e);
      }
    }

    getAllProduct().then((res)=>{
      console.log(`${categoryy} product being fetched`);
    })
    .catch((e)=>{
      console.log(`Error while fetching the ${categoryy}`, e);
    })
  }, [categoryy]); // The empty array ensures this effect runs only once after the initial render

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
      { products.map(function(product){

        console.log(product.img_url)
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
