import {Container} from '@mui/material';
import {ReactComponent as CV } from 'assets/Example-CV.svg';
import { Box } from '@mui/material/';
import Button from 'components/ui/button/Button';
import { BUTTON_SECONDARY_VARIANT, BUTTON_SIZE_MEDIUM } from 'consts/consts';
import { Header } from 'components/ui/typography/Typography';
import List from 'components/features/List/List';
import { withTheme } from '@mui/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SvgIcon from 'components/ui/svgIcon.tsx/SvgIcon';

const StartPage: React.FC = () => {

    const stepsList = [
        {id: 1, description: 'Wybierz szablon'},
        {id: 2, description: 'Dodaj treść korzystając z naszych rekomendacji'},
        {id: 3, description: 'Dodaj treść korzystając z naszych rekomendacji'}
    ];

    const StyledContainer = withTheme(styled(Box)`
        display: flex;
        justify-content: center;
        gap: 30px;
        margin: 50px 0;
        align-items: center;
        padding: 51px;
    `)

    const StyledButtonContainer = withTheme(styled(Box)`
        display: flex;
        justify-content: center;
    `)

    return (
        <Container>
            <Box>
                <Header variant="h2" align="center">Stwórz swoje CV w kilku krokach</Header>
                <StyledContainer>
                    <List items={stepsList} />
                    <SvgIcon Icon={CV} position="relative" width="200"/>
                </StyledContainer>
                <StyledButtonContainer>
                    <Link to={'intro'} style={{ textDecoration: 'none'}}>
                        <Button variant={BUTTON_SECONDARY_VARIANT} size={BUTTON_SIZE_MEDIUM}>Rozpocznij</Button>
                    </Link>
                </StyledButtonContainer>
            </Box>
        </Container>
    )
};

export default StartPage;
