import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Container } from '@mui/material';

const mentors = [
    { name: 'John Doe', expertise: 'Frontend Development', alias: 'jon-doe' },
];

const MatchedMentors = () => {
    return (
        <Container>
            <Typography variant="h4" component="h2" style={{ marginTop: 20, marginBottom: 20, textAlign: 'center' }}>
                Matched Mentors
            </Typography>
            {mentors.map((mentor) => (
                <Card key={mentor.name} style={{ margin: '20px' }}>
                    <CardContent>
                        <Typography variant="h5">{mentor.name}</Typography>
                        <Typography color="textSecondary">{mentor.expertise}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href={`/mentor/${mentor.alias}`}>View Profile</Button>
                    </CardActions>
                </Card>
            ))}
        </Container>
    );
};

export default MatchedMentors;
