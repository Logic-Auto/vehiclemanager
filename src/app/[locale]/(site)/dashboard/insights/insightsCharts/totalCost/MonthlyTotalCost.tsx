import React from 'react';
import Chart, { Props } from 'react-apexcharts';
import { Container, Text } from "@nextui-org/react";
import { Flex } from '../../../../styles/flex';

export const MonthlyTotalCost = () => {
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
        name: 'Total Cost',
        data: [310, 400, 280, 350, 450, 580, 220, 390, 410, 320, 300, 480],
    },
];

const options: Props['options'] = {
    title: {
        text: "Total Cost By Month ($)",
        align: 'center',
        style: {
            fontSize: '17px'
        }
    },
    colors: ['#9353D3'],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
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