const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')

const app = express()
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

const PORT = 8000
const API_KEY = "chaveSecreta" 


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.get("/401", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/erro401.html'))
})

app.get("/restrita-query", (req, res) => {
  const { key } = req.query

  if (key === API_KEY) {
    res.cookie("auth", key)
    return res.sendFile(path.join(__dirname, 'views/restrita.html'))
  }

  return res.redirect("/401")
})


app.get("/restrita-cookie", (req, res) => {
  const { auth } = req.cookies

  if (auth === API_KEY) {
    return res.sendFile(path.join(__dirname, 'views/restrita-cookie.html'))
  }

  return res.redirect("/401")
})

app.listen(PORT, () => {
  console.log("Rodando http://localhost:" + PORT)
})
