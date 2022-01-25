import mongoose ,{Document , Schema} from 'mongoose';
//import bcrypt from "bcrypt";

export interface UserInterface extends Document {
    name:string;
    email:string;
    phone:string;
    password:string;
    role:boolean;
    isActive:boolean;
}

const userSchema: Schema = new Schema({
    name: { type: String, required: true, },
    email: { type: String, required: true, },
    phone: { type: String, required: true, },
    role: {type:String, required: true, },
    isActive: {type:Boolean, required: true, default:false },
}, {
    timestamps:true
});

// userSchema.virtual("fullName").get(function (this: UserInterface) {
//     return `${this.firstName} ${this.lastName}`;
// });

// userSchema.pre(
//   "save",
//   async function (this: UserInterface, next) {
//     if (!this.isModified("password")) return next();

//     // Random additional data
//     const salt = await bcrypt.genSalt(10);

//     const hash = await bcrypt.hashSync(this.password, salt);

//     // Replace the password with the hash
//     this.password = hash;

//     return next();
//   }
// );
export default mongoose.model<UserInterface>('User', userSchema);
