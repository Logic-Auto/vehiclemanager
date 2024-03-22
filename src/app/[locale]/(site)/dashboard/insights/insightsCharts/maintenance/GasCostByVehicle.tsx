import React from 'react';
import Chart, { Props } from 'react-apexcharts';
import { Container, Text } from "@nextui-org/react";
import { Flex } from '../../../../styles/flex';

export const GasCostByVehicle = () => {
    return (
        <Container>
            <Chart type="area" series={series} options={options} height={330} />
            <style>{`
          .apexcharts-menu-item {
            color: #333333; // font color of the drop down menu
          }
        `}</style>
        </Container>

    );
};

const series: Props['series'] = [
    {
        name: 'Gas Cost',
        data: [310, 400, 280, 350, 450],
    },
];

const options: Props['options'] = {
    title: {
        text: "Gas Cost By Vehicle ($)",
        align: 'center',
        style: {
            fontSize: '17px'
        }
    },
    colors: ['#9353D3'],
    xaxis: {
        categories: ['Ford F-Series', 'Chevrolet Silverado', 'Ram Truck', 'Toyota RAV4', 'Honda CR-V'],
        labels: {
            style: {
                colors: Array(12).fill('#90A4AE')
            }
        },
        axisBorder: {
            show: true
        },
        tooltip: {
            enabled: false
        }
    },
    yaxis: {
        show: true,
        min: 0,
        max: 700,
        labels: {
            style: {
                colors: '#90A4AE'
            }
        },
    },
    dataLabels: {
        enabled: false,
    },
    markers: {
        size: 5,
    },
    legend: {
        show: false
    },
    tooltip: {
        enabled: true
    },
    grid: {
        show: false
    },
    stroke: {
        width: 2.5
    },
};