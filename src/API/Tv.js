import API from "./API";
import {TMDB_API_KEY} from './Key'
export const getNationalities=async()=>{
    try{
        const res=await API.get('nationalities')
        console.log('result for nationalities',res)
        if(res&&res.status===200){
                return {
                    status:'success',
                    data:res.data.body,
                }
            }
            else{
                return{
                    status:'error',
                }
            }
    }
    catch(err){
        console.log('error in statsres...',err);
        return{
            status:'error',
            error:err.response.data,
        }
    }
}