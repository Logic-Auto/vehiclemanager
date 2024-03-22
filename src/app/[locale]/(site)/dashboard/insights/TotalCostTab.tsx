import React from 'react';
import { Card, Text } from "@nextui-org/react";
import { Flex } from '../../styles/flex';
import { SelectPeriods } from './insightsComponents/SelectPeriods';
import { TotalCostCard } from './insightsComponents/TotalCostCard';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SavingsIcon from '@mui/icons-material/Savings';

import dynamic from 'next/dynamic';

const MonthlyTotalCost = dynamic(
    () => import('./insightsCharts/totalCost/MonthlyTotalCost').then((mod) => mod.MonthlyTotalCost),
    { ssr: false }
);

const QuarterlyTotalCost = dynamic(
    () => import('./insightsCharts/totalCost/QuarterlyTotalCost').then((mod) => mod.QuarterlyTotalCost),
    { ssr: false }
);

const TotalCostByService = dynamic(
    () => import('./insightsCharts/totalCost/TotalCostByService').then((mod) => mod.TotalCostByService),
    { ssr: false }
);

export const TotalCostTab = () => {
    return (
        <Card>
            <Flex
                css={{ padding: '$10', paddingBottom: '$0', gap: '$10' }}
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
                        style={{ flex: 2 }}
                        css={{ gap: '$15' }}
                        direction={'column'}
                    >
                        <Flex
                            css={{ gap: '$5' }}
                            direction={'row'}
                            align={'center'}
                        >
                            <div style={{ flex: 1 }}>
                                <TotalCostCard title="Total Cost ($)" value={7271.53} icon={<AttachMoneyIcon sx={{ fontSize: '30px' }} />} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <TotalCostCard title="Estimated Savings" value={36.2} icon={<SavingsIcon sx={{ fontSize: '30px' }} />} />
                            </div>
                        </Flex>

                        <MonthlyTotalCost />
                    </Flex>

                    <Flex
                        style={{ flex: 1 }}
                        direction={'column'}
                    >
                        <QuarterlyTotalCost />
                        <TotalCostByService />
                    </Flex>
                </Flex>
            </Flex>

        </Card>
    )
}