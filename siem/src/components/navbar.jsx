import React from 'react'
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';




function Navbar() {
  return (
    
      <div style={{boxShadow:"1.5px 1px 3px lightgrey",width:"230px",marginTop:"1px",marginLeft:"10px"}} className='p-0'>
        <nav className='navbar bg-light text-dark' style={{height:"660px",borderRadius:"10px"}}>
          {/* <hr style={{color:"white",backgroundImage: linear-radient(90deg, rgba(255, 255, 255, 0), #fff, rgba(255, 255, 255, 0));,width:"380px",marginTop:"29px",zIndex:"3"}} /> */}
                    <Link to="/" className='navbar-brand text-light' style={{marginTop:"-180px",paddingLeft:"0px",paddingRight:"20px",marginLeft:"31px",boxShadow:"0px 0.5px 0px white"}}><h4 className='ms-3 ps-1'><strong>Dashboard</strong></h4></Link>
          
            <ul className='navbar-nav px-5 mainlist' style={{listStyle:"none",marginBottom:"-540px"}}>

                <li>
                  <NavLink className='nav-link text-light' to="/">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-house me-1" viewBox="0 0 15 18">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                          </svg> 
                        <span className='ps-2'>Home</span>
                  </NavLink></li>
                <li className="nav-item">
              <NavLink className="nav-link text-light " to="/agents"  aria-expanded="false">
                Wazuh
              </NavLink>
              {/* <ul className="dropdown-menu">
                <li><NavLink to='/wazuh-active' className="dropdown-item">Active Agents</NavLink></li>
                <li><a className="dropdown-item" href="/">Inactive Agents</a></li>
                <li><a className="dropdown-item" href="/">Disconnected Agents</a></li>
              </ul> */}
              </li>
                <li><NavLink className='nav-link text-light' to="/siem">SIEM</NavLink></li>
                  {/* <li><button type='button'  className='btn p-0 m-0'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#64b5f6" style={{backgroundColor:"black",objectFit:"cover"}} class="bi bi-moon-fill" viewBox="0 0 16 16" >
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278"/>
  </svg></button></li> */}
            </ul>
        </nav>
      </div>
  )
}

export default Navbar