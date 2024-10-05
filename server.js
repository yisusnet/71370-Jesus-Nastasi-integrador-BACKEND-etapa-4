import express from 'express'
import 'dotenv/config'
import routerProductos from './router/productos.router.js'
import routerCarritos from './router/carrito.router.js'
const PORT = process.env.PORT
import getConnection from './utils/get-connections.js'
const uri_remota  = process.env.URI_MONGO
import cors from 'cors'
import storage from './middlewares/upload-foto-middleware.js'
import multer from 'multer'


const app = express()
app.use(express.static('./public'))
app.use(express.json())
app.use(cors())
app.use( '/api/v1/productos', routerProductos )
app.use( '/api/v1/carritos', routerCarritos )

const upload = multer({ storage: storage })

app.get('/', (req, res) => {
  res.redirect('api/v1/productos')
})



app.post('/api/v1/uploads', upload.single('foto'), (req, res) => { 

  const file = req.file
  console.log(file)

  console.log(req.protocol)
  console.log(req.get('host'))

  const urlCompleta = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`
  console.log(urlCompleta)

  res.json( { foto: urlCompleta } ) 
})


app.all('*', (req, res) => {
  res.status(404).json({
    ruta: `${req.url}`,
    metodo: `${req.method}`,
    mensaje:'no se puede acceder al recurso que estan queriendo acceder'
  })
})





app.listen(PORT, (err) => {
  if(err) throw new Error("no se pudo levantar el servidor", err);
  
  console.log(`Servidor funcionando http://localhost:${PORT}`)
  getConnection(uri_remota)
})
