import React from 'react'
import {
  Container,
} from '@mui/material'
import ProfileIntro from './ProfileIntro'
import ProfileMain from './ProfileMain'
import { profileContainer } from './Profile.module.css'

const Profile = () => {
  return (
    <Container
      className={profileContainer}
      sx={{
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
