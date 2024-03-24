
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    product: {
        type: String
    },

    brand: {
        type: String
    },
    contact: {
        type: String
    },
    offer: {
        type: String
    
    },
    size:{
        type :String
    },
    shopName:{
        type:String
    }

})
// module.exports = mongoose.model('Vendor', vendorSchema)
const CustomerProduct = mongoose.model('CustomerProduct', ProductSchema);
export default  CustomerProduct;