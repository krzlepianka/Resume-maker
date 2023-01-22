import {Grid, Box } from '@mui/material';
import { withTheme } from '@mui/styles';
//import styled from 'styled-components';
import {styled } from '@mui/material/styles'
import Logo from 'components/ui/svg-animations/logo/Logo';
import {ReactComponent as LittleMan} from 'assets/little-man.svg';
import SvgIcon from 'components/ui/svgIcon.tsx/SvgIcon';
import { Paragraph } from 'components/ui/typography/Typography';
import { Outlet } from 'react-router-dom';


const StyledContainer = withTheme(styled(Box)`
    height: 100vh;
    background: ${({theme}) => theme.colors.WHITE};
`);

//    background: ${({theme}) => theme.colors.WHITE}

const StyledGridContainer = withTheme(styled(Grid)`
    height: 100%;
`);

const StyledMenuGrid = withTheme(styled(Grid)`
    background-color: #EFFAFE;
    position: relative;
`)

const SVGStyledLogoContainer = withTheme(styled(Box)`
    padding: 15px 20px;
`);

const TooltipLogo = withTheme(styled(Box)`
    width: 184px;
    height: 100px;
    background: #353F48;
    color: #FFF;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(2%, -165%);
    padding: 20px;
    border-radius: 5px;
    z-index: 1000;
    box-shadow: 5px 30px 30px -30px rgba(53, 63, 72, 1);
    &:after {
        content: "";
        border-width: 7px;
        border-style: solid;
        color: #353F48;
        position: absolute;
        transform: rotate(45deg);
    }
`)

const IntroTheme = () => {
    return (
        <StyledContainer>
            <StyledGridContainer container>
                <StyledMenuGrid item xs={3}>
                    <SVGStyledLogoContainer>
                        <Logo />
                    </SVGStyledLogoContainer>
                        <SvgIcon Icon={LittleMan} width="200"/>
                        <TooltipLogo>
                            <Paragraph>
                                Jestem Michał - zrobimy wspólnie CV, które pozwoli Ci szybko zdobyć nową pracę!
                            </Paragraph>
                        </TooltipLogo>
                </StyledMenuGrid>
                <Grid item xs={9}>
                    <Outlet />
                </Grid>
            </StyledGridContainer>
        </StyledContainer>
    )
};

export default IntroTheme;