import React, { useState, useEffect } from 'react';
import './wazuh.css';
import ReactPaginate from 'react-paginate';

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
    hour12: true,
  };

  const array = [
    newDate.toLocaleDateString(undefined, options),
    newDate2.toLocaleTimeString(undefined, options2),
  ];
  return array;
}

const WazuhCombined = () => {
  const [data, setData] = useState({
    active: {
      total_count: 0,
      affected_items: [],
    },
    inactive: {
      total_count: 0,
      affected_items: [],
    },
    disconnected: {
      total_count: 0,
      affected_items: [],
    },
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchData('get-active_count', 'active');
    fetchData('get-inactive_count', 'inactive');
    fetchData('get-disconnected_count', 'disconnected');
  }, []);

  const fetchData = async (endpoint, key, fromDate = null) => {
    try {
      const url = `http://localhost:3001/${endpoint}${fromDate ? `?fromDate=${fromDate}` : ''}`;
      const response = await fetch(url);
      const responseData = await response.json();

      const status = key;

      setData((prevData) => ({
        ...prevData,
        [key]: {
          total_count: responseData.data.total_count,
          affected_items: responseData.data.affected_items.map((item) => ({
            ...item,
            status: status,
          })),
        },
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const filteredItems = data.active.affected_items
    .concat(data.inactive.affected_items)
    .concat(data.disconnected.affected_items)
    .filter((item) =>
      Object.values(item).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

  const highlightText = (text, highlight) => {
    if (!text || !highlight) {
      return text;
    }

    const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const parts = text.split(new RegExp(`(${escapedHighlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === escapedHighlight.toLowerCase() ? (
            <mark key={index}>{part}</mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleDateFilter = (months) => {
    const currentDate = new Date();
    const fromDate = new Date();

    fromDate.setMonth(currentDate.getMonth() - months);

    fetchData('get-active_count', 'active', fromDate.toISOString());
    fetchData('get-inactive_count', 'inactive', fromDate.toISOString());
    fetchData('get-disconnected_count', 'disconnected', fromDate.toISOString());
  };

  return (
    <>
      <p className='ps-5'><b>Pages</b>/Wazuh</p>
      <div className='' style={{zIndex:"2"}}>
        <button type='button' className='btn btn-primary me-2' onClick={() => handleDateFilter(1)}>Last 1 Month</button>
        <button type='button' className='btn btn-primary me-2' onClick={() => handleDateFilter(3)}>Last 3 Months</button>
        <button type='button' className='btn btn-primary me-1' onClick={() => handleDateFilter(12)}>Last 1 Year</button>
      </div>

      <div className='inline-block ' style={{ marginLeft: '500px' }}>
        <div className='form'>
          <div className='input-group w-50 pt-2 ms-auto' style={{ marginRight: '65px', marginBottom: '25px',marginTop:"-20px" }}>
            <input
              type='text'
              className='form-control'
              style={{
                background: '#fafaff',
                color: 'black',
                fontWeight: '500'
              }}
              placeholder='Search'
              id='searchbar'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type='submit' className='input-group-text' id='search-icon' style={{ background: 'rgba(46, 83, 218, 0.826)' }}>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' className='bi bi-search' viewBox='0 0 16 16'>
                <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <table className='table ms-5'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>OS</th>
            <th>Agent Name</th>
            <th>IP</th>
            <th className=''>Date</th>
            <th className=''>Time</th>
            <th className=''>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{highlightText(item.os_name, searchQuery)}</td>
              <td>{highlightText(item.agent_name, searchQuery)}</td>
              <td>{highlightText(item.registerIP, searchQuery)}</td>
              <td className=''>{convert(item.dateAdd)[0]}</td>
              <td className=''>{convert(item.dateAdd)[1]}</td>
              <td className='status'>
                {item.status === 'active' ? 'Active' : item.status === 'inactive' ? 'Inactive' : 'Disconnected'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='pagination-container'>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    </>
  );
};

export default WazuhCombined;
