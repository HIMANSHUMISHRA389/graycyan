import React from 'react';
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  Divider,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { DirectionsCar, Add, ArrowDropUp } from '@mui/icons-material';

const vehicleData = [
  { id: 29, make: 'BMW', model: '3 Series', year: 2025, trim: 'M340i', description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
  { id: 26, make: 'Toyota', model: '3 Series', year: 2025, trim: 'T340i', description: 'T340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
];

export default function ProductVehicles() {
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
        width: '100%',
        overflowX: 'hidden', // ✅ stops screen-wide scrolling
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          gap: 2,
          mb: 2,
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
            <DirectionsCar sx={{ color: 'white', fontSize: isMobile ? 20 : 24 }} />
          </Box>
          <Typography variant={isMobile ? 'h6' : 'h5'} sx={{ fontWeight: 600, color: 'white' }}>
            Product Vehicles
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title="Add Vehicle">
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
              <Add sx={{ fontSize: 24 }} />
            </IconButton>
          </Tooltip>
          <IconButton size="small" sx={{ color: 'white' }}>
            <ArrowDropUp sx={{ fontSize: 32 }} />
          </IconButton>
        </Box>
      </Box>

      <Divider sx={{ borderColor: '#2196f3', mb: 3 }} />

      {/* 👇 TABLE WRAPPER: keeps scroll contained to table only */}
     <Box
  sx={{
    width: '100%',
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch', // smooth scroll on iOS
  }}
>
  <TableContainer
    component={Paper}
    sx={{
      backgroundColor: '#363846',
      boxShadow: 'none',
      borderRadius: 2,
       maxWidth: '85vw', // triggers scroll without forcing screen overflow
    }}
  >
    <Table
      sx={{
        tableLayout: 'auto',
        width: '100%',
      }}
    >
      <TableHead>
        <TableRow
          sx={{
            background: 'linear-gradient(90deg, #a259e6 60%, #7f53c0 100%)',
          }}
        >
          <TableCell sx={{ color: 'white', fontWeight: 600 }}>Identifier</TableCell>
          <TableCell sx={{ color: 'white', fontWeight: 600 }}>Make</TableCell>
          <TableCell sx={{ color: 'white', fontWeight: 600 }}>Model</TableCell>
          <TableCell sx={{ color: 'white', fontWeight: 600 }}>Year</TableCell>
          <TableCell sx={{ color: 'white', fontWeight: 600 }}>Trim</TableCell>
          <TableCell
            sx={{
              color: 'white',
              fontWeight: 600,
              minWidth: 200,
              whiteSpace: 'nowrap',
            }}
          >
            Trim Description
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {vehicleData.map((row, index) => (
          <TableRow
            key={index}
            sx={{
              backgroundColor: index % 2 === 0 ? '#363846' : '#404040',
              '&:hover': { backgroundColor: '#555' },
            }}
          >
            <TableCell sx={{ color: 'white' }}>{row.id}</TableCell>
            <TableCell sx={{ color: 'white' }}>{row.make}</TableCell>
            <TableCell sx={{ color: 'white' }}>{row.model}</TableCell>
            <TableCell sx={{ color: 'white' }}>{row.year}</TableCell>
            <TableCell sx={{ color: 'white' }}>{row.trim}</TableCell>
            <TableCell
              sx={{
                color: 'white',
                whiteSpace: 'normal',
                wordBreak: 'break-word',
              }}
            >
              {row.description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</Box>

    </Box>
  );
}
