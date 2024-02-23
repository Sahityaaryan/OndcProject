// import { Router } from "express";
// import Category  from "../models/category.model.js";
// import  Items  from "../models/item.model.js";
// const router=new Router()

// router.get("/",async(req,res)=>{
//     try {
//         const body1 = req.body;
//         // Find the category by its name
//         const category = await Category.findOne({ categories: body1.category });
//         console.log("category: ",category);
        
//         if (!category) {
//             return res.status(404).json({ message: "Category not found", success: false });
//         }

//         // console.log("Retrieved category:", category);
        
//         const itemsResponse = await Items.findMany({ category: body1.category });
        
//         if (itemsResponse.length === 0) {
//             return res.status(404).json({ message: "No items found for the given name", success: false });
//         }

//         // console.log(itemsResponse);
//         return res.status(200).json({
//             //sending these to the frontend
//             name: itemsResponse,
//         });
//     } catch (error) {
//         console.log(error);
//         return res.status(502).json({ message: error.message, success: false });
//     }
// })

// export default Router;

import { Router } from "express";
import Category from "../models/category.model.js";
import Items from "../models/item.model.js";

const router = Router();

router.post("/", async (req, res) => {
    try {
        const categoryName = req.body.category; // Get category name from request body

        // Find the category by its name
        const category = await Category.findOne({ categories: categoryName });
        // console.log("category: ", category);
        
        if (!category) {
            return res.status(404).json({ message: "Category not found", success: false });
        }

        // Find items belonging to the category
        const itemsResponse = await Items.find({ category: category.categories });
        
        if (itemsResponse.length === 0) {
            return res.status(404).json({ message: "No items found for the given category", success: false });
        }

        return res.status(200).json({
            //sending these to the frontend
            items: itemsResponse,
        });
    } catch (error) {
        console.log(error);
        return res.status(502).json({ message: error.message, success: false });
    }
});

export default router;
