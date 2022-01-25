import { Request , Response} from 'express';
import  mongoose  from 'mongoose';
import User from '../models/user.model';

export default class UserController{
    public static async Create(req:Request, res:Response){
        let { name,email, phone, password,role,isActive } = req.body;
        const user =new User({
            _id: new mongoose.Types.ObjectId(),
            name,email, phone, password,role,isActive
        })

        try {
            await user.save();
            return res.status(201).json(user);
        } catch (e) {
            res.status(500).json(e);
        }

    }

    static async Getall(req:Request, res:Response){
        try {
            const user = await User.find().exec();
            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            res.status(200).json({
                users:user,
                count: user.length,
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async Get(req:Request, res:Response){
        try {
            const user = await User.findById(req.params.Id).exec();
            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Find(req:Request, res:Response){
        try {
            const user = await User.findOne({phone:req.params.phone}).exec();
            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async Remove(req:Request, res:Response){
        try {
            const user = await User.remove({_id:req.params.userId}).exec();
            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Update(req:Request, res:Response){
        let { name,email, phone, password,role,isActive} = req.body;

        try {
            const user = await User.updateOne({_id:req.params.userId}, {$set: {
                name,email, phone, password,role,isActive
            }}).exec();

            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async Activation(req:Request, res:Response){
        let { isActive } = req.body;

        try {
            const user = await User.updateOne({_id:req.params.userId}, {$set: {
                isActive
            }}).exec();

            if (!user) {
                return res.status(404).json({massege:'unknown user'});
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

}
