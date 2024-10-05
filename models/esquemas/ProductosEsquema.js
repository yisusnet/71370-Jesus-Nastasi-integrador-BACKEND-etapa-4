import mongoose from "mongoose";




const ProductosEsquema = mongoose.Schema({
    nombre:{ 
                type:String,
                require:true,
                unique:true 
            },
            descripcion:String,
            foto: String,
            precio: Number,
            envio: Boolean,
            stock: Number,
            categoria:String   
},
{
    timestamps: true, 
    versionKey: false
}
)
export default ProductosEsquema
