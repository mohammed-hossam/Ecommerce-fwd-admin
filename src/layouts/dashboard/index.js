import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
import SideBar from '../../components/sidebar';
import { Box } from '@mui/material';
import HomePage from '../../pages/home';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',

  //from material kit template
  // display: 'flex',
  // minHeight: '100%',
  // overflow: 'hidden',
});

const MainStyle = styled(Box)(({ theme }) => ({
  // direction: 'rtl',
  //Box from dashboard tmplate
  flexGrow: 1,
  height: '100vh',
  overflow: 'auto',
  backgroundColor:
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[900],

  // minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <RootStyle>
        {/* <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            display: 'flex',
            height: '100vh',
            overflow: 'auto',
          }}
        > */}
        {/* <DashboardSidebar
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      /> */}

        <SideBar />
        <MainStyle>
          <Outlet />
        </MainStyle>
        {/* </Box> */}
      </RootStyle>
    </>
  );
}
