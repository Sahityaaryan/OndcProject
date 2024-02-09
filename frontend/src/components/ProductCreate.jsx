export default function ProductCreate(){
    function createProduct(e){
        
    }
    return(<><div className="container">
    <h2>Create New Product</h2>
    <form onSubmit="createProduct()" class="needs-validation" novalidate>
        <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" className="form-control" required />
            <div className="invalid-feedback">
                Please provide a valid name.
            </div>
        </div>

        <div className="form-group">
            <label for="description">Description:</label>
            <textarea id="description" name="description"
                className="form-control"></textarea>
        </div>

        <div className="form-group">
            <label for="sku">SKU:</label>
            <input type="text" id="sku" name="sku" className="form-control" required />
            <div className="invalid-feedback">
                Please provide a valid SKU.
            </div>
        </div>

        <div className="form-group">
            <label for="image">Image URL:</label>
            <input type="text" id="image" name="image" className="form-control" required />
            <div className="invalid-feedback">
                Please provide a valid image URL.
            </div>
        </div>

        <div className="form-group">
            <label for="tags">Tags (comma-separated):</label>
            <input type="text" id="tags" name="tags" className="form-control" />
        </div>

        <div className="form-group">
            <label for="price">Price:</label>
            <input type="number" id="price" name="price" className="form-control" required />
            <div className="invalid-feedback">
                Please provide a valid price.
            </div>
        </div>

        <div className="form-group">
            <label for="stock">Stock:</label>
            <input type="number" id="stock" name="stock" className="form-control" required />
            <div className="invalid-feedback">
                Please provide a valid stock quantity.
            </div>
        </div>

        <button type="submit" className="btn btn-primary">Create Product</button>
    </form>
</div></>)
}