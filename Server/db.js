import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const result = await mongoose.connect(`mongodb+srv://${process.env.MongoName}:${process.env.MongoPass}@first-mongodb-project.wwk2o.mongodb.net/Flipkart`);
         
    } catch (e) {
        console.error("Error connecting to MongoDB:", e.message);
        process.exit(1);
    }
};

export default connectDB;
