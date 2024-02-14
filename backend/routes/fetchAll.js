import { Router } from "express";
import  Category  from "../models/category.model.js";
import Items  from "../models/item.model.js";
const router=new Router()

router.get("/",(req,res)=>{
    res.status(200).json({
        item:items.item,
    })
})

export default Router;