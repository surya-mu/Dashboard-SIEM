import React, { useState } from 'react';
import Navbar from '../components/navbar';
import SiemPieChart from '../components/siem-piechart';
import SiemBarChart from '../components/siem-barchart';
// import { Link } from 'react-router-dom';
import './Home.css';

function SIEM() {
  const [showAlerts, setShowAlerts] = useState(false);

  return (
    <div className='container-fluid p-0' style={{ marginTop: '20px', maxHeight: '1560px', background: 'rgb(240,242,245)' }}>
      <div className='row'>
        <div className='col-2'>
          <Navbar />
        </div>

        <div className='col-10'>
          <span className='ps-5 '>
            <b>Pages</b> /SIEM
          </span>
          <button type='button' className='btn btn-primary' style={{ marginLeft: '1120px' }} onClick={() => setShowAlerts(!showAlerts)}>
            {showAlerts ? 'Alerts' : 'Alerts'}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill ms-1" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                    </svg>
                    <span class="badge bg-warning rounded-pill w-25 ms-1 pt-1" style={{width:"20px",height:"20px"}}>3</span>
          </button>

          <div className='charts-container mt-5'>
            <SiemPieChart />
            <SiemBarChart />
          </div>
          <h3 className='pt-5' style={{ marginLeft: '510px',position:"absolute",top:"0",textWrap:"nowrap" }}>SIEM Dashboard</h3>

          {showAlerts && (
            <div>
              <div class='list-group w-25 ps-5' style={{ marginLeft: '870px', position: 'absolute', marginTop: '-497px' }}>
                <div class='list-group-item list-group-item-action justify-content-between'>
                  <div>
                    <h5 class='mb-1 p-2 text-light' style={{backgroundColor:"rgba(223,55,116,0.885)",borderRadius:"10px",display:"inline-block",fontSize:"17px"}}>Critical Alert</h5>
                    <p class='mb-1'>OS Query Error</p>
                    <small>2 days ago</small>
                  </div>
                </div>
                <div class='list-group-item list-group-item-action justify-content-between'>
                  <div>
                    <h5 class='mb-1 p-2 text-light'  style={{backgroundColor:"rgba(64,143,236,0.886)",borderRadius:"10px",display:"inline-block",fontSize:"17px"}}>Medium Alert</h5>
                    <p class='mb-1'>3 Agents Disconnected.</p>
                    <small class='text-body-secondary'>4 days ago</small>
                  </div>
                </div>
                <div class='list-group-item list-group-item-action'>
                  <div>
                    <h5 class='mb-1 p-2 text-light'style={{background:"rgba(64,143,236,0.885)",borderRadius:"10px",display:"inline-block",fontSize:"17px"}}>Medium Alert</h5>
                    <p class='mb-1'>No Logs Detected</p>
                    <small class='text-body-secondary'>6 days ago</small>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SIEM;
