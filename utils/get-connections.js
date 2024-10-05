import  mongoose from 'mongoose'

const getConnection = async (uri_remota) =>{

try {
 await mongoose.connect(uri_remota);
 console.log('conexion OK!')
  
} catch (error) {
  console.log('conexion ERROR!', error)
}
  

}

export default getConnection
