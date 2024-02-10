import { Router } from "express";
import { Category } from "../models/category.model";
import { Items } from "../models/item.model";
const router=new Router()

router.post('/',async (req,res)=>{
    const body1=req.body;
    const items = await body1.category.find({body1.name}).populate("category");
    console.log("items")
    return res.staus(200).json({
        //sending these to the frontend
        name:req.name,
        category,
        discription,
        img_url,
        price,
        stock,
    })
})

export default Router;