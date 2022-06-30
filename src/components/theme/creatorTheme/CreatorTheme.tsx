import {Grid, Box, Link } from '@mui/material';
import { withTheme } from '@mui/styles';
import styled from 'styled-components';
import Logo from 'components/ui/svg-animations/logo/Logo';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { Paragraph } from 'components/ui/typography/Typography';
import SvgIcon from 'components/ui/svgIcon.tsx/SvgIcon';



const StyledContainer = withTheme(styled(Box)`
    height: 100vh;
    background: ${({theme}) => theme.colors.WHITE}
`);

const StyledGridContainer = withTheme(styled(Grid)`
    height: 100%;
`);

const StyledMenuGrid = withTheme(styled(Grid)`
    display: flex;
    flex-direction: column;
    background-color: #EFFAFE;
`)

const SVGStyledLogoContainer = withTheme(styled(Box)`
    padding: 15px 20px;
`);

const StyledLinks = withTheme(styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`)

const StyledLink = withTheme(styled(Link)`
    padding: 15px;
    text-decoration: none;
    color ${({theme}) => theme.colors.BLACK}
`)


const CreatorTheme = () => {

    return (
        <StyledContainer>
            <StyledGridContainer container>
                <StyledMenuGrid item xs={3}>
                    <SVGStyledLogoContainer>
                        <Logo />
                    </SVGStyledLogoContainer>
                    <StyledLinks>
                        <StyledLink href="#" component={RouterLink} to="/Creator/personal-data">
                                <Paragraph>Personal Data</Paragraph>
                        </StyledLink>
                        <StyledLink href="#" component={RouterLink} to="/Creator/education">
                                <Paragraph>Education</Paragraph>
                        </StyledLink>
                    </StyledLinks>
                </StyledMenuGrid>
                <Grid item xs={9}>
                    <Outlet />
                </Grid>
            </StyledGridContainer>
        </StyledContainer>
    )
};

export default CreatorTheme;