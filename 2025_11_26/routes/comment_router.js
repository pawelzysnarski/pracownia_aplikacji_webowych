const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const router = express.Router();

router.get("/category",async (req,res)=>{
    try{
    const comments = await prisma.comment.findMany();
    res.json(comments);
    }
    catch(err){
        res.status(500).json(err);
    }
})
router.post("/category",async (req,res)=>{
    try{
        const { content, author, postId } = req.body;
        const newComment = await prisma.comment.create({
            data: {
                content,
                author,
                postId
            },
        });
    }
    catch(err){
        res.status(500).json(err);
    }
})
router.put("/category/:id",async (req,res)=>{
    try{
        const updated_comment = prisma.comment.update({
            where:{
                id:req.params.id
            },
            data:{
                content:""
            }
        })
    }
    catch(err){
        res.status(500).json(err);
    }
})
router.delete("/category/:id",async (req,res)=>{
    try{
        const deleted_comment = prisma.comment.delete({
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