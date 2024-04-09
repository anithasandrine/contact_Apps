import swaggerUi from "swagger-ui-express"
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import configuration from './configs/index.js';
import mongoose from 'mongoose';
import cors from 'cors';
import swagger from "./docs/swagger.json" assert { type: "json" };

app.use(express.json());//middleware
app.use(cors());


import router from './routes/contacts.router.js'

app.use('/contact_app', router)
app.use("/anitha",  swaggerUi.serve, swaggerUi.setup(swagger))



mongoose.connect(configuration.mongoURI)
.then(() => {
    app.listen(configuration.port, ()=> {
        console.log("MongoDB is connected")
        console.log("listening on port "+configuration.port);
    });
})
.catch(err => {
    console.log(err);
});
// app.use("/",(req,res)=>{
//     // console.log("listening server");
//     return res.send("server is running");
// })


