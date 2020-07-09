'use strict';
const Gatos = require('../models/gatos');
const mongoose =require('mongoose')

const getGatos = async (queryParams) => {
    try {
        //esta linea cosulta por los parametros
        let gatos = await Gatos.find(queryParams)
        return gatos;
    } catch (error) {
        
        throw error;
    } 
}

const addGato = async (gato) => {
    try {
        //esta linea agrega a la bd
        
        let newGato = await Gatos.create(gato)
        return newGato;

    } catch (error) {
        throw error;
    }
}


const updateAuthorById  = async (gato) => {
    try {   
        let newGato= await Gatos.updateOne({
            _id : mongoose.Types.ObjectId(gato._id)
        },gato) 
        return newGato; 

    }catch (error) {
        throw error;
    }
}


const eliminarGato = async(id)=>{
    try {
        let gato = await Gatos.dele
        let gato = await Gatos.findById(mongoose.Types.ObjectId(id))
        return gato
    } catch (error) {
        throw error;
    }
}





module.exports = {
    addAuthor,getAuthors, getAuthorById,updateAuthorById
}