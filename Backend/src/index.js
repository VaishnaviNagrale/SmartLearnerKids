// // require('dotenv').config()

// import dotenv from "dotenv"
// import connectDB from "./db/db.js";
// import app from "./app.js";

// dotenv.config()

// connectDB()
// .then(()=>{
//     const port = process.env.PORT || 8000
//     app.listen(port,()=>{
//         console.log(`Server is runing at port : ${port}`)
//     })
// })
// .catch((error)=>{
//     console.log("Mongodb connection failed !!!",error)
// })