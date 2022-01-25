import { Request , Response} from 'express';
import  mongoose  from 'mongoose';
import Dealership from '../models/dealership.model';

export default class DealershipController{
    public static async Create(req:Request, res:Response){
        let { name,email, phone,} = req.body;
        const dealership =new Dealership({
            _id: new mongoose.Types.ObjectId(),
            name,email, phone, 
        })

        try {
            await dealership.save();
            return res.status(201).json(dealership);
        } catch (e) {
            res.status(500).json(e);
        }

    }

    static async Getall(req:Request, res:Response){
        try {
            const dealership = await Dealership.find().exec();
            if (!dealership) {
                return res.status(404).json({massege:'unknown dealership'});
            }
            res.status(200).json({
                dealerships:dealership,
                count: dealership.length,
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async Get(req:Request, res:Response){
        try {
            const dealership = await Dealership.findById(req.params.Id).exec();
            if (!dealership) {
                return res.status(404).json({massege:'unknown dealership'});
            }
            res.status(200).json(dealership);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Find(req:Request, res:Response){
        try {
            const dealership = await Dealership.findOne({phone:req.params.phone}).exec();
            if (!dealership) {
                return res.status(404).json({massege:'unknown dealership'});
            }
            res.status(200).json(dealership);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async Remove(req:Request, res:Response){
        try {
            const dealership = await Dealership.remove({_id:req.params.dealershipId}).exec();
            if (!dealership) {
                return res.status(404).json({massege:'unknown dealership'});
            }
            res.status(200).json(dealership);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Update(req:Request, res:Response){
        let {email, phone,} = req.body;

        try {
            const dealership = await Dealership.updateOne({_id:req.params.dealershipId}, {$set: {
                email, phone, 
            }}).exec();

            if (!dealership) {
                return res.status(404).json({massege:'unknown dealership'});
            }
            res.status(200).json(dealership);
        } catch (error) {
            res.status(500).json(error);
        }
    }

}
