import mongoose from "mongoose";

const connectDB = async () =>{
  //whenever mongodb will be established this function will be executed
    mongoose.connection.on('connected',()=>{
      console.log("DB connected")
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)

}

export default connectDB