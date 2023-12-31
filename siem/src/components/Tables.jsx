import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const AgentDetails = () => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5500/agent_details.json');
      const responseData = await response.json();
      setData(responseData);
      setOriginalData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const highlightText = (text, query) => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return <span>{text}</span>;

    const regex = new RegExp(`(${trimmedQuery})`, 'gi');
    return (
      <span>
        {text.split(regex).map((part, index) =>
          regex.test(part) ? <mark key={index}>{part}</mark> : <span key={index}>{part}</span>
        )}
      </span>
    );
  };

  const filterItems = (items, query) =>
    items.filter(
      (item) =>
        Object.entries(item).some(
          ([key, value]) =>
            key !== 'dateAdd' &&
            value &&
            value.toString().toLowerCase().includes(query.toLowerCase())
        )
    );

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const currentItems = data.slice(
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

    const filteredData = filterItems(originalData, searchQuery).filter((item) => {
      const [day, month, year] = item.dateAdd.split('/');
      const itemDate = new Date(`${year}-${month}-${day}`);
      return itemDate >= fromDate;
    });

    setData([...filteredData]);
  };

  const handleResetFilter = () => {
    setSearchQuery('');
    fetchData();
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredData = filterItems(originalData, query);

    setData(filteredData);
  };

  return (
    <div style={{marginTop:"-3px"}}>
      <p className='ps-5'>
        <b>Pages</b>/Wazuh
      </p>
      <h4 className='text-center' style={{marginBottom:"0",marginTop:"-24px"}}>Wazuh Agents</h4>
      <div className='ms-5 mt-5'>
        <button
          type='button'
          className='btn text-light me-2'
          onClick={() => handleDateFilter(1)
          }
          style={{backgroundColor:"rgb(100,81,223)"}}
        >
          Last 1 Month
        </button>
        <button
          type='button'
          className='btn me-2 text-light'
          onClick={() => handleDateFilter(3)}
          style={{backgroundColor:"rgb(100,81,223)"}}
        >
          Last 3 Months
        </button>
        <button
          type='button'
          className='btn text-light'
          onClick={() => handleDateFilter(12)}
          style={{backgroundColor:"rgb(100,81,223)"}}
        >
          Last 1 Year
        </button>
        <button
          type='button'
          className='btn btn-secondary ms-2'
          onClick={handleResetFilter}
        >
          All
        </button>
      </div>

      <div className='inline-block ' style={{ marginLeft: '500px', marginTop: '-44px' }}>
        <div
          className='input-group w-50 pt-2 ms-auto'
          style={{
            marginRight: '65px',
            marginBottom: '25px',
            marginTop: '-20px',
          }}
        >
          <input
            type='text'
            className='form-control'
            style={{
              background: '#fafaff',
              color: 'black',
              fontWeight: '500',
            }}
            placeholder='Search'
            id='searchbar'
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button
            type='submit'
            className='input-group-text'
            id='search-icon'
            style={{ background: 'rgba(46, 83, 218, 0.826)' }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='white'
              className='bi bi-search'
              viewBox='0 0 16 16'
            >
              <path
                d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0'
              />
            </svg>
          </button>
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
              <td>{highlightText(item.registerIp, searchQuery)}</td>
              <td className=''>{highlightText(item.dateAdd, searchQuery)}</td>
              <td className=''>{highlightText(item.time, searchQuery)}</td>
              <td className='status'>{highlightText(item.status, searchQuery)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='pagination-container'>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
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
    </div>
  );
};

export default AgentDetails;
