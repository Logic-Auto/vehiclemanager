import React from 'react';
import { Flex } from '@radix-ui/themes';
import { Overview } from './overview';
// import { Vehicles } from './vehicles';
import { ProfileProgress } from './profileProgress';
import { Reminder } from './reminder';
import { Insight } from './insight';
import { Message } from './message';

export const Dashboard = () => {
    return (
        <Flex
            css={{ 'padding': '$5', 'gap': '$10' }}
            direction={'column'}
            justify={'center'}
        >
            <Flex
                css={{ 'gap': '$10' }}
            >
                <div style={{ flex: '1' }}>
                    <Overview />
                </div>

                <div style={{ flex: '1' }}>
                    <Flex css={{ 'gap': '$5' }} style={{ height: '100%' }} direction={'column'}>
                        <div style={{ flex: '1' }}>
                            <ProfileProgress />
                        </div>

                        <div style={{ flex: '3' }}>
                            <Reminder />
                        </div>
                    </Flex>
                </div>
            </Flex>

            <Flex css={{ 'gap': '$10' }}
            >
                <div style={{ flex: '1' }}>
                    <Message />
                </div>

                <div style={{ flex: '1' }}>
                    <Insight />
                </div>
            </Flex>
        </Flex>
    );
};
