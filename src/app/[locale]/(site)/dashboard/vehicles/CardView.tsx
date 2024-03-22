import React from "react";
import { useRouter } from 'next/router';
import { Flex } from "../../styles/flex";
import { Text, Card, Button, Avatar, Tooltip, Collapse, Table } from "@nextui-org/react";
import { VehicleData, vehicles } from "../../../CustomerData/dashboard/fake_vehicles";

import DateRangeIcon from '@mui/icons-material/DateRange';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const CardView = () => {
    return (
        <Flex
            style={{ height: '100%' }}
            direction={'column'}
        >
            <Collapse.Group splitted>
                {vehicles.map((item, index) => (
                    <Collapse
                        title={''}
                        contentLeft={
                            <div>
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
                                            style={{ paddingLeft: '20px', width: '600px' }}
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

                                                <div style={{ flex: '1' }}>
                                                    <Text size={14}><strong>VIN</strong>: {item.vin}</Text>
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

                                                <div style={{ flex: '1' }}>
                                                    <Text size={14}><strong>mileage</strong>: {item.mileage.toLocaleString()} miles</Text>
                                                </div>
                                            </Flex>

                                            <Text css={{ mt: '$5' }} size={13} weight="bold">
                                                Last Service Date: {item.lastServiceDate.toLocaleDateString()}
                                            </Text>
                                        </Flex>
                                    </Flex>

                                    <Flex
                                        direction={'row'}
                                        justify={'end'}
                                        align={'center'}
                                        style={{ paddingLeft: '100px' }}
                                        css={{ gap: '$5' }}
                                    >
                                        <Tooltip content={"Schedule Service"}>
                                            <Button
                                                auto
                                                flat
                                                rounded
                                                icon={<DateRangeIcon />}
                                                color={'default'}
                                            />
                                        </Tooltip>

                                        <Tooltip content={"Edit"}>
                                            <Button
                                                auto
                                                flat
                                                rounded
                                                icon={<EditIcon />}
                                                color={'warning'}
                                            />
                                        </Tooltip>

                                        <Tooltip content={"Delete"}>
                                            <Button
                                                auto
                                                flat
                                                rounded
                                                icon={<DeleteIcon />}
                                                color={'error'}
                                            />
                                        </Tooltip>
                                    </Flex>
                                </Flex>
                            </div>
                        }
                    >
                        <Flex
                            direction={'row'}
                            justify={'between'}
                            css={{ mx: '$10' }}
                        >
                            <div style={{ flex: '1' }}>
                                <Text h4 css={{ mb: '$5' }}>Vehicle Details</Text>

                                <Flex wrap={'wrap'}>
                                    <Text size={14} css={{ mr: '$10' }}>Trim: {item.trim}</Text>
                                    <Text size={14} css={{ mr: '$10' }}>Drive Type: {item.driveType}</Text>
                                    <Text size={14} css={{ mr: '$10' }}>Fuel Type: {item.fuelType}</Text>
                                    <Text size={14} css={{ mr: '$10' }}>Transmission Style: {item.transmissionStyle}</Text>
                                    <Text size={14} css={{ mr: '$10' }}>Body Class: {item.bodyClass}</Text>
                                </Flex>
                            </div>

                            <div style={{ flex: '1' }}>
                                <Text h4 css={{ mb: '$5' }}>Service History</Text>

                                <Table
                                    aria-label="service history"
                                    css={{
                                        height: "auto",
                                        minWidth: "100%",
                                    }}
                                    // lined
                                    headerLined
                                    shadow={false}
                                    sticked
                                    compact
                                >
                                    <Table.Header>
                                        <Table.Column>Date</Table.Column>
                                        <Table.Column>Service</Table.Column>
                                        <Table.Column>Auto Shop</Table.Column>
                                    </Table.Header>

                                    <Table.Body key={index} items={item.serviceHistory} css={{ fontSize: '$sm' }}>
                                        {(record) => (
                                            <Table.Row key={record.date}>
                                                <Table.Cell>{record.date.toLocaleDateString()}</Table.Cell>
                                                <Table.Cell>{record.type}</Table.Cell>
                                                <Table.Cell>{record.shop}</Table.Cell>
                                            </Table.Row>
                                        )}
                                    </Table.Body>
                                </Table>
                            </div>
                        </Flex>
                    </Collapse>
                ))}
            </Collapse.Group>

            {/* {vehicles.map((item, index) => (
                <Card key={index} style={{ padding: '20px' }} >
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
            ))} */}
        </Flex>

    );
}