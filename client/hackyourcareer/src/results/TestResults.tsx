import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Box, Button } from '@mui/material';

interface ResultItem {
    title: string;
    percentage: number;
    description: string;
}

interface TestResultsProps {
    results: ResultItem[]
}

const TestResults: React.FC<TestResultsProps> = ({ results }) => {
    return (
        <Box sx={{ width: '100%', maxWidth: 600, margin: 'auto', display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
            <Typography variant="h4" component="h1" sx={{ textAlign: 'center', mb: 4 }}>
                Your career path could be
            </Typography>
            {results.map((result) => (
                <Card key={result.title} elevation={4} sx={{ mb: 2 }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {result.title}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
                            <LinearProgress variant="determinate" value={result.percentage} sx={{ flexGrow: 1, mr: 1 }} />
                            <Typography variant="body2" color="text.secondary">{`${Math.round(result.percentage)}%`}</Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            {result.description}
                        </Typography>
                        <Button href={`/mentors/${result.title.toLowerCase().replace(/ /g, '-')}`} variant="outlined" sx={{ mt: 2 }}>
                            Explore Path
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default TestResults;
