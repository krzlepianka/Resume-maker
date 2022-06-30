import { useEffect, useState } from 'react';

const useFormButtonState = (values, step) => {
    const [isDisabled, setDisabled] = useState(true);

    const handleDisabled = () => {
        const objectsToArray = Object.entries(values);
        const currentStepArray = objectsToArray.filter((item, index) => index === step);
        const [stepName, value] = currentStepArray[0];
        console.log('stepName', stepName);
        console.log('value', value);
         if(typeof value === 'string') {
             return value.length ? setDisabled(false) : setDisabled(true);
         }
    };

    useEffect(() => handleDisabled());
    return [isDisabled]
};

export default useFormButtonState;