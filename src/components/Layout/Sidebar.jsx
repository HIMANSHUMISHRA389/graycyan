import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import {
  Home,
  Assignment,
  Inbox,
  Person,
  Inventory,
  TrendingUp,
  ShoppingCart,
  Category,
  People,
  Contacts,
  AttachMoney,
  ExpandLess,
  ExpandMore,
  Search,
  ViewList,
  Add,
  Edit,
} from '@mui/icons-material';

const drawerWidth = 300;

const menuItems = [
  { text: 'Home', icon: <Home />, path: '/' },
  { 
    text: 'My Tasks', 
    icon: <Assignment />, 
    path: '/tasks',
    expandable: true,
    subItems: []
  },
  { text: 'Inbox', icon: <Inbox />, path: '/inbox' },
  { 
    text: 'Customer', 
    icon: <Person />, 
    path: '/customer',
    expandable: true,
    subItems: []
  },
  {
    text: 'Inventory',
    icon: <Inventory />,
    path: '/inventory',
    expandable: true,
    expanded: true,
    subItems: [
      { text: 'Overview', icon: null, path: '/inventory/overview' },
      { text: 'Product Search', icon: <Search />, path: '/inventory/search' },
      { text: 'All Products', icon: <ViewList />, path: '/inventory/products', active: true },
      { text: 'New Product', icon: <Add />, path: '/inventory/new' },
      { text: 'Existing Product', icon: <Edit />, path: '/inventory/existing', active: true },
    ],
  },
  { text: 'Follow ups', icon: <TrendingUp />, path: '/followups' },
  { 
    text: 'Orders', 
    icon: <ShoppingCart />, 
    path: '/orders',
    expandable: true,
    subItems: []
  },
  { text: 'Products', icon: <Category />, path: '/products' },
  { text: 'Users', icon: <People />, path: '/users' },
  { text: 'Leads', icon: <Contacts />, path: '/leads' },
  { text: 'Pricelist', icon: <AttachMoney />, path: '/pricelist' },
];

export default function Sidebar() {
  const [expanded, setExpanded] = React.useState({ Inventory: true });

  const handleExpand = (item) => {
    setExpanded(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1a1a1a',
          borderRight: '1px solid #333',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'white', 
            fontWeight: 'bold',
            fontStyle: 'italic',
            letterSpacing: 1
          }}
        >
          COMPANY LOGO
        </Typography>
      </Box>
      <Divider sx={{ borderColor: '#333' }} />
      
      <List sx={{ pt: 1 }}>
        {menuItems.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => item.expandable && handleExpand(item.text)}
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#333',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: '0.9rem',
                    fontWeight: item.text === 'Inventory' ? 600 : 400
                  }}
                />
                {item.expandable && (
                  expanded[item.text] ? <ExpandLess /> : <ExpandMore />
                )}
              </ListItemButton>
            </ListItem>
            
            {item.expandable && (
              <Collapse in={expanded[item.text]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems?.map((subItem) => (
                    <ListItem key={subItem.text} disablePadding>
                      <ListItemButton
                        sx={{
                          pl: 4,
                          color: subItem.active ? '#9c27b0' : '#b3b3b3',
                          backgroundColor: subItem.active ? 'rgba(156, 39, 176, 0.1)' : 'transparent',
                          '&:hover': {
                            backgroundColor: 'rgba(156, 39, 176, 0.2)',
                          },
                        }}
                      >
                        {subItem.icon && (
                          <ListItemIcon sx={{ color: 'inherit', minWidth: 32 }}>
                            {subItem.icon}
                          </ListItemIcon>
                        )}
                        <ListItemText 
                          primary={subItem.text}
                          primaryTypographyProps={{
                            fontSize: '0.85rem',
                            fontWeight: subItem.active ? 600 : 400
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}