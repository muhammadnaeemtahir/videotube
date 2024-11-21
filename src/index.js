import dotenv from 'dotenv'
import connectDB from "./database/index.js";
import { app } from './app.js';

dotenv.config({ path: './env' })

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 4000, () => {
            console.log(`⚙️  Server running on port ${process.env.PORT}`)
        })
        app.on("error", (error) => {
            console.error("Server error: ", error)
        })
    })
    .catch((error) => {
        console.log("MongoDB connection error: ", error)
    })