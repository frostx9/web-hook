const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const cors = require("cors")
const School = require("./models/school")

const app = express()

app.use(cors({ origin: "*" }))
app.use(express.json())

const port = process.env.PORT || 5000


// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))

mongoose.Promise = global.Promise

MONGODB_CONNECTION_STRING = 'mongodb://127.0.0.1:27017/webhook'

mongoose.connect(MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//   <------------------ All Route Start From Here ------------------>

app.post("/register", async (req, res) => {
  try {
    const { schoolName } = req.body

    const school = await School.create({
      name: schoolName
    })

    return res
      .status(200)
      .json({ error: false, school })

  } catch (error) {
    return res
      .status(400)
      .json({ error: true })
  }
})




//   <------------------ All Route End Here ------------------>
//Server Listen Port
app.listen(port, () => {
  console.log(`Server is runnin at ${port}`)
})
