import React from 'react'
import Tickets from './components/Tickets'
import TicketDetails from './components/TicketDetails'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from './components/About';
import TicketState from "./contexts/tickets/TicketState"

import SideBar from './components/SideBar';

const App = () => {
  return (
   <>
   
   <TicketState>
   <Router>
   <div id="mytask-layout" className="theme-indigo">
    <SideBar/>
    {/* <About/> */}

   <Routes>
              <Route exact path="/tickets" element={<Tickets/>}></Route>
              <Route exact path="/ticket-details" element={<TicketDetails />}></Route>
            
            </Routes>
 </div>
   </Router>
   </TicketState>

   </>
  )
}

export default App
