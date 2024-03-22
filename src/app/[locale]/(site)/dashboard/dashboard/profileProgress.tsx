import React from "react";
import { Flex } from "../../styles/flex";
import { Text, Button, Progress } from "@nextui-org/react";

export const ProfileProgress = () => {
    return (
        <Flex
            style={{ height: '100%' }}
            direction={'column'}
            justify={'around'}
        >
            <Flex
                direction={'row'}
                justify={'between'}
                align={'center'}
            >
                <Text h5 style={{ margin: '0px' }}>Your profile is 77% complete</Text>
                <Button auto light color={'primary'}>Edit</Button>
            </Flex>

            <Progress value={77} color="success" status="success" />
        </Flex>
    );
}