import mongoose ,{Document , Schema} from 'mongoose';

export interface MakeInterface extends Document {
    name:string;
    description:string;
    
}

const makeSchema: Schema = new Schema({
    name: { type: String, required: true, unique:true },
    description: { type: String, required: true, },
}, {
    timestamps:true
});

export default mongoose.model<MakeInterface>('Make', makeSchema);
