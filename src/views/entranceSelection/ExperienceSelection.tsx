import { useState } from 'react';
import Frontend from '../../assets/Front_end.svg';
import Backend from '../../assets/Back_end.svg';
import RadioButtonForm from 'components/features/forms/RadioButtonForm';
import { useFormikContext } from 'formik';

interface ExperienceProps {
    nextStep: () => void,
    step: number
}

const ExperienceSelection = ({nextStep, step}: ExperienceProps) => {

    const experience = [
        {id: 0, name: '1', src: Frontend},
        {id: 1, name: '2', src: Backend}
    ]

    const {setFieldValue, values} = useFormikContext();
    const [activeExperience, setActiveExperience] = useState();

    const handleExperience = (e) => {
        const {value} = e.target;
        setFieldValue('experience', value);
        setActiveExperience(value);
    }

    return (
        <RadioButtonForm
            options={experience}
            activeOption={activeExperience}
            handleChangeRadioButton={handleExperience}
            nextStep={nextStep}
            values={values}
            step={step}
            />
    )
};

export default ExperienceSelection;