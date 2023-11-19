import mongoose from "mongoose"

const connectionToDB = () =>{
    try {
        mongoose.connect(process.env.MONGODB_URI)
        .then=(() =>{
            console.log("Database connected successfully");
        }) .catch(err => console.log(err))
    } catch (error) {
        
    }
}
export default connectionToDB;