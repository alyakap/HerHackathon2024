import React, { useState } from 'react';
import {
    Stepper, Step, StepLabel, Button, Typography, FormControl,
    FormLabel, RadioGroup, FormControlLabel, Radio, Snackbar
} from '@mui/material';
import { quizData } from './quizData'; // Ensure this import works as expected
import { useNavigate } from 'react-router-dom';

interface Scores {
    developer: number;
    tester: number;
    projectManager: number;
}
const titles: { [key in keyof Scores]: string } = {
    developer: "Software Developer",
    tester: "QA",
    projectManager: "Project Manager"
};

const descriptions: { [key in keyof Scores]: string } = {
    developer: "Handles complex back-end tasks, coding, and system design.",
    tester: "Ensures the quality of applications through rigorous testing.",
    projectManager: "Manages project timelines, resources, and team coordination."
};

interface ResultItem {
    title: string;
    percentage: number;
    description: string;
}

type CareerTestProps = {
    onCompletion: (results: ResultItem[]) => void;
}

const CareerTest: React.FC<CareerTestProps> = ({ onCompletion }) => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const [answers, setAnswers] = useState<{ [questionId: number]: string }>({});
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleNext = () => {
        if (answers[quizData.questions[activeStep].id] === undefined) {
            setOpenSnackbar(true);
            return;
        }

        if (activeStep === quizData.questions.length - 1) {
            const finalResults = computeScore(answers);
            onCompletion(finalResults);
            navigate('/results');
        } else {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(prevActiveStep => prevActiveStep - 1);
        }
    };

    const handleRadioChange = (questionId: number, value: string) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: value
        }));
        if (openSnackbar) setOpenSnackbar(false);
    };

    const computeScore = (answers: { [questionId: number]: string }): ResultItem[] => {
        let scores: Scores = { developer: 0, tester: 0, projectManager: 0 };
        quizData.questions.forEach(question => {
            const answer = answers[question.id];
            const selectedOption = question.options.find(option => option.value === answer);
            if (selectedOption) {
                Object.keys(selectedOption.score).forEach(key => {
                    const role = key as keyof Scores;
                    scores[role] += selectedOption.score[role];
                });
            }
        });

        // Determine the highest possible score to scale the results
        const maxScore = Math.max(...Object.values(scores));

        // Adjust scores to range from 60 to 100
        return Object.keys(scores).map(key => {
            const role = key as keyof Scores;
            // Scale scores to range from 60 to 100
            let scaledScore = (scores[role] / maxScore) * 50 + 50; // Scaling factor of 40 and shift of 60
            scaledScore = Math.min(scaledScore, 100); // Ensure score does not exceed 100%
            return {
                title: titles[role], // Assuming titles is defined
                percentage: Math.round(scaledScore), // Round to nearest whole number
                description: descriptions[role] // Assuming descriptions is defined
            };
        }).sort((a, b) => b.percentage - a.percentage);
    };

    return (
        <div style={{ padding: '2rem', backgroundColor: '#f4f6f8', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h4" align="center" sx={{ mb: 4 }}>
                Let's see what suits you
            </Typography>
            <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 3 }}>
                {quizData.questions.map((_, index) => (
                    <Step key={index}>
                        <StepLabel>{`Question ${index + 1}`}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <div>
                <FormControl component="fieldset" fullWidth>
                    <FormLabel component="legend">{quizData.questions[activeStep].text}</FormLabel>
                    <RadioGroup
                        name={`question_${quizData.questions[activeStep].id}`}
                        value={answers[quizData.questions[activeStep].id] || ''}
                        onChange={(e) => handleRadioChange(quizData.questions[activeStep].id, e.target.value)}
                    >
                        {quizData.questions[activeStep].options.map((option, index) => (
                            <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.text} />
                        ))}
                    </RadioGroup>
                </FormControl>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', gap: '10px' }}>
                <Button onClick={handleBack} disabled={activeStep === 0} variant="outlined">Back</Button>
                <Button onClick={handleNext} variant="contained" color="primary">
                    {activeStep === quizData.questions.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </div>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
                message="Please select an option to proceed"
            />
        </div>
    );
};

export default CareerTest;
