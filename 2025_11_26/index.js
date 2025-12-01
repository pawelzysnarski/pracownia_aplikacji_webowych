const express = require('express')
const { PrismaClient } = require('@prisma/client')
const categoryRouter = require('./routes/category_router')
const commentRouter = require('./routes/comment_router')
const postRouter = require('./routes/post_router')
const {MongoClient, ServerApiVersion} = require("mongodb")
const url = ""
const dbName = ""
const app = express()
const client = new MongoClient(url, {serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
}
  })
const db = client.db(dbName);
async function main() {
  await client.connect()
app.use((req, res, next) => {
  try{
    res.on("finish",()=>{
      const collection1 = db.collection('accessLogs');
      collection1.insertOne({data:Date.now()})
    })
  }
  catch(err){
    next(err)
  }
  next(); 
});
app.use(express.json())
app.use("/category",categoryRouter)
app.use("/post",postRouter)
app.use("/comment",commentRouter)
app.use((err, req, res, next) => {
  const collection2 = db.collection('errorLogs');
  collection2.insertOne({errorType: err.message})
  res.status(500).json(err)
  next()
});
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
}
main().catch(console.error)