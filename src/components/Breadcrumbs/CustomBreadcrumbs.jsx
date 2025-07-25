import React from 'react';
import { Box, Typography, Breadcrumbs, Link } from '@mui/material';
import { Inventory } from '@mui/icons-material';

export default function CustomBreadcrumbs() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #7b1fa2 0%, #4a148c 100%)',
        py: 2,
        px: 3,
        borderRadius: 2,
        mb: 3,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Inventory sx={{ color: 'white', fontSize: 32 }} />
      <Box>
        <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
          Inventory
        </Typography>
        <Breadcrumbs
          separator=">"
          sx={{
            '& .MuiBreadcrumbs-separator': {
              color: 'rgba(255, 255, 255, 0.7)',
            },
          }}
        >
          <Link
            color="inherit"
            href="#"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            All Products
          </Link>
          <Typography sx={{ color: 'white', fontSize: '0.9rem' }}>
            Surface Mount
          </Typography>
        </Breadcrumbs>
      </Box>
    </Box>
  );
}