import handleMongoId from '../utils/handle-mongo-id.js'
import modelos from '../models/productos.models.js'


const getAll =  async (req, res) =>{


    try {
        const productos =  await modelos.obtenerTodos()
        if(!productos){
            return res.status(404).json({
              mensaje: 'Productos no encontrados'
            })  
          }

        res.status(200).json(handleMongoId(productos))
    } catch (error) {
        console.log('[getAll]', error);
        res.status(500).json({
            mensaje:'Se produjo un error al obtener los productos ', error
        })
    }}


    const getOne = async (req, res)=>{
        const id = req.params.id
try {

    const producto = await modelos.obtenerUnProducto(id)
    if(!producto){
      return res.status(404).json({
        mensaje: 'Producto no encontrado'
      })  
    }
    res.status(200).json(handleMongoId(producto))
} catch (error) {
    console.log('[getOne]', error)
} }


    const create  = async (req, res) =>{
        const producto = req.body
        try {
            const productoCreado = await modelos.crearProducto(producto)
            res.status(201).json(handleMongoId(productoCreado))

        } catch (error) {
            console.log('[create]', error)
            res.status(500).json({
                mensaje:'Se produjo un error al intentar crear el producto ', error
            })
        }
        }
    
    const update = async (req, res) =>{
        const id = req.params.id
        const productoPorEditar = req.body

        try {
            const productoActualizado = await modelos.UpdateProducto(id, productoPorEditar );

            if (!productoActualizado) {
                return res.status(404).json({ 
                    mensaje: 'No se pudo actualizar el producto'
                 });
            }

            res.status(200).json(handleMongoId(productoActualizado))
        } catch (error) {
            console.log('[update]', error)
            res.status(500).json({
                mensaje:'Se produjo un error al intentar actualizar el producto ', error
            })
        }
    }
    const remove = async (req, res) =>{
        const id = req.params.id

        try {
            const productoBorrado = await modelos.deleteProducto(id)
            if (!productoBorrado) {
                return res.status(404).json({ 
                    
                    mensaje: 'Producto no encontrado, no se pudo eliminar' 
                })
            };
            
            res.status(200).json(handleMongoId(productoBorrado))
        } catch (error) {
            console.log('[remove]', error)
            res.status(500).json({
                mensaje:'Se produjo un error al intentar eliminar el producto ', error
            })
        }
    }

    export default {
         getAll,
getOne,
create,
update,
remove
     }
