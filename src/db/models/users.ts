
import { validateEmail, validatePassword } from "@/helpers/validateCredentials";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'please provide a user name'],
    },
    email: {
        type: String,
        require: [true, 'please provide a valid email Id'],
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address']
    },
    password: {
        type: String,
        require: [true, 'please provide a valid email Id'],
        validate: [validatePassword, 'Please fill a valid password']
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;