import * as React from 'react'
import Box from '@mui/material/Box'
// import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import {Link, Typography} from '@mui/material'
import {header} from '../portfolio'

import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false
  }
  return true
}

interface LinkTabProps {
  label?: string
  href?: string
  selected?: boolean
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component='a'
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault()
        }
      }}
      aria-current={props.selected && 'page'}
      {...props}
    />
  )
}

const NavTabs = () => {
  const {homepage, title} = header
  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   // event.type can be equal to focus with selectionFollowsFocus.
  //   if (
  //     event.type !== 'click' ||
  //     (event.type === 'click' &&
  //       samePageLinkNavigation(
  //         event as React.MouseEvent<HTMLAnchorElement, MouseEvent>
  //       ))
  //   ) {
  //     setValue(newValue)
  //   }
  // }

  return (
    <Box
      justifySelf={'center'}
      flexDirection={'row'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      bgcolor={'#cfe8fc'}
      // boxShadow={5}
      p={1}
      borderRadius={3}
    >
      <Typography m={1} variant='h4'>
        {homepage ? (
          <Link
            href={homepage}
            flexDirection={'row'}
            display={'flex'}
            alignItems={'center'}
          >
            <img src={'logo.png'} width={50} height={50} alt='Logo' />
            <Box ml={2}>{title}</Box>
          </Link>
        ) : (
          title
        )}
      </Typography>

      {/* <Tabs
        value={value}
        onChange={handleChange}
        aria-label='nav tabs example'
        role='navigation'
      >
        <LinkTab label='Overview' href='./Overview.tsx' />
        <LinkTab label='Experience' href='./Overview.tsx' />
        <LinkTab label='Contact Info' href='./Overview.tsx' />
      </Tabs> */}

      <Box sx={{width: '100%', typography: 'body1'}}>
        <TabContext value={value}>
          <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
            <TabList onChange={handleChange} aria-label='lab API tabs example'>
              <Tab label='Item One' value='1' />
              <Tab label='Item Two' value='2' />
              <Tab label='Item Three' value='3' />
            </TabList>
          </Box>
          <TabPanel value='1'>Item One</TabPanel>
          <TabPanel value='2'>Item Two</TabPanel>
          <TabPanel value='3'>Item Three</TabPanel>
        </TabContext>
      </Box>
    </Box>
  )
}

export default NavTabs
