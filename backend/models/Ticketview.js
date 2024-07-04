// const { type } = require('@testing-library/user-event/dist/type');
const { mongoose, Schema} = require('mongoose');

const TicketSchema = new Schema({
    key:{
        type: Number,
        default: 1
    },
    id:{
        type : String,
        required : true,
        unique: true
    },
    subject: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: String
        // default: Date.now
    },

    img:{
        type: String
    },

    description : {
        type : String,
        default : "Internal Server Downn"
    },

    images : {
        type : [],
        default : ["http://localhost:3000/assets/images/xs/avatar4.jpg"]
    },

    pdfs: {
        type : [],
        default : ["http://localhost:3000/assets/pdfiles/1.pdf"]
    },

    priority : {
        type: String,
        enum: ["low", "medium", "high"],
        default: "medium"
    }
});
// TicketSchema.path('date') instanceof mongoose.Date

 module.exports = mongoose.model('ticket', TicketSchema)