import React, { useState, useEffect } from 'react'

import { Text, Button, Dropdown, Spacer, Card } from '@nextui-org/react'

export const SelectMake = () => {
  const vehicleMake = [
    'Alfa Romeo',
    'Audi',
    'BMW',
    'Chevrolet',
    'Chrysler',
    'Dodge',
    'Ford',
    'Genesis',
    'Honda',
    'Hyundai',
    'Infiniti',
    'Jeep',
    'Kia',
    'Lexus',
    'MINI',
    'Mazda',
    'Mercedes-Benz',
    'Nissan',
    'Polestar',
    'Porsche',
    'RAM',
    'Rivian',
    'Subaru',
    'Tesla',
    'Toyota',
    'Volkswagen',
    'Volvo'
  ]
  const [selected, setSelected] = useState('Make')
  return (
    <Dropdown>
      <Dropdown.Button light bordered size='md' css={{ width: '100%' }}>
        <p
          style={{
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: 'block',
            whiteSpace: 'nowrap'
          }}
        >
          {selected}
        </p>
      </Dropdown.Button>
      <Dropdown.Menu aria-label='make' selectionMode='single' onSelectionChange={key => setSelected(key)}>
        {vehicleMake.map(make => (
          <Dropdown.Item key={make}>{make}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
