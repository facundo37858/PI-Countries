

import { GET_COUNTRIES } from "./constants";

import axios from 'axios'



export function getCountries(){
    return async function (dispach){

        let countries= await axios.get('http://localhost:3001/countries')
        .then((json)=>{return json.data})

        

        return dispach({
            type:GET_COUNTRIES,
            payload:countries
        })
    }


}