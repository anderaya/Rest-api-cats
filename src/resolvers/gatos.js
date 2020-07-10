'use strict';
const gatosLogic = require('../bll/gatosBll');


let getGatos = async (req, res) => {
    try {
      let gatos = await gatosLogic.getGatos(req.body);
      console.log(gatos);
      return res.status(200).send({data: gatos});
    } catch (error) {
      return res.status(404).send(error);
    }
  }

  let getGato = async (req, res) => {
    try {
        let gato = await gatosLogic.getGato(req.params.id);
        console.log(gato);
        return res.status(200).send({data:gato})
      } catch (error) {
        return res.status(404).send(error);
      }
  }
  
  let crearGato = async (req, res) => {
    try {
      
      let gato = await gatosLogic.crearGato(req.body);
      console.log(gato);
      return res.status(200).send({data: gato});
    } catch (error) {
      return res.status(404).send(error);
    }
  }
  

  let actualizarGato = async (req, res) => {
    try {
        let gato = await gatosLogic.actualizarGato(req.body, req.params.id);
        console.log(gato);
        return res.status(200).send({data: gato});
      } catch (error) {
        return res.status(404).send(error);
      }
  }
  
  let eliminarGato = async(req, res) => {
    try {
      let gato = await gatosLogic.eliminarGato(req.params.id);
      console.log(gato);
      return res.status(200).send({data:gato})
    } catch (error) {
      return res.status(404).send(error);
    }
  }
  

  module.exports = {
    getGato,getGatos,actualizarGato,eliminarGato,crearGato
  }