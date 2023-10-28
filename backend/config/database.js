const mongoose=require('mongoose');


const dotenv=require('dotenv');


dotenv.config({path:"backend/config/config.env"})


const connectDatabase=()=>{
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((con)=>{
        console.log(`MongoDB is connected to the host : ${con.connections[0].host}`);
    })
}

module.exports=connectDatabase;