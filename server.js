const express=require('express')
const app =express()
const db=require('./db')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.set("view engine","hbs")

app.get('/',(req,res)=>{
   db.getAllUsers()
   .then((persons)=>{
    res.render('person',{persons})
   })
   .catch((err)=>{
       res.send(err)
   })
})
app.get('/add',(req,res)=>{
    res.render('person_add')
})

app.post('/add',(req,res)=>{
      
})



















app.listen(8082,()=>{
    console.log("server started !!! ")
})