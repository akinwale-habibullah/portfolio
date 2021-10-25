import React from 'react'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from '@mui/material'
import {
  currentRole,
  currentRoleHighlight,
  currentRoleCaption,
  currentRoleLink,
  header
} from './ProfileMain.module.css'
import CodeIcon from '@mui/icons-material/Code';

function createData(expertise, skills) {
  return { expertise, skills };
}

const rows = [
  createData('Front End', 'CSS3, HTML5, JavaScript, AngularJS, Bootstrap, Material UI, HighCharts'),
  createData('Back End', 'JavaScript, NodeJS, Express, Python, Flask, Microservices, APIs'),
  createData('Data Stores', 'SQLite, Couchbase Lite, MySQL, PostreSQL, MongoDB, Cassandra, Redis'),
  createData('Cloud', 'AWS Lambda, AWS RedShift, AWS EMR, AMS S3, Firebase'),
  createData('Operating Systems', 'Linux Red Hat, Ubuntu, Chromium OS, Mac OS, Windows 10, Windows Server'),
];

const ProfileMain = () => {
  return (
    <Box
      sx={{
        flex: 3,
        pl: {
          xs: 0,
          md: 4
        }
      }}
    >
      <Box
        className={currentRole}
        sx={{ mb: 4 }}
      >
        <Box>
          <Typography 
            variant='subtitle2'
            className={ header }
          >
            COMPANY
          </Typography>
          <Typography
            variant='h5'
            className={ currentRoleHighlight }
          >
            <a 
              href='https://savics.org' 
              target='_blank' 
              rel='noreferrer'
              className={ currentRoleLink }
            >
              Savics
            </a>
          </Typography>
          <Typography
            variant='caption'
            className={ currentRoleCaption }
          >
            AVAILABLE FOR HIRE
          </Typography>
        </Box>
        
        <hr />
        
        <Box>
        <Typography 
            variant='subtitle2'
            className={ header }
          >
            FOCUSED ON
          </Typography>
          <Typography
            variant='h5'
            className={ currentRoleHighlight }
          >
            <a 
              href='http://datatocare.org' 
              target='_blank' 
              rel='noreferrer'
              className={ currentRoleLink }
            >
              DataToCare
            </a>
          </Typography>
          <Typography
            variant='caption'
            className={ currentRoleCaption }
          >
            <CodeIcon sx={{fontSize: '1rem'}}/>
          </Typography>
        </Box>
      </Box>

      <Box 
        sx={{ mb: 4}}
      >
        <Typography
          variant='subtitle2'
          className={ header }
          sx={{ mb: 1 }}
        >
          SKILLS
        </Typography>

        <TableContainer >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {
                rows.map((row) => (
                  <TableRow
                    key={row.expertise}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, width: '100%' }}
                  >
                    <TableCell component="th" scope="row" sx={{pl: 0}}>
                      {row.expertise}
                    </TableCell>
                    <TableCell
                      sx={{overflowWrap: 'break-word'}}
                    >
                      {row.skills}
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box
        sx={{ mb: 4}}
      >
        <Typography
          variant='subtitle2'
          className={ header }
          sx={{ mb: 2 }}
        >
          ABOUT ME
        </Typography>
        <Typography
            variant='subtitle2'
          >
            I am a Software and Data engineer with over 5 years of experience developing robust software applications in Education
            and Health industries. I currently develop eHealth products at Savics using MEAN/MERN stack and JavaFX. 
            
            <br /><br />In my previous role at the American University of Nigeria, I implemented a Data warehouse and BI solution using Pentaho. At Andela, I
            helped automate API testing at scale by building an API testing application using puppeteer, Express, Node, and React.
            
            <br /><br /> I am a father of three, son of two, husband of one. In my free time, I love to cycle and enjoy time with my family.
        </Typography>
      </Box>
    </Box>
  )
}

export default ProfileMain
