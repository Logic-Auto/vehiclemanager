import React from 'react';
import { Flex } from '../../styles/flex';
import { Text, Card, Tooltip, Button } from "@nextui-org/react";

interface OverviewCardProps {
    title: string;
    value: number;
    icon?: React.ReactNode;
    hoverMsg?: string;
    bgColor?: string;
    textColor?: string;
}

export const OverviewCard: React.FC<OverviewCardProps> = ({ title, value, icon, hoverMsg, bgColor, textColor }) => {
    const backgroundStyle = bgColor ? { background: bgColor } : { background: 'white' };

    return (
        <Card
            style={{ padding: '25px', paddingRight: '15px', paddingTop: '15px', paddingBottom: '15px', ...backgroundStyle }}
            variant="bordered"
        >
            <Flex
                style={{ height: '100%' }}
                direction={'row'}
                justify={'between'}
                align={'start'}
            >
                <Flex
                    direction={'column'}
                    justify={'center'}
                >
                    <Text h4 css={{ color: textColor }}>{title}</Text>
                    <Text
                        h1
                        css={{
                            textGradient: textColor ? undefined : "60deg, $blue600, $purple600 30%",
                            color: textColor ? textColor : undefined,
                        }}
                    >
                        {value}
                    </Text>
                </Flex>

                {hoverMsg && (
                    <div>
                        <Tooltip content={hoverMsg}>
                            {icon}
                        </Tooltip>
                    </div>
                )}
            </Flex>
        </Card>
    )
};