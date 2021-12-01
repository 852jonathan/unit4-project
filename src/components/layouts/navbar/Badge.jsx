import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'

const CompsStyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 10,
    top: 17,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    fontSize: '15px'
  }
}))

export default CompsStyledBadge
