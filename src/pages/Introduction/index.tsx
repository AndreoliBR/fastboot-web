import React from 'react';
import Helmet from 'react-helmet';
import {
  Typography,
  Container,
  Divider,
  CssBaseline,
  createStyles,
  makeStyles,
  Theme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.4em'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.25)',
      }
    },
    textCenter: {
      textAlign: 'center',
    },
    divider: {
      margin: '10px 0px',
    },
    titleTopGap: {
      marginTop: theme.spacing(2)
    },
  });
})

export default function Introduction() {
  const classes = useStyles();
  const [clipboardDialogOpen, setClipboardDialogOpen] = React.useState(false);
  const [TOSDialogOpen, setTOSDialogOpen] = React.useState(false);

  function handleTOSDialogOpen() {
    setTOSDialogOpen(true);
  }

  function handleTOSDialogClose() {
    setTOSDialogOpen(false);
    localStorage.setItem('tos_read', 'true');
  }

  function handleTOSDeny() {
    localStorage.removeItem('tos_read');
    window.alert('Para usar esse site, você deve aceitar os termos de uso. Caso não o queira aceitar, você pode fechar esta aba.');
  }

  async function copyToClipboard(text: string) {
    await navigator.clipboard.writeText(text);
    handleClipboardDialogOpen();
  }

  function handleClipboardDialogOpen() {
    setClipboardDialogOpen(true);
  }

  function handleClipboardDialogClose() {
    setClipboardDialogOpen(false);
  }

  React.useEffect(() => {
    const cookieAcceptedTOS = localStorage.getItem('tos_read');

    if (!cookieAcceptedTOS) handleTOSDialogOpen();
  }, []);

  return (
    <>
      <CssBaseline />
      <Helmet>
        <title>GrusADB | Introdução</title>
      </Helmet>
      {/* Clipboard Dialog */}
      <Dialog
        open={clipboardDialogOpen}
        onClose={handleClipboardDialogClose}
        aria-labelledby=""
        aria-describedby=""
      >
        <DialogTitle>URL copiada para a área de transferência</DialogTitle>
        <DialogActions>
          <Button onClick={handleClipboardDialogClose} color="primary">OK</Button>
        </DialogActions>
      </Dialog>
      {/* TOS Dialog */}
      <Dialog
        open={TOSDialogOpen}
        onClose={handleTOSDialogClose}
        aria-labelledby=""
        aria-describedby=""
        disableBackdropClick
        disableEscapeKeyDown
      >
        <DialogTitle>Termos de uso</DialogTitle>
        <DialogContent>
          <DialogContentText>Essa ferramenta, apesar de útil, serve apenas para automatizar processos simples e de forma alguma deve ser usada por usuários inexperientes. Apenas a utilize se você souber recuperar seu dispositivo em caso de problemas. Portanto, não é responsabilidade do desenvolvedor quaisquer danos causados em seu dispositivo.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTOSDialogClose} color="primary">Entendo e aceito os riscos</Button>
          <Button onClick={handleTOSDeny}>Não aceito os termos</Button>
        </DialogActions>
      </Dialog>

      <Container maxWidth="sm">
        <Typography variant="subtitle2" className={classes.textCenter}>É recomendado que você use a última versão do navegador Google Chrome ou Microsoft Edge para maior compatibilidade. WebADB &amp; Fastboot para <code>grus</code> hospedado pela Vercel.</Typography>
        <Divider className={classes.divider} />
        <Typography variant="h6"><strong>Usuário de Windows?</strong></Typography>
        <Typography>O novo backend experimental precisa estar ativo para usar este site. Ative-o em <a href="#!" onClick={async () => copyToClipboard('chrome://flags/#new-usb-backend')}>chrome://flags/#new-usb-backend (clique para copiar)</a>.</Typography>
        <Typography variant="h6" className={classes.titleTopGap}><strong>Recebeu o erro "Unable to claim interface"</strong></Typography>
        <Typography>Apenas um software por vez pode se conectar ao seu dispositivo. Certifique-se que nenhum servidor ADB está ativo (use <code>adb kill-server</code> para pará-lo). Certifique-se também que nenhuma ferramenta de gerenciamento do Android está rodando (Android Studio, Xiaomi Mi Suite, etc.)</Typography>
        <Typography variant="h6" className={classes.titleTopGap}><strong>Recebeu o erro "Unable to load device 0x00ff56"</strong></Typography>
        <Typography>Se você estiver usando a MIUI 10 ou anterior, isso é causado por um driver desatualizado. Veja <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1127206" target="_blank" rel="noreferrer">https://bugs.chromium.org/p/chromium/issues/detail?id=1127206</a> para mais detalhes.</Typography>
      </Container>
    </>
  );
}