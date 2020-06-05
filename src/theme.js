import { createMuiTheme } from '@material-ui/core/styles'
import { blueGrey, orange } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: blueGrey,
    secondary: orange
  }
})

export default theme