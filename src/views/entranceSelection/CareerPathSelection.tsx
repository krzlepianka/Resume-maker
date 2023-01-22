
import { useState } from 'react';
import Frontend from '../../assets/Front_end.svg';
import Backend from '../../assets/Back_end.svg';
import RadioButtonForm from 'components/features/forms/RadioButtonForm';
import { useFormikContext } from 'formik';


interface CarrerPathProps {
    nextStep: () => void,
    step: number
}

const CareerPathSelection = ({nextStep, step}: CarrerPathProps) => {

    const careersPaths = [
        {id: 0, name: 'frontEnd', src: Frontend},
        {id: 1, name: 'backEnd', src: Backend}
    ]

    const {setFieldValue, values} = useFormikContext();
    const [activeCareerPath, setActiveCareerPath] = useState();

    const handleChangeCareerPath = e => {
        const {value} = e.target;
        setFieldValue('careerPath', value);
        setActiveCareerPath(value);
    }

    return (
        <RadioButtonForm
            values={values}
            options={careersPaths}
            activeOption={activeCareerPath}
            handleChangeRadioButton={handleChangeCareerPath}
            nextStep={nextStep}
            step={step}
            />
    )
};

export default CareerPathSelection;