import { FC } from 'react';
import { Box } from '@mui/material';
import { NavBar } from './NavBar';
import { ProfileButton } from './ProfileButton';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <Box sx={{ maxWidth: '1240px', m: '32px auto' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NavBar />
        <ProfileButton />
      </Box>
      <Outlet />
    </Box>
  );
}
