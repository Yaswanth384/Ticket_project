const env= require('dotenv').config()
const express = require('express')
const connectToMo = require("./data")

const path  = require('path')

connectToMo()
const app = express()
const port = 3002

var cors = require('cors')
app.use(cors())
app.use(express.json())

// const _dirname = path.dirname("")
// const buildPath = path.join(_dirname  , "../build");

// app.use(express.static(buildPath))

// app.get("/*", function(req, res){

//     res.sendFile(
//         path.join(__dirname, "../build/index.html"),
//         function (err) {
//           if (err) {
//             res.status(500).send(err);
//           }
//         }
//       );

// })

app.get('/hari', (req, res) => {
   
    let t = req.body.pass
  res.send({name: "hari", mail: "wkjdfnoe;uf", t})
})

app.use("/ticket", require("./routes/ticket"))

app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`)
})