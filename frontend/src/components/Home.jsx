import Carousel from "./Carousel"
import SearchWithinCategory from "./SearchWithinCategory";
import { categories, laptopProducts } from "../../public/dummyData/page"; // delete
import ProductSearchPreview from "./ProductSearchPreview";
import { useEffect, useState } from "react";
export default function Home(){

  const [categories, setCategories] = useState('')


async function fetchCategory(){
  try {
    const resp = await (await fetch('/user/fetchAllCategories')).json();

    // console.log(resp);
    const categoryNames = [];

    const data = resp.data;

    // console.log(data)

    if (data){

    data.forEach(element => {
      categoryNames.push(element.categories);
    });

    // console.log(categoryNames);

    setCategories(categoryNames);
    }

  } catch (e) {
    console.log("error: ",e);
  }
}

useEffect(()=>{
  // console.log("categories ",categories)
},[categories]);
  
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
      

    <div className="w-[90%]  pt-40 flex flex-col justify-center items-center">
            { categories  ?  (
              categories.map(function(category){
                // console.log("category: " + category);
                return(
                  <>
                 {/* <div style={{"height":"10rem"}}> */}
                 <div className="pt-40 mb-1 text-xl font-semibold tracking-tighter text-center text-white lg:text-7xl md:text-3xl">
                  {category}
                 </div>
                 <Carousel
                categoryy={category}
                />
                 {/* </div> */}
                  </>
                )
              })
            ):(
              <button
              className="inline-flex items-center px-14 py-3 mx-auto font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
              onClick={fetchCategory}
            >
              <span className="justify-center">Show Categories</span>
            </button>
            ) }
    </div>

  
  
 


<div>
  <SearchWithinCategory/>
</div>

   

<div>
  <ProductSearchPreview/>
  </div>

    </section>
        </>
    )
}