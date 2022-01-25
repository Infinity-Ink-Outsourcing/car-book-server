import mongoose ,{Document , Schema} from 'mongoose';

export interface SellerInterface extends Document {
    name:string;
    email:string;
    phone:string;    
}

const sellerSchema: Schema = new Schema({
    name: { type: String, required: true, },
    email: { type: String, default:'' },
    phone: { type: String, required: true, },
}, {
    timestamps:true
});

export default mongoose.model<SellerInterface>('Seller', sellerSchema);
