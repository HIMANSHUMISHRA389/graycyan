import React from 'react';
import {
  Typography,
  Grid,
  Box,
  Card,
  CardMedia,
  Chip,
  IconButton,
  Tooltip,
  Divider,
} from '@mui/material';
import {
  Settings,
  Edit,
  AccessTime,
  OpenInNew,
  ArrowDropDown,
} from '@mui/icons-material';

export default function ProductBaseProperties() {
  return (
    <Box
      sx={{
        background: '#363846',
        border: '2px solid #2196f3',
        borderRadius: 3,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        p: 3,
        mb: 2,
        minHeight: 600,
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
              backgroundColor: '#9c27b0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(156,39,176,0.15)',
            }}
          >
            <Settings sx={{ color: 'white', fontSize: 24 }} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'white', fontSize: 22 }}>
            Product Base Properties
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title="History">
            <IconButton size="small" sx={{ background: 'none', color: 'white' }}>
              <AccessTime sx={{ fontSize: 28 }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Open">
            <IconButton size="small" sx={{ background: 'none', color: 'white' }}>
              <OpenInNew sx={{ fontSize: 28 }} />
            </IconButton>
          </Tooltip>
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
        </Box>
      </Box>

      <Divider sx={{ borderColor: '#2196f3', mb: 3 }} />

      <Grid container spacing={3}>
        {/* Image & QR */}
        <Grid item xs={12} md={3}>
          <Card
            sx={{
              backgroundColor: '#363846',
              boxShadow: 'none',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid #4a4a5a',
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#363846',
                borderRadius: 2,
                p: 1,
                mb: 1,
                width: '100%',
                minHeight: 120,
              }}
            >
              <Box
                sx={{
                  background: 'white',
                  borderRadius: 2,
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 120,
                    height: 175,
                    objectFit: 'contain',
                    borderRadius: 2,
                  }}
                  image="https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg"
                  alt="Surface Mount"
                />
              </Box>
              
            </Box>
            <Typography
              variant="h6"
              align="center"
              sx={{ mt: 1, fontWeight: 600, color: 'white', fontSize: 18 }}
            >
              Surface Mount
            </Typography>
          </Card>
        </Grid>

        {/* Properties */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                    Inventory Class*
                  </Typography>
                  <Chip
                    label="Pre Production"
                    sx={{
                      backgroundColor: '#21b6f3',
                      color: 'white',
                      borderRadius: 1,
                      fontWeight: 600,
                      fontSize: 14,
                      mt: 0.5,
                    }}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                    Part Number*
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
                    022134
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                    Line*
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
                    Carbide
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                    SKU(ID)
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
                    2876512 <ArrowDropDown sx={{ color: '#b3b3b3', fontSize: 18, verticalAlign: 'middle' }} />
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                    Category*
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
                    Lighting <ArrowDropDown sx={{ color: '#b3b3b3', fontSize: 18, verticalAlign: 'middle' }} />
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                    Series
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
                    Surface Mount <ArrowDropDown sx={{ color: '#b3b3b3', fontSize: 18, verticalAlign: 'middle' }} />
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                    Product Type*
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
                    Spare Part
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                    Family*
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
                    Illumination <ArrowDropDown sx={{ color: '#b3b3b3', fontSize: 18, verticalAlign: 'middle' }} />
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                    Warranty
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
                    05 Years <span style={{ color: '#2196f3', fontWeight: 500, cursor: 'pointer' }}>10WAR-02</span>
                  </Typography>
                </Box>
                
              </Box>
              
            </Grid>
            <Box sx={{ textAlign: 'center', m: 2,}}>
                <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 1 }}>
                  QR Code
                </Typography>
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    backgroundColor: 'white',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='white'/%3E%3Crect x='0' y='0' width='10' height='10' fill='black'/%3E%3Crect x='20' y='0' width='10' height='10' fill='black'/%3E%3Crect x='40' y='0' width='10' height='10' fill='black'/%3E%3Crect x='0' y='20' width='10' height='10' fill='black'/%3E%3Crect x='40' y='20' width='10' height='10' fill='black'/%3E%3Crect x='0' y='40' width='10' height='10' fill='black'/%3E%3Crect x='20' y='40' width='10' height='10' fill='black'/%3E%3Crect x='40' y='40' width='10' height='10' fill='black'/%3E%3C/svg%3E")`,
                    backgroundSize: 'contain',
                    border: '1px solid #666',
                    borderRadius: 1,
                    mx: 'auto',
                    
                  }}
                />
              </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* Descriptions */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 1 }}>
          Description
        </Typography>
        <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
          Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur quia qui aliquid volupta.
        </Typography>

        <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 1 }}>
          Long Description
        </Typography>
        <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
          Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur qui aliquid voluptas. Aut praesentium corrupti est consequatur eligendi rem ratione officia est consequuntur. Quis ut sint unde.
        </Typography>

        <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 1 }}>
          Marketing Description
        </Typography>
        <Typography variant="body1" sx={{ color: 'white' }}>
          Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur qui aliquid voluptas. Aut praesentium corrupti est consequatur eligendi rem ratione officia est consequuntur. Quis ut sint unde.
        </Typography>
      </Box>
    </Box>
  );
}