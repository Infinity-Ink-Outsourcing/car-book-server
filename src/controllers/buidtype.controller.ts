import { Request , Response} from 'express';
import  mongoose  from 'mongoose';
import BuildType from '../models/make.model';

export default class BuildTypeController{
    public static async Create(req:Request, res:Response){
        let { name, description} = req.body;
        const buildType =new BuildType({
            _id: new mongoose.Types.ObjectId(),name, description})

        try {
            await buildType.save();
            return res.status(201).json(buildType);
        } catch (e) {
            res.status(500).json(e);
        }

    }

    static async Getall(req:Request, res:Response){
        try {
            const buildType = await BuildType.find().exec();
            if (!buildType) {
                return res.status(404).json({massege:'unknown buildType'});
            }
            res.status(200).json({buildType});
        } catch (error) {
            res.status(500).json(error);
        }
    }


    static async Remove(req:Request, res:Response){
        try {
            const buildType = await BuildType.remove({_id:req.params.buildTypeId}).exec();
            if (!buildType) {
                return res.status(404).json({massege:'unknown buildType'});
            }
            res.status(200).json(buildType);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async Update(req:Request, res:Response){
        let { name, description} = req.body;

        try {
            const buildType = await BuildType.updateOne({_id:req.params.buildTypeId}, {$set: {
                name, description
            }}).exec();

            if (!buildType) {
                return res.status(404).json({massege:'unknown buildType'});
            }
            res.status(200).json(buildType);
        } catch (error) {
            res.status(500).json(error);
        }
    }

}
