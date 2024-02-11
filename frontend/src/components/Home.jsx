import Carousel from "./Carousel"
import SearchWithinCategory from "./SearchWithinCategory";
import { categories, laptopProducts } from "../../public/dummyData/page"; // delete
export default function Home(){


  
    return(
        <>
        <section className="text-gray-600 body-font">
      <div className="max-w-5xl pt-52 pb-24 mx-auto">
        <h1 className="text-[80px] text-center leading-10 tracking-wide font-bold text-white mb-6">
          Create your next catalogue fast and easy
        </h1>
     
       
      </div>


  

      <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-white lg:text-7xl md:text-6xl">
        Categories
      </h2>
      <br></br>
      
      

  
  <div className="pt-40 ">

   {categories?(
    <>
     {categories.map((categoryy)=>{

      return(
        <>

        <div className="py-4">
        <h2 className=" mb-2 text-6xl font-semibold tracking-tighter text-center text-gray-100 lg:text-6xl md:text-2xl">
        {categoryy}
      </h2>

        <div className="m-3 p-3 ">

      <Carousel category={laptopProducts}/>
        </div>

        </div>
        
        </>
      )
    })}
   
    </>
   ):null}
 
   
    {/* <Carousel category={'laptop'}/> */}
  </div>


<div>
  <SearchWithinCategory/>
</div>

   

    </section>
        </>
    )
}