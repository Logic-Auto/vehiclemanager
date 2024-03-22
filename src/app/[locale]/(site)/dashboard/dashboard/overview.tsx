import React, { useState } from "react";
import { Flex } from "../../styles/flex";
import { Text, Card, Button, Input } from "@nextui-org/react";
import { Dropdown } from "@nextui-org/react";
import { OverviewCard } from "./overviewCard";

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const Overview = () => {
    return (
        <Flex
            style={{ height: '100%' }}
            direction={'column'}
        >
            <Flex
                direction={'row'}
                justify={'between'}
                style={{ marginBottom: '6px' }}
            >
                <Text h2 css={{ fontWeight: 'bold', margin: '0px' }}>
                    Overview
                </Text>
            </Flex>

            <Card style={{ height: '100%', padding: '30px' }}>
                <Flex
                    css={{ gap: '$5' }}
                    direction={'column'}
                >
                    <Flex
                        css={{ 'gap': '$5' }}
                        direction={'row'}
                    >
                        <OverviewCard title="Vehicles" value={5} icon={<AddCircleOutlineIcon sx={{ fontSize: '30px', color: 'white' }} />} hoverMsg="Add Vehicle" bgColor='linear-gradient(90deg, #4CAF50, #1E5020)' textColor="white" />

                        <OverviewCard title="Scheduled Services" value={3} icon={<AddCircleOutlineIcon sx={{ fontSize: '30px', color: 'white' }} />} hoverMsg="Schedule Service" bgColor='linear-gradient(90deg, #8A2BE2, #4B0082)' textColor="white" />
                    </Flex>

                    <Flex
                        css={{ 'gap': '$5' }}
                        direction={'row'}
                    >
                        <OverviewCard title="Documents" value={15} />

                        <OverviewCard title="Completed Services" value={7} />
                    </Flex>
                </Flex>
            </Card>
        </Flex>
    );
}