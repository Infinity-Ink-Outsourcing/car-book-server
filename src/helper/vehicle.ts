import axios from 'axios';

const url = 'https://vpic.nhtsa.dot.gov/api/vehicles/';
const format = '?format=json';

class VehicleHelper{
    public static async GetAllMake(){
        try{
            let res = await axios.get(url+'vehicles/getallmakes'+format);
            return res.data;

        }catch(e){
            return []
        }
        

  

    }
    public static async Getallmanufacturers(page:number = 1){
        try{
            let res = await axios.get(url+'/getallmanufacturers'+format+'&page='+page);
            return res.data;

        }catch(e){
            return []
        }
    }
    public static async Getallmanufacturer(name:string){
        try{
            let res = await axios.get(url+'/getmanufacturerdetails/'+name+format);
            return res.data;
        }catch(e){
            return {}
        }
    }
    
    public static async GetMakeForManufacturer(name:string){
        try{
            let res = await axios.get(url+'/GetMakeForManufacturer/'+name+format);
            return res.data;
        }catch(e){
            return {}
        }
    }
    public static async GetMakes(name:string){
        try{
            let res = await axios.get(url+'/GetMakesForVehicleType/'+name+format);
            return res.data;
        }catch(e){
            return {}
        }
    }

    public static async GetModelforMake(name:string){
        try{
            let res = await axios.get(url+'/GetMakesForVehicleType/'+name+format);
            return res.data;
        }catch(e){
            return {}
        }
    }

    public static async GetVehicle(name:string){
        try{
            let res = await axios.get(url+'/GetMakesForVehicleType/'+name+format);
            return res.data;
        }catch(e){
            return {}
        }
    }

    public static async FindVehicle(name:string){
        try{
            let res = await axios.get(url+'/GetMakesForVehicleType/'+name+format);
            return res.data;
        }catch(e){
            return {}
        }
    }

}