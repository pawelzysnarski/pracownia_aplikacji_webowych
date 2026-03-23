const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const postRouter = express.Router();

postRouter.get("/",async (req,res)=>{
    try{
    const posts = await prisma.post.findMany();
    res.json(posts);
    }
    catch(err){
        res.status(500).json(err);
    }
})
module.exports =postRouter