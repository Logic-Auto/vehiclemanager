import React, { useState, useEffect } from 'react'

import { Text, Button, Dropdown, Spacer, Card } from '@nextui-org/react'

export const SelectYear = () => {
  const vehicleYear = ['2018', '2019', '2020', '2021']
  const [selected, setSelected] = useState('Year')
  return (
    <Dropdown>
      <Dropdown.Button light bordered size='md' css={{ width: '100%' }}>
        <p
          style={{
            width: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: 'block',
            whiteSpace: 'nowrap'
          }}
        >
          {selected}
        </p>
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label='model'
        selectionMode='single'
        onSelectionChange={key => setSelected(key)}
        css={{ width: '100px' }}
      >
        {vehicleYear.map(year => (
          <Dropdown.Item key={year}>{year}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
