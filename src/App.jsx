import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import DesktopDivider from './images/pattern-divider-desktop.svg'
import MobileDivider from './images/pattern-divider-mobile.svg'
import Dice from './images/icon-dice.svg'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios'

export const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'hsl(150, 100%, 66%)',
      contrastText: '#e59595',
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
  typography: {
    fontFamily: "'Manrope', sans-serif",
  },
});

function getAdvice(setAdvice, setError) {
  axios.get("https://api.adviceslip.com/advice")
    .then(res => {
      setAdvice(res.data.slip)
    })
    .catch(err => {
      setError(err)
    })
}

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [advice, setAdvice] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    getAdvice(setAdvice, setError)
  }, [])

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
        <Stack component='main'
          bgcolor='secondary.main'
          alignItems='center'
          pt={4} px={4}
          mx={2}
          spacing={3.5}
          borderRadius={3}
          sx={{ transform: 'translateY(-12%)', }}
        >
          {
            error ? (
              <Typography component='h1' variant='subtitle2'
                color='error'
                textTransform='uppercase'
                letterSpacing={3}
              >
                {error.status}
              </Typography>
            ) : (
              <>
                <Typography component='h1' variant='subtitle2'
                  color='primary'
                  textTransform='uppercase'
                  letterSpacing={3}
                >
                  advice #{advice.id}
                </Typography>
                <Typography component='q' variant='h5'
                  color='text.primary'
                  maxWidth='25ch'
                  textAlign='center'
                  fontWeight={800}
                >
                  {advice.advice}
                </Typography>
              </>
            )
          }
          <img src={isMobile ? MobileDivider : DesktopDivider} alt="divider" width='100%' />
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
            onClick={() => getAdvice(setAdvice, setError)}
          >
            <img src={Dice} alt="dice" />
          </IconButton>
        </Stack>
      </Box>
    </ThemeProvider >
  )
}

export default App
