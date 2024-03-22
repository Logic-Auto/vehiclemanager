import React, { useState } from 'react'
import { Flex } from 'src/components/styles/flex'
import { Text, Dropdown } from '@nextui-org/react'

export const SelectLocation = () => {
  const [selected, setSelected] = useState<
    | 'all'
    | 'Boston, MA'
    | 'New York City, NY'
    | 'Los Angeles, CA'
    | 'Chicago, IL'
    | 'Houston, TX'
    | 'Phoenix, AZ'
    | 'Philadelphia, PA'
    | 'San Antonio, TX'
    | 'San Diego, CA'
  >('all')

  const handleLocationChange = async (
    location:
      | 'all'
      | 'Boston, MA'
      | 'New York City, NY'
      | 'Los Angeles, CA'
      | 'Chicago, IL'
      | 'Houston, TX'
      | 'Phoenix, AZ'
      | 'Philadelphia, PA'
      | 'San Antonio, TX'
      | 'San Diego, CA'
  ) => {
    setSelected(location)
  }

  return (
    <Flex direction={'row'} justify={'start'} align={'center'}>
      <Text h6 css={{ mb: '$0', mr: '$5', color: '$neutral' }}>
        Location:
      </Text>

      <Dropdown>
        <Dropdown.Button light css={{ padding: 0 }}>
          {selected}
        </Dropdown.Button>
        <Dropdown.Menu
          aria-label='locations'
          disallowEmptySelection
          selectionMode='single'
          onSelectionChange={key =>
            handleLocationChange(
              key as
                | 'all'
                | 'Boston, MA'
                | 'New York City, NY'
                | 'Los Angeles, CA'
                | 'Chicago, IL'
                | 'Houston, TX'
                | 'Phoenix, AZ'
                | 'Philadelphia, PA'
                | 'San Antonio, TX'
                | 'San Diego, CA'
            )
          }
        >
          <Dropdown.Item key='all' css={{ fontSize: 'smaller' }}>
            all
          </Dropdown.Item>
          <Dropdown.Item key='Boston, MA' css={{ fontSize: 'smaller' }}>
            Boston, MA
          </Dropdown.Item>
          <Dropdown.Item key='New York City, NY' css={{ fontSize: 'smaller' }}>
            New York City, NY
          </Dropdown.Item>
          <Dropdown.Item key='Los Angeles, CA' css={{ fontSize: 'smaller' }}>
            Los Angeles, CA
          </Dropdown.Item>
          <Dropdown.Item key='Chicago, IL' css={{ fontSize: 'smaller' }}>
            Chicago, IL
          </Dropdown.Item>
          <Dropdown.Item key='Houston, TX' css={{ fontSize: 'smaller' }}>
            Houston, TX
          </Dropdown.Item>
          <Dropdown.Item key='Phoenix, AZ' css={{ fontSize: 'smaller' }}>
            Phoenix, AZ
          </Dropdown.Item>
          <Dropdown.Item key='Philadelphia, PA' css={{ fontSize: 'smaller' }}>
            Philadelphia, PA
          </Dropdown.Item>
          <Dropdown.Item key='San Antonio, TX' css={{ fontSize: 'smaller' }}>
            San Antonio, TX
          </Dropdown.Item>
          <Dropdown.Item key='San Diego, CA' css={{ fontSize: 'smaller' }}>
            San Diego, CA
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Flex>
  )
}
