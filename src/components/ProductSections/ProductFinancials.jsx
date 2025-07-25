import React from 'react';
import {
  Typography,
  Box,
  Grid,
  IconButton,
  Tooltip,
  Divider,
} from '@mui/material';
import { AttachMoney, Edit, ArrowDropUp } from '@mui/icons-material';

export default function ProductFinancials() {
  return (
    <Box
      sx={{
        background: '#363846',
        border: '2px solid #4a4a5a',
        borderRadius: 3,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        p: 3,
        mb: 2,
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: '#a259e6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(162,89,230,0.15)',
            }}
          >
            <AttachMoney sx={{ color: 'white', fontSize: 24 }} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'white', fontSize: 22 }}>
            Product Financials
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title="Edit">
            <IconButton
              size="small"
              sx={{
                background: 'linear-gradient(135deg, #a259e6 60%, #7f53c0 100%)',
                color: 'white',
                borderRadius: 2,
                p: 1,
                boxShadow: '0 2px 8px rgba(162,89,230,0.15)',
                '&:hover': { background: 'linear-gradient(135deg, #7f53c0 60%, #a259e6 100%)' },
              }}
            >
              <Edit sx={{ fontSize: 24 }} />
            </IconButton>
          </Tooltip>
          <IconButton size="small" sx={{ color: 'white', ml: 1 }}>
            <ArrowDropUp sx={{ fontSize: 32 }} />
          </IconButton>
        </Box>
      </Box>
      <Divider sx={{ borderColor: '#4a4a5a', mb: 3 }} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box>
            <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 0.5 }}>
              Material Cost
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
              $175.23
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box>
            <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 0.5 }}>
              Labor Cost
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
              $291.46
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box>
            <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 0.5 }}>
              Process Cost
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
              $66.21
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box>
            <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 0.5 }}>
              Misc. Cost
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
              $15.49
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 0.5 }}>
              Last Price
            </Typography>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
              $1,875.23
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}