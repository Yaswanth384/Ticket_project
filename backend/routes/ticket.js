const express = require('express')

const router = express.Router();
const {body, validationResult } = require("express-validator");

const Ticket = require("../models/Ticketview");
const { set } = require('mongoose');
const Status = require('../models/Status');
const Comment = require('../models/Comment');

// To add ticket
router.post("/add", [ 
    body('subject', "A subject should be empty").notEmpty(),
    body('name', 'name should not be empty').notEmpty()
    ],
    async(req, res) =>{

    const errors = validationResult(req) ;
    if(!errors.isEmpty()){
        return res.status(400).json(errors.array())
    }
    
    try {
        
        let num = Math.floor(Math.random() * 1000); 
        let Id = "#Tc-000" + String(num);

        let avatarNum = Math.floor(Math.random() * 12)+1
        
        let tick = await Ticket.findOne({id : Id});

        if(tick){
            num = Math.floor(Math.random() * 1000); 
            Id = "#Tc-000" + String(num);
            tick = await Ticket.find({id : Id});
        }

        let ticket = await Ticket.create({
            id : Id,
            subject : req.body.subject,
            name : req.body.name,
            tag : req.body.tag,
            date : req.body.date,
            img : `assets/images/xs/avatar${avatarNum}.jpg`,
            
       })


       return res.send({ticket, tick})
    } catch (error) {
        let er = error.message
        res.status(500).send({er})
    }
})


//To fect all tickets

router.get("/fetch", async(req, res) => {
    try {
        const ticket = await Ticket.find({key: req.header("key")})
        const status = await Status.find({key: req.header("key")})
        const comment = await Comment.find({key: req.header("key")})

    res.send({ticket, status, comment})
    } catch (error) {
        let er = error.message
        res.status(500).send({er})
    }
})

// deletenote
router.delete("/delete/:id", async(req, res) => {
    try {
        let ticket = await Ticket.findById(req.params.id)
        // console.log(ticket)
    
        if(!ticket) return res.status(400).send({error: "Notes in not found"})
        
        
            ticket = await Ticket.findByIdAndDelete(req.params.id)
            res.send({Success: "Note deleted", ticket});

    } catch (error) {
        let er = error.message
        res.status(500).send({er})
    }
})

//update notes

router.post("/update/:id", async(req, res) => {
    try {
        let ticket = await Ticket.findById(req.params.id)
        // console.log(ticket)
    
        if(!ticket) return res.status(400).send({error: "Notes in not found"})

        
            let newTicket = {
                id : ticket.id,
            subject : req.body.subject,
            name : req.body.name,
            tag : req.body.tag,
            date : req.body.date,
            img : ticket.img
            }

        
            ticket = await Ticket.findByIdAndUpdate(ticket, {$set : newTicket}, {new: true})
            res.send(ticket);

    } catch (error) {
        let er = error.message
        res.status(500).send({er})
    }
})

//Get Single ticket

router.get("/single/:id", async(req, res) => {
  try {
    let ticket = await Ticket.findById(req.params.id)
        // console.log(ticket)

        let t = {
            "key": 1,
            "id": "#Tc-000945",
            "subject": "Server Down",
            "name": "krish",
            "tag": "Completed",
            "date": "2004-02-15",
            "img": "assets/images/xs/avatar5.jpg",
            "description": "Internal Server Downn",
            "images": [
              "http://localhost:3000/assets/images/xs/avatar4.jpg"
            ],
            "pdfs": [
              "http://localhost:3000/assets/pdfiles/1.pdf"
            ],
            "priority": "medium",
            "_id": "6675914ee140fabf265f145a",
            "__v": 0
          }
    
        if(!ticket) return res.send(t)
        return res.send(ticket)
  } catch (error) {
    let er = error.message
    res.status(500).send({er})
  } 

})


//create a status
router.post("/status", [ 
    body('status', "A status should be empty").notEmpty(),
    body('name', 'name should not be empty').notEmpty()
    ],
    async(req, res) =>{

    const errors = validationResult(req) ;
    if(!errors.isEmpty()){
        return res.status(400).json(errors.array())
    }

    try {

        let statusData = await Status.create({
            name : req.body.name,
            status: req.body.status
            
       })

       return res.send({statusData})
        
    } catch (error) {
        let er = error.message
        res.status(500).send({er})
    }

})

        
//comments
router.post("/comment", [ 
    body('comment', "A comment should be empty").notEmpty(),
    body('name', 'name should not be empty').notEmpty()
    ],
    async(req, res) =>{

    const errors = validationResult(req) ;
    if(!errors.isEmpty()){
        return res.status(400).json(errors.array())
    }

    try {

        let statusData = await Comment.create({
            name : req.body.name,
            comment: req.body.comment
            
       })

       return res.send(statusData)
        
    } catch (error) {
        let er = error.message
        res.status(500).send({er})
    }

})

module.exports = router