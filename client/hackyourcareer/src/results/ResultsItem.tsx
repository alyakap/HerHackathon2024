import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Box } from '@mui/material';

type ResultItem = {
    title: string;
    description: string;
    percentage: number;
}

const ResultItem = ({ title, percentage, description }: ResultItem) => {
    return (
        <Card sx={{ margin: 2, width: 300 }}>
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                        <LinearProgress variant="determinate" value={percentage} />
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                        <Typography variant="body2" color="text.secondary">{`${Math.round(
                            percentage,
                        )}%`}</Typography>
                    </Box>
                </Box>
                <Typography variant="body2">{description}</Typography>
            </CardContent>
        </Card>
    );
};

export default ResultItem;
