import { motion } from 'framer-motion';
import { FormControl, RadioGroup, Paper, Radio, Avatar, Box } from '@mui/material/';
import { SubHeader } from 'components/ui/typography/Typography';
import styled, { withTheme } from 'styled-components';
import Button from 'components/ui/button/Button';
import { BUTTON_SIZE_MEDIUM } from 'consts/consts';
import useFormButtonState from 'hooks/useFormButtonState';

const StyledFormControl = styled(FormControl)`
    display: block;
`
const StyledRadioGroup = withTheme(styled(RadioGroup)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 100%;
    padding: 80px 0;
`);

const StyledBox = withTheme(styled(Paper)<{active: boolean}>`
    position: relative;
    overflow: hidden;
    height: 200px;
    width: 350px;
    cursor: pointer;
`);

const StyledAvatar = withTheme(styled(Avatar)`
    position: absolute;
    bottom: -11px;
    right: -11px;
    width: 125px;
    height: 125px;
`);

const ButtonWrapper = withTheme(styled(Box)`
    display: flex;
    justify-content: center;
`);

const variants = {
    filled: {
    background: '#B6D6F2',
    scale: 1.1,
    transition: {
        duration: .5,
        ease: 'easeInOut'
      }},
    unfilled: {
        background: 'white',
        scale: 1.0,
        transition: {
            duration: .5,
            ease: 'easeInOut'
          }
    },
  }

interface Options {
   id: number,
   name: string,
   src: any 
}

interface Values {
    careerPath: string | undefined,
    experience: string | undefined,
    template: string | undefined
}

interface RadioButtonFormTypes {
    options: Options[]
    activeOption?: string;
    handleChangeRadioButton: (e: Event) => void,
    nextStep?: () => void,
    previousStep?: () => void,
    values?: any,
    step?: number
};

const RadioButtonForm = ({options, activeOption, handleChangeRadioButton, nextStep, values, step} : RadioButtonFormTypes) => {

    const [isDisabled] = useFormButtonState(values, step);

    return(
        <>
            <StyledFormControl>
                    <StyledRadioGroup onChange={handleChangeRadioButton}>
                        {options.map((option) => (
                            <StyledBox
                                key={option.id}
                                component={motion.label}
                                animate={ option.name === activeOption ? 'filled' : 'unfilled'}
                                variants={variants}
                                transition={{ duration: 2 }}
                                >
                                <Radio value={option.name} name={option.name}/>
                                <StyledAvatar src={option.src} />
                                <SubHeader variant='body1'>{option.name}</SubHeader>
                            </StyledBox>
                        ))}
                    </StyledRadioGroup>
            </StyledFormControl>
            <ButtonWrapper>
                    <Button type="button" onClick={nextStep} disabled={isDisabled} size={BUTTON_SIZE_MEDIUM}>Dalej</Button>
            </ButtonWrapper>
        </>
    )
};

export default RadioButtonForm;