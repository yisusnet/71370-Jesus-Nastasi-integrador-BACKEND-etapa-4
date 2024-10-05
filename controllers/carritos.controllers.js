import handleMongoId from '../utils/handle-mongo-id.js'
import modelosCarritos from '../models/carrito.models.js'


const guardarCarrito = async (req, res) => {
    const productosCarrito = req.body

    try {
        const carritoGuardado = await modelosCarritos.crearCarrito(productosCarrito)

        res.status(201).json(handleMongoId(carritoGuardado))
    } catch (error) {
        console.log('no se pudo guardar el carrito', error)
        res.status(500).json({
            mensaje:'no se pudo guardar el carrito'
        })
    }
}

export default{ guardarCarrito}
