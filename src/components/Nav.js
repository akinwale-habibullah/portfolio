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
          sx={{
            width: 56,
            height: 56,
            backgroundColor: 'rgba(0,0,0,0)',
            border: 'solid thin #000',
            color: '#000'
          }}
        >
          AH
        </Avatar>
      </Link>
      {
        matches
        ? <Avatar
            sx={{
              width: 56,
              height: 56,
              backgroundColor: '#eee841'
            }}
          >
            <MailOutline />
          </Avatar>
        : <Button
            variant='contained'
            color='primary'
          >
            <a 
              href='mailto:akinwalehabib@hotmail.com'
              className={ link }
            >
              Contact me
            </a>
          </Button>
      }
    </Box>
  )
}

export default Nav
