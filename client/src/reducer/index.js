
import { GET_COUNTRIES, GET_COUNTRY_BY_NAME, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, GET_ACTIVITIES} from "../actions/constants";

const initialState={

    countriesBackup:[],

    countries:[],

    activities:[]

  

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

            let allCountries=state.countriesBackup
            
            if(action.payload==='all'){
                return{
                    ...state,
                    countries:state.countriesBackup
                }
            }
            return{
                ...state,
                countries:allCountries.filter(country=>country.continent===action.payload)

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
                    countries:state.countriesBackup
                }
            }
            return{
                ...state,
                countries:countriesAll.filter(country=>country.activities.some(activity=>activity.name===action.payload))
            }


    
        default:
            return state;
    }
}