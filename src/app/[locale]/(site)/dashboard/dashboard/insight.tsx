import React, { useState } from "react";
import { Flex } from "../../styles/flex";
import { Text, Card, Link, Dropdown } from "@nextui-org/react";

import dynamic from 'next/dynamic';

const Chart = dynamic(
    () => import('./monthlyCostChart').then((mod) => mod.MonthlyCost),
    { ssr: false }
);

export const Insight = () => {
    return (
        <Flex
            style={{ height: '400px' }}
            direction={'column'}
        >
            <Flex
                direction={'row'}
                justify={'between'}
                style={{ marginBottom: '6px' }}
            >
                <Link href="/CustomerDashboard/insights">
                    <Text h2 css={{ fontWeight: 'bold', margin: '0px' }}>
                        Insights
                    </Text>
                </Link>
            </Flex>

            <Card style={{ paddingTop: '30px', height: '100%' }}>
                <Chart />
            </Card>
        </Flex>
    );
}

const dataset = [
    {
        2022: 2000,
        2023: 2900,
        2024: 5000,
        quarter: 'Q1',
    },
    {
        2022: 3400,
        2023: 3800,
        2024: 4900,
        quarter: 'Q2',
    },
    {
        2022: 4500,
        2023: 3900,
        2024: 5500,
        quarter: 'Q3',
    },
    {
        2022: 3300,
        2023: 4400,
        2024: 6700,
        quarter: 'Q4',
    },
];