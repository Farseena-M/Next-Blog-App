import express from 'express'
// import userRouter from './src/routes/userRouter'
import blogRouter from './src/routes/blogRouter'
const app= express()
app.use(express.json())


// app.use('/user',userRouter )
app.use('/user',blogRouter )

export default app