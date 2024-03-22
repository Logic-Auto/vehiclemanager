import React, { useState } from "react";
import { Flex } from "../../styles/flex";
import { Text, Card, Avatar } from "@nextui-org/react";
import { AppointmentData, appointments } from "../../../CustomerData/dashboard/fake_appointments";

export const AppointmentsReminder = () => {
    return (
        <Card>
            {appointments.map((item) => (
                <div>
                    <Card.Body css={{ px: "$10", py: "$5" }}>
                        <Flex
                            direction={'row'}
                            justify={'between'}
                            align={'center'}
                        >
                            <Flex
                                css={{ gap: '$5' }}
                                align={'center'}
                            >
                                <Avatar
                                    size="lg"
                                    src={item.avatar}
                                    color="gradient"
                                    bordered
                                />

                                <div>
                                    <Text size={14}>{item.service}</Text>
                                    <Text size={12} color="#9E9E9E">
                                        {item.shop}
                                    </Text>
                                </div>
                            </Flex>

                            <div>
                                <Text size={14} color="secondary" weight={'bold'}>{item.date}</Text>
                                <Text size={12} color="#9E9E9E">{item.time}</Text>
                            </div>

                        </Flex>
                    </Card.Body>

                    <Card.Divider />
                </div>
            ))}
        </Card>
    )
}