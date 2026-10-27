import express from 'express'
import products from './products.js';
// import students from './routes/student.js'
const app = express()
// app.use('/student',students)
// Create route folder and put your routes in seperate files
// create instance of express.Router()
// Instead of app.method use router.method
// export router 
// import router
// use the (app.use) built-in middleware and provide your routes

// app.param("id",(req,res,next,id)=>{
//     console.log(`id :${id}`);
//     next()
// })
// app.get("/user/:id",(req,res) => {
//     console.log("This is user id Path")
//     res.send("Hello Users")
// })
app.get('/products',(req,res) => {
    res.json(products)
    
});

app.listen(5000,()=>{
    console.log("Server Up !")
})