import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip
} from '@material-ui/core';

interface IListItemLink {
  icon: React.ReactNode;
  primary: string;
  to: string;
  selected?: boolean;
  minimized: boolean;
}

const ListItemLink: React.FC<IListItemLink> = ({ icon, primary, to, minimized }) => {
  const CustomLink = React.useMemo(() => React.forwardRef<HTMLAnchorElement>((linkProps, ref) => (
    <NavLink exact ref={ref} to={to} activeClassName="Mui-selected" {...linkProps} />
  )), [to]);

  return !minimized ? (
    <Tooltip title={primary} placement="right">
      <ListItem button component={CustomLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{primary}</ListItemText>
      </ListItem>
    </Tooltip>
  ) : (
      <ListItem button component={CustomLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{primary}</ListItemText>
      </ListItem>
    );
}

export default ListItemLink;