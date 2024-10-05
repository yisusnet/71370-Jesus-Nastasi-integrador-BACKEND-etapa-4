import { check } from "express-validator"
import validarCampos from "./validadCampos.js"


const arraymiddlewares = [
    check('nombre', ' El nombre es obligatorio').notEmpty(),
    check('descripcion', ' la descripcion es obligatorio').notEmpty(),
    check('precio', ' El precio es obligatoria').notEmpty(),
    check('foto', ' La foto es obligatoria').notEmpty(),
    check('stock', ' El stock es obligatorio').notEmpty(),
    check('envio', ' Debe colocar si es el envio es true o false').notEmpty(),
    check('categoria', ' La categoria es obligatorio').notEmpty(),
    validarCampos
]

export default arraymiddlewares