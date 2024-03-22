import React from 'react'
import { Card, Text, Switch } from '@nextui-org/react'
import { useDarkModeCardHover } from '../settings/darkModeCardHoverStyle'

export const ToggleCard = ({ title, description, status, toggle }) => {
  const darkModeHoverStyles = useDarkModeCardHover()
  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px',
    '&:hover': darkModeHoverStyles,
    height: '150px',
    borderRadius: '0'
  }
  return (
    <Card css={cardStyle}>
      <div>
        <Text h3>{title}</Text>
        <Text color='#71717A'>{description}</Text>
        <Text color='success' weight='bold'>
          {status}
        </Text>
      </div>
      <div>{toggle}</div>
    </Card>
  )
}
