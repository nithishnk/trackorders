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
root:
{
  width: '100%',
},
button: 
{
  marginTop: theme.spacing(1),
  marginRight: theme.spacing(1),
},
actionsContainer: 
{
  marginBottom: theme.spacing(2),
},
resetContainer: 
{
  padding: theme.spacing(3),
},
}));

function getSteps() 
{
  return ['Payment Received', 
          'Method', 
          'Amount (USD)'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return  <div className="">
      
            </div>;
    case 1:
      return <div className="radioCurrency row">
      
  <div className="form-check selection p-2">
                        <input name="registrationFor" value="TD Canada Trust" type="radio" required/>
                        <label htmlFor="tdcanadatrust">
                            <div className="radioBox">
                                
                                <p className="m-0">Etransfer</p>
                            </div>
                        </label>
                </div>
                <div className="form-check selection p-2">
                        <input name="registrationFor" value="TD Canada Trust" type="radio" required/>
                        <label htmlFor="tdcanadatrust">
                            <div className="radioBox">
                                
                                <p className="m-0">Wire Transfer</p>
                            </div>
                        </label>
                </div>
    </div>;
    case 2:
      return <div className="">
      </div>;
    case 3:
    return <div className="">
    
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
