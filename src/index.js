// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB()
.then(() => {
    app.on("error", (error) => {
        console.error("ERROR: ", error)
    throw error
    }) 

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection failed !!!", err);
})








/*import express from 'express'
const app = express()
// add a semilcolon befor IIFE
;(async () => {
    try {
        await mongoose.connect(`${procees.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.error("ERROR: ", error)
        throw error
        }) 

        app.listen(process.env.PORT , () => {
            console.log(`App is listening on ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})()
*/