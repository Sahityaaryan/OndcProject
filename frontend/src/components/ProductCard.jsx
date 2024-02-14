
import {useEffect, useState} from 'react';

export default function ProductCard({productDetails}){

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
    <div className="card-image">
       {product.img_url ? (
        <>
         <img src={product.img_url} alt="img" className='card-img'/>
        </>
       ):(
        <img src={'https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="img" className='card-img'/>
       )}
    </div>
    <div className="category"> {product.category} </div>
    <div className="heading"> {product.desc}
      
      <div style={{"marginTop":"1rem"}}>
        <p style={{"fontSize":"1rem"}}>Price: <span> &#8377; 13000</span></p>
        <p style={{"fontSize":"1rem"}}>Stock: <span>12</span></p>
      </div>
    </div>
</div>


        </>
    )
}

{/* //  ProductCard; */}