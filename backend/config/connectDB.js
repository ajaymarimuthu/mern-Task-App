const mongoose=require("mongoose")



const connectDB = async () =>{
    try {

        // const connect= await mongoose.connect(process.env.MONGO_URI);
        const connect=await mongoose.connect("mongodb+srv://ajayindia8001:Ajvennila01@cluster0.udwafpl.mongodb.net/mernTasksApp?retryWrites=true&w=majority");
        console.log("mongoDB connected");
        // console.log(`mongoDB connected: ${connect.connection.host}`);
        
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}


module.exports=connectDB;