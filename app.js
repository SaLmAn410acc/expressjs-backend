import express from 'express'

//library
import dotenv from "dotenv";

//routes 
import userRouter from './routes/user.js';
import authRouter from './routes/auth.js'

//middleware
import { authMiddleware } from "./middlewares/auth.js";

//get server initializer
const app = express()

//port
const port = 3000

//express
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

dotenv.config({ path: '.env' })

//all routes
app.use('/api/v1/user', authMiddleware, userRouter)
app.use('/api/v1/auth', authRouter)

app.get('/',(req, res)=>{
    res.status(200).send('<h1>Homepage</h1>')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})