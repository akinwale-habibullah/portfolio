import React from 'react'
import {
  Container,
} from '@mui/material'
import ProfileIntro from './ProfileIntro'
import ProfileMain from './ProfileMain'

const Profile = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        pt: {
          xs: 8
        },
        flexDirection: {
          xs: 'column',
          md: 'row'
        },
      }}
    >
      <ProfileIntro />
      <ProfileMain />
    </Container>
  )
}

export default Profile
