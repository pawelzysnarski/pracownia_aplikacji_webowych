const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const router = express.Router();

router.get("/",async (req,res)=>{
    try{
    const categories = await prisma.category.findMany();
    res.json(categories);
    }
    catch(err){
        res.status(500).json(err);
    }
})
module.exports =router