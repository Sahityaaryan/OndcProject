import { Router } from "express";
import { Category } from "../models/category.model";
import { Items } from "../models/item.model";
const router=new Router()

router.get("/",(req,res)=>{
    res.status(200).json({
        category:Category.categories,
    })
})

export default Router;