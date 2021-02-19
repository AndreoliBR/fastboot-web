import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  Drawer,
  Divider,
  List,
  ListSubheader
} from '@material-ui/core';
import ListItemLink from '../ListItemLink';
import {
  MenuRounded,
  ChevronLeftRounded,
  ListAltRounded,
  InfoRounded,
  AdbRounded,
  DesktopWindowsRounded,
  FolderRounded,
  SystemUpdateRounded,
  ScreenShareRounded,
  OfflineBoltRounded,
} from '@material-ui/icons';
import routes from '../../constants/routes.json';

const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    listSubheader: {
      paddingLeft: theme.spacing(7) + 1
    }
  });
});

const NavigationLayout: React.FC = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const drawerIcons = [
    <ListAltRounded />,
    <InfoRounded />,
    <ScreenShareRounded />,
    <FolderRounded />,
    <OfflineBoltRounded />,
    <AdbRounded />,
    <DesktopWindowsRounded />,
    <SystemUpdateRounded />,
  ]

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuRounded />
          </IconButton>
          <Typography variant="h6" noWrap>
            Web ABD &amp; Fastboot for grus (Mi 9 SE)
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftRounded />
          </IconButton>
        </div>
        <Divider />
        <List>
          {Object.entries(routes).map((entry, index) => (
            <>
              {index === 5 ? <ListSubheader className={classes.listSubheader}>Desenvolvedor</ListSubheader> : void 0}
              <ListItemLink
                icon={drawerIcons[index]}
                to={entry[1]}
                selected
                primary={entry[0]}
                minimized={open}
              />
            </>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

export default NavigationLayout;