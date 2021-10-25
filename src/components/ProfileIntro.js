import React from 'react'
import {
  Box,
  Typography,
  Avatar,
  AvatarGroup
} from '@mui/material'
import {
  LocationOn,
  GitHub,
  LinkedIn
} from '@mui/icons-material';
import { 
  role,
  name,
  avatarContainer,
  passport,
  passportShadow,
  location,
  locationDiv,
  city,
  link
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
            },
            position: 'relative',
            zIndex: 1,
            backgroundColor: '#eee841'
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
          <LocationOn />
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
      <Typography 
        variant='caption'
        gutterBottom={true}
      >
        AVAILABLE FOR RELOCATION
      </Typography>
      <AvatarGroup
        sx={{
          flexDirection: 'row'
        }}
      >
          <Avatar
            sx={{
              backgroundColor: '#eee841'
            }}
          >
            <a 
              href='https://github.com/akinwale-habibullah'
              target='_blank'
              rel='noreferrer'
              className={link}
            >
              <GitHub />
            </a>
          </Avatar>
          <Avatar
            sx={{
              backgroundColor: '#eee841'
            }}
          >
            <a 
              href='https://linkedin.com/in/akinwalehabib'
              target='_blank'
              rel='noreferrer'
              className={link}
            >
              <LinkedIn />
            </a>
          </Avatar>
      </AvatarGroup>
    </Box>
  )
}

export default ProfileIntro
