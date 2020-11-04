import React from "react";

import { Paper, Button, Grid, Typography, TextField } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "1rem",
    padding: "1rem",
    width: "10rem",
    border: "1px solid #333",
    color: "aqua",
  },
  btn: {
    textTransform: "capitalize",
  },
}));

const Form = ({ formData }) => {
  const classes = useStyles();
  return (
    <div style={{ margin: "5rem auto", maxWidth: "800px" }}>
      <form>
        <Paper style={{ padding: "1rem" }}>
          {formData.map((item, i) => (
            <Grid container key={i} style={{ margin: "2rem 0" }}>
              <Grid item lg={4}>
                <Typography variant="h4">{item.fieldLabel}</Typography>
              </Grid>
              <Grid item lg={8}>
                <TextField
                  variant="outlined"
                  label={item.label}
                  style={{ width: "100%" }}
                  type={item.name}
                />
              </Grid>
            </Grid>
          ))}
          <Grid container justify="center">
            <Button className={`${classes.button} ${classes.btn}`}>
              Click Me
            </Button>
          </Grid>
        </Paper>
      </form>
    </div>
  );
};

export default Form;
