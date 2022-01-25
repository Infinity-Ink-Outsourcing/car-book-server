import mongoose ,{Document , Schema} from 'mongoose';

export interface VehicleInterface extends Document {

    make:string;
    model:string;
    year:string;
    color:[string];
    fuel:number;
    steering:string;
    type:number;
    image:[string];
    milage:string;
    price: number;
    stock?: number;
    owner?: string;
    engene?: string;
    perfomance? : string;
    environment ?: string;
    deimension ?: string;
    safety ?: string;
    feature ?: string
    technology ?: string;
}

const vehicleSchema: Schema = new Schema({
    make: { type: String, required: true, },
    model: { type: String, required: true },
    year: { type: String, },
    color: { type: [String],required: true,  },
    fuel: { type: String,required: true, },
    steering: { type: String,required: true, },
    type: { type: Number,required: true, },
    image: { type: [String], },
    milage: { type: String,  },
    price: { type: Number, required: true },
    stock: { type: Number, },
    owner: { type: String,required: true, },
    engene: { type: String },
    perfomance: { type: String },
    environment : { type: String },
    deimension : { type: String },
    safety : { type: String },
    feature : { type: String },
    technology : { type: String },
}, {
    timestamps:true
});

export default mongoose.model<VehicleInterface>('Vehicle', vehicleSchema);
