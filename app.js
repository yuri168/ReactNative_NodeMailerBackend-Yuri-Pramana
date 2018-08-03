var nodemailer = require('nodemailer');
var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express();

app.use(cors())
app.use(bodyParser.json())

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'yeo.region3@gmail.com',
        clientId: '90161865394-klj0fplkphtdnldrbm8512trgb2linms.apps.googleusercontent.com',
        clientSecret: 'X4D2HfenOmlaLqsOP1-iB6uK',
        refreshToken: '1/tPxc2OHoxo0vPTOUMkxuL8KenSozJDZKgLzdQEaJaWA'
    }
})



app.post('/dataEmail', (req, res)=>{
    var ngirim = {
        to: req.body.Email,
        subject: req.body.Judul,
        text: req.body.Isi,
    }

    transporter.sendMail(ngirim, (x,y)=>{
        res.send("Email berhasil terkirim")
        if(x){
            console.log('Email Gagal Terikirm')
            res.send('Email Gagal Terikirm')
        }
        else{
            console.log('Email berhasil terkirim')
            res.send('Email berhasil terkirim')
        }
    })
})




app.listen(3210, ()=>{
    console.log('Run port @3210');
})