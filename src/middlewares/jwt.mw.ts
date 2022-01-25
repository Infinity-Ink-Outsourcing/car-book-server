/// <reference path="../custom.d.ts" />
import {Request , Response , NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import {tokenSecrate} from '../config/app.config';



export default (req:Request, res:Response , next:NextFunction) => {
    const token = req.cookies['jwt'];
    if(!token) return res.status(401).json('Acces Denied');

    try{
        const verified = jwt.verify(token, tokenSecrate);
        req.user = verified;
        next();
        
    } catch(err){
        res.status(401).json('Unauthorised Access');
    }


}