import express from 'express'
import controladores from '../controllers/productos-controllers.js'
const routerProductos = express.Router()
import arrayMiddlewares from '../middlewares/arrayMiddlewares.js'


routerProductos.get('/', controladores.getAll)


routerProductos.get('/:id', controladores.getOne)

routerProductos.post('/' , arrayMiddlewares, controladores.create)

routerProductos.put('/:id' , arrayMiddlewares, controladores.update)

routerProductos.delete('/:id' , controladores.remove)

export default routerProductos
