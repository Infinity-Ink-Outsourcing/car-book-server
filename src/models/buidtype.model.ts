import mongoose ,{Document , Schema} from 'mongoose';

export interface BuildTypeInterface extends Document {
    name:string;
    description:string;
    logo?:string;
}

const buildTypeSchema: Schema = new Schema({
    name: { type: String, required: true, },
    description: { type: String, required: true, },
    logo: { type: String, },
}, {
    timestamps:true
});

export default mongoose.model<BuildTypeInterface>('BuildType', buildTypeSchema);
