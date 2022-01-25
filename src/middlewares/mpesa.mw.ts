/// <reference path="../custom.d.ts" />
import {Request , Response , NextFunction } from 'express';
import axios from 'axios';

import mpesa from '../config/mpesa.config'

export default (req:Request, res:Response , next:NextFunction) => {
    const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
    const auth = 'Basic '+Buffer.from(mpesa.ConsumerKey +':'+mpesa.ConsumerSecret).toString('base64');
    const headers = {Authorization: auth,};

    axios.get<any>(url, {headers:headers})
    .then(response =>{
        let data = response.data;
        req.token = data.access_token;
        next();
    })
    .catch((error) =>{ 
        console.log('faild registration');
     });
}
