const { Router } = require('express');

var express=require('express')

const { getCountries , getDetails} = require('../controllers/controllers');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');




const router = Router();

router.use(express.json())

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries',getCountries)
router.get('/countries/:idCountry',getDetails)



module.exports = router;
