import React, { useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ListItemRouterLink from './ListItemRouterLink';

export function MainListItems() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <ListItemRouterLink
        icon={<DashboardIcon />}
        primary="home"
        to="/"
        selected={selectedIndex === 0}
        index={0}
      />
      <ListItemRouterLink
        icon={<ShoppingCartIcon />}
        primary="products"
        to="/products"
        selected={selectedIndex === 1}
        handleListItemClick={handleListItemClick}
        index={1}
      />
      {/* <ListItemRouterLink
        icon={<PeopleIcon />}
        primary="العملاء"
        to="/login"
        selected={selectedIndex === 2}
        handleListItemClick={handleListItemClick}
        index={2}
      /> */}
      {/* <ListItemRouterLink
        icon={<BarChartIcon />}
        primary="الريبورتات"
        to="/charts"
        selected={selectedIndex === 3}
        handleListItemClick={handleListItemClick}
        index={3}
      /> */}
      {/* <ListItemRouterLink
        icon={<LayersIcon />}
        primary="التفاصيل"
        to="/test3"
        selected={selectedIndex === 4}
        handleListItemClick={handleListItemClick}
        index={4}
      /> */}
    </>
  );
}

// export function SecondaryListItems() {
//   return (
//     <>
//       <ListSubheader component="div" inset>
//         قائمة ثانوية
//       </ListSubheader>
//       <ListItemRouterLink
//         icon={<AssignmentIcon />}
//         primary="الشهر الحالي"
//         to="/testnone1"
//       />
//       <ListItemRouterLink
//         icon={<AssignmentIcon />}
//         primary="الربع الاخير"
//         to="/testnone2"
//       />
//       <ListItemRouterLink
//         icon={<AssignmentIcon />}
//         primary="اخر السنة"
//         to="/testnone3"
//       />
//     </>
//   );
// }
