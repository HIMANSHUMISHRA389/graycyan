import React from 'react';
import {
  Typography,
  Box,
  Grid,
  IconButton,
  Tooltip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Timeline, Edit, ArrowDropDown, MoreVert } from '@mui/icons-material';

const trackingData = [
  { batchNumber: '2873416', serialNumber: '1124532' },
  { batchNumber: '2873416', serialNumber: '1124532' },
  { batchNumber: '2873416', serialNumber: '1124532' },
  { batchNumber: '2873416', serialNumber: '1124532' },
  { batchNumber: '0903499', serialNumber: '5524432' },
];

export default function ProductTrackingDetails() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              width: { xs: 32, md: 40 },
              height: { xs: 32, md: 40 },
              borderRadius: '50%',
              backgroundColor: '#a259e6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(162,89,230,0.15)',
            }}
          >
            <Timeline sx={{ color: 'white', fontSize: { xs: 20, md: 24 } }} />
          </Box>
          <Typography variant={isMobile ? "h6" : "h5"} sx={{ fontWeight: 600, color: 'white' }}>
            Product Tracking Details
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {isMobile ? (
            <IconButton size="small" sx={{ color: 'white' }}>
              <MoreVert />
            </IconButton>
          ) : (
            <>
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
                <ArrowDropDown sx={{ transform: 'rotate(180deg)', fontSize: 32 }} />
              </IconButton>
            </>
          )}
        </Box>
      </Box>

      {/* Tracking Cards */}
      <Grid container spacing={2}>
        {trackingData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box
              sx={{
                p: 2,
                backgroundColor: '#363846',
                border: '1px solid #4a4a5a',
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                minWidth: 180,
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                <Box>
                  <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 0.5 }}>
                    Batch Number
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
                    {item.batchNumber}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 0.5 }}>
                    Serial Number
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
                    {item.serialNumber}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}