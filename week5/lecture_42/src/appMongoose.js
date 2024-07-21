const { connect } = require("mongoose");

const MONGO_URL = "mongodb://localhost:27017";

const DB_NAME = `cs-mern`;

connect(`${MONGO_URL}/${DB_NAME}`);

async function connectDB(){
    try{
        await connect(`${MONGO_URL}/${DB_NAME}`);
        console.log("MongoDb Connected");
    }catch(err){
        console.log(err.message);
    }
    
}

connectDB();