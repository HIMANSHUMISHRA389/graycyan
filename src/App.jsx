import React from 'react';
import { ThemeProvider, CssBaseline, Box, useMediaQuery, useTheme } from '@mui/material';
import { darkTheme } from './theme';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import CustomBreadcrumbs from './components/Breadcrumbs/CustomBreadcrumbs';
import ProductBaseProperties from './components/ProductSections/ProductBaseProperties';
import ProductTrackingDetails from './components/ProductSections/ProductTrackingDetails';
import ProductMetadata from './components/ProductSections/ProductMetadata';
import ProductDimensions from './components/ProductSections/ProductDimensions';
import ProductFinancials from './components/ProductSections/ProductFinancials';
import ProductVehicles from './components/ProductSections/ProductVehicles';
import ProductAlternates from './components/ProductSections/ProductAlternates';
import ProductAccessories from './components/ProductSections/ProductAccessories';
import ProductOptions from './components/ProductSections/ProductOptions';
import ProductAssetManagement from './components/ProductSections/ProductAssetManagement';

const drawerWidth = 10;

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Header handleDrawerToggle={handleDrawerToggle} />
        <Sidebar
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
            mt: 8,
            backgroundColor: '#0d1117',
            minHeight: '100vh',
          }}
        >
          <CustomBreadcrumbs />
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <ProductBaseProperties />
            <ProductTrackingDetails />
            <ProductMetadata />

             <ProductDimensions />
             <ProductFinancials />
             <ProductVehicles />
             <ProductAlternates />
              <ProductAccessories />
              <ProductOptions />
              <ProductAssetManagement /> 
            {/* 
            
           
            
            
            
           
            
            
            */}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
