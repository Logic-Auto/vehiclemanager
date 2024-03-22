import React from 'react';
import Chart, { Props } from 'react-apexcharts';
import { Container, Text } from "@nextui-org/react";
import { Flex } from '../../../../styles/flex';

export const MileageByVehicle = () => {
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
    name: 'Mileage',
    data: [{
        x: 'Ford F-Series',
        y: 2101
    }, {
        x: 'Chevrolet Silverado',
        y: 1453
    }, {
        x: 'Ram Truck',
        y: 1367
    }, {
        x: 'Toyota RAV4',
        y: 1129
    }, {
        x: 'Honda CR-V',
        y: 1021
    }]
}

]


const options: Props['options'] = {
    title: {
        text: "Mileage By Vehicle (miles)",
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
    colors: ['#6020A0'],
    plotOptions: {
        bar: {
            columnWidth: 60,
            horizontal: true,
            borderRadius: 5,
        },
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: true,
        y: {
            formatter: function (value) {
                return value.toLocaleString() + " miles";
            }
        }
    }
};