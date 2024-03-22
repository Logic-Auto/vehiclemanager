import React, { useState, useEffect } from 'react'

import { Text, Button, Dropdown, Spacer, Card } from '@nextui-org/react'

export const SelectVehicle = () => {
  const vehicleType = ['Nissan Altima 2019', 'Toyota Prius 2018']
  const [selected, setSelected] = useState('Select')

  return (
    <Dropdown>
      <Dropdown.Button light bordered>
        {selected}
      </Dropdown.Button>
      <Dropdown.Menu aria-label='vehicle' selectionMode='single' onSelectionChange={key => setSelected(key)}>
        {vehicleType.map(vehicle => (
          <Dropdown.Item key={vehicle} css={{ fontSize: 'smaller' }}>
            {vehicle}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
