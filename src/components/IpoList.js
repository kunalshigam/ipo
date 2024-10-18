import React from 'react';
import { Container, Typography, Grid, Card, CardContent, useMediaQuery } from '@mui/material';
import IpoTable from './IpoTable';
import { IpoData } from './IpoData';
import { useTheme } from '@mui/material/styles'

const IpoList = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Grid sx={{padding: isMobile ? '0px':'20px 120px 20px 120px', backgroundColor: "#ffff"}}>
      <IpoTable ipoData={IpoData} />
    </Grid>
  );
};

export default IpoList;