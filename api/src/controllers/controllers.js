
const { Country, Activity} = require('../db.js')

const sequelize = require('sequelize')

const { Op } = require("sequelize")




async function getCountries(req,res,next){

    let {name}=req.query
    //name=name.charAt(0).toUpperCase() + name.slice(1)
   //console.log(name)
    
    if(name){

        try{

            let searchCountry=await Country.findAll({

                include:Activity,

                where:{
                    name:{
                        [Op.startsWith]: name.charAt(0).toUpperCase() + name.slice(1)
                    }
                    
                }
                
            })
            if(searchCountry.length===0){

               return res.send(`not found country while name: ${ name.charAt(0).toUpperCase() + name.slice(1)} `)
            }

            res.json(searchCountry)

        }catch(e){
            next(e)
        }
    }else{ 
        
        try{

            let countriesList=await Country.findAll({
                order:[
                    
                    ['name', 'ASC']
                ],
                
                include: {model: Activity}}
            )

            res.json(countriesList)



        }catch(e){
            next(e)
        }





    }

   



    




}

async function getDetails(req,res,next){

    let {idCountry}=req.params

    console.log( typeof idCountry, idCountry)

    try{
        if(idCountry){

            

            let country=await Country.findAll({

                include: [{
                    model:Activity,
                    attributes:['name','difficulty','duration','season'],
                   
                }],
                
                where:{
                    id:idCountry.toUpperCase()
                }
            })

            

            
            
            if(country.length>0){

               return res.json(country)
            }
            else{

                res.send(`not found country while Id: ${idCountry}`)

            }



        }

        



    }catch(e){
        next(e)
    }
}

async function addActivities(req,res,next){

    let {name, difficulty, duration, season, countriesId}=req.body

    console.log(name, difficulty, duration, season, countriesId)

    try{

        if(name){
            
            let newActivity={
            
                name,
                difficulty,
                duration,
                season
            }

            await Activity.create(newActivity)
            .then((newActivity)=>{

             newActivity.addCountry(countriesId)

            })
            .catch(e=>next(e))

            return res.send('Created.!')






        }else{
            res.send(`name is necessary`)
        }

        

    }catch(e){

        next(e)
    }

}

async function getActivities(req,res,next){

    try{
        let activity=await Activity.findAll()

        if(activity.length>0){
            return res.json(activity)
        }else{
            return res.json(['no activity created'])

        }

        
    


    }catch(e){
        next(e)
    }
}




module.exports={
    getCountries,
    getDetails,
    addActivities,
    getActivities
}