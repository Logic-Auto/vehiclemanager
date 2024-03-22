import React from 'react';
import { Flex } from '../../../styles/flex';
import { Text, Container } from "@nextui-org/react";

interface TotalCostCardProps {
    title: string;
    value: number;
    icon: React.ReactNode; // Change icon type to React.ReactNode
}

export const TotalCostCard: React.FC<TotalCostCardProps> = ({ title, value, icon }) => {
    return (
        <Container
            style={{ padding: '25px' }}
        >
            <Flex
                direction={'column'}
                justify={'between'}
                align={'start'}
            >
                {icon}
                <Text
                    h4
                    css={{ my: '$5' }}
                >
                    {title}
                </Text>

                <Text
                    h1
                    css={{ textGradient: "60deg, $blue600, $purple600 50%" }}
                >
                    {`${title === 'Estimated Savings' ? value + '%' : value}`}
                </Text>
            </Flex>
        </Container>
    )
};