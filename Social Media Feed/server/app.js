// var express = require('express')
// const app = express()
// const mndb = require('mongoose')
// var cors = require('cors')
// app.use(cors())
// app.use(express.json())
// const sch = mndb.Schema({
//     fname: String,
//     lname: String,
//     email: String,
//     category: String
// })
// const userdata = mndb.model("userdatas", sch)
// // var app = express()
// app.post('/newuser', async (req, res) => {
//     const data = new userdata(req.body)
//     await data.save()
//     res.send({
//         success: true,
//         message: 'Data stored successfully',
//         data: data
//     })
// })
// app.get('/alldata', async (req, res) => {
//     const finddata = await userdata.find({})
//     res.send({
//         success: true,
//         message: 'Data fetched successfully',
//         data: finddata
//     })
// })
// app.delete('/del/:id', async (req, res) => {
//     const deldata = await userdata.deleteOne({
//         _id: req.params.id
//     })
//     res.send({ success: true, message: "your data deleted", data: deldata })
// })
// app.put('/update/:id', async (req, res) => {
//     const updata = await userdata.findByIdAndUpdate(req.params.id, req.body)
//     res.send({ success: true, message: "Your data Updated Successfully", data: updata })
// })
// const PORT = 8020
// mndb.connect("mongodb://localhost:27017/tamil")
//     .then(() => console.log("db connected"))
// app.listen(PORT, () => {
//     console.log("server is connectd")
// })
// const express=require('express')
// const app=express()
// app.get('/',(req,res)=>{
//   res.send('payment api integeration')
// })
// app.listen(8080,()=>{
//     console.log('server connected')
// })
const express = require('express')
const app = express()
const mndb = require('mongoose')
app.use(express.json())
const cors = require('cors')
const bodyParser = require('body-parser');
const multer = require('multer');
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(cors())
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({
    storage: storage,
})
// let uploadHandler = upload.single('file')
const sch = mndb.Schema({
    fname: String,
    content: String,
    likes: { type: Number, default: 0 },
    comments: [String],
    file: String,
})
const sch1 = mndb.Schema({
    fname: String,
    email: String,
    password: String
})
const userInfo1 = mndb.model('userInfo1', sch1)
const userInfo = mndb.model('userInfos', sch)
app.post('/feed', upload.single('file'), async (req, res) => {
    // console.log(req.file)
    // const data = new userInfo(req.body)
    const { fname, content } = req.body;
    const file = req.file ? req.file.filename : undefined;
    const data = new userInfo({ fname, content, file });
    await data.save()
    res.send({
        success: true,
        message: 'stored successfully',
        data: data,
    })
})
app.get('/allfeed', async (req, res) => {
    const newdata = await userInfo.find({})
    res.send({
        success: true,
        message: 'data fetched successfully',
        data: newdata
    })
})
app.post('/update/:id', async (req, res) => {
    // console.log(req.params.id)
    const data = await userInfo.findById(req.params.id)
    const { text } = req.body
    // console.log(data)
    data.comments.push(text)
    // console.log(data)
    data.save()
    res.send({
        success: true,
        message: 'comment posted successfully',
    })
})
app.post('/inclike/:id', async (req, res) => {
    // console.log(req.params.id)
    const data = await userInfo.findById(req.params.id)
    // console.log(data)
    // data.likes += 1
    // data.save()
    // console.log(data)
    if (data.likes === 0) {
        data.likes += 1
        data.save()
    } else if (data.likes <= 1) {
        data.likes -= 1
        data.save()
    }
    res.send({
        success: true,
        message: 'data updated Successfully',
    })
})
app.post('/info', async (req, res) => {
    // console.log(req.body)
    const data = new userInfo1(req.body)
    await data.save()
    res.send({
        success: true,
        message: 'register successfully',
        data: data
    })
})
app.post('/user', async (req, res) => {
    const data = await userInfo1.findOne({ email: req.body.email })
    // console.log(data)
    if (data) {
        if (data.password === req.body.password) {
            res.send({
                message: 'Logged in successfully',
                data: data,
                success: true
            })
        } else {
            res.send({ message: 'please check your password' })
        }
    } else {
        res.send({ message: 'please check your email' })
    }
})
app.listen(8080, () => {
    console.log('server started')
})
mndb.connect('mongodb://localhost:27017/tamil')
    .then(() => { console.log('db connected') })
    .catch((err) => { console.log(err) })

