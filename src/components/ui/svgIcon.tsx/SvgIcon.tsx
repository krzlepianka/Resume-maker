import React from 'react';
import { withTheme } from '@mui/styles';
import styled from 'styled-components';

interface SVGProps {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    height?: string;
    width?: string;
    position?: string
}

const SvgStyledContainer = withTheme(styled('div')<{
    height?: string;
    width?: string;
    position?: string
}>`
    height: auto;
    width: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: ${props => (props.position ? props.position : 'absolute')};
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    & svg {
        height: ${props => (props.height ? `${props.height}px` : '100%')};
        width: ${props => (props.width ? `${props.width}px` : '100%')};
    }
`);

const SvgIcon : React.FC<SVGProps> = props => {
    const { Icon } = props;
    return (
        <SvgStyledContainer {...props}>
            <Icon />
        </SvgStyledContainer>

    )
};

export default SvgIcon;