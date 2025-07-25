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
  Paper,
  IconButton,
  Avatar,
  Tooltip,
  Divider,
} from '@mui/material';
import { Image, Add, ArrowDropUp } from '@mui/icons-material';
import { EditOutlined, DeleteOutline } from '@mui/icons-material';

const assetData = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
    info: 'Front view',
    url: 'https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
    info: 'Back View',
    url: 'https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
    info: 'Top angle view',
    url: 'https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
    info: 'Bottom angle View',
    url: 'https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
    info: 'Left angle View',
    url: 'https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2'
  },
];

export default function ProductAssetManagement() {
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
            <Image sx={{ color: 'white', fontSize: 24 }} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'white', fontSize: 22 }}>
            Product Asset Management
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title="Add Asset">
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
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>S.No.</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Image</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Image Info</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Image URL</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assetData.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#363846' : '#404040',
                  '&:hover': {
                    backgroundColor: '#555',
                  },
                }}
              >
                <TableCell sx={{ color: 'white' }}>{row.id}</TableCell>
                <TableCell>
                  <Avatar
                    src={row.image}
                    alt={row.info}
                    sx={{ width: 40, height: 40, bgcolor: 'white' }}
                    variant="rounded"
                  />
                </TableCell>
                <TableCell sx={{ color: 'white' }}>{row.info}</TableCell>
                <TableCell sx={{ color: '#03dac6', maxWidth: 320, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  <Typography
                    variant="body2"
                    sx={{
                      cursor: 'pointer',
                      '&:hover': { textDecoration: 'underline' }
                    }}
                  >
                    {row.url} ↗
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Tooltip title="Edit">
                      <IconButton
                        size="small"
                        sx={{
                          border: '2px solid white',
                          color: 'white',
                          background: 'transparent',
                          borderRadius: 2,
                          p: 0.5,
                          transition: 'border-color 0.2s',
                          '&:hover': { borderColor: '#a259e6' }
                        }}
                      >
                        <EditOutlined fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton
                        size="small"
                        sx={{
                          border: '2px solid #f44336',
                          color: '#f44336',
                          background: 'transparent',
                          borderRadius: 2,
                          p: 0.5,
                          transition: 'border-color 0.2s',
                          '&:hover': { borderColor: '#c62828', color: '#c62828' }
                        }}
                      >
                        <DeleteOutline fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}