
import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    title: String,
    imgSrc:String,
    single:String,
    type:String,
    rating:Number,
    review:String,
    price: String,
    
    // Add other fields as necessary
},{collection:'item'});

const itemModel = mongoose.model('item', itemSchema);

export { itemModel };
