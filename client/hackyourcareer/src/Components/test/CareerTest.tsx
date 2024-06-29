import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Snackbar } from '@mui/material';
import { quizData } from './quizData';
import ResultItem from "../../results/ResultsItem"; // Import your quiz data
import { useNavigate } from 'react-router-dom';

type Scores = {
    developer: number;
    tester: number;
    projectManager: number;
};

type CareerMapping = {
    [key: string]: string;  // Allowing any string as a key, which returns a string
};

const descriptions = {
    developer: "Handles complex back-end tasks, coding, and system design.",
    tester: "Ensures the quality of applications through rigorous testing.",
    projectManager: "Manages project timelines, resources, and team coordination."
};

type CareerTestProps = {
    onCompletion(results: ResultItem[]): void
}


const CareerTest = ({ onCompletion }: CareerTestProps) => {
    const navigate = useNavigate(); // Use navigate function for routing
    const [activeStep, setActiveStep] = useState(0);
    const [answers, setAnswers] = useState<any>({});
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const determineCareerPath = (scores: Scores) => {
        const careerMapping: CareerMapping = {
            developer: "Software Developer",
            tester: "Quality Assurance Tester",
            projectManager: "Project Manager"
        };

        // Convert score object into a sorted list of careers based on scores
        const sortedCareers = Object.keys(scores).map(key => {
            const careerKey = key as keyof typeof careerMapping;  // Assert that the key exists in careerMapping
            const scoreKey = key as keyof typeof scores;  // Assert that the key exists in scores
            return {
                career: careerMapping[careerKey],
                score: scores[scoreKey]
            };
        }).sort((a, b) => b.score - a.score);

        // Suggest the top careers
        const topCareers = sortedCareers.slice(0, 3);
        console.log('Recommended Career Paths:', topCareers.map(career => career.career));
        return topCareers;
    };


    const handleNext = () => {
        // First, check if the current question has been answered
        if (answers[quizData.questions[activeStep].id] === undefined) {
            setOpenSnackbar(true);
            return; // Stop the function if no answer is provided
        }

        // Then, check if this is the last question
        if (activeStep === quizData.questions.length - 1) {
            // If it's the last question, compute scores and handle completion
            const finalResults = computeScore(answers); // Ensure computeScore uses the current answers
            onCompletion(finalResults); // Handle the completion (e.g., update state, navigate)
            navigate('/results'); // Navigate to the results page
        } else {
            // If it's not the last question, simply go to the next one
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };



    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleRadioChange = (questionId: number, value: string) => {
        setAnswers({
            ...answers,
            [questionId]: value
        });
        if (openSnackbar) setOpenSnackbar(false); // Close the snackbar if it's open
    };

    const computeScore = (answers: any): ResultItem[] => {
        const scores: Scores = quizData.questions.reduce((acc: Scores, question) => {
            const answer = answers[question.id];
            const selectedOption = question.options.find(option => option.value === answer);
            if (selectedOption) {
                Object.keys(selectedOption.score).forEach((key: string) => {
                    const scoreKey = key as keyof Scores;  // Ensure the key is valid for Scores
                    acc[scoreKey] = (acc[scoreKey] || 0) + selectedOption.score[scoreKey];
                });
            }
            return acc;
        }, { developer: 0, tester: 0, projectManager: 0 } as Scores);

        // Convert Scores to ResultItems
        return Object.entries(scores).map(([key, value]) => ({
            title: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the title
            percentage: value, // This could be scaled/normalized based on some criteria
            description: descriptions[key as keyof typeof descriptions]
        }));
    };

    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel>
                {quizData.questions.map((question) => (
                    <Step key={question.id}>
                        <StepLabel>{question.text}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === quizData.questions.length ? (
                    <div>
                        <Typography>All steps completed - you're finished</Typography>
                        <Button href="/results">See Results</Button>
                    </div>
                ) : (
                    <div>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">{quizData.questions[activeStep].text}</FormLabel>
                            <RadioGroup
                                name={`question_${quizData.questions[activeStep].id}`}
                                value={answers[quizData.questions[activeStep].id] || ''}
                                onChange={(e) => handleRadioChange(quizData.questions[activeStep].id, e.target.value)}
                            >
                                {quizData.questions[activeStep].options.map((option) => (
                                    <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.text} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                        <Button disabled={activeStep === 0} onClick={handleBack}>
                            Back
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleNext}>
                            {activeStep === quizData.questions.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </div>
                )}
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
