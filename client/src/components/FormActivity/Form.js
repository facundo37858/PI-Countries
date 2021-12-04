import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../../actions";
import style from './style.module.css'


export default function Form(){

    let countries=useSelector(state=>state.countriesBackup)

    let dispach=useDispatch()

    useEffect(()=>{
        dispach(getCountries())
    },[dispach])
   

   
    

    return(
        <div>
            <div>
                <Link to='/home'><div >Home</div></Link>
            </div>
            <form className={style.form}>
                <input key='nameActivity' name='name' type='text' placeholder='Activity Name...'></input>
                <fieldset className={style.fieldset}>
                    <legend>Choose Dificulty to Activity</legend>
                        <div>
                            <input key='dificultyActivity' name='deficulty' type='radio' id='dificulty1' value='1'></input>
                            <label for='dificulty1'>1</label>
                        </div>
                        <div>
                            <input key='dificultyActivity' name='deficulty' type='radio' id='dificulty2' value='2'></input>
                            <label for='dificulty2'>2</label>
                        </div>
                        <div>
                            <input key='dificultyActivity' name='deficulty' type='radio' id='dificulty3' value='3'></input>
                            <label for='dificulty3'>3</label>
                        </div>
                        <div>
                            <input key='dificultyActivity' name='deficulty' type='radio' id='dificulty4' value='4'></input>
                            <label for='dificulty4'>4</label>
                        </div>
                        <div>
                            <input key='dificultyActivity' name='deficulty' type='radio' id='dificulty5' value='5'></input>
                            <label for='dificulty5'>5</label>
                        </div>
                        
                </fieldset>
                <fieldset className={style.fieldset}>
                    <legend>Choose Season</legend>
                        <div>
                            <input key='seasonActivity' name='season' type='radio' id='seasonSp' value='spring'></input>
                            <label for='seasonSp'>Spring</label>
                        </div>
                        <div>
                            <input key='seasonActivity' name='season' type='radio' id='seasonS' value='summer'></input>
                            <label for='seasonS'>Summer</label>
                        </div>
                        <div>
                            <input key='seasonActivity' name='season' type='radio' id='seasonA' value='autumn'></input>
                            <label for='seasonA'>Autumn</label>
                        </div>
                        <div>
                            <input key='seasonActivity' name='season' type='radio' id='seasonW' value='winter'></input>
                            <label for='seasonW'>Winter</label>
                        </div>
                        
                      
                        
                        
                </fieldset>
                
                <div>
                    <label> Duration: </label>
                    <input key='duration' type='number' id='duration'  placeholder='Duration ...'></input><label>min</label>
                        
                </div>

              
                <p>

                    Please choose Country:

                    <input type="text" list="listCountries"/>

                </p>

                <datalist id="listCountries">
                    {countries.length>0&& countries.map((country)=>{return country.name}).sort().map(c=>{
                        return(<option>{c}</option>)
                    })}

                </datalist>

                <button type='submit'>Add Activity/ies</button>


                


               
                
                
            </form>
        </div>
    )
}

/* <form>
  <div>
    <input type='radio" id="subscribeNews" name="subscribe" value="newsletter">
    <label for="subscribeNews">Subscribe to newsletter?</label>
  </div>
  <div>
    <button type="submit">Subscribe</button>
  </div>
</form> */