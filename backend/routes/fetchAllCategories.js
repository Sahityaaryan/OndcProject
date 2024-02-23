import { Router } from "express";
//  from "../models/item.model.js";
import Category from "../models/category.model.js";


const router = new Router();

router.get('/',async (req,res)=>{
    try {
    
        const resp = await Category.find({});
    
        // console.log("response of fetching the query: ",resp);

        res.status(200).json({
            message:'products are fetched',
            success:true,
            data: resp,
        })

    } catch (e) {
        console.log("error while fetching all the categories: ",e);

        res.status(503).json({message:e.message,success:false})
    }

})

export default router;