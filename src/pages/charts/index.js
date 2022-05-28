import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { barData } from '../../data/barData.js';

function Charts() {
  return (
    <ResponsiveBar
      theme={{ fontSize: 15 }}
      data={barData}
      // keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
      keys={['hot dog']}
      indexBy="country"
      // margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      // colors={{ scheme: 'nivo' }}
      colors={({ id, data }) => String(data[`${id}Color`])}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'fries',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'sandwich',
          },
          id: 'lines',
        },
      ]}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        // format: (value) =>
        //   Number(value).toLocaleString('', {
        //     minimumFractionDigits: 2,
        //   }),
        // tickValues: 20,
        // tickValues: [0, 20, 40, 60, 80],
        tickSize: 5,
        tickPadding: 15,
        tickRotation: 0,
        legend: 'food',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legendLabel={(datum) => `${datum.id} (${datum.value})`}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: true,
          translateX: 50,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 30,
          itemHeight: 20,
          // itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          toggleSerie: true,

          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart"
      barAriaLabel={function (e) {
        return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue;
      }}
    />
  );
}

export default Charts;
