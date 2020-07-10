'use strict'

const GatosDomain = require('../domain/gatosDomain');
const Gatos = require('../models/gatos');


let getGatos = async (body) => {
    try {
        let query = body ? body : {};
        let listaGatos = await GatosDomain.getGatos(query);
        return listaGatos;
      } catch (error) {
        throw error;
      }
}


let getGato = async (id) => {
    try {
        let gato = await GatosDomain.getGato(id);
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
    let bodyGato = new Gatos({
        _id : id,
        nombre: body.nombre, 
        raza: body.raza,
        edad: body.edad, 
        foto: body.foto
    })
    
    let gato = await GatosDomain.actualizarGato(bodyGato);
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

      let bodyGato = new Gatos({
          nombre: body.nombre, 
          raza: body.raza,
          edad: body.edad, 
          foto: body.foto
      })
      let gato = await GatosDomain.crearGato(bodyGato);
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