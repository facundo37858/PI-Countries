import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addActivity, createNewActivity, getCountries } from "../../actions";
import style from './style.module.css'
import style2 from '../../css/styleFilters.module.css'


export default function Form(){

    let countries=useSelector(state=>state.countriesBackup)

    let createState=useSelector(state=>state.create)


    

    

    

    

    let dispach=useDispatch()

    useEffect(()=>{
        dispach(getCountries())
    },[dispach])

    const [input,setInputs]=useState({name:'',difficulty:'',season:'',duration:'',countriesId:[]})

    

    

    const [errors,setErrors]=useState({name:'',difficulty:'',season:'',duration:''})

    function filtradoCountrie(countries,id){

        let country=[]

        for(let i=0;i<countries.length;i++){
            for(let j=0;j<id.length;j++){
                if(countries[i].id===id[j]){
                    country.push(countries[i])
                    
                }
            }
            
        }
        return country

    }

    function validet(input){

        let errors={}

        if(!input.name.trim()){
            errors.name='Name is required'
        }
        if(!input.difficulty){

            errors.difficulty='Select difficulty'
        }
        if(!input.season){

            errors.season='Select season'
        }
        if(!input.duration){

            errors.duration='Duration is required'
        }
        if(input.countriesId.length<0){
            errors.countriesId='Select country'
        }
        return errors

    }

  

   

    const handelInputs=(e)=>{
        
        // console.log(e.target.name)
        // //let inpunChange=document.querySelectorById(e.target)

        // if(e.target.name==='name'){
        //     setInputs(input=>({...input,name:e.target.value}))
        // }
        // if(e.target.name==='deficulty'){
        //     setInputs(input=>({...input,difficulty:e.target.value}))
        // }
        // if(e.target.name==='season'){
        //     setInputs(input=>({...input,season:e.target.value}))
        // }
        // if(e.target.name==='duration'){
        //     setInputs(input=>({...input,duration:e.target.value}))
        // }
        

        setInputs({...input,[e.target.name]:e.target.value})
        setErrors(validet({...input,[e.target.name]:e.target.value}))
        
             
    }

    const handelSelect=(e)=>{

        if(!input.countriesId.includes(e.target.value) && e.target.value!=='all'){

            setInputs(input=>({...input,countriesId:[...input.countriesId,e.target.value]}))

           
            
            
            
        }
        
        
        
        
        
    }  
    const handelDelete=(e)=>{
      
        e.preventDefault()
        setInputs({...input,
            countriesId: input.countriesId.filter(el => el !== e.target.id)
        });
        
    }

    const handelSubmit=(e)=>{
        e.preventDefault()       
        dispach(addActivity(input))
        
        

        

    }
    const handelCreate=(e)=>{
        e.preventDefault()
        dispach(createNewActivity())
        setInputs({name:'',difficulty:'',season:'',duration:'',countriesId:[]})
    }
    

    
   

   

  
    

    return(
        <div>
            <h1 className={style.title}>Create Activity</h1>
            <div>
                <Link style={{ textDecoration: 'none' }} to='/home'><button className={style.buttonHome}>Home</button></Link>
            </div>
            {createState?

            <div>
                
                <p className={style.text3}>Created Activity!!!!</p>
                <button className={style.buttonNewActivity} onClick={handelCreate}>Add New Activity</button> 
            </div>:

            <form className={style.form} >


                <div>
                    <label className={style.text}>Name Activity </label>
                
                    <input className={style.inputs} onChange={(e)=>{handelInputs(e)}} key='nameActivity' id='name' name='name' type='text' placeholder='Activity Name...' value={input.name}>
                    
                    </input>
                </div>{errors.name?<span className={style.danger}>{errors.name}</span>:null}

                <div>
                    
                    <label className={style.text}>Duration </label>
                    <input className={style.inputs} min="1"  key='duration' onChange={(e)=>handelInputs(e)} type='number' id='duration' name='duration' placeholder='Duration ...' value={input.duration} ></input><label className={style.text2}>min</label>
                    
                    
                </div>{errors.duration?<span className={style.danger}>{errors.duration}</span>:null} 

                <fieldset className={style.fieldset} >
                    <legend className={style.legend}>Choose Dificulty to Activity</legend>
                        <lebel className={style.label}>
                            1<input key='dificulty1'   onClick={(e)=>handelInputs(e)} name='difficulty' type='radio' id='dificulty1' value='1'></input>
                            
                        </lebel>
                        <lebel className={style.label}>
                            2<input key='dificulty2' onClick={(e)=>handelInputs(e)} name='difficulty' type='radio' id='dificulty2' value='2'></input>
                            
                        </lebel>
                        <lebel className={style.label}>
                            3<input key='dificulty3' onClick={(e)=>handelInputs(e)} name='difficulty' type='radio' id='dificulty3' value='3'></input>
                            
                        </lebel>
                        <lebel className={style.label}>
                            4<input key='dificulty4' onClick={(e)=>handelInputs(e)} name='difficulty' type='radio' id='dificulty4' value='4'></input>
                            
                        </lebel>
                        <lebel className={style.label}>
                            5<input key='dificulty5' onClick={(e)=>handelInputs(e)} name='difficulty' type='radio' id='dificulty5' value='5'></input>
                            
                        </lebel>
                        {errors.difficulty?<span className={style.danger}>{errors.difficulty}</span>:null}
                </fieldset>

                <fieldset className={style.fieldset}>
                    <legend className={style.legend}>Choose Season</legend>
                        <label className={style.label}>
                            Spring<input  onChange={(e)=>handelInputs(e)} key='seasonActivitySp' name='season' type='radio' id='seasonSp' value='spring'></input>
                            
                        </label>
                        <label className={style.label}>
                            Summer<input onChange={(e)=>handelInputs(e)} key='seasonActivityS' name='season' type='radio' id='seasonS' value='summer'></input>
                            
                        </label>
                        <label className={style.label}>
                            Autumn<input onChange={(e)=>handelInputs(e)} key='seasonActivityA' name='season' type='radio' id='seasonA' value='autumn'></input>
                            
                        </label>
                        <label className={style.label}>
                            Winter<input  onChange={(e)=>handelInputs(e)} key='seasonActivityW' name='season' type='radio' id='seasonW' value='winter'></input>
                            
                        </label>
                        
                      {errors.season?<span className={style.danger}>{errors.season}</span>:null}
                        
                        
                </fieldset>
                


                <div className={style2.sidebarbox}>
                    <p><label className={style.text} htmlFor='activity-select'> Please choose Country:</label></p>

                    <select className={style2.styledselect} name='countriesId' onChange={handelSelect} >
                    
                        <option value='all' defaultValue="selected">Choose Country...</option>

                        {countries.length>0&& countries.map((country)=>{return [country.name,country.id]}).sort().map((c,index)=>{
                            return(<option  value={c[1]} key={c[1]} >{c[0]} ({c[1]})</option>)
                        })}
                    
               


                

                    </select>
                </div>

                <ul>
                    <p className={style.text}>Countries:</p>
                    {input.countriesId.length>0?
                            filtradoCountrie(countries,input.countriesId).map((c,i)=>{
                                return(
                                   <p className={style.text2} key={i}>{c.name} ({c.id}) <button className={style.buttonDelete} id={c.id} onClick={(e)=>handelDelete(e)}>X</button></p>
                                )
                            }):<p className={style.danger}>Add not Countries</p>
                        
                
                        
                
            
                    }
                </ul>

                <div>
                    <button className={style.buttonAdd} onClick={handelSubmit}>Add Activity</button>
                </div>

                


                


               
                
                
            </form>

            
            }
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