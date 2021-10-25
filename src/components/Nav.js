import React from 'react'
import { Link } from 'gatsby'
import {
  Box,
  Avatar,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material'
import {
  MailOutline
} from '@mui/icons-material'
import {
  navContainer,
  avatarComponent,
  link
} from './Nav.module.css'

const Nav = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box
      className={navContainer}
      sx={{
        pt: {
          xs: 2,
          md: 3,
          lg: 4
        },
        pl: {
          xs: 1,
          md: 3,
          lg: 4
        },
        pr: {
          xs: 1,
          md: 3,
          lg: 4
        },
      }}
    >
      <Link to='/' className={link}>
        <Avatar
          className={avatarComponent}
        >
          AH
        </Avatar>
      </Link>
      {
        matches
        ? <Avatar
            className={avatarComponent}
          >
            <MailOutline />
          </Avatar>
        : <Button
            variant='contained'
            color='primary'
          >
            Contact me
          </Button>
      }
    </Box>
  )
}

export default Nav
