//create the server 
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()

//middleware
app.use(express.json())
app.use(cors())


//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order',orderRouter)
app.get('/',(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>console.log('Server started on PORT :' + port))


//username asmaa0suleiman_db_user
//password a6qanBBjuWRfLPF4
//connection string mongodb+srv://<db_username>:a6qanBBjuWRfLPF4@cluster0.t7u02vp.mongodb.net