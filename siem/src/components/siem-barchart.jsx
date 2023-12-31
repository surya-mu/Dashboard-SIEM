import React from 'react';
import Chart from 'react-google-charts';

const SiemBarChart = () => {
  // Mock data
  const mockBarChartData = {
    data: [
      { 'agent-name': 'OS Query Errors', 'number-of-rules': 15 },
      { 'agent-name': 'Success', 'number-of-rules': 20 },
      { 'agent-name': 'No Logs', 'number-of-rules': 15 },
      // Add more data as needed
    ],
  };

  const barChartDetails = [
    ['Agent Name', 'Agents'],
    ...mockBarChartData.data.map(entry => [entry['agent-name'], entry['number-of-rules']])
  ];

  return (
    <div>
      <Chart
        width={'600px'}
        height={'450px'}
        chartType='BarChart'
        data={barChartDetails}
        options={{
          title: 'SIEM Alerts',
          backgroundColor: 'transparent',
          legend: {
            position: 'bottom',
            textStyle: {
              fontSize: 15,
              whiteSpace: 'nowrap',
            },
          },
          bar: {groupWidth:"38%"},
          colors:['rgb(64,143,236)'],
        }}
      />
    </div>
  );
};

export default SiemBarChart;
