
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required:true

    },

    password: {
        type: String,
        required:true
      
    }
})
const UserDetails = mongoose.model('UserDetails', UserSchema);
export default  UserDetails;
