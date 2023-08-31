const Persona = require('../models/Persona');


exports.getAllUsers = async(request,response)=>{
    try{
        const persona = await Persona.find();
        response.json(persona);
        console.log(persona);
    }catch (error){
        response.status(500).json({error: 'Error al obtener personas'});
    }
};