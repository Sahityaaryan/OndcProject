import mongoose from 'mongoose';

const {model , Schema} = mongoose;

const itemsSchema = new Schema({
    
    name:{
        type:String,
        unique:true,
        required:true,
    },
    category:{
        type: Schema.ObjectId,
        ref:'Category',
    },
    description:{
        type:String,
        unique:true,
        required:true,
    },
    img_url:{
        type:[String],
        required:true,
    },
    price:{
        type:Number,
        default:0,
        required:[true,"This can't be empty"],
    },
    stock:{
        type:Number,
        default:0,
        required:true,
    }

},{timestamps: true}
)

export const Items = model(
    'Item',
)