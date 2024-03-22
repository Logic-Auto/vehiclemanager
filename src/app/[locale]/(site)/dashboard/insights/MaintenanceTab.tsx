import React from 'react';
import { Card, Divider, Spacer } from "@nextui-org/react";
import { Flex } from '../../styles/flex';
import { SelectPeriods } from './insightsComponents/SelectPeriods';

import dynamic from 'next/dynamic';

const MileageByVehicle = dynamic(
    () => import('./insightsCharts/maintenance/MileageByVehicle').then((mod) => mod.MileageByVehicle),
    { ssr: false }
);

const GasCostByVehicle = dynamic(
    () => import('./insightsCharts/maintenance/GasCostByVehicle').then((mod) => mod.GasCostByVehicle),
    { ssr: false }
);

export const MaintenanceTab = () => {
    return (
        <Card>
            <Flex
                css={{ padding: '$10', paddingBottom: '$0', gap: '$15' }}
                direction={'row'}
                justify={'between'}
                align={'center'}
            >
                <Flex
                    style={{ flex: 1 }}
                >
                    <MileageByVehicle />
                </Flex>

                <div style={{ width: '1px', height: '300px', backgroundColor: '#ccc' }}></div>

                <Flex
                    style={{ flex: 1 }}
                    css={{ gap: '$10' }}
                    direction={'column'}
                    justify={'start'}
                >
                    <SelectPeriods />
                    <GasCostByVehicle />
                </Flex>
            </Flex>

        </Card>
    )
}