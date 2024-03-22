import React, { useState } from 'react';
import { Flex } from '../../styles/flex';
import { Text, Button } from "@nextui-org/react";

import { TotalCostTab } from './TotalCostTab';
import { VehiclesCostTab } from './VehiclesCostTab';
import { MaintenanceTab } from './MaintenanceTab';

interface TabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, active, onClick }) => {
  return (
    <Button
      auto
      light
      ghost={active}
      onClick={onClick}
      color="success"
      style={{ fontWeight: 'bold' }}
    >
      {label}
    </Button>
  );
};

export const InsightsPage = () => {
  const [selectedTab, setSelectedTab] = useState('total cost');

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'total cost':
        return <TotalCostTab />;
      case 'vehicles cost':
        return <VehiclesCostTab />;
      case 'maintenance':
        return <MaintenanceTab />;
      default:
        return null;
    }
  };

  return (
    <Flex
      css={{ 'padding': '$5', 'gap': '$5' }}
      direction={'column'}
      justify={'start'}
    >
      <Flex
        direction={'row'}
        justify={'between'}
        align={'start'}
      >
        <Text h2 css={{ fontWeight: 'bold', marginBottom: '0px' }}>
          Insights
        </Text>

        <Flex
          css={{ gap: '$5' }}
        >
          <TabButton
            label="Total Cost"
            active={selectedTab === 'total cost'}
            onClick={() => setSelectedTab('total cost')}
          />
          <TabButton
            label="Vehicles Cost"
            active={selectedTab === 'vehicles cost'}
            onClick={() => setSelectedTab('vehicles cost')}
          />
          <TabButton
            label="Maintenance"
            active={selectedTab === 'maintenance'}
            onClick={() => setSelectedTab('maintenance')}
          />
        </Flex>
      </Flex>

      {renderTabContent()}
    </Flex>

  );
}