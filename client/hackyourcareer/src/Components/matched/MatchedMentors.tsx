import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const mentors = [
    { name: 'John Doe', expertise: 'Frontend Development' },
    // More mentors
];

const MatchedMentors = () => {
    return (
        <div>
            {mentors.map((mentor) => (
                <Card key={mentor.name} style={{ margin: '20px' }}>
                    <CardContent>
                        <Typography variant="h5">{mentor.name}</Typography>
                        <Typography color="textSecondary">{mentor.expertise}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href={`/mentor/${mentor.name}`}>View Profile</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
};

export default MatchedMentors;
