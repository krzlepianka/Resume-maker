import { Formik, Form } from 'formik';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import {Header} from 'components/ui/typography/Typography';
import styled from 'styled-components';
import { withTheme } from '@mui/styles';
import CareerPathSelection from 'views/entranceSelection/CareerPathSelection';
import ExperienceSelection from 'views/entranceSelection/ExperienceSelection';
import TemplateTypeSelection from 'views/entranceSelection/TemplateTypeSelection';
import {useState } from 'react';
import { useDispatch } from 'react-redux';
import { chooseCareer } from 'slices/chooseCareerSlice';
import { useNavigate } from 'react-router-dom';


const StyledContainer = withTheme(styled(Container)`
    height: 100vh;
`);

// eslint-disable-next-line react/prop-types
const FormsContainer = () => {
    const initialValues ={
        careerPath: '',
        experience: '',
        color: '',
        template: ''
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [step, setStep] = useState(0);

    const handleSubmit = (values) => {
        dispatch(
            chooseCareer(values)
        );
        navigate('/Creator');
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const previousStep = () => {
        setStep(step -1);
    }

    const renderStep = (step, setFieldValue, nextStep, previousStep, values) => {
        switch(step) {
            case 0:
                return <CareerPathSelection nextStep={nextStep} step={step}/>;
            case 1:
                return <ExperienceSelection nextStep={nextStep} step={step}/>
            case 2:
                return <TemplateTypeSelection setFieldValue={setFieldValue} nextStep={nextStep} step={step}/>
        }
    }

    return(
        <StyledContainer maxWidth='md'>
            <Header variant="h2" align="center">W jakiej roli się specjalizujesz?</Header>
            <Box height="72%">
                <Formik initialValues={initialValues} onSubmit={(handleSubmit)} >
                {({ setFieldValue, values }) => (
                    <Form>
                        {renderStep(step, setFieldValue, nextStep, previousStep, values)}
                    </Form>
                )}
                </Formik>
            </Box>
        </StyledContainer>
    )
};

export default FormsContainer;