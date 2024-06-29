import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button, Card, CardContent } from '@mui/material';

const MentorDetail = () => {
    let { name } = useParams<'name'>(); // Capture the 'name' parameter from the URL
    const mentor = { name: name || 'Default Mentor', expertise: 'Frontend Development', bio: 'Long bio here...' };

    return (
        <Card>
            <CardContent>
                <Typography variant="h4">{mentor.name}</Typography>
                <Typography color="textSecondary">{mentor.expertise}</Typography>
                <Typography>{mentor.bio}</Typography>
                <Button variant="contained" color="primary">Schedule a Call</Button>
            </CardContent>
        </Card>
    );
};

export default MentorDetail;
