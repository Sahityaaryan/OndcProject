import { Router } from "express";
import Items from "../models/item.model.js";


const router = new Router();

router.post('/',async (req,res)=>{
    try {
        const data = req.body;
    
        // console.log("data: ",data);
    
        const resp = await Items.find({ category:data.category });
    
        // console.log("response of fetching the query: ",resp);

        res.status(200).json({
            message:'products are fetched',
            success:true,
            data: resp,
        })

    } catch (e) {
        console.log("error while fetching all the products: ",e);

        res.status(503).json({message:e.message,success:false})
    }

})

export default router;