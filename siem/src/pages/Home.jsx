import React from 'react'
import Navbar from '../components/navbar';
import WazuhAgents from '../components/wazuh_agents';
import './Home.css';
// import WazuhCombined from '../components/wazuh_combined';
import SiemPieChart from '../components/siem-piechart';
import SiemBarChart from '../components/siem-barchart';
// import SearchBar from '../components/searchbar';

// import WazuhActive from '../components/wazuh_active';
// import WazuhInactive from '../components/wazuh_inactive';

function Home() {
  return (
      <div className='container-fluid p-0' style={{marginTop:"20px",maxHeight:"760px"}}>
        <div className="row" style={{height:""}}>
          <div className="col-2">
            <Navbar />
          </div>
        
        
        <div className='col-10'>
        <h4 className='' style={{textAlign:"right",paddingRight:"50px",marginBottom:"-20px"}}>Welcome <b>User.</b></h4>
            <span className='ps-5 pb-3'><b>Pages</b> /Home</span>
            <WazuhAgents/>
            {/* <WazuhCombined/>
             */}
             <div className="charts-container">
             <SiemPieChart/>
                <SiemBarChart/>
                
                 
             </div>
        </div>
       
        </div>
        </div>
  )
}

export default Home