import React from 'react';
import {
  CssBaseline,
  Container,
  Paper,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  Grid,
} from '@material-ui/core';
import Helmet from 'react-helmet';
import {
  ComponentCaseTwo,
} from './StepComponents';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      padding: theme.spacing(1, 5),
    },
    stepRoot: {
      width: '100%',
      paddingBottom: theme.spacing(1),
    },
    stepButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    buttonGrid: {
      width: '100%',
    }
  });
});

function getSteps() {
  let arr = [];

  arr[0] = 'Preparação'
  arr[1] = 'Escolher método';
  arr[2] = 'Conectar';
  arr[3] = 'Desbloquear';
  arr[4] = 'Selecionar ROM';
  arr[5] = 'Instalar';

  return arr;
}

const FlashRom: React.FC = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const steps = getSteps();

  function getStepComponent(step: number) {
    switch (step) {
      case 0:
        return <h1>Prepare seu dispositivo</h1>;
      case 1:
        return <h1>Escolha um médoto de instalação</h1>
      case 2:
        return (<ComponentCaseTwo />);
      case 3:
        return <h1>Desbloqueando dispositivo...</h1>;
      case 4:
        return <h1>Selecione a ROM desejada</h1>;
      case 5:
        return <h1>Instalando ROM...</h1>;
      default:
        return <h1>Etapa desconhecida. ERRO</h1>;
    }
  }

  /*function isStepOptional(step: number) {
    return false;
  };*/

  function isStepSkipped(step: number) {
    return skipped.has(step);
  }

  function handleNext() {
    let newSkipped = skipped;
    if (!isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <>
      <CssBaseline />
      <Helmet>
        <title>GrusADB | Flash Rom</title>
      </Helmet>
      <Container maxWidth="md">
        <Paper className={classes.root}>
          <div className={classes.stepRoot}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: { optional?: React.ReactNode } = { optional: false };
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <div>
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Grid container justify="flex-end" className={classes.buttonGrid}>
                    <Grid item>
                      <Button onClick={handleReset} className={classes.stepButton}>
                        Concluir
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              ) : (
                  <div>
                    {getStepComponent(activeStep)}
                    <Grid container justify="space-between" className={classes.buttonGrid}>
                      <Grid item>
                        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.stepButton}>
                          Voltar
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.stepButton}
                          disableElevation={activeStep === steps.length - 1 ? false : true}
                        >
                          {activeStep === steps.length - 1 ? 'Completar' : 'Prosseguir'}
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                )}
            </div>
          </div>
        </Paper>
      </Container>
    </>
  );
}

export default FlashRom;