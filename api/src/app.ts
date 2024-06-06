import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'
import  videosRoutes from './routes/videos.routes'
const app = express()
// this is a test comment
app.set('port', config.PORT)

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(videosRoutes)

export default app;