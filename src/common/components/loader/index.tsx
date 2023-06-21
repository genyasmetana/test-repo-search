import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export const Loader = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '300px',
    }}
  >
    <CircularProgress />
  </Box>
)
