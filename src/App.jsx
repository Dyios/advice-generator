import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Divider from './images/pattern-divider-desktop.svg'
import Dice from './images/icon-dice.svg'

import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'hsl(150, 100%, 66%)',
      contrastText: '#ffffff',
    },
    secondary: {
      main: 'hsl(217, 19%, 24%)',
    },
    background: {
      main: 'hsl(218, 23%, 16%)',
    },
    text: {
      primary: 'hsl(193, 38%, 86%)',
    },
  },
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: 'background.main',
        }}
      >
        <Stack bgcolor='secondary.main' alignItems='center'
          pt={4} px={4}
          mx={2}
          spacing={3.5}
          borderRadius={3}
          sx={{ transform: 'translateY(-12%)', }}
        >
          <Typography variant='subtitle2' color='primary'
            textTransform='uppercase'
            letterSpacing={3}
          >
            advice #117
          </Typography>
          <Typography variant='h5' color='text.primary' maxWidth='29ch' textAlign='center'
            fontWeight={800}
          >
            "It is easy to sit up and take notice, what's difficult is getting up and taking action."
          </Typography>
          <Box maxWidth='450px' >
            <img src={Divider} alt="divider" width='100%' />
          </Box>
          <IconButton aria-label='load advice'
            sx={{
              backgroundColor: 'primary.main',
              padding: 2,
              transform: 'translateY(50%)',
              marginTop: '2px !important',
              transition: 'all .2s ease-in-out',
              '&:hover': {
                boxShadow: '0px 0px 40px hsl(150, 100%, 66%)',
                backgroundColor: 'hsl(150, 100%, 66%)',
                transform: 'translate(0%, 50%) rotate(180deg)'
              }
            }}
          >
            <img src={Dice} alt="dice" />
          </IconButton>
        </Stack>
      </Box>
    </ThemeProvider >
  )
}

export default App
