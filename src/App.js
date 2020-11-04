import React from "react";
import {
  MuiThemeProvider,
  StylesProvider,
  Typography,
  TextField,
  Grid,
  Paper,
  Button,
} from "@material-ui/core";

import { theme } from "./theme";

import Form from "./components/form/form";

const formData = [
  { fieldLabel: "Email Address", label: "Enter Email Address", name: "email" },
  { fieldLabel: "Password", label: "Enter Password", name: "password" },
  {
    fieldLabel: "Conform Password",
    label: "Enter Re-Password",
    name: "password",
  },
];

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider>
        <div className="App">
          <Grid container justify="center" style={{ height: "400px" }}>
            <Grid
              item
              lg={3}
              md={6}
              xs={12}
              style={{ border: "1px solid #000" }}
            >
              <Typography>Col - 1</Typography>
            </Grid>
            <Grid
              item
              lg={3}
              md={6}
              xs={12}
              style={{ border: "1px solid #000" }}
            >
              <Typography>Col - 1</Typography>
            </Grid>
            <Grid
              item
              lg={3}
              md={6}
              xs={12}
              style={{ border: "1px solid #000" }}
            >
              <Typography>Col - 1</Typography>
            </Grid>
          </Grid>
          <Form formData={formData} />
        </div>
      </StylesProvider>
    </MuiThemeProvider>
  );
}

export default App;
