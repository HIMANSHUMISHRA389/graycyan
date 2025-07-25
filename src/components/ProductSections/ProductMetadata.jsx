// import React from 'react';
// import {
//   Typography,
//   Box,
//   Grid,
//   IconButton,
//   Tooltip,
//   Divider,
//   useTheme,
//   useMediaQuery,
// } from '@mui/material';
// import { DataObject, Edit, ArrowDropUp, MoreVert } from '@mui/icons-material';

// export default function ProductMetadata() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   return (
//     <Box
//       sx={{
//         background: '#363846',
//         border: '2px solid #4a4a5a',
//         borderRadius: 3,
//         boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
//         p: 3,
//         mb: 2,
//       }}
//     >
//       {/* Header */}
//       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, flexWrap: 'wrap' }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//           <Box
//             sx={{
//               width: { xs: 32, md: 40 },
//               height: { xs: 32, md: 40 },
//               borderRadius: '50%',
//               backgroundColor: '#a259e6',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               boxShadow: '0 2px 8px rgba(162,89,230,0.15)',
//             }}
//           >
//             <DataObject sx={{ color: 'white', fontSize: { xs: 20, md: 24 } }} />
//           </Box>
//           <Typography variant={isMobile ? "h6" : "h5"} sx={{ fontWeight: 600, color: 'white' }}>
//             Product Metadata Attributes
//           </Typography>
//         </Box>
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           {isMobile ? (
//             <IconButton size="small" sx={{ color: 'white' }}>
//               <MoreVert />
//             </IconButton>
//           ) : (
//             <>
//               <Tooltip title="Edit">
//                 <IconButton
//                   size="small"
//                   sx={{
//                     background: 'linear-gradient(135deg, #a259e6 60%, #7f53c0 100%)',
//                     color: 'white',
//                     borderRadius: 2,
//                     p: 1,
//                     boxShadow: '0 2px 8px rgba(162,89,230,0.15)',
//                     '&:hover': { background: 'linear-gradient(135deg, #7f53c0 60%, #a259e6 100%)' },
//                   }}
//                 >
//                   <Edit sx={{ fontSize: 24 }} />
//                 </IconButton>
//               </Tooltip>
//               <IconButton size="small" sx={{ color: 'white', ml: 1 }}>
//                 <ArrowDropUp sx={{ fontSize: 32 }} />
//               </IconButton>
//             </>
//           )}
//         </Box>
//       </Box>
//       <Divider sx={{ borderColor: '#4a4a5a', mb: 3 }} />

//       <Grid container spacing={3}>
//         <Grid item xs={12} md={4}>
//           <Box>
//             <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 0.5 }}>
//               Foot Type
//             </Typography>
//             <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
//               E-Z
//             </Typography>
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Box>
//             <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 0.5 }}>
//               Foot Distance
//             </Typography>
//             <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
//               51.25cm, 52.75cm, 68.34cm
//             </Typography>
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Box>
//             <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 0.5 }}>
//               Technology
//             </Typography>
//             <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
//               SmartLED, Linear Super-LED, TRIO
//             </Typography>
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Box>
//             <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 0.5 }}>
//               Height
//             </Typography>
//             <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
//               17.8cm, 24.9cm, 32.4cm
//             </Typography>
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Box>
//             <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 0.5 }}>
//               Hardware
//             </Typography>
//             <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
//               22 AWG, 33 AWG, 37 AWG
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }


import React from 'react';
import {
  Typography,
  Box,
  Grid,
  IconButton,
  Tooltip,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { DataObject, Edit, ArrowDropUp, MoreVert } from '@mui/icons-material';

export default function ProductMetadata() {
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
            <DataObject sx={{ color: 'white', fontSize: isMobile ? 20 : 24 }} />
          </Box>
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            sx={{ fontWeight: 600, color: 'white' }}
          >
            Product Metadata Attribute
          </Typography>
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
              <IconButton size="small" sx={{ color: 'white', ml: 1 }}>
                <ArrowDropUp sx={{ fontSize: 32 }} />
              </IconButton>
            </>
          )}
        </Box>
        </Box>

        
      </Box>

      <Divider sx={{ borderColor: '#4a4a5a', mb: 3 }} />

      {/* Metadata Grid */}
      <Grid container spacing={3}>
        {[
          { label: 'Foot Type', value: 'E-Z' },
          { label: 'Foot Distance', value: '51.25cm, 52.75cm, 68.34cm' },
          { label: 'Technology', value: 'SmartLED, Linear Super-LED, TRIO' },
          { label: 'Height', value: '17.8cm, 24.9cm, 32.4cm' },
          { label: 'Hardware', value: '22 AWG, 33 AWG, 37 AWG' },
        ].map((item, index) => (
          <Grid item xs={12} md={index < 3 ? 4 : 6} key={index}>
            <Box>
              <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 0.5 }}>
                {item.label}
              </Typography>
              <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
                {item.value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
