import { PropTypes } from 'prop-types';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';
import { Box, Button, MobileStepper } from '@mui/material';

import SwipeableViews from 'react-swipeable-views';

function SwipeableTextMobileStepper({ products }) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = products.images?.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: 500, flexGrow: 1 }}>
        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
        >
            {products.images?.map((image, index) => (
            <div key={index}>
                {Math.abs(activeStep - index) <= 2 ? (
                <Box
                    component="img"
                    sx={{
                    height: 300,
                    display: 'block',
                    maxWidth: 500,
                    objectFit: 'contain',
                    }}
                    src={image}
                    alt={`Image ${index + 1}`}
                />
                ) : null}
            </div>
            ))}
        </SwipeableViews>
        <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
            <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
            >
                Siguiente
                {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
                ) : (
                <KeyboardArrowRight />
                )}
            </Button>
            }
            backButton={
            <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
            >
                {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
                ) : (
                <KeyboardArrowLeft />
                )}
                Anterior
            </Button>
            }
        />
        </Box>
    );
}

SwipeableTextMobileStepper.propTypes = {
    products: PropTypes.shape({
        images: PropTypes.arrayOf(PropTypes.string),
    }),
};

export default SwipeableTextMobileStepper;
