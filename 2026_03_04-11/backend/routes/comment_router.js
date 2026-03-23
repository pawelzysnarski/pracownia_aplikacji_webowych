const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const commentRouter = express.Router();
commentRouter.get("/",async (req,res)=>{
    try{
    const comments = await prisma.comment.findMany();
    res.json(comments);
    }
    catch(err){
        res.status(500).json(err);
    }
})
commentRouter.post("/",async (req,res)=>{
    try{
        const {author, content, postId } = req.body;
        const newComment = await prisma.comment.create({
            data: {
                author,
                content,
                postId
            },
        });
        res.status(201).json(newComment);

    }
    catch(err){
        res.status(500).json(err);
    }
})
module.exports =commentRouter;