
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const QuatationSchema = new Schema({
    name: {
        type: String
    },
    product: {
        type: String
    },
    price:{
        type:String

    },
    quantity:{
        type:String
    },
    city: {
        type: String
    },
    contact: {
        type: String
    }
})
// module.exports = mongoose.model('Vendor', vendorSchema)
const Quatation = mongoose.model('Quatation', QuatationSchema);
export default Quatation