import { useEffect, useState } from "react";
import ProductSearchPreview from "./ProductSearchPreview";
 export default function SearchWithinCategory(){

  const [category, setCategory] = useState('');
  const [products, setProducts] = useState('');

  async function fetchCategoryProducts(){

    const resp = await fetch('/user/fetchAllProducts',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'category': category})
  })

  // console.log("resp: ",resp);
  if(resp.ok){

  const res = await resp.json();

  // console.log(res);

  setProducts(res.data);
  }
  }

  function submitHandler(e){

    e.preventDefault();

    fetchCategoryProducts().then((res)=>{
      console.log("Got the products");
    }).catch((err)=>{
      console.log("error",err);
    })

  }

  useEffect(()=>{
    // console.log("products: ",products);
  },[products])

    return(
        <>
            <section className="relative pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-26">
            <h1 className="mb-5 text-6xl font-bold text-white">
              Search within different categories
            </h1>
            {/* <h1 className="mb-9 text-2xl font-semibold text-gray-200">
              Enter your email address and get our newsletters straight away.
            </h1> */}
          <div style={{"margin":"60px 0px"}}>
          <form onSubmit={submitHandler}>
          <input
              type="text"
              placeholder="Enter name of the category"
              name="category"
              autoComplete="category"
              onChange={(e)=> setCategory(e.target.value)}
              value={category}
              className="border border-gray-600 w-auto pr-2 pl-2 py-3 mt-2 rounded-md text-white font-semibold hover:border-gray-700 bg-black"
            />{" "}
            <button
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
            >
              <input type="submit" className="justify-center" value={"Search"}/>
            </button>
            <br />
            <br />
            <br />
              <p>You can try it by searching "Car" or "Robot"</p>
          </form>
          </div>
          </div>
        </div>

        {
          ((products != undefined) && (products != null))  ? (
            <ProductSearchPreview
            productsData={products}
        />
          ):null
        }
      </section>
        </>
    )
 }