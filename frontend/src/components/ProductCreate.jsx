
import { useState, useEffect } from 'react';


export default function ProductCreate() {


    const [product, setProduct] = useState({
        name: '',
        desc: '',
        img_url: '',
        price: 0,
        stocks: 0,
    })


    function createProduct(e) {

        e.preventDefault();

    }

    useEffect(() => { }, [product])

    return (<>
    
    <div className="container bg-red-500 ">
        <h2>Create New Product</h2>
        <form onSubmit={createProduct} className="">
            <div className="form-group">
                <label htmlFor="name" className="px-2" >Name:</label>
                <input type="text" name="name" onChange={(e) => { setProduct({ ["name"]: [e.target.value] }) }} value={product.name} className="form-control " required />
                <div className="invalid-feedback">
                    Please provide a valid name.
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description"
                    onChange={(e) => { setProduct({ ["description"]: [e.target.value] }) }} value={product.desc} className="form-control"></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="image">Image URL:</label>
                <input type="text" id="image" name="image" onChange={(e) => { setProduct({ ["img_url"]: [e.target.value] }) }} value={product.img_url} className="form-control" required />
                <div className="invalid-feedback">
                    Please provide a valid image URL.
                </div>
            </div>
            {/* 
        <div className="form-group">
            <label htmlFor="tags">Tags (comma-separated):</label>
            <input type="text" id="tags" name="tags" className="form-control" />
        </div> */}

            <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" onChange={(e) => { setProduct({ ["price"]: [e.target.value] }) }} value={product.price} className="form-control" required />
                <div className="invalid-feedback">
                    Please provide a valid price.
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="stock">Stock:</label>
                <input type="number" id="stock" name="stock" onChange={(e) => { setProduct({ ["stock"]: [e.target.value] }) }} value={product.stock} className="form-control" required />
                <div className="invalid-feedback">
                    Please provide a valid stock quantity.
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Create Product</button>
        </form>
    </div>



    <div></div>
    
    </>)
}