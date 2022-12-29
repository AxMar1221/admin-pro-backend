require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnect } = require('./database/config')

const app = express();

app.use(cors());

dbConnect();

app.get('/', (req, resp) =>{
    resp.json({
        ok:true,
        msg:'Hi'
    })
});

app.listen( process.env.PORT, ()=> {
    console.log('server run in port ' + 5001)
})