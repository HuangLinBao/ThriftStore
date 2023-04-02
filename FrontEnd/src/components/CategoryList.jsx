import * as React from "react";
import { Container, Drawer, Typography } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemButton } from "@mui/material";

import { ListItemText } from "@mui/material";

export default function CategoryList(props) {
  return (
    <Drawer onClose={props.handleDrawerChange} open={props.drawerChange} anchor="left" sx={{ width: "20% " }}>
      <Container maxWidth="xl">
        <Typography fontWeight="bold" color="GrayText" variant="h6" align="justify" sx={{ mt: 5 }}>
          Categories
        </Typography>
        <List>
          {props.categories &&
            props.categories.length > 0 &&
            props.categories.map((catObj, i) => (
              <ListItem disablePadding key={i}>
                <ListItemButton>
                  <ListItemText primary={catObj.Cat_Name} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </Container>
    </Drawer>
  );
}
