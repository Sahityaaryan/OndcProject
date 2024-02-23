import ProductCard from "./ProductCard";
// import SearchWithinCategory from "./SearchWithinCategory";
// import { laptopProducts } from '../../public/dummyData/page';

export default function ProductSearchPreview({productsData}){

    // console.log("productData: ",productsData)

    return(
        <>
        <div style={{"width":"66vw","margin":"auto","display":"flex","flexWrap":"wrap","border":"1px solid transparent","borderRadius":"0.5rem"}}>
            {/* <SearchWithinCategory/> */}
           {
            (productsData != undefined && productsData != null && productsData != [])  ? (
                productsData.map(function(product){

                    return <ProductCard
                    productDetails={product}
                    />
                })
            ):null
           }

        </div>
        
        </>
    )
}