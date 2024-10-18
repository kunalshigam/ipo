import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IpoData } from './IpoData';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import IpoStepper from './IpoStepper';

const IpoDetails = () => {
  const [indData, setIndData] = useState([]);
  const { id } = useParams();
  const isMobile = useMediaQuery('(max-width:600px)');

  const dataArr=[
    {
      'name': 'Issue Size',
      'value': '₹3600-3700 Cr'
    },
    {
      'name': 'Price rangee',
      'value': '₹100-200'
    },
    {
      'name': 'Minimum amount',
      'value': '₹50,000'
    },
    {
      'name': 'Lot Size',
      'value': '150 shares/lots'
    },
    {
      'name': 'Issue date',
      'value': '1 Jan-2 Jan 2024'
    },
    {
      'name': 'Listing On',
      'value': '3 Jan 2024'
    },
    {
      'name': 'Listing Price',
      'value': '₹150'
    },
    {
      'name': 'Listing Gain',
      'value': '₹10 (10%)'
    }
  ]

  useEffect(() => {
    setIndData(IpoData?.filter((item) => item.id == id)[0]);
  }, [id]);

  return (
    <Grid sx={{ padding: isMobile ? '0px':'20px 120px 20px 120px', backgroundColor: '#ffff' }}>
      <Grid
        sx={{
          boxShadow: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#f5f5f5',
          borderRadius: '20px',
        }}
      >
        <Box
          sx={{
            boxShadow: 5,
            border: '1px solid #ffff',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: '20px',
            margin: isMobile ? '5px':'25px',
            backgroundColor: '#ffff',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px',
            }}
          >
            <Box sx={{ padding:'10px 20px 10px 0px' }}>
            <Button
              style={{
                maxWidth: isMobile ? '10px':'50px',
                maxHeight: isMobile ? '10px':'50px',
                minWidth: isMobile ? '10px':'50px',
                minHeight: isMobile ? '10px':'50px',
                borderRadius: isMobile ? '2px':'10px',
                backgroundColor: '#ffff',
                color: 'black',
                border: !isMobile && '2px solid grey',
              }}
              component={Link}
              to={`/`}
            >
              <ArrowBackIosNewIcon />
            </Button>
          </Box>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: isMobile ? '0px':'10px',
              }}
            >
              <Box
                sx={{
                  borderRadius: '50%',
                  backgroundColor: '#ffff',
                  border: '2px solid black',
                  height: '70px',
                  width: '70px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={indData?.image}
                  alt="img"
                  style={{ height: '45px', width: '50px' }}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'start',
                  borderRadius: '10px',
                  borderColor: 'red',
                  padding: '0px 10px 0px 10px',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {indData?.name}
                </Typography>
                <Typography
                  variant="p"
                  sx={{ fontWeight: 'medium', color: 'grey' }}
                >
                  {indData?.name} Private Limited
                </Typography>
              </Box>
            </Grid>
          </Box>

          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
              }}
            >
              <Box sx={{ padding: '10px' }}>
                <DownloadForOfflineIcon
                  sx={{ height: '70px', width: '70px', color: 'purple' }}
                />
              </Box>
              <Box sx={{ padding: '10px' }}>
                <Button
                  style={{
                    maxWidth: '200px',
                    maxHeight: '70px',
                    minWidth: '200px',
                    minHeight: '70px',
                    borderRadius: '20px',
                    backgroundColor: 'purple',
                    color: '#ffff',
                    border: '2px solid purple',
                  }}
                >
                  Apply now
                </Button>
              </Box>
            </Box>
          )}
        </Box>

        <Box
          sx={{
            boxShadow: 5,
            border: '1px solid #ffff',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: '20px',
            margin: isMobile ? '5px':'25px',
            backgroundColor: '#ffff',
          }}
        >
          <Box
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <Box sx={{padding:isMobile ? '10px 0px 0px 20px':"25px 0px 0px 25px"}}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'purple' }}>
                IPO Details
              </Typography>
            </Box>
            <Grid
              sx={{
                border: '1px solid grey',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderRadius: '20px',
                margin: isMobile ? '10px':'25px',
                backgroundColor: '#f8f8f8',
              }}
            >
              <Grid container sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
              {
                  dataArr?.map((item, index) => (
                    <Grid item xl={3} lg={3} md={6} sm={6} xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', borderRadius: "10px", borderColor: "red", padding: isMobile ? '10px 5px 10px 5px' : '15px 30px 15px 30px' }}>
                      <Typography variant='p' sx={{ fontWeight: "medium", color: 'grey' }}>{item?.name}</Typography>
                      <Typography variant='p' sx={{ fontWeight: "bold", fontSize:'16px' }}>{item?.value}</Typography>
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            boxShadow: 5,
            border: '1px solid #ffff',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: '20px',
            margin: '25px',
            backgroundColor: '#ffff',
          }}
        >
          <Box
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}
          >
            <Box padding="25px 0px 0px 25px">
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'purple' }}>
                IPO Timeline
              </Typography>
            </Box>
            <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '25px' }}>
              <IpoStepper />
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            boxShadow: 5,
            border: '1px solid #ffff',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: '20px',
            margin: isMobile ? '5px':'25px',
            backgroundColor: '#ffff',
          }}
        >
          <Box
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <Box sx={{padding:isMobile ? '10px 5px 5px 20px':"25px 0px 0px 25px"}}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'purple' }}>
                About the company
              </Typography>
            </Box>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                margin: isMobile ? '10px':'25px',
                backgroundColor: '#ffff',
              }}
            >
              <Typography variant='p' sx={{ fontWeight: "medium", padding:isMobile ? '10px 5px 5px 20px':"25px 0px 0px 25px"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>
              <Typography variant='p' sx={{ fontWeight: "medium", padding:isMobile ? '10px 5px 5px 20px':"25px 0px 0px 25px" }}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
              </Typography>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default IpoDetails;
