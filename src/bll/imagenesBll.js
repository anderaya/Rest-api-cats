const ImagenesDomain = require('../domain/imagenesDomain');

let getImagenes = async (filters) => {
    try {
      let query = filters ? filters : {};
      let listaImagenes = await ImagenesDomain.getImagenes(query);
      return listaImagenes;
    } catch (error) {
      throw error;
    }
  }
  
  const buscarImagen = async (id,owner)=>{
    try {
        

        if(!id || !owner){
          console.log("Sin id");         
          throw error
      }else{
          let imagen = await ImagenesDomain.buscarImagen(id,owner);
         
          return imagen;
      }

      
    } catch (error) {
        throw error;
    }
  }

  let getFavoritos = async (filters) => {
    try {
      let query = filters ? filters : {};
      let listaFavoritos = await ImagenesDomain.getFavoritos(query);
      return listaFavoritos;
    } catch (error) {
      throw error;
    }
  }


  module.exports = {
    getImagenes,buscarImagen,getFavoritos
  }

