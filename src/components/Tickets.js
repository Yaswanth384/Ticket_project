import React, { useContext, useEffect, useRef, useState } from 'react'
import TicketShow from './TicketShow'
import tickeContext from '../contexts/tickets/ticketContext'

export default function Tickets() {

    const {ticket, fetchAll, addTicket, updateTicket, Filter} = useContext(tickeContext)


    const ref = useRef(null)
    useEffect(() => {
        // console.log("hello world")
     fetchAll();
     
     // eslint-disable-next-line
    }, [])
  
    const [state, setstate] = useState({
        name:"",
        subject: "",
        tag: "Completed",
        date: ""
    })
    const add = (e) =>{
        
        e.preventDefault();
        addTicket( state.name, state.subject, state.date, state.tag);
        setstate({
            name:"",
            subject: "",
            tag: "Completed",
            date: ""
        })
        // console.log(ticket)
        ref.current.click();
    }

    const onchange = (e) => {
       setstate({...state, [e.target.name]: e.target.value})
    //    console.log(state.tag)
    }

    const  [newticket, setTicket] = useState({
        id : "",
        name: "",
        subject: "",
        date: "",
        tag: "",
    })

    const refClose = useRef(null)

    const update = (e) => {
        e.preventDefault();

        updateTicket(newticket.id, newticket.name, newticket.subject, newticket.date, newticket.tag)
        refClose.current.click();
    }

    const eventChange = (e) =>{
        setTicket({...newticket, [e.target.name]:e.target.value})
        // console.log(typeof(newticket.date), newticket.tag)
    }

    const edit = (current) => {
        setTicket({id:current._id, name: current.name, subject: current.subject, date: current.date, tag: current.tag});
    }





  return (
    <>
{/* <!-- main body area --> */}
<div className="main px-lg-4 px-md-4"> 

    {/* <!-- Body: Header --> */}
    <div className="header">
        <nav className="navbar py-4">
            <div className="container-xxl">

                {/* <!-- header rightbar icon --> */}
                <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
                    <div className="d-flex">
                        <a className="nav-link text-primary collapsed" href="help.html" title="Get Help">
                            <i className="icofont-info-square fs-5"></i>
                        </a>
                        <div className="avatar-list avatar-list-stacked px-3">
                            <img className="avatar rounded-circle" src="assets/images/xs/avatar2.jpg" alt=""/>
                            <img className="avatar rounded-circle" src="assets/images/xs/avatar1.jpg" alt=""/>
                            <img className="avatar rounded-circle" src="assets/images/xs/avatar3.jpg" alt=""/>
                            <img className="avatar rounded-circle" src="assets/images/xs/avatar4.jpg" alt=""/>
                            <img className="avatar rounded-circle" src="assets/images/xs/avatar7.jpg" alt=""/>
                            <img className="avatar rounded-circle" src="assets/images/xs/avatar8.jpg" alt=""/>
                            <span className="avatar rounded-circle text-center pointer" data-bs-toggle="modal" data-bs-target="#addUser"><i className="icofont-ui-add"></i></span>
                        </div>
                    </div>
                    <div className="dropdown notifications zindex-popover">
                        <a className="nav-link dropdown-toggle pulse" href="/" role="button" data-bs-toggle="dropdown">
                            <i className="icofont-alarm fs-5"></i>
                            <span className="pulse-ring"></span>
                        </a>
                        <div id="NotificationsDiv" className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-sm-end p-0 m-0">
                            <div className="card border-0 w380">
                                <div className="card-header border-0 p-3">
                                    <h5 className="mb-0 font-weight-light d-flex justify-content-between">
                                        <span>Notifications</span>
                                        <span className="badge text-white">11</span>
                                    </h5>
                                </div>
                                <div className="tab-content card-body">
                                    <div className="tab-pane fade show active">
                                        <ul className="list-unstyled list mb-0">
                                            <li className="py-2 mb-1 border-bottom">
                                                <a href = "/" className="d-flex">
                                                    <img className="avatar rounded-circle" src="assets/images/xs/avatar1.jpg" alt=""/>
                                                    <div className="flex-fill ms-2">
                                                        <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Dylan Hunter</span> <small>2MIN</small></p>
                                                        <span className="">Added  2021-02-19 my-Task ui/ux Design <span className="badge bg-success">Review</span></span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="py-2 mb-1 border-bottom">
                                                <a href = "/" className="d-flex">
                                                    <div className="avatar rounded-circle no-thumbnail">DF</div>
                                                    <div className="flex-fill ms-2">
                                                        <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Diane Fisher</span> <small>13MIN</small></p>
                                                        <span className="">Task added Get Started with Fast Cad project</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="py-2 mb-1 border-bottom">
                                                <a href = "/" className="d-flex">
                                                    <img className="avatar rounded-circle" src="assets/images/xs/avatar3.jpg" alt=""/>
                                                    <div className="flex-fill ms-2">
                                                        <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Andrea Gill</span> <small>1HR</small></p>
                                                        <span className="">Quality Assurance Task Completed</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="py-2 mb-1 border-bottom">
                                                <a href = "/" className="d-flex">
                                                    <img className="avatar rounded-circle" src="assets/images/xs/avatar5.jpg" alt=""/>
                                                    <div className="flex-fill ms-2">
                                                        <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Diane Fisher</span> <small>13MIN</small></p>
                                                        <span className="">Add New Project for App Developemnt</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="py-2 mb-1 border-bottom">
                                                <a href = "/" className="d-flex">
                                                    <img className="avatar rounded-circle" src="assets/images/xs/avatar6.jpg" alt=""/>
                                                    <div className="flex-fill ms-2">
                                                        <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Andrea Gill</span> <small>1HR</small></p>
                                                        <span className="">Add Timesheet For Rhinestone project</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="py-2">
                                                <a href = "/" className="d-flex">
                                                    <img className="avatar rounded-circle" src="assets/images/xs/avatar7.jpg" alt=""/>
                                                    <div className="flex-fill ms-2">
                                                        <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Zoe Wright</span> <small className="">1DAY</small></p>
                                                        <span className="">Add Calander Event</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <a className="card-footer text-center border-top-0" href="/"> View all notifications</a>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center zindex-popover">
                        <div className="u-info me-2">
                            <p className="mb-0 text-end line-height-sm "><span className="font-weight-bold">Dylan Hunter</span></p>
                            <small>Admin Profile</small>
                        </div>
                        <a className="nav-link dropdown-toggle pulse p-0" href="/" role="button" data-bs-toggle="dropdown" data-bs-display="static">
                            <img className="avatar lg rounded-circle img-thumbnail" src="assets/images/profile_av.png" alt="profile"/>
                        </a>
                        <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                            <div className="card border-0 w280">
                                <div className="card-body pb-0">
                                    <div className="d-flex py-1">
                                        <img className="avatar rounded-circle" src="assets/images/profile_av.png" alt="profile"/>
                                        <div className="flex-fill ms-3">
                                            <p className="mb-0"><span className="font-weight-bold">Dylan Hunter</span></p>
                                            <small className="">Dylan.hunter@gmail.com</small>
                                        </div>
                                    </div>
                                    
                                    <div><hr className="dropdown-divider border-dark"/></div>
                                </div>
                                <div className="list-group m-2 ">
                                    <a href="task.html" className="list-group-item list-group-item-action border-0 "><i className="icofont-tasks fs-5 me-3"></i>My Task</a>
                                    <a href="members.html" className="list-group-item list-group-item-action border-0 "><i className="icofont-ui-user-group fs-6 me-3"></i>members</a>
                                    <a href="ui-elements/auth-signin.html" className="list-group-item list-group-item-action border-0 "><i className="icofont-logout fs-6 me-3"></i>Signout</a>
                                    <div><hr className="dropdown-divider border-dark"/></div>
                                    <a href="ui-elements/auth-signup.html" className="list-group-item list-group-item-action border-0 "><i className="icofont-contact-add fs-5 me-3"></i>Add personal account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- menu toggler --> */}
                <button className="navbar-toggler p-0 border-0 menu-toggle order-3" type="button" data-bs-toggle="collapse" data-bs-target="#mainHeader">
                    <span className="fa fa-bars"></span>
                </button>

                {/* <!-- main menu Search--> */}
                <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
                    <div className="input-group flex-nowrap input-group-lg">
                        <button type="button" className="input-group-text" id="addon-wrapping"><i className="fa fa-search"></i></button>
                        <input type="search" className="form-control" placeholder="Search" aria-label="search" onChange={Filter} aria-describedby="addon-wrapping"/>
                        <button type="button" className="input-group-text add-member-top" id="addon-wrappingone" data-bs-toggle="modal" data-bs-target="#addUser"><i className="fa fa-plus"></i></button>
                    </div>
                </div>

            </div>
        </nav>
    </div>

    {/* <!-- Body: Body -->        */}
    <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
            <div className="row align-items-center">
                <div className="border-0 mb-4">
                    <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                        <h3 className="fw-bold mb-0">Tickets</h3>
                        <div className="col-auto d-flex w-sm-100">
                            <button type="button" className="btn btn-dark btn-set-task w-sm-100" data-bs-toggle="modal" data-bs-target="#tickadd"><i className="icofont-plus-circle me-2 fs-6"></i>Add Tickets</button>
                        </div>
                    </div>
                </div>
            </div> 
            {/* <!-- Row end  --> */}
            <div className="row clearfix g-3">
              <div className="col-sm-12">
                    <div className="card mb-3">
                        <div className="card-body">
                            <table id="myProjectTable" className="table table-hover align-middle mb-0" style={{width : "100%"}}>
                                <thead>
                                    <tr>
                                        <th>Tickit Id</th>
                                        <th>Subject</th>
                                        <th>Assigned</th> 
                                        <th>Created Date</th> 
                                        <th>Status</th>   
                                        <th>Actions</th>  
                                    </tr>
                                </thead>
                                <tbody>
                                    {ticket.map((val, index) => {
                                        
                                       return <TicketShow key={val._id} tick={val} edit = {edit} />
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
              </div>
             </div>   {/* <!-- Row End --> */}
        </div>
    </div>
    
    {/* <!-- Modal Members--> */}
    <div className="modal fade" id="addUser" tabIndex="-1" aria-labelledby="addUserLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title  fw-bold" id="addUserLabel">Employee Invitation</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="inviteby_email">
                    <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="Email address" id="exampleInputEmail1" aria-describedby="exampleInputEmail1"/>
                        <button className="btn btn-dark" type="button" id="button-addon2">Sent</button>
                    </div>
                </div>
                <div className="members_list">
                    <h6 className="fw-bold ">Employee </h6>
                    <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                        <li className="list-group-item py-3 text-center text-md-start">
                            <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                                <div className="no-thumbnail mb-2 mb-md-0">
                                    <img className="avatar lg rounded-circle" src="assets/images/xs/avatar2.jpg" alt=""/>
                                </div>
                                <div className="flex-fill ms-3 text-truncate">
                                    <h6 className="mb-0  fw-bold">Rachel Carr(you)</h6>
                                    <span className="text-muted">rachel.carr@gmail.com</span>
                                </div>
                                <div className="members-action">
                                    <span className="members-role ">Admin</span>
                                    <div className="btn-group">
                                        <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="icofont-ui-settings  fs-6"></i>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                          <li><a className="dropdown-item" href="/"><i className="icofont-ui-password fs-6 me-2"></i>ResetPassword</a></li>
                                          <li><a className="dropdown-item" href="/"><i className="icofont-chart-line fs-6 me-2"></i>ActivityReport</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item py-3 text-center text-md-start">
                            <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                                <div className="no-thumbnail mb-2 mb-md-0">
                                    <img className="avatar lg rounded-circle" src="assets/images/xs/avatar3.jpg" alt=""/>
                                </div>
                                <div className="flex-fill ms-3 text-truncate">
                                    <h6 className="mb-0  fw-bold">Lucas Baker<a href="/" className="link-secondary ms-2">(Resend invitation)</a></h6>
                                    <span className="text-muted">lucas.baker@gmail.com</span>
                                </div>
                                <div className="members-action">
                                    <div className="btn-group">
                                        <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            Members
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                          <li>
                                              <a className="dropdown-item" href="/">
                                                <i className="icofont-check-circled"></i>
                                                  
                                                <span>All operations permission</span>
                                               </a>
                                               
                                            </li>
                                            <li>
                                                 <a className="dropdown-item" href="/">
                                                    <i className="fs-6 p-2 me-1"></i>
                                                       <span>Only Invite & manage team</span>
                                                   </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="icofont-ui-settings  fs-6"></i>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                          <li><a className="dropdown-item" href="/"><i className="icofont-delete-alt fs-6 me-2"></i>Delete Member</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item py-3 text-center text-md-start">
                            <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                                <div className="no-thumbnail mb-2 mb-md-0">
                                    <img className="avatar lg rounded-circle" src="assets/images/xs/avatar8.jpg" alt=""/>
                                </div>
                                <div className="flex-fill ms-3 text-truncate">
                                    <h6 className="mb-0  fw-bold">Una Coleman</h6>
                                    <span className="text-muted">una.coleman@gmail.com</span>
                                </div>
                                <div className="members-action">
                                    <div className="btn-group">
                                        <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            Members
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                          <li>
                                              <a className="dropdown-item" href="/">
                                                <i className="icofont-check-circled"></i>
                                                  
                                                <span>All operations permission</span>
                                               </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/">
                                                    <i className="fs-6 p-2 me-1"></i>
                                                       <span>Only Invite & manage team</span>
                                                   </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-group">
                                        <div className="btn-group">
                                            <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="icofont-ui-settings  fs-6"></i>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                              <li><a className="dropdown-item" href="/"><i className="icofont-ui-password fs-6 me-2"></i>ResetPassword</a></li>
                                              <li><a className="dropdown-item" href="/"><i className="icofont-chart-line fs-6 me-2"></i>ActivityReport</a></li>
                                              <li><a className="dropdown-item" href="/"><i className="icofont-delete-alt fs-6 me-2"></i>Suspend member</a></li>
                                              <li><a className="dropdown-item" href="/"><i className="icofont-not-allowed fs-6 me-2"></i>Delete Member</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </div>

    {/* <!-- Add Tickit--> */}
    <div className="modal fade" id="tickadd" tabindex="-1"  aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title  fw-bold" id="edittickitLabel"> Tickit Edit</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" name="subject" className="form-control" id="subject" value={state.subject} onChange={onchange}/>
                </div>
                <div className="deadline-form">
                    <form>
                        <div className="row g-3 mb-3">
                          <div className="col">
                            <label htmlFor="name" className="form-label">Assign Name</label>
                            <input type="text" name="name" className="form-control" id="name" value={state.name} onChange={onchange}/>
                          </div>
                          <div className="col">
                            <label htmlFor="date" className="form-label">Creted Date</label>
                            <input type="date" className="form-control" id="date" value={state.date} name="date" onChange={onchange}/>
                          </div>
                        </div>
                    </form>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Status</label>
                    <select onChange={onchange} name="tag" className="form-select">
                        <option value="Completed" >Completed</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Waiting">Wating</option>
                        <option value="Decline" >Decline</option>
                    </select>
                </div>
            </div>
            <div className="modal-footer">
                <button ref={ref} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Done</button>
                <button type="submit" disabled = {state.name.length===0 || state.subject.length===0} className="btn btn-primary" onClick={add}>sent</button>
            </div>
        </div>
        </div>
        </div>

    {/* <!-- Edit Tickit--> */}
    <div className="modal fade" id="edittickit" tabIndex="-1"  aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title  fw-bold" id="edittickitLabel"> Tickit Edit</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" name="subject" className="form-control" id="subject" value={newticket.subject} onChange={eventChange}/>
                </div>
                <div className="deadline-form">
                    <form>
                        <div className="row g-3 mb-3">
                          <div className="col">
                            <label htmlFor="name" className="form-label">Assign Name</label>
                            <input type="text" name="name" className="form-control" id="name" value={newticket.name} onChange={eventChange}/>
                          </div>
                          <div className="col">
                            <label htmlFor="date" className="form-label">Creted Date</label>
                            <input type="date" className="form-control" id="date" value={newticket.date} name="date" onChange={eventChange}/>
                          </div>
                        </div>
                    </form>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Status</label>
                    <select onChange={eventChange} name="tag" className="form-select">
                        <option value="Completed" >Completed</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Waiting">Wating</option>
                        <option value="Decline" >Decline</option>
                    </select>
                </div>
            </div>
            <div className="modal-footer">
                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Done</button>
                <button type="submit" disabled = {newticket.name.length===0 || newticket.subject.length===0} className="btn btn-primary" onClick={update}>sent</button>
            </div>
        </div>
        </div>
    </div>

</div>

    </>
  )
}
