'use strict'

const GatosDomain = require('../domain/gatosDomain');
const Gatos = require('../models/gatos');


let getGatos = async (body) => {
    try {
        let query = filters ? filters : {};
        let listaGatos = await gatosDomain.getGatos(query);
        return listaGatos;
      } catch (error) {
        throw error;
      }
}


let getGato = async (id) => {
    try {
        let gato = await gatosDomain.getGato(id);
        if(!gato){
            throw error 
        }else{  
            return gato;
        }
    } catch (error) {
        throw error;
    }

}



let actualizarGato = async(body, id) => {
  try {
    if(!_id||!body){
        console.log("Sin Id");
        throw error;
    }
    let gato = new Gatos({
        _id : id,
        name: body.name, 
        raza: body.raza,
        edad: body.edad, 
        foto: body.foto
    })
    
    let gato = await GatosDomain.actualizarGato(gato);
    if(!gato){
        throw error
    }else{
        return gato
    }
  } catch (error) {
    throw error;
  }
}

let crearGato = async(body) => {
    try {
        if(!body){
            console.log("Body vacio");
            throw error;
        }

      let gato = new Gatos({
          name: body.name, 
          raza: body.raza,
          edad: body.edad, 
          foto: body.foto
      })
      let gato = await GatosDomain.crearGato(gato);
      return gato;
      
    } catch (error) {
      throw error;
    }
  }
  



const eliminarGato = async (id)=>{
  try {

      if(!_id){
        console.log("Sin Id o body vacio");
        throw error;
    }
      
    let gato = await GatosDomain.eliminarGato(id);
    if(!gato){

    }
     return gato;
      
  } catch (error) {
      throw error;
  }
}




module.exports = {
    getGatos,getGato,actualizarGato,eliminarGato,crearGato
}