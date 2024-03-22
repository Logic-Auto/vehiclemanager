import React from "react";
import { Flex } from "../../styles/flex";
import { Text, Card, Button, Avatar } from "@nextui-org/react";
import { MessageData, messages } from "../../../CustomerData/dashboard/fake_messages";

export const Message = () => {
    return (
        <Flex
            style={{ height: '100%' }}
            direction={'column'}
        >
            <Flex
                justify={'between'}
            >
                <Text h3 css={{ fontWeight: 'bold' }}>
                    Message Board
                </Text>

                <div>
                    <Button light auto color="secondary">
                        See All
                    </Button>
                </div>
            </Flex>

            <Flex
                css={{ 'gap': '$2' }}
                style={{ height: '100%' }}
                direction={'column'}
            >
                {messages.map((item, index) => (
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
                                    color="gradient"
                                    bordered />

                                <Flex
                                    direction={'column'}
                                    justify={'center'}
                                    style={{ padding: '20px' }}
                                >
                                    <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                                        {item.username}
                                    </Text>

                                    <Text size={15}>{item.content}</Text>

                                    <Text size={12} color="#9E9E9E" style={{ marginTop: '5px' }}>
                                        {item.timestamp}
                                    </Text>
                                </Flex>
                            </Flex>

                            <Button auto color="secondary" light>Reply</Button>
                        </Flex>
                    </Card>
                ))}
            </Flex>

        </Flex>
    );
}