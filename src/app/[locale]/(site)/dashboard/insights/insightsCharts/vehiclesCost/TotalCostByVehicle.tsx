import React from 'react';
import Chart, { Props } from 'react-apexcharts';
import { Container, Card, Text } from "@nextui-org/react";
import { Flex } from '../../../../styles/flex';

export const TotalCostByVehicle = () => {
    return (
        <Container>
            <Chart type="pie" series={series} options={options} height={300} />
            <style>{`
          .apexcharts-tooltip {
            padding: 10px;
          }
        `}</style>
        </Container>

    );
};

const series: Props['series'] = [1778, 912, 684, 638, 547];

const options: Props['options'] = {
    title: {
        text: "Total Cost By Vehicle ($)",
        align: 'center',
        style: {
            fontSize: '17px'
        }
    },
    labels: ['Ford F-Series', 'Chevrolet Silverado', 'Ram Truck', 'Toyota RAV4', 'Honda CR-V'],
    colors: ['#6020A0', '#7E3CAD', '#9C60D3', '#B68AF0', '#CDB5FF'],
    legend: {
        show: true,
        position: 'top'
    },
    tooltip: {
        enabled: true,
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            const category = w.globals.labels[seriesIndex];
            const value = series[seriesIndex];
            const formattedValue = value.toLocaleString(); // Format the number with thousands separators
            const total = series.reduce((a: number, b: number) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(0); // Calculate the percentage
            return `<div><span>${category}: </span><span>${formattedValue} (${percentage}%)</span></div>`; // Customize tooltip content
        },
        style: {
            fontSize: '14px',
        },
        theme: 'light'
    },
    stroke: {
        width: 1
    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        pie: {
            offsetY: 20
        }
    }
};