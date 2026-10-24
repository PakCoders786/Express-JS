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
app.get(/^\/users\/[0-9]{4}$/, (req, res) => {

    res.send(`<h1>Hey Path included X</h1>`)
});





// app.get('/',(rew,res) => {
//     res.send("Welcome to Express Js")
// })
app.listen(5000, () => {
    console.log('Server Up !')
})