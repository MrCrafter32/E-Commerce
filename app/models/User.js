import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
{
    email : {Type: String, required: true},
    password : {Type: String, required: true},
  })

  export default mongoose.models.User || mongoose.model('Users', UserSchema);
