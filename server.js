const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", function(req, res) {

    const items = [
        {
            Title: "First title",
            Text: "First text"
        },
        {
            Title: "Second title",
            Text: "Second text"
        },
        {
            Title: "Three title",
            Text: "Three text"
        },
        {
            Title: "Fourth title",
            Text: "Fourth text"
        }
    ];

    res.render('pages/index', {
        list: items
    })
})

app.get("/about", function(req, res) {
    res.render('pages/about')
})

const port = 8080
app.listen(port)
console.log(`Rodando na ${port}`)