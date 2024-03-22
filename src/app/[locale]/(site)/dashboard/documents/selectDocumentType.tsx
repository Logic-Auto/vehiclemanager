import React, { useState, useEffect } from 'react'

import { Text, Button, Dropdown, Spacer, Card } from '@nextui-org/react'

export const SelectDocumentType = () => {
  const documentType = [
    'Vehicle Registration',
    'Vehicle Inspection Report',
    'Proof of Insurance',
    'Maintenance Records',
    'Other'
  ]

  const [selected, setSelected] = useState('Select')

  return (
    <Dropdown>
      <Dropdown.Button light bordered>
        {selected}
      </Dropdown.Button>
      <Dropdown.Menu aria-label='documents' selectionMode='single' onSelectionChange={key => setSelected(key)}>
        {documentType
          .filter(document => document !== 'select')
          .map(document => (
            <Dropdown.Item key={document} css={{ fontSize: 'smaller' }}>
              {document}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
