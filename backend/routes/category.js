import { Router } from "express";
import { Category } from "../models/category.model";
import { Items } from "../models/item.model";
const router=new Router()

router.post("/",async(req,res)=>{
    // const data = req.body
    try {
        const successObject=await Category.create({
            categories:req.body.category,
        });
        res.status(200).json({message:`${req.body.category} category has been created`,success:true})
    } catch (error) {
        res.status(502).json({message:error.message,success:false})
    }
})

export default router;