import React, { useState } from "react";
import "./styles.css";
// import { AccessAlarm } from "@mui/icons-material";
// import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Personal Information",
    "Payment",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          {/* <AccessAlarm /> */}
          {/* <SupervisorAccountIcon /> */}
          <div align="center">
            <h3>Welcome first things first...</h3>
            <p>You can always change them later</p>
          </div>

          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <label>Full Name</label>
            <TextField fullWidth label="steve jobs" id="fullWidth" />
            <br />
            <br />
            <label>Display Name</label>
            <TextField fullWidth label="steve" id="fullWidth" />
          </Box>
          <br />
        </>
      );

    case 1:
      return (
        <>
          <div align="center">
            <h3>Let's set up a home for all your work</h3>
            <p>You can always create workspace later</p>
          </div>
          {/* <TextField
            id="email"
            label="Eden"
            variant="outlined"
            placeholder="Eden"
            fullWidth
            margin="normal"
            name="emailAddress"
          /> */}
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <label> Workspace Name </label>
            <TextField fullWidth label="Eden" id="fullWidth" />
            <br />
            <br />
            <label> Workspace Name </label>
            <br />
            <TextField label="www.eden.com/" id="fullWidth" />
            <TextField className="inptt" label="Eden" id="fullWidth" />
          </Box>
          <br />
        </>
      );
    case 2:
      return (
        <>
          <div align="center">
            <h3>How are you planning to use Eden?</h3>
            <p>We'll streamline your setup experience accordingly</p>
          </div>
          <br />
          <div className="flex-container">
            <div className="flex-item" align="left">
              <PersonIcon color="primary" />
              <br />
              <br />
              <h6 className="check">For myself</h6>
              <p>write better. think more clearly, stay organised</p>
            </div>
            <div className="flex-item" align="left">
              <PeopleAltIcon color="primary" />
              <br />
              <br />
              <h6>With my team</h6>
              <p>Wikis, docs, tasks and Projects, all in one place</p>
            </div>
          </div>
          <br />
        </>
      );
    case 3:
      return (
        <>
          <div align="center"><br />
            <CheckCircleSharpIcon fontSize="large" className="icon" color="primary" /><br /><br />
            <h3>Congratulations, Eren!</h3>
            <p>you have completed onBoarding, you can start using the eden!</p><br />
          </div>
        </>
      );
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const downTextFunc = () => {
    if (activeStep === 3) {
      return "Launch Eden";
    } else {
      return "Create WorkSpace";
    }
  };

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  // const handleBack = () => {
  //   setActiveStep(activeStep - 1)
  // }

  // const handleSkip = () => {
  //   if (!isStepSkipped(activeStep)) {
  //     setSkippedSteps([...skippedSteps, activeStep])
  //   }
  //   setActiveStep(activeStep + 1)
  // }

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography
          //       variant="caption"
          //       align="center"
          //       style={{ display: "block" }}
          //     >
          //       optional
          //     </Typography>
          //   );
          // }
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel className="step-label" {...labelProps}></StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          {/* <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button> */}
          {/* {isStepOptional(activeStep) && (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSkip}
            >
              skip
            </Button>
          )} */}
          <div align="center">
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              {/* {activeStep === steps.length - 1 ? 'Finish' : 'Next'} */}
              {downTextFunc()}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
