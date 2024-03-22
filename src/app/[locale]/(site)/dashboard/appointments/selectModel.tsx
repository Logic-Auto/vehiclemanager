import React, { useState, useEffect } from 'react'

import { Text, Button, Dropdown, Spacer, Card } from '@nextui-org/react'

export const SelectModel = () => {
  const vehicleModel = ['Altima', 'Accord']
  const [selected, setSelected] = useState('Model')
  return (
    <Dropdown>
      <Dropdown.Button light bordered size='md' css={{ maxWidth: '100%' }}>
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
      <Dropdown.Menu aria-label='model' selectionMode='single' onSelectionChange={key => setSelected(key)}>
        {vehicleModel.map(model => (
          <Dropdown.Item key={model}>{model}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
