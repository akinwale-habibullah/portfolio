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
        flex: 1.5,
        pl: {
          xs: 0,
          md: 5,
          lg: 5
        },
        mb: {
          xs: 4,
          md: 0
        },
        borderRight: {
          xs: 'none',
          md: 'solid thin #cfd1d7'
        }
      }}
    >
      <Typography 
        variant='h6'
        className={ role }
        gutterBottom={true}
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
          sx={{ 
            width: {
              xs: 224,
              md: 144
            },
            height: {
              xs: 224,
              md: 144
            } 
          }}
          className={ passport }
        />
        <Avatar
          alt='placeholder'
          sx={{ 
            width: {
              xs: 224,
              md: 144
            }, 
            height: {
              xs: 224,
              md: 144
            },
            left: {
              xs: -112,
              md: -108
            }
          }}
          className={ passportShadow }
        >
          {''}
        </Avatar>
      </Box>
      <Box
        component='div'
        className={ location }
        sx={{ mb: 0.5 }}
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
          sx={{ p: 1 }}
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
