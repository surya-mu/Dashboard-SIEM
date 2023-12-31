import React, {} from 'react';
import Chart from 'react-google-charts';

const SiemDonutChart = () => {
  // Mock data
  const mockPieChartData = {
    rule_description: ['High', 'Critical', 'Medium','Low'],
    bg_count: [30, 50, 10,10],
    Color_codes: ['rgb(64,143,236)', '#ffcc00', '#ff0000','rgb(91,175,95)'],
    status: 'Success',
  };

  function capitalizeEveryWord(string) {
    return string.replace(/\b\w/g, (word) => word.toUpperCase());
  }

  const chartData = mockPieChartData.Color_codes
    ? [['Color', 'Count']].concat(
        mockPieChartData.rule_description.map((color, index) => [
          capitalizeEveryWord(color),
          mockPieChartData.bg_count[index],
        ])
      )
    : [];

  return (
    <div>
      {mockPieChartData.status === 'Success' && mockPieChartData.Color_codes ? (
        <Chart
          // title="SIEM Alert Levels"
          width={'550px'}
          height={'400px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={{
            title: 'SIEM Alert Levels',
            padding: '0px',
            backgroundColor: 'transparent',
            legend: {
              position: 'bottom',
              textStyle: {
                fontSize: 16,
                whiteSpace: 'nowrap',
              },
            },
            pieHole: 0.5, 
            colors: ['rgb(91,175,95)','rgb(223,55,116)','rgb(64,143,236)','black']
          }}
          rootProps={{ 'data-testid': '1' }}
          chartArea={{ width: '50%', left: '40%' }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SiemDonutChart;
