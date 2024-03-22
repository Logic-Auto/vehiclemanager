import React from 'react';
import Chart, { Props } from 'react-apexcharts';
import { Container, Card, Text } from "@nextui-org/react";
import { Flex } from '../../../../styles/flex';

export const QuarterlyTotalCost = () => {
    return (
        <Container>
            <Chart type="donut" series={series} options={options} height={250} />
        </Container>

    );
};

const series: Props['series'] = [990, 1380, 1020, 1170];

const options: Props['options'] = {
    title: {
        text: "Total Cost By Quarter ($)",
        align: 'center',
        style: {
            fontSize: '17px'
        }
    },
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    colors: ['#6020A0', '#7E3CAD', '#9C60D3', '#B68AF0'],
    plotOptions: {
        pie: {
            donut: {
                size: '60%',
                labels: {
                    show: true,
                    value: {
                        fontSize: '14px',
                        offsetY: 0,
                        formatter: function (val) {
                            const numericVal = parseFloat(val); // Convert val to a number
                            const formattedVal = numericVal.toLocaleString(); // Format the number with thousands separators
                            const percentage = ((numericVal / series.reduce((a, b) => a + b, 0)) * 100).toFixed(0); // Calculate the percentage
                            return `${formattedVal} (${percentage}%)`;
                        }
                    }
                }
            },
        }
    },
    legend: {
        show: true,
        position: 'top'
    },
    tooltip: {
        enabled: false
    },
    stroke: {
        width: 1
    },
    dataLabels: {
        enabled: false
    }
};