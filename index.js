const express = require ('express')
const app = express()
const port = 3000

const  mhsRouter = require('./routes/mahasiswa');
app.use('/api/mhs', mhsRouter);

app.listen(port, () => {
    console.log(`Aplikasi berjalan di http:://localhost:${port}`)
})

