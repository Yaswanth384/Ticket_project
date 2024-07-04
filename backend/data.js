
const mongoose = require('mongoose')

const mongUrl = process.env.MONGO_URL

const connectToMo = () => {
    mongoose.connect(mongUrl).then((e) => console.log("Mongoose is connected"))
}

module.exports = connectToMo ;