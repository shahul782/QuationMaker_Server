
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const vendorSchema = new Schema({
    vendorName: {
        type: String
    },
    Idproof:{
         type:String
    },
    IdproofNum:{
        type:String
    },
    city: {
        type: String
    },
    contact: {
        type: String
    }
})

const Vendor = mongoose.model('Vendor', vendorSchema);
export default Vendor