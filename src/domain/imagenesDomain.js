'use strict';
const fetch = require('node-fetch');

const getImagenes = async(query) => {
    try {      
        

         const imagenes= await fetch('https://api.thecatapi.com/v1/images/search?limit=10',
        {method: 'GET',
        headers: {
             'x-api-key': 'f221c99b-304d-4404-b111-cbd3ddccf31a',
            
             }, query: {"limit":2} 
         })
            .then(res => res.json())
            .then(json => json);
        return imagenes;

    }catch (error) {
       
        throw error;
    }
}

const buscarImagen = async(id,owner)=>{
    try {      
       
        const imagen = await fetch('https://api.thecatapi.com/v1/favourites',{
          method: 'POST',
          headers: {
            'x-api-key': 'f221c99b-304d-4404-b111-cbd3ddccf31a',
            "content-type": "application/json"
            },
         body: 
            JSON.stringify( {image_id:id,
            sub_id:owner} )    
        }
        )
           .then(res => res.json())
           .then(json => json);
       return imagen;
   }catch (error) {
      
       throw error;
   }
}


const getFavoritos = async(query) => {
    try {      
        

         const favoritos= await fetch('https://api.thecatapi.com/v1/favourites?sub_id=f221c99b-304d-4404-b111-cbd3ddccf31a',
        {method: 'GET',
        headers: {
             'x-api-key': 'f221c99b-304d-4404-b111-cbd3ddccf31a',
             "content-type": "application/json"
             },
        params:{
            'sub_id':'f221c99b-304d-4404-b111-cbd3ddccf31a'
        }
         })
            .then(res => res.json())
            .then(json => json);
        return favoritos;

    }catch (error) {
       
        throw error;
    }
}


module.exports = {
    getImagenes,buscarImagen,getFavoritos
}
