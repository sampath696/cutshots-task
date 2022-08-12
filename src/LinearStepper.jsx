import React, { useState } from "react";
import "./styles.css";
import { AccessAlarm } from "@mui/icons-material";
// import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
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
          <AccessAlarm />
          {/* <SupervisorAccountIcon /> */}
          <h1>Welcom first things first...</h1>
          <p>You can always change them later</p>
          <TextField
            id="first-name"
            label="steve jobs"
            variant="outlined"
            placeholder="steve jobs"
            fullWidth
            margin="normal"
            name="firstName"
          />
          <TextField
            id="Display-name"
            label="steve"
            variant="outlined"
            placeholder="steve"
            fullWidth
            margin="normal"
            name="lastName"
          />
        </>
      );

    case 1:
      return (
        <>
          <h1>Let's set up a home for all your work</h1>
          <p>You can always create workspace later</p>
          <label> Workspace Name </label>
          <TextField
            id="email"
            label="Eden"
            variant="outlined"
            placeholder="Eden"
            fullWidth
            margin="normal"
            name="emailAddress"
          />
          <label> Workspace Url (optional) </label>
          <div className="col-sm-3 my-1">
            <label className="sr-only" for="inlineFormInputGroupUsername">
              Username
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroupUsername"
                placeholder="Username"
              />
            </div>
          </div>
        </>
      );
    case 2:
      return (
        <>
          <h1>How are you planning to use Eden?</h1>
          <p>We'll streamline your setup experience accordingly</p>
          <div>
            <div>
              <PersonIcon />
              <h3 className="check">For myself</h3>
              <p>write better. think more clearly, stay organised</p>
            </div>
            <div>
              <PeopleAltIcon />
              <h3>With my team</h3>
              <p>Wikis, docs, tasks and Projects, all in one place</p>
            </div>
          </div>
        </>
      );
    case 3:
      return (
        <>
          <CheckCircleSharpIcon fontSize="large" color="primary" />
          <h1>Congratulations, Eren!</h1>
          <p>you have completed onBoarding, you can start using the eden!</p>
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
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}></StepLabel>
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
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {/* {activeStep === steps.length - 1 ? 'Finish' : 'Next'} */}
            {downTextFunc()}
          </Button>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
