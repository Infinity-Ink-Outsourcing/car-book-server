import Email from '../helper/email.helper';
import * as EmailConfig from '../config/email.config';
import voterConfirm from '../templates/voterConfirm'



export default class EmailService{
    public static  ElectionRegistation(to:string, id:string){
        Email.testTransporter().then((transport) => {
            Email.send(transport, 'test@test.com', to, 'Confirm Election Registration', voterConfirm(to, id , EmailConfig.sender));
        });
    }

}