import { createTheme } from '@mui/material/styles'
import { amber, green } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      // main: '#ef6c00',
      main: amber[500]
    },
    secondary: {
      // main: '#32a011',
      main: green[400],
      contrastText: 'rgba(255,255,255,0.87)'
    }
  }
})

export default theme
