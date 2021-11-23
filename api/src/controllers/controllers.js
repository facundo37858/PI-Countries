
const { Country} = require('../db.js')




async function getCountries(req,res,next){

    try{

        let countriesList=await Country.findAll()

        res.json(countriesList)



    }catch(e){
        next(e)
    }



    

    res.send('SOY HOOME')


}

async function getDetails(req,res,next){

    let {idCountry}=req.params

    console.log( typeof idCountry, idCountry)

    try{
        if(idCountry){

            

            let country=await Country.findByPk(idCountry.toUpperCase())
            
            if(country){

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

module.exports={
    getCountries,
    getDetails
}