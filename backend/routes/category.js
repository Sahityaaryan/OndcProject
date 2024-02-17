import { Router } from "express";
import Category  from "../models/category.model.js";

const router=new Router()

router.post("/",async(req,res)=>{
    
    try {
        console.log("request categorY: ",req.body.category)
        const successObject = await Category.create({
            categories:req.body.category
        });
        res.status(200).json({message:`${req.body.category} category has been created`,success:true})
        console.log("successObject: ",successObject);
    } catch (error) {
        res.status(503).json({message:error.message,success:false})
        console.log(error)
    }
})

export default router;