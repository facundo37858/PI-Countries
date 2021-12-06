import React, { useState } from "react";
import { useDispatch} from "react-redux";

import { searchCountry } from "../../actions";
import style from './style.module.css'


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
        <div className={style.wrap}>
            
            <form  className={style.search} onSubmit={(e)=>{handleSubmit(e)}}>

                <input
                className={style.searchTerm} 
                type='text'
                id='country' 
                autoComplete='off' 
                value={country} 
                placeholder='find country...'
                onChange={(e)=>handleChange(e)}/>

                <button className={style.searchButton} type='submit' to='/home/search'>Search</button> 
                <button className={style.clearButton} onClick={(e)=>clearSearch(e)}>Clear Search</button>


            </form>
           
        </div>
    )
}
