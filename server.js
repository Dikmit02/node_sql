const express=require('express')
const app =express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.set("view engine","hbs")

app.get('/',(req,res)=>{
    res.render('person',{
        persons:[
            {name:'abc',age:12,city:'delhi'},
        {name:'kanika',age:22,city:'banga'}
        ]
    })
})

app.listen(8082,()=>{
    console.log("server started !!! ")
})