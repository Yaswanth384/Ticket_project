// const { type } = require('@testing-library/user-event/dist/type');
const { mongoose, Schema} = require('mongoose');

const StatusSchema = new Schema({

    key : {
        type:  Number,
        default: 1
    },

    name : {
        type: String,
        required: true
    },

    status : {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("status", StatusSchema)