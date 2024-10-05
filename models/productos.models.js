 import mongoose from "mongoose"
 import ProductosEsquema from "./esquemas/ProductosEsquema.js"


 
 const ProductosModelo = mongoose.model('productos', ProductosEsquema)
 
 
 const obtenerTodos = async () => {
    try {
        const productos  = await ProductosModelo.find()
        return productos
    } catch (error) {
        throw error; 
    }
 }
 const obtenerUnProducto = async (id) => {

    try {
        const producto = await ProductosModelo.findById(id)
        return producto
    } catch (error) {
        throw error; 
    }
 }
 const crearProducto = async (producto) => {
    try {
        const productoCreado =  await ProductosModelo.create (producto)
        console.log(productoCreado)
        return productoCreado
    } catch (error) {
        throw error;
    }
 }
 const UpdateProducto = async ( id, productoPorEditar  ) => {
        try {
          const options =  {new: true}
          const productoYaEditado = await ProductosModelo.findByIdAndUpdate(id, productoPorEditar, options)
            return productoYaEditado
        } catch (error) {
            throw error;
            
            
        }
 }
 const deleteProducto =  async (id) => {

    try {  const productoBorrado = await ProductosModelo.findByIdAndDelete(id)
        console.log(productoBorrado)
        return productoBorrado
        
    } catch (error) {
        console.log('[deleteProducto]', error) 
        
    }
  


 }

 export default {
    obtenerTodos,
obtenerUnProducto,
crearProducto,
UpdateProducto,
deleteProducto
 }
