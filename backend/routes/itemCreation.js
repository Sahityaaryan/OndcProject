import { Router } from "express";
import { Items } from "../models/category.model";
import { Items } from "../models/item.model";
const router=new Router()

router.post("/findItem",async(req,res)=>{
    // const data = req.body
    try {
        const successObject=await Items.create({
            name:req.body.name,
            category:req.body.category,
            description:req.body.description,
            img_url:req.body.img_url,
            price:req.body.price,
            stock:req.body.stock,
        });
        res.status(200).json({message:`${req.body.name} item has been listed`,success:true})
    } catch (error) {
        res.status(502).json({message:error.message,success:false})
    }
})

export default Router;