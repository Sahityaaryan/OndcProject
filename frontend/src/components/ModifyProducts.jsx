import {useState} from 'react';

export default function ModifyProduct(){

    const [tempImgUrl,setTempImgUrl] = useState('')
    const [product, setProduct] = useState({
        name: '',
        desc: '',
        category: '',
        img_url:[],
        price: '',
        stocks: '',
    })

    
//    async function createProduct(e) {
//     }
    
    function submitHandler(e) {
        e.preventDefault();

        // filling the img url

         setProduct({...product,["img_url"]:tempImgUrl.split(' ')});



    }

    return (
        <>
        <div className="form_page">
            <h2 className="head_line">
                Modify Products
                </h2>
          
          
          <form  className="form_ondc" onSubmit={submitHandler} style={{"color":"black"}}>
                <input type="text" className="text_input" onChange={(e)=> setProduct(e.target.value)} value={product.name} placeholder="Enter the name of the category"/>

                <input type="text" className="text_input" onChange={(e)=> setProduct({...product,desc:e.target.value})} value={product.desc} placeholder="Tell us about the product"/>

                <input type="text" className="text_input" onChange={(e)=> setTempImgUrl(e.target.value)} value={tempImgUrl}   placeholder="Add new images of your product"/>
                
             {   (tempImgUrl) ? (
                <>
                <span style={{"color":"white"}}>Here you can add multiple images of your product by separating each url by a blankspace</span>
                </>
             ):null}

                
                <input type="number" className="text_input" onChange={(e)=> setProduct({...product,["price"]:e.target.value})} value={product.price} placeholder="Change the price of your product"/>

                <input type="number" className="text_input" onChange={(e)=> setProduct({...product,["stocks"]:e.target.value})} value={product.stocks} placeholder="Change the stock of your product"/>

                <input type="text" className="text_input" onChange={(e)=> setProduct({...product,['category']:e.target.value})} value={product.category} placeholder="Change the category of your product"/>

              <button className="accept_submit">
                <span style={{"color":"white"}} > Modify Product</span>
              </button>

            </form>
        </div>
      
        </>
    )
} 