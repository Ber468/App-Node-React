import { Grid, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const { palette } = useTheme();

  return (
    <Grid container height="100vh" bgcolor={palette.background.default}>
      <Outlet />
    </Grid>
  );
};

export { Layout };