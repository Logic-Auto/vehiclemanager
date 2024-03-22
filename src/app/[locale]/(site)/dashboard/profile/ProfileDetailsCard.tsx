import React, { useState } from 'react'
import { Flex } from 'src/components/styles/flex'
import { useDarkModeCardHover } from '../settings/darkModeCardHoverStyle'
import { Text, Spacer, Button, Switch, Table, Input, Link, Card, Modal } from '@nextui-org/react'

export const ProfileDetailsCard = ({ title, description, pathText, path }) => {
  const darkModeHoverStyles = useDarkModeCardHover()
  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px',
    '&:hover': darkModeHoverStyles,
    height: '150px',
    borderRadius: '0'
  }

  return (
    <Card css={cardStyle}>
      <div>
        <Text h3>{title}</Text>
        <Text color='#71717A'>{description}</Text>
      </div>
      <div>
        <Link href={path}>{pathText}</Link>
      </div>
    </Card>
  )
}
