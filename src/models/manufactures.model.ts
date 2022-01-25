import mongoose ,{Document , Schema} from 'mongoose';

export interface ManufactureInterface extends Document {
    name: { type: String, required: true, unique:true },
    description: { type: String, required: true, },
}

const manufactureSchema: Schema = new Schema({
    name: { type: String, required: true, unique:true },
    description: { type: String, required: true, },
}, {
    timestamps:true
});

export default mongoose.model<ManufactureInterface>('Manufacture', manufactureSchema);
