import React from 'react'
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { SunIcon } from '../icons/settings/sunIcon'
import { MoonIcon } from '../icons/settings/moonIcon'

export const DarkModeToggle = () => {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()
  return (
    <Switch
      size='lg'
      checked={isDark}
      onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
      iconOn={<MoonIcon filled />}
      iconOff={<SunIcon filled />}
    />
  )
}
