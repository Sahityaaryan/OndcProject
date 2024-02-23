
import {useEffect, useState} from 'react';

export default function ProductCard({productDetails}){

    // console.log("productDetails(card): ", productDetails);

    const src = "https://imgs.search.brave.com/Jn5g2nY3TU67ruUEypU0z-b_7hIi70jS3PU-BdNfFY0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NzA3MzM1Nzc1MjQt/M2EwNDcwNzllODBk/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tkh4OGJX/VnlZMlZrWlhOOFpX/NThNSHg4TUh4OGZE/QT0"
    // ste the props here

    const [product, setProduct] = useState({
        'name':'',
        'img_url':'',
        'category':'',
        'desc':'',
        'stock':'',
        'price':''
    });

    useEffect(()=>{
        setProduct({
            'name':productDetails.name,
        'img_url':productDetails.img_url[0],
        'category':productDetails.category,
        'desc':productDetails.description,
        'stock':productDetails.stock,
        'price':productDetails.price
        })
    },[productDetails])



    return (

        <>

<div className="card">
    {(product.desc ? (
        <>
        <div className='card-image'>
       {product.img_url ? (
        <>
         <div src={product.img_url}
        style={{backgroundColor:'red',width:'100%',height:'100%',"backgroundImage":`url(${product.img_url})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}
        ></div>
        </>
       ):null}
        {/* <div
        style={{backgroundColor:'red',backgroundImage:`url(${src})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'100%',height:'100%'}}
        >hi</div> */}
    </div>
    <div className="category"> {product.category} </div>
    <div className="heading"> {product.desc}
      
      <div style={{"marginTop":"1rem"}}>
        <p style={{"fontSize":"1rem"}}>Price: <span> &#8377; 13000</span></p>
        <p style={{"fontSize":"1rem"}}>Stock: <span>12</span></p>
      </div>
    </div>
        </>
    ):null)}
</div>


        </>
    )
}

{/* //  ProductCard; */}