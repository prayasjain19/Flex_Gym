import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material';
import { X } from '@mui/icons-material';
// import { makeStyles } from '@mui/styles';
// import Logo from '../assets/images/Logo.png';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     alignItems: 'center',
//     '& > *': {
//       marginRight: theme.spacing(2),
//     },
//   },
// }));


const Footer = () => (

  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src='https://cdn.pixabay.com/photo/2024/01/10/05/32/ai-generated-8498914_640.jpg' alt="logo" style={{width: '80px', height: '70px', margin: '0 20px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by Prayas Jain</Typography>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

    <Typography variant="body1">
        Follow me on:
      </Typography >
      <Link href="https://www.linkedin.com/in/prayas-jain19/" target="_blank" rel="noopener noreferrer">
        <Typography variant="body1" color="primary" style={{cursor: 'pointer', margin: '10px'}}>
          LinkedIn
        </Typography>
      </Link>
      <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <Typography variant="body1" color="primary" style={{cursor: 'pointer', margin: '10px'}}>
          Instagram
        </Typography>
      </Link>
      <Link href="https://github.com/prayasjain19" target="_blank" rel="noopener noreferrer">
        <Typography variant="body1" color="primary" style={{cursor: 'pointer', margin: '10px'}}>
          GitHub
        </Typography>
      </Link>
    </div>
  </Box>

)

export default Footer;