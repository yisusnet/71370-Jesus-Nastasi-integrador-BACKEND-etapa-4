import multer from "multer"
import { v4 as uuidv4 } from 'uuid';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads') 
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = uuidv4()
      
      const extension = file.mimetype.split('/')
      const nombreArchivo = uniqueSuffix + '.' + extension[1]
      cb(null, nombreArchivo)
    }
  })

  export default storage