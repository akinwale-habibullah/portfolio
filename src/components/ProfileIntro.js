import React from 'react'
import {
  Box,
  Typography,
  Avatar
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { 
  role,
  name,
  avatarContainer,
  passport,
  passportShadow,
  location,
  locationDiv,
  city
} from './ProfileIntro.module.css'

const ProfileIntro = () => {
  return (
    <Box 
      component='aside'
      sx={{ 
        flex: 2,
        pl: {
          xs: 0,
          md: 5
        },
        borderRight: 'solid thin #cfd1d7'
      }}
    >
      <Typography 
        variant='h6'
        className={ role }
        sx={{ mb: 2 }}
      >
        Software Engineer
      </Typography>
      <Typography 
        variant='h3' 
        className={ name }
        sx={{ mb: 3 }}
      >
        Akinwale <br />Habib
      </Typography>
      <Box
        component='div'
        className={ avatarContainer }
        sx={{mb: 2}}
      >
        <Avatar
          alt='passport image of akinwale habib' 
          src={'/passport.jpeg'} 
          sx={{ width: 144, height: 144 }}
          className={ passport }
        />
        <Avatar
          alt='placeholder'
          sx={{ width: 144, height: 144 }}
          className={ passportShadow }
        >
          {''}
        </Avatar>
      </Box>
      <Box
        component='div'
        className={ location }
      >
        <Box 
          className={locationDiv}
          sx={{
            mr: 0.5,
            p: 1,
            color: '#eee841' 
          }}
        >
          <LocationOnIcon />
        </Box>
        <Box
          className={locationDiv}
          sx={{ p: 1, pl: 2, pr: 2 }}
        >
          <Typography 
            variant='body1'
            className={city}
          >
            Kaduna, Nigeria
          </Typography>
        </Box>
      </Box>
      <Typography variant='caption'>
        AVAILABLE FOR RELOCATION
      </Typography>
    </Box>
  )
}

export default ProfileIntro
