// create a new folder
// npm init -y
// npm i express
// create instance of express js
// provided a  port 
// write a basic response(route)


import express from "express"
const app = express();
app.get('/',(rew,res) => {
    res.send("Welcome to Express Js")
})
app.listen(5000, () => {
    console.log('Server Up !')
})