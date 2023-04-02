import React, { useState } from "react";
import { Button, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useFormik, Field } from "formik";
import DialogTitle from "@mui/material/DialogTitle";
import ImageUploader from "./ImageUploader";

export default function PostForm(props) {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const formik = useFormik({
    initialValues: {
      email: "",

      price: 0,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { open, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog maxWidth="lg" open={open} onClose={handleClose}>
      <DialogTitle>Add a new listing</DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={0} sx={{ height: "100%" }}>
            <Grid item xs={6}>
              <TextField
                sx={{
                  width: 500,
                  maxWidth: "100%",
                }}
                margin="normal"
                required
                id="outlined-required"
                label="Product Name"
              />

              <TextField
                required
                margin="normal"
                id="outlined-number"
                label="Price"
                type="number"
                InputProps={{
                  startAdornment: <InputAdornment position="start">₪</InputAdornment>,
                }}
              />
              <TextField
                sx={{
                  width: 500,
                  maxWidth: "100%",
                }}
                margin="normal"
                id="outlined-multiline-static"
                label="Product Description"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{
                  width: 500,
                  maxWidth: "100%",
                }}
                margin="normal"
                required
                id="outlined-required"
                label="Phone Number"
              />
              <ImageUploader></ImageUploader>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button type="submit" onClick={handleClose}>
          Upload
        </Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
