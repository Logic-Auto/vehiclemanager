import React from 'react'
import { Card, Text, Button } from '@nextui-org/react'
import Link from 'next/link'
import { useDarkModeCardHover } from '../settings/darkModeCardHoverStyle'

export const SettingsCard = ({ title, description, status, buttonText, path }) => {
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

  const MyButton = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <Button color='gradient' auto ghost>
          {buttonText}
        </Button>
      </a>
    )
  })

  return (
    <Card css={cardStyle}>
      <div>
        <Text h3>{title}</Text>
        <Text color='#71717A'>{description}</Text>
        <Text color='success' weight='bold'>
          {status}
        </Text>
      </div>
      <div>
        <Link href={path} passHref legacyBehavior>
          <MyButton />
        </Link>
      </div>
    </Card>
  )
}
