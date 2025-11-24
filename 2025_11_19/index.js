const express = require('express')
const { PrismaClient } = require('@prisma/client')
const categoryRouter = require('./routes/category_router')
const commentRouter = require('./routes/comment_router')
const postRouter = require('./routes/post_router')

const app = express()
app.use(express.json())
app.use("/category",categoryRouter)
app.use("/post",postRouter)
app.use("/comment",commentRouter)
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
