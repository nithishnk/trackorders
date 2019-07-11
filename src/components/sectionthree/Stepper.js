import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../sectionthree/SectionThree.css'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Checkout', 'Payment Authorization', 'Destination Authorization', 'Procurement','Fulfilment'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <div className="">
              <div className="mt-3">
                <span className="txt-style px-5">10:30  </span>
                <span><i class="fas fa-long-arrow-alt-right"></i></span>
                <span className="txt-style px-5">12:30</span>
              </div>
              <div>
                <div className="d-flex mt-3">
                <div className="px-5">
                <h6>BLR</h6>
                <small>Bangalore</small>
                </div>
                <div className="ml-5 px-5">
                <h6>JFK</h6>
                <small>New York</small>
                </div>
                </div>
              </div>
            </div>;
    case 1:
      return <div className="">
      <div className="mt-3">
        <span className="txt-style">10:30  </span>
        <span><i class="fas fa-long-arrow-alt-right"></i></span>
        <span className="txt-style">12:30</span>
      </div>
      <div>
        <div className="d-flex mt-3">
        <div className="px-5">
        <h6>BLR</h6>
        <small>Bangalore</small>
        </div>
        <div className="ml-5 px-5">
        <h6>JFK</h6>
        <small>New York</small>
        </div>
        </div>
      </div>
    </div>;
    case 2:
      return <div className="">
      <div className="mt-3">
        <span className="txt-style px-5">10:30  </span>
        <span><i class="fas fa-long-arrow-alt-right"></i></span>
        <span className="txt-style px-5">12:30</span>
      </div>
      <div>
        <div className="d-flex mt-3">
        <div className="px-5">
        <h6>BLR</h6>
        <small>Bangalore</small>
        </div>
        <div className="ml-5 px-5">
        <h6>JFK</h6>
        <small>New York</small>
        </div>
        </div>
      </div>
    </div>;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className="body-clr">
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
    </div>
  );
}
