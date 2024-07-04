// const { type } = require('@testing-library/user-event/dist/type');
const { mongoose, Schema} = require('mongoose');

const commentSchema = new Schema({

    key : {
        type:  Number,
        default: 1
    },

    name : {
        type: String,
        required: true,
        default: "Person"
    },

    comment : {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("comment", commentSchema)