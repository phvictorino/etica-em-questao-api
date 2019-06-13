import express from 'express'
import bodyparser from 'body-parser'
import dotenv from 'dotenv'
import routes from './routes'
import mongoose from 'mongoose'
import cors from 'cors'
dotenv.config()

const app = express()

let corsOptions = {
  origin: 'https://eeq-app.herokuapp.com'
}

app.use(cors(corsOptions))

mongoose.set('useCreateIndex', true)
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Conectado ao banco de dados com sucesso!')
  })
  .catch(error => {
    console.log('Erro ao conectar ao banco de dados.', error)
  })

app.use(bodyparser.json())
app.use(routes)

let port = process.env.PORT ? process.env.PORT : 3000

app.listen(port || 3000, () => {
  console.log('API rodando na porta ' + port)
})

export default app
