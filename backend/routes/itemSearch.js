import { Router } from "express";
import Category  from "../models/category.model.js";
import  Items  from "../models/item.model.js";
const router=new Router()

router.post('/',async (req,res)=>{
    const body1=req.body;
    const itemsResponse = await body1.category.find({name:body1.name}).populate("category");
    console.log("itemsResponse")
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