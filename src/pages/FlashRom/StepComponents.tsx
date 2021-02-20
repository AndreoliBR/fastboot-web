import React from 'react';
import {
  Typography,
  Divider,
  Paper,
  CircularProgress,
  Theme,
  makeStyles,
  createStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    titleTopGap: {
      marginTop: theme.spacing(2),
    },
    paragraphTopGap: {
      marginTop: theme.spacing(1),
    },
    awaitingPaper: {
      padding: theme.spacing(3, 2),
      margin: theme.spacing(1, 0, 2, 0),
    },
  });
})

export function ComponentCaseTwo() {
  const classes = useStyles();
  return (
    <>
      <Divider />
      <Typography variant="h5" className={classes.titleTopGap}>Conecte o seu dispositivo</Typography>
      <Typography className={classes.titleTopGap}>Coloque seu dispositivo no modo bootloader desligando ele, em seguida apertando os botões de <strong>ligar</strong> e <strong>abaixar volume</strong> juntos até que você veja o mascote da Xiaomi.</Typography>
      <Typography className={classes.paragraphTopGap}>Assim que seu dispositivo entrar no modo bootloader, conecte-o no seu computador. Certifique-se de usar um cabo USB de <strong>alta qualidade</strong>, visto que um cabo fraco pode causar problemas na instalação. Evite hubs USB se possível.</Typography>
      <Typography className={classes.paragraphTopGap}>Seu cabo USB precisa permitir transferência de dados, uma vez que cabos apenas para carregar o dispositivo não funcionarão.</Typography>
      <Paper variant="outlined" className={classes.awaitingPaper}>
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <CircularProgress />
          <Typography style={{ marginLeft: 10 }}>Aguardando conexão...</Typography>
        </div>
      </Paper>
    </>
  );
}