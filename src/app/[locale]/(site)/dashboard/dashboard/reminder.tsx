import React, { useState, useEffect } from "react";
import { Flex } from "../../styles/flex";
import { Text, Card, Avatar, Dropdown } from "@nextui-org/react";
import { AppointmentsReminder } from "./reminderAppointments";

export const Reminder = () => {
    const [selected, setSelected] = useState('appointments');


    const handleReminderChange = async (reminder: string) => {
        setSelected(reminder);
    };

    return (
        <Flex
            style={{ height: '250px' }}
            direction={'column'}
        >
            <Flex
                justify={'between'}
            >
                <Text h2 css={{ fontWeight: 'bold' }}>
                    Reminder
                </Text>

                <div>
                    <Dropdown>
                        <Dropdown.Button light>{selected}</Dropdown.Button>
                        <Dropdown.Menu
                            aria-label="reminder"
                            disallowEmptySelection
                            selectionMode="single"
                            onSelectionChange={(key) => handleReminderChange(key as string)}
                        >
                            <Dropdown.Item key="appointments">appointments</Dropdown.Item>
                            <Dropdown.Item key="maintenance">maintenance</Dropdown.Item>
                            <Dropdown.Item key="announcement">announcement</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Flex>

            <AppointmentsReminder />
        </Flex>
    );
}