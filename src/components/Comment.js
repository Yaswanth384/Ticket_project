import React, { useEffect, useState } from 'react'
// import tickeContext from '../contexts/tickets/ticketContext';

const Comment = (props) => {

    const [t, sett] = useState(1)

    useEffect(() => {   
     
        let num = Math.floor(Math.random()*12)+1;
        sett(num)
     
    // eslint-disable-next-line
    }, [])

 const {val , singleTicket, comment} = props
  return (
    <>
    <li key={val._id} className="card mb-2">
        <div className="card-body">
        <div className="d-flex mb-3 pb-3 border-bottom">
        <img className="avatar rounded-circle" src={singleTicket.img} alt=""/>
        <div className="flex-fill ms-3 text-truncate">
            <h6 className="mb-0"><span>{val.name}</span> <span className="text-muted small">posted a status</span></h6>
            <span className="text-muted">3 hours ago</span>
        </div>
    </div>
    <div className="timeline-item-post">
    <h6>{singleTicket.subject} </h6>
    <p>{val.status}</p>
    <div className="mb-2 mt-4">
        <a className="me-lg-4 me-2 text-primary" href="/"><i className="icofont-speech-comments"></i> Comment (2)</a>
    </div>
    <div>
        {comment.map((comm) => {
            return <div className="d-flex mt-3 pt-3 border-top">
            <img className="avatar rounded-circle" src={`assets/images/xs/avatar${t}.jpg`} alt=""/>
            <div className="flex-fill ms-3 text-truncate">
                <p className="mb-0"><span>{comm.name}</span> <small className="msg-time">1 hour ago</small></p>
                <span className="text-muted">{comm.comment}</span>
            </div>
        </div>
        })}
    </div>
</div>
<div className="mt-4">
        <textarea className="form-control" placeholder="Replay"></textarea>
    </div>
</div>
    </li>
    </>
  )
}

export default Comment
