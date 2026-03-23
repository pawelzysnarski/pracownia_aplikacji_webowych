const express = require('express')
const categoryRouter = require('./routes/category_router')
const commentRouter = require('./routes/comment_router')
const postRouter = require('./routes/post_router')
const cors = require('cors');
const app = express()
async function main() {
app.use(express.json())
  app.use(cors())
app.use("/api/category",categoryRouter)
app.use("/api/post",postRouter)
app.use("/api/comment",commentRouter)
app.listen(5000, () => {
  console.log('App is running on http://localhost:5000')
})
}
main().catch(console.error)