const express = require('express');
const router = express.Router();

//ruta principal
router.get('/',(request,response) => {
    response.render('index')
});



// mas rutas

module.exports = router;