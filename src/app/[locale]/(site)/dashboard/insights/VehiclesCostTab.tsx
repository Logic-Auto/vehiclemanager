import React from 'react';
import { Flex } from '../../styles/flex';
import { Card } from "@nextui-org/react";
import { SelectPeriods } from './insightsComponents/SelectPeriods';

import dynamic from 'next/dynamic';

const TotalCostByVehicle = dynamic(
    () => import('./insightsCharts/vehiclesCost/TotalCostByVehicle').then((mod) => mod.TotalCostByVehicle),
    { ssr: false }
);

const ServicesCostByVehicle = dynamic(
    () => import('./insightsCharts/vehiclesCost/ServicesCostByVehicle').then((mod) => mod.ServicesCostByVehicle),
    { ssr: false }
);

export const VehiclesCostTab = () => {
    return (
        <Card>
            <Flex
                css={{ padding: '$10', paddingBottom: '$0', gap: '$15' }}
                direction={'column'}
                justify={'start'}
            >
                <Flex
                    direction={'row'}
                    justify={'start'}
                    align={'center'}
                >
                    <SelectPeriods />
                </Flex>

                <Flex
                    direction={'row'}
                    justify={'between'}
                    align={'start'}
                >
                    <Flex
                        style={{ flex: 1 }}
                    >
                        <TotalCostByVehicle />
                    </Flex>

                    <Flex
                        style={{ flex: 2 }}
                    >
                        <ServicesCostByVehicle />
                    </Flex>
                </Flex>
            </Flex>

        </Card>
    )
}