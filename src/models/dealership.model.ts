import mongoose ,{Document , Schema} from 'mongoose';

export interface DealershipInterface extends Document {
    name:string;
    email:string;
    phone:string;    
}

const dealershipSchema: Schema = new Schema({
    name: { type: String, required: true, },
    email: { type: String, default:'' },
    phone: { type: String, required: true, },
}, {
    timestamps:true
});

export default mongoose.model<DealershipInterface>('Dealership', dealershipSchema);
