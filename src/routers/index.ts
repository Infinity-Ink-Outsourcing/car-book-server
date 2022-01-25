import { Application} from 'express';

import User from './user.router'


export default (app:Application)=>{
    app.use('/api',User);

}