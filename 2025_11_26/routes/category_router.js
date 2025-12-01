const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const router = express.Router();

router.get("/category",async (req,res)=>{
    try{
    const categories = await prisma.category.findMany();
    res.json(categories);
    }
    catch(err){
        res.status(500).json(err);
    }
})
router.post("/category",async (req,res)=>{
    try{
        const {category_name} =req.body
        const new_category=prisma.category.create({
            data: {category_name}
        })
    }
    catch(err){
        res.status(500).json(err);
    }
})
router.put("/category/:id",async (req,res)=>{
    try{
        const updated_category = prisma.category.update({
            where:{
                id:req.params.id
            },
            data:{
                category:"none"
            }
        })
    }
    catch(err){
        res.status(500).json(err);
    }
})
router.delete("/category/:id",async (req,res)=>{
    try{
        const deleted_category = prisma.category.delete({
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