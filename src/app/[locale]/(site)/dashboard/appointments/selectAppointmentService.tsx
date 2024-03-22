import React, { useState } from 'react'
import { Flex } from 'src/components/styles/flex'
import { Text, Dropdown, Button } from '@nextui-org/react'

export const SelectAppointmentService = () => {
  const [selected, setSelected] = useState<
    'all' | 'Oil Change' | 'Tire Rotation' | 'Brake Inspection' | 'Wheel Alignment'
  >('all')

  const handleLocationChange = async (
    service: 'all' | 'Oil Change' | 'Tire Rotation' | 'Brake Inspection' | 'Wheel Alignment'
  ) => {
    setSelected(service)
  }

  return (
    <Dropdown>
      <Dropdown.Button
        light
        bordered
        style={{
          width: '100%'
        }}
      >
        <p
          style={{
            width: '100%'
          }}
        >
          {selected}
        </p>
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label='services'
        disallowEmptySelection
        selectionMode='single'
        onSelectionChange={key =>
          handleLocationChange(key as 'all' | 'Oil Change' | 'Tire Rotation' | 'Brake Inspection' | 'Wheel Alignment')
        }
      >
        <Dropdown.Item key='all' css={{ fontSize: 'smaller' }}>
          all
        </Dropdown.Item>
        <Dropdown.Item key='Oil Change' css={{ fontSize: 'smaller' }}>
          Oil Change
        </Dropdown.Item>
        <Dropdown.Item key='Tire Rotation' css={{ fontSize: 'smaller' }}>
          Tire Rotation
        </Dropdown.Item>
        <Dropdown.Item key='Brake Inspection' css={{ fontSize: 'smaller' }}>
          Brake Inspection
        </Dropdown.Item>
        <Dropdown.Item key='Wheel Alignment' css={{ fontSize: 'smaller' }}>
          Wheel Alignment
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
