const mongoose = require("mongoose");
const connect=()=>{
    mongoose.connect(process.env.MONGO_URI)

    mongoose.connection.on("error", (err) => {
        console.log(`Mongoose connection error: ${err}`);
    });
    mongoose.connection.once("connected",()=>{
        console.log("Mongoose connected to DB");
    });
}
module.exports={connect};