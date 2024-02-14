import { Router } from "express";
import Category  from "../models/category.model.js";
import  Items  from "../models/item.model.js";
const router=new Router()

router.post("/",async(req,res)=>{
    // const data = req.body
    try {
        console.log(req.body.category)
        const successObject=await Category.create({
            categories:req.body.category
        });
        res.status(200).json({message:`${req.body.category} category has been created`,success:true})
        console.log(successObject)
    } catch (error) {
        res.status(502).json({message:error.message,success:false})
        console.log(error)
    }
})

export default router;