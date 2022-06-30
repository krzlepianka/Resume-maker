import {Typography as MuiTypography} from '@mui/material/';
import { withTheme } from '@mui/styles';
// import styled from 'styled-components';
import {styled } from '@mui/material/styles'

const StyledHeader = withTheme(styled(MuiTypography)`
    padding: ${({theme}) => `${theme.paddings.large}px`};
    text-align: ${({align}) => align};
`);

const StyledSubHeader = withTheme(styled(MuiTypography)`
    padding: ${({theme}) => `${theme.paddings.large}px`};
    text-align: ${({align}) => align};
`);

const StyledParagraph = withTheme(styled(MuiTypography)`
    
`)

const Header = ({children, align, variant}: any) => {
    return <StyledHeader align={align} variant={variant}>{children}</StyledHeader>
};

const SubHeader = ({children, align, variant}: any) => {
    return <StyledSubHeader align={align} variant={variant}>{children}</StyledSubHeader>
}

const Paragraph = ({children} :any) => {
    return  <StyledParagraph>{children}</StyledParagraph>
}

export {Header, SubHeader, Paragraph};