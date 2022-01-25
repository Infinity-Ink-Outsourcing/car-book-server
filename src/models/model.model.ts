import mongoose ,{Document , Schema} from 'mongoose';

export interface ModelInterface extends Document {
    name:string;
    description:string;
    
}

const modelSchema: Schema = new Schema({
    name: { type: String, required: true, },
    description: { type: String, required: true, },
}, {
    timestamps:true
});

export default mongoose.model<ModelInterface>('Model', modelSchema);
