import React from 'react';
import Chart, { Props } from 'react-apexcharts';
import { Container, Text } from "@nextui-org/react";
import { Flex } from '../../../../styles/flex';

export const ServicesCostByVehicle = () => {
    return (
        <Container>
            <Chart type="bar" series={series} options={options} height={350} />
            <style>{`
          .apexcharts-menu-item {
            color: #333333; // font color of the drop down menu
          }
        `}</style>
        </Container>

    );
};

const series: Props['series'] = [{
    name: 'Oil Change',
    data: [44, 55, 41, 67, 22]
}, {
    name: 'Tire Rotation',
    data: [13, 23, 20, 8, 13]
}, {
    name: 'Brake Service',
    data: [11, 17, 15, 15, 21]
}, {
    name: 'Wheel Alignment',
    data: [21, 7, 25, 13, 22]
}, {
    name: 'others',
    data: [11, 7, 14, 13, 12]
}];

const options: Props['options'] = {
    title: {
        text: "Services Cost By Vehicle ($)",
        align: 'center',
        style: {
            fontSize: '17px'
        }
    },
    chart: {
        stacked: true,
        toolbar: {
            show: true
        },
        zoom: {
            enabled: false
        }
    },
    colors: ['#6020A0', '#7E3CAD', '#9C60D3', '#B68AF0', '#CDB5FF'],
    plotOptions: {
        bar: {
            columnWidth: 60,
            horizontal: false,
            borderRadius: 5,
        },
    },
    xaxis: {
        categories: ['Ford F-Series', 'Chevrolet Silverado', 'Ram Truck', 'Toyota RAV4', 'Honda CR-V'],
    },
    legend: {
        position: 'top'
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    }
};