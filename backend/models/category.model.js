import mongoose from 'mongoose';

const {model , Schema} = mongoose;

const categorySchema = new Schema({
    
    'categories':{
        type:'String',
        unique:true,
    }

},{timestamps: true}
)

// const Category =model("category",categorySchema)
// module.exports=Category;

const Category = model(
    'Category',categorySchema
)
export default Category;