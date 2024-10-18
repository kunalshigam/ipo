import React from 'react';
import { Stepper, Step, StepLabel, Box, StepConnector, Typography, useMediaQuery } from '@mui/material';
import { Done } from '@mui/icons-material';

const CustomConnector = (props) => (
  <StepConnector
    {...props}
    sx={{
      '&.MuiStepConnector-line': {
        borderColor: 'grey',
        borderTopWidth: 5, 
      },
      '&.MuiStepConnector-alternativeLabel': {
        top: 40, 
      },
      '&.Mui-active .MuiStepConnector-line': {
        borderColor: 'green',
        borderTopWidth: 5, 
      },
      '&.Mui-completed .MuiStepConnector-line': {
        borderColor: 'green', 
        borderTopWidth: 5, 
      },
    }}
  />
);

const IpoStepper = () => {
  const steps = [
    {
      label: 'Bidding Starts',
      description: `12 Dec 2023`,
    },
    {
      label: 'Bidding Ends',
      description: '14 Dec 2023',
    },
    {
      label: 'Alloting Date',
      description: `20 Dec 2023`,
    },
    {
      label: 'Refund Date',
      description: '25 Dec 2023',
    },
    {
      label: 'Demat Date',
      description: '01 Jan 2024',
    },
    {
      label: 'Listing Date',
      description: '02 Jan 2024',
    },
  ];

  const activeStep = 1;
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ width: '100%', px: { xs: 1, sm: 2 }, py: 2 }}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        orientation={isMobile ? 'vertical' : 'horizontal'}
        connector={isMobile ? null : <CustomConnector />}
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
        }}
      >
        {steps.map((step, index) => (
          <Step
            key={step.label}
            completed={index < activeStep}
            active={index === activeStep}
            sx={{
              flexDirection: { xs: 'row', sm: 'column' },
              alignItems: { xs: 'center', sm: 'flex-start' },
              position: 'relative',
              mb: { xs: 2, sm: 0 },
              justifyContent: { xs: 'center', sm: 'flex-start' },
            }}
          >
            <StepLabel
              StepIconComponent={() => (
                <Box
                  sx={{
                    width: { xs: 60, sm: 80 },
                    height: { xs: 60, sm: 80 },
                    borderRadius: '50%',
                    backgroundColor: index < activeStep ? 'green' : 'grey',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <Done sx={{ color: 'white', fontSize: { xs: 30, sm: 40 } }} />
                </Box>
              )}
              sx={{
                ml: { xs: 0, sm: 0 },
                textAlign: 'center',
                '&.Mui-active': {
                  fontWeight: 'bold',
                  color: 'green',
                },
                '&.Mui-completed': {
                  color: 'green',
                },
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 'medium', mb: 1 }}>
                {step.label}
              </Typography>
              <Typography variant="body2" sx={{ color: 'textSecondary', textAlign: 'center' }}>
                {step.description}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default IpoStepper;
