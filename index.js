import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 5000;
const DB_URL =
    "mongodb+srv://mark9205:<passwd>@cluster0.czlkw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();
app.use(express.json());
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
    } catch (error) {
        console.log(error);
    }
}

startApp();
