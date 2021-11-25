import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'

const CompsStyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 3,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    fontSize: '15px'
  }
}))

export default CompsStyledBadge
