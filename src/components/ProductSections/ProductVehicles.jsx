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
} from '@mui/material';
import { DirectionsCar, Add, ArrowDropUp } from '@mui/icons-material';

const vehicleData = [
  { id: 29, make: 'BMW', model: '3 Series', year: 2025, trim: 'M340i', description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
  { id: 26, make: 'Toyota', model: '3 Series', year: 2025, trim: 'T340i', description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
  { id: 29, make: 'BMW', model: '3 Series', year: 2025, trim: 'M340i', description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
  { id: 26, make: 'Toyota', model: '3 Series', year: 2025, trim: 'T340i', description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
  { id: 29, make: 'BMW', model: '3 Series', year: 2025, trim: 'M340i', description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
  { id: 26, make: 'Toyota', model: '3 Series', year: 2025, trim: 'T340i', description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
  { id: 29, make: 'BMW', model: '3 Series', year: 2025, trim: 'M340i', description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
  { id: 26, make: 'Toyota', model: '3 Series', year: 2025, trim: 'T340i', description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)' },
];

export default function ProductVehicles() {
  return (
    <Box
      sx={{
        background: '#363846',
        border: '2px solid #2196f3',
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
            <DirectionsCar sx={{ color: 'white', fontSize: 24 }} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'white', fontSize: 22 }}>
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
      <Divider sx={{ borderColor: '#2196f3', mb: 3 }} />

      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: '#363846',
          boxShadow: 'none',
          borderRadius: 2,
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ background: 'linear-gradient(90deg, #a259e6 60%, #7f53c0 100%)' }}>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Identifier</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Make</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Model</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Year</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Trim</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Trim Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicleData.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#363846' : '#404040',
                  '&:hover': {
                    backgroundColor: '#555',
                  },
                }}
              >
                <TableCell sx={{ color: 'white' }}>{row.id}</TableCell>
                <TableCell sx={{ color: 'white' }}>{row.make}</TableCell>
                <TableCell sx={{ color: 'white' }}>{row.model}</TableCell>
                <TableCell sx={{ color: 'white' }}>{row.year}</TableCell>
                <TableCell sx={{ color: 'white' }}>{row.trim}</TableCell>
                <TableCell sx={{ color: 'white' }}>{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}