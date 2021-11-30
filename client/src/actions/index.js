

import { GET_COUNTRIES, GET_COUNTRY_BY_NAME,GET_ACTIVITIES, FILTER_BY_CONTINENT , FILTER_BY_ACTIVITY}  from "./constants";

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

export function searchCountry(name){
    return async function(dispach){

        let countryResult=await axios.get(`http://localhost:3001/countries?name=${name}`)
        .then((json)=>{return json.data})

        return dispach({
            type:GET_COUNTRY_BY_NAME,
            payload:countryResult
        })


    }
}

export  function filterByContinent(continent){

    return function(dispach){
        return dispach({
            type:FILTER_BY_CONTINENT,
            payload:continent
        })
    }


}

export function getActivities(){


    return async function(dispach){

        let activities= await axios.get('http://localhost:3001/activities')
        .then((json)=>json.data)

        return dispach({
            type:GET_ACTIVITIES,
            payload:activities
        })

    }
}

export  function filterByActivity(activity){

    return function(dispach){
        return dispach({
            type:FILTER_BY_ACTIVITY,
            payload:activity
        })
    }


}