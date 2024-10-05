import CarritosEsquema from './esquemas/CarritosEsquema.js'
import mongoose from 'mongoose'

const CarritoModelo = mongoose.model('carritos', CarritosEsquema)

const crearCarrito = async (carrito) => {
    try {
        const carritoCreado = new CarritoModelo({carrito})
        const carritoGuardado = await carritoCreado.save()
        return carritoGuardado
    } catch (error) {

        console.log('no se pudo guardar el carrito', error)
        throw error;
    }

    
}


export default
 {
    crearCarrito
 }
