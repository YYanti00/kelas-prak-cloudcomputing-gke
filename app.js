'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send(`<p>Nama: Linda Yanti Yo</p> <p>NIM: 52022902</p> <p>Jurusan: Teknik Informatika</p>`)
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
