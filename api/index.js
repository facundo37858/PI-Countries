//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');

// const { conn } = require('./src/db.js');

const axios=require('axios');


const { Country, conn } = require('./src/db.js')

// Syncing all the models at once.

const resApi=async()=>{

  try{

    let countries= await axios.get('https://restcountries.com/v3.1/all')
    .then(res=>{return res.data})
    .then((countries)=>{
      let countriesFilter=countries.map(c=>{

        //let {name,cca3,flags,continents,capital,subregion,area,population}=c

        return {
          name:c.name.common.charCodeAt(0)===197 ? 'A'+c.name.common.slice(1):c.name.common,
          id:c.cca3,
          image:c.flags.svg,
          continent:c.region,
          capital:c.capital?c.capital[0]:'undefined',
          subregion:c.subregion,
          area:c.area,
          population:c.population}
      })
      return countriesFilter
    })
    
    await Country.bulkCreate(countries)


   

    

  }catch(e){

    console.log(`error ${e}`)
  }

  



}

//capital === undefined || capital.lenght < 1 ? 'undefined' : el.capital[0]


conn.sync({ force: true }).then(async() => {
   //let responce=
   await resApi()
  // return responce
})
.then(()=>server.listen(3001, () => {console.log('%s listening at 3001')}))
   // eslint-disable-line no-console
  