// import { json } from "react-router-dom";
import tickeContext from "./ticketContext";


import React, { useState } from 'react'

const TicketState = (props) => {
  
  const [ticket, setTickets] = useState([])
  const [records, setrecords] = useState([])

  

  const [singleTicket, setsingle] = useState(
    {
      "_id": "6675820da9366f84d254cd3a",
      "key": 1,
      "id": "#Tc-000249",
      "subject": "Server Down",
      "name": "hari",
      "tag": "gene",
      "date": "2004-02-15",
      "img": "assets/images/xs/avatar4.jpg",
      "description": "Internal Server Downn",
      "images": [
        "http://localhost:3000/assets/images/xs/avatar4.jpg"
      ],
      "pdfs": [
        "http://localhost:3000/assets/pdfiles/1.pdf"
      ],
      "priority": "medium",
      "__v": 0
    }
  )

  const [comment, setcomment] = useState([])


  const [values, setvalues] = useState([])
  
  const host = "https://ticket-backend-jggu.onrender.com"
  const fetchAll = async () => {
    const url = `${host}/ticket/fetch`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "key" : 1
      }, 
    });
    const json1 = await response.json();
    setTickets(json1.ticket);
    setrecords(json1.ticket);
    setcomment(json1.comment);
    
    setvalues(json1.status)
  }

//delete ticket
  const deleteTicket = async(id) =>{
    const url = `${host}/ticket/delete/${id}`
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }, 

    })
    
    const json1 = await response.json();

    const newTickets = ticket.filter((val) =>{
      return val._id !== json1.ticket._id
    })
    setTickets(newTickets)
  }

//update ticket

const updateTicket = async(id, name, subject, date, tag) =>{
  const url = `${host}/ticket/update/${id}`
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify({name, subject, date, tag})
  })
  
  const json1 = await response.json();

  let newTickets = JSON.parse(JSON.stringify(ticket))

  for(let i =0 ; i<newTickets.length ; i++){
    
    if(newTickets[i]._id === id){
      newTickets[i] = json1;
      break;
    }
    // console.log(newTickets[i].subject);
  }
  setTickets(newTickets)
}

//add ticket
const addTicket = async(name, subject, date, tag) =>{
  const url = `${host}/ticket/add`
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify({name, subject, date, tag})
  })
  
  const json1 = await response.json();
  
  
  setTickets(ticket.concat(json1.ticket))
}

//filter

const Filter = async (e) => {
  let value = e.target.value.toLowerCase()
  setTickets(records.filter((val) => 
      { 
        
        return val.name.toLowerCase().includes(value) || val.id.toLowerCase().includes(value) || val.date.toLowerCase().includes(value)
      }
  ))
}


//fectchOne ticket

const passValue = async()=>{
  const tick = localStorage.getItem('ticket')
  // console.log(typeof(tick))

  if(!tick) return;
  const url = `${host}/ticket/single/${tick}`
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }, 
  })
  
  const json1 = await response.json();

  setsingle(json1)
}


//add status

const statusChange = async(name, status) => {
  const url = `${host}/ticket/status`
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify({name, status}),
  })
  
  const json1 = await response.json();
  // console.log(json1)

  // console.log(values)
  setvalues(values.concat(json1.statusData))
  // console.log(values)
}





  
  return (
    <tickeContext.Provider value={{ticket, fetchAll, deleteTicket, updateTicket, addTicket, Filter, records, passValue, singleTicket, comment, values, statusChange}}>
        {props.children}
    </tickeContext.Provider>
  )
}

export default TicketState
