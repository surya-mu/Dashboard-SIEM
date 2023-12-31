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
    console.log(array);
    return array;
}

const WazuhActive = () => {
  const [inactiveCount, setinactiveCount] = useState({
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
      const response = await fetch("http://localhost:3001/get-inactive_count");
      const inactiveCountData = await response.json();
      console.log(inactiveCountData);
      setinactiveCount(inactiveCountData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* <table className='table table-info'> */}
        {/* <thead>
          <tr>
            <th>OS</th>
            <th>Agent Name</th>
            <th>IP</th>
            <th className=''>Date</th>
            <th className=''>Time</th>
            <th className=''>Status</th>
          </tr>
  </thead>*/}
        {/* <tbody>  */}
            
          {inactiveCount.data.affected_items.map((item, index) => (
            <tr key={index}>
                <td>{index+2}</td>
              <td>{item.os_name}</td>
              <td>{item.agent_name}</td>
              <td>{item.registerIP}</td>
              <td className=''>{convert(item.dateAdd)[0]}</td>
              <td className=''>{convert(item.dateAdd)[1]}</td>
              <td className=''>Inactive</td>
            </tr>
          ))}
        {/* </tbody>
      </table> */}
    </>
  );
};

export default WazuhActive;
