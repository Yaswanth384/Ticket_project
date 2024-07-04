import React, { useContext } from 'react'
import tickeContext from '../contexts/tickets/ticketContext'
import { Link } from 'react-router-dom'
// import TicketDetails from './TicketDetails'

const TicketShow = (props) => {
    const {tick, edit} = props
    const {deleteTicket} = useContext(tickeContext) 

    const colour = (color) =>{
        if(color === "Completed") return "success";
        else if(color === "In Progress") return "warning";
        else if(color === "Decline") return "danger";
        else return "warning";
    }

    const passValue  = (ticket) => {
        
        localStorage.setItem('ticket', ticket._id);
    }
  return (
    <>
    <tr>
    <td>
        <Link to="/ticket-details" className="fw-bold text-secondary" onClick={()=>{passValue(tick)}}>{tick.id}</Link>
    </td>
    <td>
       {tick.subject}
   </td>
   <td>
       <img className="avatar rounded-circle" src= {tick.img} alt=""/>
       <span className="fw-bold ms-1">{tick.name}</span>
   </td>
   <td>
        {tick.date}
   </td>
   <td><span className={`badge bg-${colour(tick.tag)}`}>{tick.tag}</span></td>
    <td>
        <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" onClick={() => {edit(tick)}} data-bs-target="#edittickit"><i className="icofont-edit text-success"></i></button>
            <button type="button" className="btn btn-outline-secondary deleterow" onClick={()=>{deleteTicket(tick._id)}}><i className="icofont-ui-delete text-danger"></i></button>
        </div>
    </td>
</tr>
    </>
  )
}

export default TicketShow
