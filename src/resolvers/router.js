'use strict';

const gatosRouter = require('./gatos');
const imagenesRouter = require('./imagenes');

module.exports = function(app){

    app.get('/inicio',  (req,res) =>{           
            res.send("Inicio");   
    } )

    app.route('/imagenes')
        .get(imagenesRouter.getImagenes)
    app.route('/imagenes/favoritos')
        .post(imagenesRouter.buscarImagen)
    app.route('/imagenes/favoritos')
        .get(imagenesRouter.getFavoritos)

    app.route('/gatos')
        .get(gatosRouter.getGatos)
    app.route('/gatos/:id')
        .get(gatosRouter.getGato)
    app.route('/gatos')
        .post(gatosRouter.crearGato)
    app.route('/gatos/:id')
        .put(gatosRouter.actualizarGato)
    app.route('/gatos/:id')
        .delete(gatosRouter.eliminarGato)



};