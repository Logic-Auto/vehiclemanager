import React from "react";
import { useRouter } from 'next/router';
import { Flex } from "../../styles/flex";
import { Text, Card, Button, Avatar, Tooltip } from "@nextui-org/react";
import { VehicleData, vehicles } from "../../../CustomerData/dashboard/fake_vehicles";

import DateRangeIcon from '@mui/icons-material/DateRange';

export const Vehicles = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/CustomerDashboard/vehicles');
    };

    return (
        <Flex
            style={{ height: '100%' }}
            direction={'column'}
        >
            <Flex
                direction={'row'}
                justify={'between'}
                style={{ marginBottom: '3px' }}
            >
                <Text h2 css={{ fontWeight: 'bold' }}>
                    My Vehicles
                </Text>

                <div>
                    <Button light auto color="primary" onClick={handleClick}>
                        See All
                    </Button>
                </div>
            </Flex>

            <Flex
                css={{ 'gap': '$2' }}
                style={{ height: '100%' }}
                direction={'column'}
            >
                {vehicles.slice(0, 3).map((item, index) => (
                    <Card key={index} style={{ height: '100%', paddingLeft: '20px', paddingRight: '20px' }} >
                        <Flex
                            direction={'row'}
                            style={{ height: '100%' }}
                            justify={'between'}
                            align={'center'}
                        >
                            <Flex
                                direction={'row'}
                                style={{ height: '100%' }}
                                justify={'start'}
                                align={'center'}
                            >
                                <Avatar
                                    size="lg"
                                    src={item.avatar}
                                    bordered />

                                <Flex
                                    direction={'column'}
                                    justify={'center'}
                                    style={{ paddingLeft: '20px', width: '400px' }}
                                >
                                    <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                                        {item.license}
                                    </Text>

                                    <Flex
                                        direction={'row'}
                                        align={'center'}
                                    >
                                        <div style={{ flex: '1' }}>
                                            <Text size={14}><strong>make</strong>: {item.make}</Text>
                                        </div>

                                        <div style={{ flex: '1' }}>
                                            <Text size={14}><strong>model</strong>: {item.model}</Text>
                                        </div>
                                    </Flex>

                                    <Flex
                                        direction={'row'}
                                        align={'center'}
                                    >
                                        <div style={{ flex: '1' }}>
                                            <Text size={14}><strong>year</strong>: {item.year}</Text>
                                        </div>

                                        <div style={{ flex: '1' }}>
                                            <Text size={14}><strong>color</strong>: {item.color}</Text>
                                        </div>
                                    </Flex>

                                    <Text css={{ mt: '$5' }} size={13} weight="bold">
                                        Last Service Date: {item.lastServiceDate.toLocaleDateString()}
                                    </Text>
                                </Flex>
                            </Flex>

                            <Tooltip content={"Schedule Service"}>
                                <Button
                                    auto
                                    flat
                                    rounded
                                    icon={<DateRangeIcon />}
                                />
                            </Tooltip>
                        </Flex>
                    </Card>
                ))}
            </Flex>

        </Flex>
    );
}