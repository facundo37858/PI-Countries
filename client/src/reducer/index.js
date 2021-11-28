
import { GET_COUNTRIES, GET_COUNTRY_BY_NAME, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, GET_ACTIVITIES} from "../actions/constants";

const initialState={

    countriesBackup:[],

    countries:[],

    activities:[],

    countriesByContinent:[],

    countriesByActivity:[]

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
            return{
                ...state,
                countries:state.countriesByContinent

            }
        case GET_ACTIVITIES:
            return{
                ...state,
                activities:action.payload
            }
        case FILTER_BY_ACTIVITY:
            return{
                ...state,
                countries:state.countriesByActivity
            }


    
        default:
            return state;
    }
}