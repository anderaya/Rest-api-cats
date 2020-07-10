'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gatosSchema = new Schema({
  nombre : {
      type: String,
      required: true
    },
  raza : {
      type: String,
      required: true
  },
  edad : {
      type: Number,
      required: true
  }, 
  foto : {
      type : String,
      required: true
  }
})

  
  
let Gatos = mongoose.model('gatos', gatosSchema, 'gatos');


module.exports = Gatos;