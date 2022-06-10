import React, { forwardRef, useMemo, useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {
  Link as RouterLink,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';
import { ListItemButton } from '@mui/material';

function ListItemRouterLink(props) {
  const { icon, primary, to, selected, handleListItemClick, index } = props;

  //state
  // const [selectedIndex, setSelectedIndex] = useState(0);

  // //handle functions
  // const handleListItemClick = (event, index) => {
  //   setSelectedIndex(index);
  // };

  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const renderLink = useMemo(
    () =>
      forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to]
  );

  return (
    <li>
      <ListItemButton
        button="true"
        component={renderLink}
        // sx={{ backgroundColor: match && '#1976d25c' }}
        selected={match}
        // selected={selected}
        onClick={(event) => handleListItemClick(event, index)}
      >
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText
          primary={primary}
          primaryTypographyProps={{ variant: 'subtitle1' }}
        />
      </ListItemButton>
    </li>
  );
}

export default ListItemRouterLink;
