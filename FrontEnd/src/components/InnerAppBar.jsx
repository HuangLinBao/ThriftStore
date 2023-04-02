import * as React from "react";
import { Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Popover from "@mui/material/Popover";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DenseTable from "./SubCategories";
import Box from "@mui/material/Box";

export default function InnerAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <AppBar color="transparent" position="static" sx={{ boxShadow: "0px 0px 0px 0px" }}>
      <Toolbar>
        <Button onClick={handleClick}>
          <Typography variant="h5" sx={{ color: "black" }}>
            For Sale
          </Typography>
          <ArrowForwardIosIcon sx={{ color: "black", pl: 2 }}></ArrowForwardIosIcon>
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          sx={{ boxShadow: "0px 0px 0px 0px" }}
        >
          <DenseTable></DenseTable>
        </Popover>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            gap: 2,
            justifyContent: "flex-end",
          }}
        >
          <Button variant="outlined" color="primary" sx={{ my: 2, display: "block" }}>
            Nablus
          </Button>
          <Button variant="outlined" color="primary" sx={{ my: 2, display: "block" }}>
            <MoreHorizIcon fontSize="large"></MoreHorizIcon>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
