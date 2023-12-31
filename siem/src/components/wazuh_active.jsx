import React, { useState, useEffect } from 'react';
import './wazuh.css'

function convert(date) {
    const newDate = new Date(date);
    const newDate2 = new Date(date);
    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };

    const options2 = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    }
    const array = [newDate.toLocaleDateString(undefined, options),newDate2.toLocaleTimeString(undefined,options2)]
    return array;
}

const WazuhActive = () => {
  const [activeCount, setActiveCount] = useState({
    data: {
      total_count: 0,
      affected_items: [{ os_name: "", agent_name: "", registerIP: "", dateAdd: ""}]
    }
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/get-active_count");
      const activeCountData = await response.json();
      console.log(activeCountData);
      setActiveCount(activeCountData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // <div>
    //   <table className='table table-info'>
    //     <thead>
    //       <tr>
    //         <th id="tab">S.No</th>
    //         <th>OS</th>
    //         <th className=''>Agent Name</th>
    //         <th className=' '>IP</th>
    //         <th className=' '>Date</th>
    //         <th className=' '>Time</th>
    //         <th className=' '>Status</th>
    //       </tr>
    //     </thead>
        // <tbody>
        <>
          {activeCount.data.affected_items.map((item, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
              <td>{item.os_name}</td>
              <td>{item.agent_name}</td>
              <td>{item.registerIP}</td>
              <td>{convert(item.dateAdd)[0]}</td>
              <td>{convert(item.dateAdd)[1]}</td>
              <td>Active</td>
            </tr>
          ))}
          </>
 
  );
};

export default WazuhActive;
