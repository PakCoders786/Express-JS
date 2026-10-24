// create a new folder
// npm init -y
// npm i express
// create instance of express js
// provided a  port 
// write a basic response(route)

// Get -> Retrieve the data
// Post -> Create /insert data
// Put -> Completely update data
// Patch -> Partially update data
// Delete -> Delete data 
// All -> work for any http request

import express from "express"
const app = express();
// Advanced routing
// Reg ex routing
// /x/ means any route include x would access this page
// app.get(/^\/users\/[0-9]{4}$/, (req, res) => {

//     res.send(`<h1>Hey Path included X</h1>`)
// });

// we can pass multiple callbacks by declaring them and stored in variable and used these variables in array
// You can make a chain of http methods using app.route()
// next controls the computer's call back flow for more than one callbacks 
// app.route().get("/double", (req,res,next) =>{
// console.log("First callback");
// next ();
// },(req,res) =>{
// res.send("Second call back");
// })

app
.route('/student')
.get((req,res)=>{res.send("Hello Jason")})
.post((req,res)=>{res.send("Add Something new")})
.put((req,res)=>{res.send("Update existing things")})
.delete((req,res)=>{res.send("Delete existing things")})


// app.get('/',(rew,res) => {
//     res.send("Welcome to Express Js")
// })
app.listen(5000, () => {
    console.log('Server Up !')
})