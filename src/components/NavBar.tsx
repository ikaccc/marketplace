'use client';

import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import Link from 'next/link';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeContext } from '@/context/ThemeContext';
import CartIconButton from './CartIconButton';

export default function NavBar() {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box display="flex" gap={2}>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/products">
            Products
          </Button>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <IconButton color="inherit" onClick={toggleColorMode}>
            {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>

          <CartIconButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
