import React from 'react';
import {
  Typography,
  Box,
  IconButton,
  Tooltip,
  Divider,
  useTheme,
  useMediaQuery,
  CardMedia,
} from '@mui/material';
import { SwapHoriz, Edit, ArrowDropUp, MoreVert } from '@mui/icons-material';

const alternateProducts = [
  { name: 'Dual', image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg' },
  { name: 'Hands free', image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg' },
  { name: 'Scanlock', image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg' },
  { name: 'Single', image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg' },
  { name: 'Core-R', image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg' },
  { name: 'Core-S', image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg' },
  { name: 'Summit', image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg' },
  { name: 'Surface Mount', image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg' },
  { name: 'L10', image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg' },
];

export default function ProductAlternates() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        background: '#363846',
        border: '2px solid #4a4a5a',
        borderRadius: 3,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        p: isMobile ? 2 : 3,
        mb: 2,
        maxWidth: isMobile ? '92vw' : '100%',
        overflowX: 'hidden', // Prevent screen-wide scroll
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
          flexWrap: 'wrap',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              width: isMobile ? 32 : 40,
              height: isMobile ? 32 : 40,
              borderRadius: '50%',
              backgroundColor: '#a259e6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(162,89,230,0.15)',
            }}
          >
            <SwapHoriz sx={{ color: 'white', fontSize: isMobile ? 20 : 24 }} />
          </Box>
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            sx={{ fontWeight: 600, color: 'white' }}
          >
            Product Alternates
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
                    '&:hover': {
                      background: 'linear-gradient(135deg, #7f53c0 60%, #a259e6 100%)',
                    },
                  }}
                >
                  <Edit sx={{ fontSize: 24 }} />
                </IconButton>
              </Tooltip>
              <IconButton size="small" sx={{ color: 'white' }}>
                <ArrowDropUp sx={{ fontSize: 32 }} />
              </IconButton>
            </>
          )}
        </Box>
      </Box>

      <Divider sx={{ borderColor: '#4a4a5a', mb: 3 }} />

      {/* Responsive Alternates Scroll Row */}
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          pb: 1,
          pl: 1,
          pr: 1,
          scrollSnapType: 'x mandatory',
        }}
      >
        {alternateProducts.map((product, index) => (
          <Box
            key={index}
            sx={{
              flex: '0 0 auto',
              scrollSnapAlign: 'start',
              backgroundColor: '#363846',
              border: '1.5px solid #4a4a5a',
              borderRadius: 2,
              boxShadow: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 120,
              px: 2,
              py: 2,
              transition: 'border-color 0.2s',
              '&:hover': {
                borderColor: '#a259e6',
              },
            }}
          >
            <Box
              sx={{
                background: 'white',
                borderRadius: 2,
                width: '100%',
                height: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 1,
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{
                  objectFit: 'contain',
                  maxHeight: 70,
                  maxWidth: '90%',
                }}
              />
            </Box>
            <Typography
              variant="caption"
              sx={{
                color: 'white',
                fontSize: '0.85rem',
                fontWeight: 500,
                textAlign: 'center',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%',
              }}
            >
              {product.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
