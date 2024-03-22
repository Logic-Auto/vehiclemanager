import React, { useState } from 'react'
import { Flex } from 'src/components/styles/flex'
import { Text, Dropdown } from '@nextui-org/react'

export const SelectShop = () => {
  const [selected, setSelected] = useState<
    'all' | '180 Franklin Street' | '123 Main Street' | '789 Oak Boulevard' | '101 Maple Drive' | '246 Pine Lane'
  >('all')

  const handleLocationChange = async (
    shop: 'all' | '180 Franklin Street' | '123 Main Street' | '789 Oak Boulevard' | '101 Maple Drive' | '246 Pine Lane'
  ) => {
    setSelected(shop)
  }

  return (
    <Flex direction={'row'} justify={'start'} align={'center'}>
      <Text h6 css={{ mb: '$0', mr: '$5', color: '$neutral' }}>
        Shop:
      </Text>

      <Dropdown>
        <Dropdown.Button light css={{ padding: 0 }}>
          {selected}
        </Dropdown.Button>
        <Dropdown.Menu
          aria-label='shops'
          disallowEmptySelection
          selectionMode='single'
          onSelectionChange={key =>
            handleLocationChange(
              key as
                | 'all'
                | '180 Franklin Street'
                | '123 Main Street'
                | '789 Oak Boulevard'
                | '101 Maple Drive'
                | '246 Pine Lane'
            )
          }
        >
          <Dropdown.Item key='all' css={{ fontSize: 'smaller' }}>
            all
          </Dropdown.Item>
          <Dropdown.Item key='180 Franklin Street' css={{ fontSize: 'smaller' }}>
            180 Franklin Street
          </Dropdown.Item>
          <Dropdown.Item key='123 Main Street' css={{ fontSize: 'smaller' }}>
            123 Main Street
          </Dropdown.Item>
          <Dropdown.Item key='189 Oak Boulevard' css={{ fontSize: 'smaller' }}>
            789 Oak Boulevard
          </Dropdown.Item>
          <Dropdown.Item key='101 Maple Drive' css={{ fontSize: 'smaller' }}>
            101 Maple Drive
          </Dropdown.Item>
          <Dropdown.Item key='246 Pine Lane' css={{ fontSize: 'smaller' }}>
            246 Pine Lane
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Flex>
  )
}
