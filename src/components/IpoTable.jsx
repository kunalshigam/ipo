import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'

const IpoTable = ({ ipoData }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))  // Check if the screen is mobile

  return (
    <Box sx={{ boxShadow: 5 }}>
      {!isMobile ? (
        // Table view for larger screens (desktop/tablet)
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell>Company/ Issue date</TableCell>
                <TableCell>Issue size</TableCell>
                <TableCell>Price range</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', borderRadius: "10px", borderColor: "red", padding: isMobile ? '0px':'0px 10px 0px 10px' }}>
                    Min investment/qty
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ipoData?.map((ipo) => (
                <TableRow key={ipo.id} component={Link} to={`/details/${ipo.id}`} style={{ textDecoration: 'none' }}>
                  <TableCell>
                    <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <Box sx={{ borderRadius: "50%", backgroundColor: '#ffff', border: '2px solid black', height: "70px", width: '70px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={ipo.image} alt='img' style={{ height: "45px", width: '50px' }} />
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start', borderRadius: "10px", borderColor: "red", padding: '0px 10px 0px 10px' }}>
                        <Typography variant='h6' sx={{ fontWeight: "bold" }}>{ipo.name}</Typography>
                        <Typography variant='body2' sx={{ fontWeight: "medium", color: 'grey' }}>{ipo.ipoStartDate} - {ipo.ipoEndDate}</Typography>
                      </Box>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography variant='h6' sx={{ fontWeight: "bold" }}>{ipo.ipoValue}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography variant='h6' sx={{ fontWeight: "bold" }}>{ipo.priceRange}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', borderRadius: "10px", borderColor: "red", padding: '0px 10px 0px 10px' }}>
                      <Typography variant='h6' sx={{ fontWeight: "bold" }}>{ipo.minInvestment}</Typography>
                      <Typography variant='body2' sx={{ fontWeight: "medium", color: 'grey' }}>{ipo.valuePerShare}</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        // Mobile view using Grid
        <Grid container spacing={2}>
          {ipoData?.map((ipo) => (
            <Grid item xs={12} key={ipo.id} component={Link} to={`/details/${ipo.id}`} style={{ textDecoration: 'none' }}>
              <Paper elevation={3} sx={{ padding: '16px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ borderRadius: "50%", backgroundColor: '#ffff', border: '2px solid black', height: "50px", width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={ipo.image} alt='img' style={{ height: "35px", width: '40px' }} />
                  </Box>
                  <Box sx={{ marginLeft: '16px' }}>
                    <Typography variant='h6' sx={{ fontWeight: "bold" }}>{ipo.name}</Typography>
                    <Typography variant='body2' sx={{ fontWeight: "medium", color: 'grey' }}>{ipo.ipoStartDate} - {ipo.ipoEndDate}</Typography>
                  </Box>
                </Box>
                <Box sx={{ marginTop: '16px' }}>
                  <Typography variant='body1' sx={{ fontWeight: "bold" }}>Issue size: {ipo.ipoValue}</Typography>
                  <Typography variant='body1' sx={{ fontWeight: "bold" }}>Price range: {ipo.priceRange}</Typography>
                  <Typography variant='body1' sx={{ fontWeight: "bold" }}>Min investment: {ipo.minInvestment}</Typography>
                  <Typography variant='body2' sx={{ fontWeight: "medium", color: 'grey' }}>{ipo.valuePerShare}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}

export default IpoTable
