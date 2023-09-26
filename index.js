const express = require ('express')
const app = express()
const port = 3000

//membuat route baru dengan method GET yang isinya hallo...
const bodyPs = require('body-parser'); //import body-paarser
app.use(bodyPs.urlencoded({ extended: false}));
app.use(bodyPs.json());

const  mhsRouter = require('./routes/mahasiswa');
app.use('/api/mhs', mhsRouter);

app.listen(port, () => {
    console.log(`Aplikasi berjalan di http:://localhost:${port}`)
})

