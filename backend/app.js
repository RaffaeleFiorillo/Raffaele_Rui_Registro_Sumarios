const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const regsumarRoutes = require('./routes/regsumarRoutes')
const sumarioRoutes = require('./routes/sumarioRoutes')
const docenteRoutes = require('./routes/docenteRoutes')
const disciplinaRoutes = require('./routes/disciplinaRoutes')
const cursoRoutes = require('./routes/cursoRoutes')
const authRoutes = require('./routes/authRoutes')
const iniRegSum = require('./routes/iniRegSum')
const classRoutes  = require('./routes/classRoutes')

app.disable('x-powered-by')
app.use(express.urlencoded({ extended: true }))

// ------------------------ End points -----------------------
// simple route
app.use('/', iniRegSum)
app.use('/regsumar', regsumarRoutes)
app.use('/docentes', docenteRoutes)
app.use('/sumario', sumarioRoutes)
app.use('/class', classRoutes)
app.use('/disciplina', disciplinaRoutes)
app.use('/curso', cursoRoutes)
app.use('/auth', authRoutes)

module.exports = app