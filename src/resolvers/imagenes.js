'use strict';
const imagenesLogic = require('../bll/imagenesBll');


let getImagenes = async (req, res) => {
    try {
      let imagenes = await imagenesLogic.getImagenes(req.body);
      return res.status(200).send({data: imagenes});
    } catch (error) {
      return res.status(404).send(error);
    }
  }

  let buscarImagen = async (req, res) => {
    try {
  
      let imagen = await imagenesLogic.buscarImagen(req.body.image_id,req.body.sub_id);
      console.log(imagen)
      return res.status(200).send({data: imagen});
    } catch (error) {
      return res.status(404).send(error);
    }
  }
  

  let getFavoritos = async (req, res) => {
    try {
      let favoritos = await imagenesLogic.getFavoritos(req.body);
      console.log(favoritos)
      return res.status(200).send({data: favoritos});
    } catch (error) {
      return res.status(404).send(error);
    }
  }
  
  module.exports = {
    getImagenes,buscarImagen,getFavoritos
  }