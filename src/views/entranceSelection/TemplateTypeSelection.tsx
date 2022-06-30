import { motion } from 'framer-motion';
import { Radio, RadioGroup, FormControl, Box, Card, CardMedia } from '@mui/material';
import Button from 'components/ui/button/Button';
import { BUTTON_SIZE_MEDIUM } from 'consts/consts';
import { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import CV_IMAGE_PURPLE_1 from '../../assets/CV_IMAGE_1_PURPLE.png';
import CV_IMAGE_BLUE_1 from '../../assets/CV_IMAGE_1_BLUE.png';
import CV_IMAGE_PURPLE_2 from '../../assets/CV_IMAGE_2_PURPLE.png';
import CV_IMAGE_BLUE_2 from '../../assets/CV_IMAGE_2_BLUE.png';
import { useFormikContext } from 'formik';


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

const ButtonWrapper = withTheme(styled(Box)`
    display: flex;
    justify-content: center;
`);

  const StyledColorWrapper = withTheme(styled(RadioGroup)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 15px;
  `);

  interface StyledCardProps {
    backgroundcolor: string;
  }

  const StyledCard = withTheme(styled(Card)<StyledCardProps>`
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({backgroundcolor}) => backgroundcolor}
  `)

interface StyledRadioProps {
    disabled : boolean;
}

  const StyledCardMedia = withTheme(styled(CardMedia)<StyledRadioProps>`

  `)

  const variants = {
    filled: {
    scale: 1.1,
    transition: {
        duration: .5,
        ease: 'easeInOut'
      }},
    unfilled: {
        scale: 1.0,
        transition: {
            duration: .5,
            ease: 'easeInOut'
          }
    },
  }


const TemplateTypeSelection = ({ nextStep, step }: any) => {

        const {setFieldValue, values} = useFormikContext();
        const templateOptions = {
            colors: [
                {id: 0, name: 'PURPLE', hexColor: '#4B1D4B'},
                {id: 1, name: 'BLUE', hexColor: '#1E2B45'}
            ],
        }

        const [template, setTemplate] = useState({
            color: '',
            variant: ''
        });

        const [templates, setTemplates] = useState([
            {id: 0, name: 'CV_IMAGE_PURPLE_1', src: CV_IMAGE_PURPLE_1},
            {id: 1, name: 'CV_IMAGE_PURPLE_2', src: CV_IMAGE_PURPLE_2}
        ])


        const handleChangeTemplatesColor = e => {
            const {value} = e.target;
            let choosedSchema = ''
            const schemaNumber = template.variant[template.variant.length - 1];
            if(value != template.color && template.variant.length) {
                choosedSchema = `CV_IMAGE_${value}_${schemaNumber}`;
            }
            const templatesCopy = [...templates];
            const result = templatesCopy.map((_template, index) => {
                return {id: index, name: `CV_IMAGE_${value}_${index + 1}`, src: `CV_IMAGE_${value}_${index + 1}`}
            })
            setTemplates(result);
            setTemplate((prevState) => ({
                ...prevState,
                color: value,
                variant: choosedSchema
            }))
            setFieldValue('color', value);
            setFieldValue('template', choosedSchema);
        }

        const handleTemplateType = e => {
            const {value} = e.target;
            const schemaNumber = value[value.length - 1];
            const templateColor = template.color;
            const choosedSchema = `CV_IMAGE_${templateColor}_${schemaNumber}`;
            setTemplate((prevState) => ({
                ...prevState,
                variant: choosedSchema
            }))
            setFieldValue('template', choosedSchema);
        }

    return (
        <>
        <StyledFormControl>
            <StyledColorWrapper onChange={handleChangeTemplatesColor}>
                {templateOptions.colors.map(color => (
                    <StyledCard
                        key={color.id}
                        backgroundcolor={color.hexColor}
                        component={motion.label}
                        animate={ color.name === template.color ? 'filled' : 'unfilled'}
                        variants={variants}
                        transition={{ duration: 2 }}
                    >
                    <Radio value={color.name} name={color.name} checked={color.name === template.color}/>
                </StyledCard>
                ))}
            </StyledColorWrapper>
            <StyledRadioGroup onChange={handleTemplateType}>
                 {templates.map((schema) => (
                 <Card
                         key={schema.id}
                         component={motion.label}
                         animate={schema.name === template.variant ? 'filled' : 'unfilled'}
                         variants={variants}
                         transition={{ duration: 2 }}
                         >
                         <Radio disabled={template.color ? false : true} value={schema.name} name={schema.name} checked={schema.name === template.variant}/>
                         <CardMedia component="img" src={template.color ? `CV_IMAGE_${schema.id + 1}_${template.color}.png` :  `CV_IMAGE_${schema.id + 1}_PURPLE.png`} height="200"/>
                     </Card>
                 ))}
             </StyledRadioGroup>
        </StyledFormControl>
        <ButtonWrapper>
                    <Button type="submit" disabled={!template.variant} size={BUTTON_SIZE_MEDIUM}>Dalej</Button>
        </ButtonWrapper>
        </>
    )
};

export default TemplateTypeSelection;