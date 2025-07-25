
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
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Settings,
  Edit,
  AccessTime,
  OpenInNew,
  ArrowDropDown,
} from '@mui/icons-material';

export default function ProductBaseProperties() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        background: '#363846',
        border: '2px solid #2196f3',
        borderRadius: 3,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        p: isMobile ? 2 : 3,
        mb: 2,
        minHeight: isMobile ? 'auto' : 600,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          mb: 2,
          gap: 2,
        }}
      >
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
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: 'white', fontSize: isMobile ? 18 : 22 }}
          >
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
                '&:hover': {
                  background: 'linear-gradient(135deg, #7f53c0 60%, #a259e6 100%)',
                },
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

      {/* Content Section */}
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
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 100,
                    height: 150,
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
            {[0, 1, 2].map((col) => (
              <Grid key={col} item xs={12} md={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {col === 0 && (
                    <>
                      <PropertyItem label="Inventory Class*" value={<Chip label="Pre Production" sx={{ backgroundColor: '#21b6f3', color: 'white', fontWeight: 600 }} />} />
                      <PropertyItem label="Part Number*" value="022134" />
                      <PropertyItem label="Line*" value="Carbide" />
                    </>
                  )}
                  {col === 1 && (
                    <>
                      <PropertyItem label="SKU(ID)" value={<span>2876512 <ArrowDropDown sx={{ fontSize: 18, color: '#b3b3b3' }} /></span>} />
                      <PropertyItem label="Category*" value={<span>Lighting <ArrowDropDown sx={{ fontSize: 18, color: '#b3b3b3' }} /></span>} />
                      <PropertyItem label="Series" value={<span>Surface Mount <ArrowDropDown sx={{ fontSize: 18, color: '#b3b3b3' }} /></span>} />
                    </>
                  )}
                  {col === 2 && (
                    <>
                      <PropertyItem label="Product Type*" value="Spare Part" />
                      <PropertyItem label="Family*" value={<span>Illumination <ArrowDropDown sx={{ fontSize: 18, color: '#b3b3b3' }} /></span>} />
                      <PropertyItem label="Warranty" value={<span>05 Years <span style={{ color: '#2196f3', cursor: 'pointer' }}>10WAR-02</span></span>} />
                    </>
                  )}
                </Box>
                
              </Grid>
              
            ))}
            <Box sx={{ textAlign: 'center', m: 2 }}>
            <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 1 }}>
              QR Code
            </Typography>
            <Box
              sx={{
                width: 64,
                height: 64,
                backgroundColor: 'white',
                backgroundImage: `url("data:image/svg+xml,...")`,
                backgroundSize: 'contain',
                border: '1px solid #666',
                borderRadius: 1,
                mx: 'auto',
              }}
            />
          </Box>
          </Grid>

          {/* QR Code */}
          
        </Grid>
      </Grid>

      {/* Descriptions */}
      <Box sx={{ mt: 4 }}>
        <Description label="Description" text="Lorem ipsum dolor sit amet..." />
        <Description label="Long Description" text="Et molestiae fuga id consequatur..." />
        <Description label="Marketing Description" text="Aut praesentium corrupti est consequatur..." />
      </Box>
    </Box>
  );
}

const PropertyItem = ({ label, value }) => (
  <Box>
    <Typography variant="body2" sx={{ color: '#b3b3b3' }}>{label}</Typography>
    <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>{value}</Typography>
  </Box>
);

const Description = ({ label, text }) => (
  <>
    <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 1 }}>{label}</Typography>
    <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>{text}</Typography>
  </>
);
