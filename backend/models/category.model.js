import mongoose from 'mongoose';

const {model , Schema} = mongoose;

const categorySchema = new Schema({
    
    'SubCategory':{
        type:'String',
        unique:true,
    }

},{timestamps: true}
)

export const Category = model(
    'Category',
)