const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//Métodos HTTp: GET, POST, PUT, DELETE

//Tipos de parâmetros:

// Query Params : request.query(Filtros, ordenação, paginação, ...)
// Route Params : request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body(Dados para criação ou alteração de um registro)

//MongoDB(Não-relacional)

// routes.get('/', (request, response)=>{
//     return response.json({message: 'Hello OmniStack'});
// });

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search',SearchController.index);

module.exports = routes;