
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

  const uri = "https://media.istockphoto.com/id/1434692524/photo/small-baby-girl-drinking-tetra-drink.jpg?s=2048x2048&w=is&k=20&c=bPu5sdn6JF_Mf5CeuJdZFlVV6VdzX6318E_PSFwvqug=";
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
        // console.log("from carousel: ", res);
        setProducts(res.data);
      } catch (e) {
        console.log(`Error while fetching the ${categoryy}`, e);
      }
    }

    getAllProduct().then((res)=>{
      // console.log(`${categoryy} product being fetched`);
    })
    .catch((e)=>{
      console.log(`Error while fetching the ${categoryy}`, e);
    })
  }, [categoryy]); // The empty array ensures this effect runs only once after the initial render

  useEffect(()=>{
    // console.log("products: (from carausel): ",products)
  },[products])

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

        // console.log("product of each img_url: ",product.img_url ," category: ",categoryy)
         return(
          <>
          <SwiperSlide >
             <div
        style={{backgroundColor:'white',width:'100%',height:'100%',"backgroundImage":`url(${product.img_url[0]})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}
        ></div>
        <div
        // style={{backgroundColor:'white',width:'100%',height:'100%',"backgroundImage":`url(${uri})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}
        ></div>
          </SwiperSlide>
          </>
         )
       })}
      </Swiper>
    </>
  );
}
