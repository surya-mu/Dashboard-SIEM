import React from 'react'
// import WazuhCombined from '../components/wazuh_combined'
import Navbar from '../components/navbar'
import './Home.css'
import AgentDetails from '../components/Tables'


function Agents() {
  return (
    <div className="container-fluid pt-4 pb-0 px-0">
        <div className="row pt-0">
            <div className="col-2">
                <Navbar/>
            </div>
                <div className='col-10' style={{marginTop:"-5px"}}>
                <AgentDetails/>
            </div>
        </div>
    </div>
 
  )
}

export default Agents