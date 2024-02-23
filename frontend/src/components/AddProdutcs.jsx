import {useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export default function AddProduct(){

    const [tempImgUrl,setTempImgUrl] = useState('')
    const [product, setProduct] = useState({
        name: '',
        desc: '',
        category: '',
        img_url:[],
        price: '',
        stocks: '',
    })


    async function PostToBackend(productData){

      try {
  
        const res = await fetch('/user/createProduct',{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData)
        })
      
        const respObj = await res.json();
      
      
        if(respObj.success)
        {
          toast.success(`${productData.name} has been listed under ${productData.category}`);
        } else {
          toast.error("Something went wrong");
        }
        // console.log("res: ",res);

        return res;
      } catch (error) {
        console.log("message error: ",error.message);
        return error;
      }
    }

 
    
    async function submitHandler(e) {
        e.preventDefault();

        // filling the img url

        setProduct({...product,["img_url"]:tempImgUrl.split(' ')});
        
        const productData =  {
            name: product.name,
            category:product.category,
            description:product.desc,
            img_url:product.img_url,
            price:product.price,
            stock: product.stocks,
        }

        // console.log("productData: ",productData);
try {
  
    const res = await fetch('/user/createItems',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData)
    })
  
    const respObj = await res.json();
  
  
    if(respObj.success)
    {
      toast.success(`${productData.name} has been listed under ${productData.category}`);
    } else {
      toast.error("Something went wrong");
    }
    // console.log("res: ",res);
  } catch (error) {
    console.log(" error: ",error.message);
  }

    }

    return (
        <>
          <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
      
      
        <div className="form_page">
            <h2 className="head_line">
                Add Products
                </h2>
          
          
          <form  className="form_ondc" onSubmit={submitHandler} style={{"color":"black"}}>
                <input type="text" className="text_input" onChange={(e)=> setProduct({...product,['name']:e.target.value})} value={product.name} placeholder="Enter the name of the product"/>

                <input type="text" className="text_input" onChange={(e)=> setProduct({...product,["desc"]:e.target.value})} value={product.desc} placeholder="Tell us about the product"/>

                <input type="text" className="text_input" onChange={(e)=> setTempImgUrl(e.target.value)} value={tempImgUrl}   placeholder="Add images of your product"/>
                
             {   (tempImgUrl) ? (
                <>
                <span style={{"color":"white"}}>Here you can add multiple images of your product by separating each url by a blankspace</span>
                </>
             ):null}

                
                <input type="number" className="text_input" onChange={(e)=> setProduct({...product,["price"]:e.target.value})} value={product.price} placeholder="Enter the price of your product"/>

                <input type="number" className="text_input" onChange={(e)=> setProduct({...product,["stocks"]:e.target.value})} value={product.stocks} placeholder="Enter the stock of your product"/>

                <input type="text" className="text_input" onChange={(e)=> setProduct({...product,['category']:e.target.value})} value={product.category} placeholder="Enter the category of your product"/>

              <button className="accept_submit">
              <input type="submit" style={{'color':'white'}} value="Add Product" />
              </button>

            </form>
        </div>
      
        </>
    )
} 