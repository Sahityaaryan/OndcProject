// import { Router } from "express";
// import  Category  from "../models/category.model.js";
// import Items  from "../models/item.model.js";
// const router=new Router()

// router.get("/",async(req,res)=>{
//     try {   
//             const allItems = await Items.findAll();
//             res.status(200).json({
//             item:allItems,
//         })
//     } catch (error) {
//         console.log(error);
//         return res.status(502).json({ message: error.message, success: false });
//     }
// })

// export default router;


import { Router } from "express";
import Category from "../models/category.model.js";
import Items from "../models/item.model.js";

const router = new Router();

router.get("/", async (req, res) => {
    try {
        const allItems = await Items.find(); // Retrieve all items

        return res.status(200).json({
            items: allItems, // Return items array
        });
    } catch (error) {
        console.log(error);
        return res.status(502).json({ message: error.message, success: false });
    }
});

export default router;
