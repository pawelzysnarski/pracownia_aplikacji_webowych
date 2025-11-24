const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const router = express.Router();

router.get("/category",async (req,res)=>{
    try{
    const posts = await prisma.post.findMany();
    res.json(posts);
    }
    catch(err){
        res.status(500).json(err);
    }
})
router.post("/category",async (req,res)=>{
    try{
        const { title, content, published, author, categoryId } = req.body;

        const newPost = await prisma.post.create({
            data: {
                title,
                content,
                published: published ?? false,
                author,
                categoryId,
            },
        });
    }
    catch(err){
        res.status(500).json(err);
    }
})
router.put("/category/:id",async (req,res)=>{
    try{
        const updated_post = prisma.post.update({
            where:{
                id:req.params.id
            },
            data:{
                title:""
            }
        })
    }
    catch(err){
        res.status(500).json(err);
    }
})
router.delete("/category/:id",async (req,res)=>{
    try{
        const deleted_post = prisma.post.delete({
            where:{
                id:req.params.id
            }
        })
    }
    catch(err){
        res.status(500).json(err);
    }
})
module.exports =router