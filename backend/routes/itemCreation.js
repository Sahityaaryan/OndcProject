import { Router } from "express";
import Category  from "../models/category.model.js";
import  Items  from "../models/item.model.js";
const router=new Router()

router.post("/",async(req,res)=>{
    const data = req.body;

    // console.log("data: ",data)
    try {
        const successObject=await Items.create({
            name:req.body.name,
            category:req.body.category,
            description:req.body.description,
            img_url:req.body.img_url,
            price:req.body.price,
            stock:req.body.stock,
        });
        res.status(200).json({message:`${successObject.name} item has been listed`,success:true})
    } catch (error) {
        console.log("error: ",error);
        res.status(500).json({message:error.message,success:false})
    }
})

export default router;