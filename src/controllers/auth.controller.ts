// /// <reference path="../custom.d.ts" />

// import { Request , Response} from 'express';
// import jwt from 'jsonwebtoken';
// import User , {UserInterface} from '../models/user.model';
// import {tokenSecrate} from '../config/app.config';

// export default class AuthController{

//     public static async SignIn(req:Request, res:Response){
//         try{
//             const user:UserInterface | null = await User.findOne({email:req.body.email});
//             if(!user){
//                 return res.status(404).json({
//                     massege: 'User not found',
//                 })
//             }

            

//             if(! user.isActive ){
//                 return res.status(400).json({
//                     massege:'Activate Account to Login',
//                 })
//             }

//             jwt.sign({email:user.email,isAdmin:user.isAdmin}, tokenSecrate , (token:any)=>{
//                 return res.status(201).cookie('jwt', token,{ httpOnly:true, maxAge: 24 * 60 *60 *1000 }).json({status:"success", user:{email:user.email, isAdmin:user.isAdmin}});
//             });

            
//         }catch(e){
//             return res.status(500).json(e);
//         }
        
        
//     }

//     public static async SignOut(req:Request, res:Response){
//        res.cookie('jwt', '', {
//            maxAge: 0
//        });

//        res.status(201).json({
//            status:'success',
//        })
//     }

    

// }
