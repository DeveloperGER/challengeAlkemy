const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const db = require('./config/db_config')
const recordsRoutes = require('./routes/records.routes')

//conexion db
db()

//setting 
app.set('name','Server')
app.set('PORT', process.env.PORT || 4000 )

//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded(
    {
        extended:false
    }
))

//routes
app.use('/api', recordsRoutes)

//export app
module.exports = app