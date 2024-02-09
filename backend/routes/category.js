import { Router } from "express";
import { Category } from "../models/category.model";
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

router.get('/',async (req,res)=>{//here we are passung the blog id in the argument of the roote
    const blog = await Blog.findByAttribute(req.params.id).populate("createdBy");
    const comments=await Comment.find({blogId:req.params.id}).populate("createdBy");//we have used the word ref in the comment schema and hence we can fetcht he data of the comment scema database and hence we can get the info of the creadtedBy which is present in the comment collections
    // console.log("blog",blog);
    console.log("comments",comments)
    //since we have used the word ref(user) in the blog model so it can fetch the info from the user schema of createdBy ka userid and it will print the info on the screen
    return res.render('blog',{
        //sending these to the frontend
        user:req.user,
        blog,
        comments,
    })
})