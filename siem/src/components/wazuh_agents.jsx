import React, { useState, useEffect } from 'react';
import './wazuh.css';

const WazuhAgents = () => {
    const [agentsCount, setAgentsCount] = useState({
        data: {
            total: 0,
            active: 0,
            inactive: 0,
            neverConnected: 0,
        },
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:5500/agent_details.json");
            const agentsData = await response.json();
    
            console.log("Agents Data:", agentsData);
    
            const counts = agentsData.reduce(
                (acc, agent) => {
                    if (agent.status === 'active') {
                        acc.active += 1;
                    } else if (agent.status === 'inactive') {
                        acc.inactive += 1;
                    } else if (agent.status === 'disconnected') {
                        acc.neverConnected += 1;
                    }
                    return acc;
                },
                { total: agentsData.length, active: 0, inactive: 0, neverConnected: 0 }
            );
    
            console.log("Counts:", counts);
    
            setAgentsCount({
                data: counts,
            });
        } catch (error) {
            console.error(error);
        }
    };
    
    


    return (
        <div>
            <ul style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }} className='px-1 py-3'>
                <li key={1} style={{ display: "flex", flexDirection: "column", boxShadow: "0px 5px 10px 1px slategray" }} className='agent'>
                    <span className='ps-5'>Total Agents</span>
                    <span className="data mb-5" style={{ borderTop: "0.5px grey solid" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="white" className="bi bi-person-fill-up pt-3" viewBox="0 0 16 30" style={{ background: "", marginTop: "-140px", marginLeft: "-80px", borderRadius: "21px" }}>
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4" />
                        </svg>
                        {agentsCount.data.total}
                    </span>
                </li>
                <li key={2} style={{ display: "flex", flexDirection: "column", boxShadow: "0px 5px 10px 1px slategray" }} className='agent'>
                    <span className="ps-5 ms-4" style={{}}>Active Agents</span>
                    <span className="data mb-5" style={{ borderTop: "0.5px grey solid" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="white" className="bi bi-person-fill-check pt-3" viewBox="0 0 16 30" style={{ background: "", marginTop: "-140px", marginLeft: "-90px", borderRadius: "21px" }}>
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4" />
                        </svg>
                        {agentsCount.data.active}
                    </span>
                </li>
                <li key={3} style={{ display: "flex", flexDirection: "column", boxShadow: "0px 5px 10px 1px slategray" }} className='agent'>
                    <span className="ps-5 ms-3">Inactive Agents</span>
                    <span className="data mb-5 " style={{ borderTop: "0.5px grey solid" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="white" className="bi bi-person-fill-down pt-3 me-3" viewBox="0 0 16 30" style={{ background: "", marginTop: "-140px", marginLeft: "-70px", borderRadius: "21px" }}>
                            <path d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m.354 5.854 1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V10.5a.5.5 0 0 0-1 0v2.793l-.646-.647a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4" />
                        </svg>
                        {agentsCount.data.inactive}
                    </span>
                </li>
                <li key={4} style={{ display: "flex", flexDirection: "column", boxShadow: "0px 5px 10px 1px slategray" }} className='agent'>
                    <span className="ps-5 ms-4">Disconnected </span>
                    <span className="data mb-5" style={{ borderTop: "0.5px grey solid" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="white" class="bi bi-person-x-fill pt-3 " viewBox="0 0 16 30" style={{ background: "", marginTop: "-140px", marginLeft: "-90px", borderRadius: "21px" }}>
                            <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z" />
                        </svg>
                        {agentsCount.data.neverConnected}
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default WazuhAgents;
