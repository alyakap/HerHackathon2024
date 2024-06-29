import React from 'react';
import { List, ListItem, ListItemText, Button, Card, CardContent, Typography, LinearProgress, Box } from '@mui/material';
import ResultItem from "./ResultsItem";

type TestResultsProps = {
    results: ResultItem[]
}
const TestResults = ({results}: TestResultsProps) => {
    // const results = [
    //     { title: 'Frontend Developer', percentage: 76.1, description: 'Focus on client-side development...' },
    //     { title: 'Backend Developer', percentage: 84.0, description: 'Handle the server-side logic and databases...' },
    //     { title: 'UX Designer', percentage: 70.5, description: 'Enhance user satisfaction by improving usability...' },
    //     { title: 'QA Engineer', percentage: 72.8, description: 'Ensure the quality of applications through testing...' },
    //     { title: 'DevOps', percentage: 81.5, description: 'Bridge between development and operations teams...' },
    // ];

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {results.map((result) => (
                <ListItem key={result.title} component="div" disablePadding>
                    <Card sx={{ width: '100%' }}>
                        <CardContent>
                            <Typography variant="h6">{result.title}</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={result.percentage} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">{`${Math.round(result.percentage)}%`}</Typography>
                                </Box>
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                                {result.description}
                            </Typography>
                            <Button href={`/mentors/${result.title.toLowerCase().replace(/ /g, '-')}`} variant="outlined" sx={{ mt: 2 }}>Explore Path</Button>
                        </CardContent>
                    </Card>
                </ListItem>
            ))}
        </List>
    );
};

export default TestResults;
