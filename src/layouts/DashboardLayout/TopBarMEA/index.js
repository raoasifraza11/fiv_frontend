import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  SvgIcon
} from '@material-ui/core';
import { Menu as MenuIcon } from 'react-feather';
import Logo from 'src/components/Logo';
import { THEMES } from 'src/constants';
import Account from './Account';
import Search from './Search';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    ...theme.name === THEMES.LIGHT ? {
      boxShadow: 'none',
      backgroundColor: theme.palette.primary.main
    } : {},
    ...theme.name === THEMES.ONE_DARK ? {
      backgroundColor: theme.palette.background.default
    } : {}
  },
  toolbar: {
    minHeight: 64
  }
}));

const TopBarMEA = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <SvgIcon fontSize="small">
              <MenuIcon />
            </SvgIcon>
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <RouterLink to="/">
            <Logo />
          </RouterLink>
        </Hidden>
        <Box
          ml={2}
          flexGrow={1}
        />
        <Search />
        <Box ml={2}>
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

TopBarMEA.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

TopBarMEA.defaultProps = {
  onMobileNavOpen: () => {}
};

export default TopBarMEA;
