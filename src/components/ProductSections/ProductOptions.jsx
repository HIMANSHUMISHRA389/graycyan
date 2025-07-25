import React, { useState } from 'react';
import {
  Typography,
  Box,
  Chip,
  Button,
  IconButton,
  Tooltip,
  Divider,
} from '@mui/material';
import { Tune, Edit, Add, ArrowDropUp } from '@mui/icons-material';

const colors = [
  { name: 'Brown', color: '#8d4004' },
  { name: 'Blue', color: '#1a194d' },
  { name: 'Light Blue', color: '#b39ddb' },
  { name: 'Red', color: '#f44336' },
  { name: 'Orange', color: '#ffcc99' },
];

const dimensions = [
  '12.4 H × 18.4 W (cm)',
  '22.4 H × 28.4 W (cm)',
  '42.4 H × 48.6 W (cm)',
];

const controls = ['WeCan', 'WeCanX'];

export default function ProductOptions() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedDimension, setSelectedDimension] = useState(0);
  const [selectedControl, setSelectedControl] = useState(0);

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
            <Tune sx={{ color: 'white', fontSize: 24 }} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'white', fontSize: 22 }}>
            Product Options
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title="Add Option">
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
              <Add sx={{ fontSize: 24 }} />
            </IconButton>
          </Tooltip>
          <IconButton size="small" sx={{ color: 'white', ml: 1 }}>
            <ArrowDropUp sx={{ fontSize: 32 }} />
          </IconButton>
        </Box>
      </Box>
      <Divider sx={{ borderColor: '#4a4a5a', mb: 3 }} />

      {/* Colors */}
      <Box
        sx={{
          background: '#363846',
          border: '1.5px solid #4a4a5a',
          borderRadius: 2,
          p: 2,
          mb: 3,
          position: 'relative',
        }}
      >
        <Typography variant="body1" sx={{ color: 'white', fontWeight: 500, mb: 2 }}>
          Colors*
        </Typography>
        <Tooltip title="Edit Colors">
          <IconButton
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              background: 'linear-gradient(135deg, #a259e6 60%, #7f53c0 100%)',
              color: 'white',
              borderRadius: 2,
              p: 0.5,
              boxShadow: '0 2px 8px rgba(162,89,230,0.15)',
              zIndex: 1,
              '&:hover': { background: 'linear-gradient(135deg, #7f53c0 60%, #a259e6 100%)' },
            }}
          >
            <Edit sx={{ fontSize: 20 }} />
          </IconButton>
        </Tooltip>
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          {colors.map((color, index) => (
            <Box
              key={index}
              onClick={() => setSelectedColor(index)}
              sx={{
                width: 44,
                height: 44,
                backgroundColor: color.color,
                borderRadius: 2,
                cursor: 'pointer',
                border: selectedColor === index ? '2px solid #a259e6' : '2px solid transparent',
                transition: 'border 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                }
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Dimensions */}
      <Box
        sx={{
          background: '#363846',
          border: '1.5px solid #4a4a5a',
          borderRadius: 2,
          p: 2,
          mb: 3,
          position: 'relative',
        }}
      >
        <Typography variant="body1" sx={{ color: 'white', fontWeight: 500, mb: 2 }}>
          Dimensions*
        </Typography>
        <Tooltip title="Edit Dimensions">
          <IconButton
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              background: 'linear-gradient(135deg, #a259e6 60%, #7f53c0 100%)',
              color: 'white',
              borderRadius: 2,
              p: 0.5,
              boxShadow: '0 2px 8px rgba(162,89,230,0.15)',
              zIndex: 1,
              '&:hover': { background: 'linear-gradient(135deg, #7f53c0 60%, #a259e6 100%)' },
            }}
          >
            <Edit sx={{ fontSize: 20 }} />
          </IconButton>
        </Tooltip>
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          {dimensions.map((dimension, index) => (
            <Chip
              key={index}
              label={dimension}
              onClick={() => setSelectedDimension(index)}
              sx={{
                backgroundColor: selectedDimension === index ? '#a259e6' : '#404040',
                color: 'white',
                border: '1px solid #555',
                fontWeight: 500,
                fontSize: '1rem',
                px: 2,
                '&:hover': {
                  backgroundColor: selectedDimension === index ? '#7f53c0' : '#555',
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Control */}
      <Box
        sx={{
          background: '#363846',
          border: '1.5px solid #4a4a5a',
          borderRadius: 2,
          p: 2,
          position: 'relative',
        }}
      >
        <Typography variant="body1" sx={{ color: 'white', fontWeight: 500, mb: 2 }}>
          Control
        </Typography>
        <Tooltip title="Edit Control">
          <IconButton
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              background: 'linear-gradient(135deg, #a259e6 60%, #7f53c0 100%)',
              color: 'white',
              borderRadius: 2,
              p: 0.5,
              boxShadow: '0 2px 8px rgba(162,89,230,0.15)',
              zIndex: 1,
              '&:hover': { background: 'linear-gradient(135deg, #7f53c0 60%, #a259e6 100%)' },
            }}
          >
            <Edit sx={{ fontSize: 20 }} />
          </IconButton>
        </Tooltip>
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          {controls.map((control, index) => (
            <Button
              key={index}
              variant={selectedControl === index ? 'contained' : 'outlined'}
              onClick={() => setSelectedControl(index)}
              sx={{
                backgroundColor: selectedControl === index ? '#a259e6' : 'transparent',
                borderColor: '#555',
                color: 'white',
                fontWeight: 500,
                px: 3,
                '&:hover': {
                  backgroundColor: selectedControl === index ? '#7f53c0' : '#404040',
                  borderColor: '#a259e6',
                },
              }}
            >
              {control}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}