import React from "react";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import config from "../../config";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to {config.projectName}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Find your perfect career path and mentor
        </Typography>
        <Card>
          <CardContent>
            <Typography color="textSecondary">
              Join thousands of others who have discovered their ideal career
              with us.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              component={Link}
              to="/signup"
              variant="contained"
              color="primary"
            >
              Register Now
            </Button>
            <Button
              component={Link}
              to="/test"
              variant="outlined"
              color="primary"
            >
              Take the Career Test
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default LandingPage;
