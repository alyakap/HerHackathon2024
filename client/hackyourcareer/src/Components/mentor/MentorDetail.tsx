import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Card, CardContent, Typography, Button, Chip, Avatar, CardActions } from '@mui/material';

// Assuming you have these details coming from an API or static data
const mentorData = {
    name: 'John Doe',
    alias: 'john-doe',
    location: 'Limassol, Cyprus / GMT+02',
    role: 'Lead Frontend Engineer — Google',
    experience: '10 years in IT, 5 years in frontend. VR Lead',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js', 'TypeScript', 'Functional Programming', 'Jest', 'Git'],
    bio: 'I\'ll teach you how to build robust React/Typescript apps: what libraries to pick, how to approach architecture, how to profile performance and debug the code.',
    photoUrl: 'https://t4.ftcdn.net/jpg/02/44/43/69/360_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg', // Link to the mentor's photo
    pricing: {
        firstSession: 37,
        normalSession: 47,
        packPrice: 455
    }
};

const MentorProfile = () => {
    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', my: 2, p: 4, boxSizing: 'border-box', display: 'flex', minHeight: '100vh', alignItems: 'center' }}>
            <Card>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Avatar src={mentorData.photoUrl} sx={{ width: 150, height: 150, mb: 2 }} />
                    <Typography variant="h5" component="div">{mentorData.name}</Typography>
                    <Typography color="textSecondary">{mentorData.location}</Typography>
                    <Typography color="textSecondary">{mentorData.role}</Typography>
                    <Typography sx={{ mt: 1, mb: 2 }}>{mentorData.bio}</Typography>
                </CardContent>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mb: 2 }}>
                    {mentorData.skills.map(skill => (
                        <Chip key={skill} label={skill} variant="outlined" />
                    ))}
                </Box>
                <CardActions sx={{ flexDirection: 'column', width: '100%', px: 0 }}>
                    <Button variant="contained" fullWidth sx={{ mb: 1 }}>
                        Schedule a free call
                    </Button>
                    <Typography>Study price: ${mentorData.pricing.normalSession}/hour</Typography>
                    <Typography>First session: ${mentorData.pricing.firstSession} (20% off)</Typography>
                    <Typography>5 sessions pack: ${mentorData.pricing.packPrice} (5% off)</Typography>
                </CardActions>
            </Card>
        </Box>
    );
};

export default MentorProfile;
