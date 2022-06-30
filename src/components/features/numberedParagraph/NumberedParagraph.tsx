import { withTheme } from '@mui/styles';
//import styled from 'styled-components';
import {styled } from '@mui/material/styles'
import { Typography } from '@mui/material';


const StyledParagraphContainer = withTheme(styled('div')`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 20px 0;
`);

const StyledNumber = withTheme(styled('div')`
    font-size: ${({theme}) => `${theme.size.small}px`};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.PRIMARY};
    color: ${({theme}) => theme.colors.WHITE};
`);

const NumberedParagraph = ({index, description}: any) => {
    return (
        <StyledParagraphContainer>
            <StyledNumber>{index}</StyledNumber>
            <Typography variant="body1">{description}</Typography>
        </StyledParagraphContainer>
    )
};

export default NumberedParagraph;