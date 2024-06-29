import React from "react";
import { Button, Typography, Card, CardContent, CardActions, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const LandingPage = () => {
    const theme = useTheme();

    return (
        <div style={{
            padding: theme.spacing(4),
            backgroundColor: theme.palette.background.default,
            height: "100vh", // Full view height
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Typography variant="h3" color="primary" gutterBottom>
                Welcome to HackYourCareer
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
                Find your perfect career path and mentor
            </Typography>
            <Card sx={{ maxWidth: 345, mt: 2 }}>
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        Join thousands of others who have discovered their ideal career with us.
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button component={Link} to="/signup" variant="contained" color="primary">
                        Register Now
                    </Button>
                    <Button component={Link} to="/login" variant="outlined" color="primary">
                        Login
                    </Button>
                </CardActions>
            </Card>
            <Typography variant="h6" color="textSecondary" sx={{ mt: 8 }}>
                Not sure what would be best for you?
            </Typography>
            <Button component={Link} to="/test" variant="contained" color="primary" sx={{ mt: 1 }}>
                Take the Career Test
            </Button>
        </div>
    );
};

export default LandingPage;
