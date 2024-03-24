
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
    name: {
        type: String
    },

    city: {
        type: String
    },
    contact: {
        type: String
    },
    email: {
        type: String
    
    }

})
// module.exports = mongoose.model('Vendor', vendorSchema)
const Customer = mongoose.model('Customer', CustomerSchema);
export default Customer