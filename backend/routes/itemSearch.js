import { Router } from "express";
import Category from "../models/category.model.js";
import Items from "../models/item.model.js";

const router = new Router();

router.get('/', async (req, res) => {
    // console.log(req.body);
    try {
        const body1 = req.body;
        // Find the category by its name
        const category = await Category.findOne({ categories: body1.category });
        // console.log("category: ",category);
        
        if (!category) {
            return res.status(404).json({ message: "Category not found", success: false });
        }

        // console.log("Retrieved category:", category); // Log the retrieved category
        
        const itemsResponse = await Items.findOne({ name: body1.name });
        
        if (itemsResponse.length === 0) {
            return res.status(404).json({ message: "No items found for the given name", success: false });
        }

        // console.log(itemsResponse);
        return res.status(200).json({
            //sending these to the frontend
            name: req.body.name,
            category: category._id, // Use the ObjectId of the category
            // description: body1.category,
            // img_url: body1.img_url,
            // price:,
            // stock,
        });
    } catch (error) {
        console.log(error);
        return res.status(502).json({ message: error.message, success: false });
    }
});

export default router;
