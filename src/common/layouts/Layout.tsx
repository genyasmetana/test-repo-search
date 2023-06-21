import { Outlet, NavLink } from 'react-router-dom'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

export const Layout = () => (
  <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <AppBar component='nav' position='static'>
      <Toolbar>
        <Typography variant='h6' component='h6'>
          Repositories Search
        </Typography>

        <Box>
          <NavLink to='/'>List</NavLink>
          <NavLink to='/favorite'>Favorite</NavLink>
        </Box>
      </Toolbar>
    </AppBar>

    <Box component='main' sx={{ maxWidth: '1140px', width: '100%', margin: '0 auto', p: 2 }}>
      <Outlet />
    </Box>
  </Box>
)
