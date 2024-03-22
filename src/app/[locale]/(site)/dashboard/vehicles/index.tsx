import React, { useState } from 'react';
import { Flex } from '../../styles/flex';
import { Text, Switch, Button } from '@nextui-org/react';
import { CardView } from './CardView';
import { TableView } from './TableView';

export const Vehicles = () => {
    const [isTableView, setIsTableView] = useState(false); // State to track view mode

    return (
        <Flex
            css={{ paddingTop: '$10', paddingLeft: '$20', paddingRight: '$20' }}
            direction={'column'}
            justify={'center'}
        >
            <Flex
                direction={'row'}
                justify={'between'}
                align={'center'}
            >
                <Flex css={{ gap: '$15' }} align={'center'}>
                    <Text h2>My Vehicles</Text>

                    <Flex css={{ gap: '$5' }} align={'center'}>
                        <Switch
                            checked={isTableView}
                            onChange={() => setIsTableView(!isTableView)}
                        />
                        <Text>table view</Text>
                    </Flex>
                </Flex>

                <Button color="gradient" auto css={{ fontWeight: '$bold' }}>
                    + Vehicle
                </Button>
            </Flex>

            {isTableView ? (
                <TableView />
            ) : (
                <CardView />
            )}
        </Flex>
    );
};
