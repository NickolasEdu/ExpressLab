const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", function(req, res) {
    res.render('pages/index')
})

app.get("/about", function(req, res) {
    res.render('pages/about')
})

const port = 8080
app.listen(port)
console.log(`Rodando na ${port}`)