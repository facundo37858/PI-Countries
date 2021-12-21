

import { GET_COUNTRIES, GET_COUNTRY_BY_NAME,GET_ACTIVITIES, FILTER_BY_CONTINENT , 
    FILTER_BY_ACTIVITY, ORDER, POST_ACTIVITY, NEW_ACTIVITY, GET_COUNTRIES_BY_ID, ORDER_BY_POPULATION,
ORDER_BY_AREA}  from "./constants";

import axios from 'axios'



export function getCountries(){
    return async function (dispach){

        let countries= await axios.get('/countries')
        .then((json)=>{return json.data})

        

        return dispach({
            type:GET_COUNTRIES,
            payload:countries
        })
    }


}

export function searchCountry(name){
    return async function(dispach){

        let countryResult=await axios.get(`/countries?name=${name}`)
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

        let activities= await axios.get('/activities')
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

export function order(typeOrder){
    return function(dispch){
        
        return dispch({
            type:ORDER,
            payload:typeOrder
        })
    }
}

export function addActivity(activity){
    return async function(dispach){

        let addActivity= await axios.post('/activity',activity)
        .then(json=>json.data)
        console.log('addActivity',addActivity)

        if(addActivity==='Activity Created.!'){
            return dispach({
            type:POST_ACTIVITY,
            payload:true
            })
        }else{
            return dispach({
                type:POST_ACTIVITY,
                payload:false
            })
        }


        

        




        
    }
}

export function createNewActivity(){

    return function(dispach){
        return dispach({
            type:NEW_ACTIVITY,
            payload:null
        })
    }
}

export function getCountriesById(id){

    return async function(dispach){

        let countriById= await axios.get(`/countries/${id}`)
        .then(json=>json.data)

        return dispach({
            type:GET_COUNTRIES_BY_ID,
            payload:countriById
        })


    }
}

export function orderByPopulation(order){
    return function(dispach){
        return dispach({
            type:ORDER_BY_POPULATION,
            payload:order
        })
    }
}

export function orderByArea(type){
    return function(dispach){
        return dispach({
            type:ORDER_BY_AREA,
            payload:type
        })
        
    }

    

}