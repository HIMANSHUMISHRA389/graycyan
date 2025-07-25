import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Avatar,
  Box,
  InputBase,
  Typography,
  Switch,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Search,
  Notifications,
  Language,
  Help,
  DarkMode,
} from '@mui/icons-material';

// Custom Switch styled to match screenshot
const ThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 48,
  height: 24,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(24px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        background: 'linear-gradient(90deg, #3a3a6c 60%, #9c27b0 100%)',
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 20,
    height: 20,
    boxShadow: 'none',
    background: '#222',
  },
  '& .MuiSwitch-track': {
    borderRadius: 24,
    background: 'linear-gradient(90deg, #222 60%, #333 100%)',
    opacity: 1,
    transition: theme.transitions.create(['background']),
  },
}));

export default function Header() {
  const [searchFocus, setSearchFocus] = React.useState(false);
  const [themeChecked, setThemeChecked] = React.useState(false);

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        background: 'linear-gradient(90deg, #0f111a 60%, #1a1a2e 100%)',
        borderBottom: '1px solid #333',
        boxShadow: 'none',
        minHeight: 56,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: 56 }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Pacifico", cursive',
              color: 'white',
              fontSize: 22,
              ml: 2,
              mr: 2,
              letterSpacing: 1,
              userSelect: 'none',
            }}
          >
            Company Logo
          </Typography>
          {/* Expanding Search Box */}
          <Box
            sx={{
              position: 'relative',
              borderRadius: '20px',
              backgroundColor: 'rgba(255,255,255,0.08)',
              width: searchFocus ? 180 : 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'width 0.3s',
              ml: 1,
              px: searchFocus ? 2 : 0,
              boxShadow: searchFocus ? '0 0 0 2px #9c27b0' : 'none',
            }}
            onMouseEnter={() => setSearchFocus(true)}
            onMouseLeave={() => setSearchFocus(false)}
          >
            <Search sx={{ color: '#b3b3b3', fontSize: 22, m: searchFocus ? 1 : 0 }} />
            <InputBase
              placeholder="Search…"
              sx={{
                color: 'white',
                opacity: searchFocus ? 1 : 0,
                width: searchFocus ? '100%' : 0,
                transition: 'opacity 0.3s, width 0.3s',
                fontSize: 16,
              }}
            />
          </Box>
        </Box>

        {/* Right Side */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Theme Switch */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ color: 'white', mr: 0.5 }}>
              Theme
            </Typography>
            <ThemeSwitch
              checked={themeChecked}
              onChange={() => setThemeChecked((prev) => !prev)}
            />
          </Box>

          {/* Icons */}
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <Notifications sx={{ color: 'white' }} />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Language sx={{ color: 'white' }} />
          </IconButton>
          <IconButton color="inherit">
            <Help sx={{ color: 'white' }} />
          </IconButton>

          {/* Avatar */}
          <Avatar
            sx={{
              width: 32,
              height: 32,
              backgroundColor: '#9c27b0',
              fontSize: '0.9rem',
              ml: 1,
            }}
          >
            JD
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}