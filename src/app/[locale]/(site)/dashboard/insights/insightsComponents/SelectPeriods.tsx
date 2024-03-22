import React from "react";
import { Flex } from "../../../styles/flex";
import { Text, Input } from "@nextui-org/react";

export const SelectPeriods = () => {
    return (
        <Flex
            direction={'row'}
            justify={'start'}
            align={'center'}
        >
            <Text h6 css={{ mb: '$0', mr: '$5', color: '$neutral' }}>
                Period:
            </Text>

            <Flex
                direction={'row'}
                justify={'end'}
                align={'center'}
                css={{ gap: '$5' }}
            >
                <Input
                    type="date"
                    labelLeft="start"
                    size="sm"
                />
                <Input
                    type="date"
                    labelLeft="end"
                    size="sm"
                />
            </Flex>

        </Flex>
    )
}