import React, { useState } from "react";
import { useDispatch} from "react-redux";

import { searchCountry } from "../../actions";


export default function Search(){

    //let countrySearch=useSelector(state=>state.countries)

    let dispach=useDispatch()

    const [country,setCountry]=useState('')

    const handleSubmit=(event)=>{
        event.preventDefault()
        dispach(searchCountry(country))
        setCountry('')



    }

    const handleChange=(event)=>{
        event.preventDefault()
        setCountry(event.target.value)
        
    }

    const clearSearch=(e)=>{
        e.preventDefault()
        dispach(searchCountry(country))
        setCountry('')

    }


    return(
        <div>
            <form onSubmit={(e)=>{handleSubmit(e)}}>

                <input 
                type='text'
                id='country' 
                autoComplete='off' 
                value={country} 
                placeholder='find country...'
                onChange={(e)=>handleChange(e)}/>

                <button type='submit' to='/home/search'>Search</button> 
                <button onClick={(e)=>clearSearch(e)}>Clear Search</button>


            </form>
           
        </div>
    )
}