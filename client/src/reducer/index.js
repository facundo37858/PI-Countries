

import { GET_COUNTRIES, GET_COUNTRY_BY_NAME, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, GET_ACTIVITIES, ORDER} from "../actions/constants";

const initialState={

    countriesBackup:[],

    countries:[],

    activities:[],

    filterByContinent:[],

    filterByActivity:[]

  

}


export default function rootReducer(state=initialState,action){
    switch (action.type) {
        case GET_COUNTRIES:
            
            return{
                ...state,
                countriesBackup:action.payload,
                countries:action.payload
                
            };
        case GET_COUNTRY_BY_NAME:
            return{
                ...state,
                countries:action.payload
            }
        case FILTER_BY_CONTINENT:

            // let allCountries=state.countriesBackup
            
            if(action.payload==='all'){
                return{
                    ...state,
                    countries:state.countriesBackup,
                    filterByContinent:[]
                }
            }
            if(state.filterByActivity.length>0){
                return{
                    ...state,
                    countries:state.filterByActivity.filter(country=>country.continent===action.payload)
                }
            }
          
            return{
                ...state,
                countries:state.countriesBackup.filter(country=>country.continent===action.payload),
                filterByContinent:state.countriesBackup.filter(country=>country.continent===action.payload)

            }
        case GET_ACTIVITIES:
            return{
                ...state,
                activities:action.payload
            }
        case FILTER_BY_ACTIVITY:

            let countriesAll=state.countriesBackup
            
            // result = data.filter(country => country.activities.some(tour => tour.name === tourism))

            // let filter=[]

            // state.countriesBackup.map(country=>{

            //     country.activities.forEach(e=>{

            //         if(e.name===action.payload){
            //             filter.push(country)
            //         }
            //     })
                
            // })
            // console.log(filter)
            
            if(action.payload==='all'){
                return{
                    ...state,
                    countries:state.countriesBackup,
                    filterByActivity:[]
                   
                }
            }

            if(state.filterByContinent.length>0){
                return{
                    ...state,
                    countries:state.filterByContinent.filter(country=>country.activities.some(activity=>activity.name===action.payload)),
                    filterByActivity:countriesAll.filter(country=>country.activities.some(activity=>activity.name===action.payload))
                }
            }
           
            return{
                ...state,
                countries:countriesAll.filter(country=>country.activities.some(activity=>activity.name===action.payload)),
                filterByActivity:countriesAll.filter(country=>country.activities.some(activity=>activity.name===action.payload)),
                
            }

        case ORDER:
            if(action.payload==='DESC'){
            
             
                return{
                    ...state,
                    countries:state.countries.map((c,i)=>{return {i,value:c.name}}).sort((a,b)=>{
                        if(a.value > b.value){
                            return -1
                        }
                        if(a.value < b.value){
                            return 1
                        }
                        return 0
                    }).map(v=>state.countries[v.i])
                }
                
            }
            if(action.payload==='ASC'){
                
                
                return{
                    ...state,
                    countries:state.countries.map((c,i)=>{return {i,value:c.name}}).sort((a,b)=>{
                        if(a.value > b.value){
                            return 1
                        }
                        if(a.value < b.value){
                            return -1
                        }
                        return 0
                    }).map(v=>state.countries[v.i])
                }
                
            }
            if(action.payload==='ANY'){
                
                
                return{
                    ...state,
                    countries:state.countriesBackup
                }
                
            }
           
           


            break;
        default:
            return state;
    }
}


// items.sort(function(a, b) {
//     var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
  
//     // names must be equal
//     return 0;
//   });

// const mapped = items.map((v, i) => {
//     return { i, value: v.name };
//   }).sort((a, b) => {
//     if (a.value > b.value) {
//       return -1;
//     }
//     if (a.value < b.value) {
//       return 1;
//     }
//     return 0;
//   }).map(v => items[v.i]);
//   console.log(mapped)