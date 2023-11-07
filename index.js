const express = require ('express')
const app = express()
const port = 3000
const cors = require('cors')
//MEMBUA ROUTE BARU DENGAN 
app.use(cors())
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public/images')))


//membuat route baru dengan method GET yang isinya hallo...
const bodyPs = require('body-parser'); //import body-paarser
app.use(bodyPs.urlencoded({ extended: false}));
app.use(bodyPs.json());

const  mhsRoutermhs = require('./routes/mahasiswa');
app.use('/api/mhs', mhsRoutermhs);

const  mhsRouterJurusan = require('./routes/jurusan');
app.use('/api/jrs', mhsRouterJurusan);

app.listen(port, () => {
    console.log(`Aplikasi berjalan di http:://localhost:${port}`)
})


//import rute register dan login
const auth = require('./routes/auth/auth');
app.use('/api/auth',auth);