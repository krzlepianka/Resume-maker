import { Button as MuiButton, Theme, CircularProgress  } from '@mui/material';
import { withTheme } from '@mui/styles';
import {styled, css } from '@mui/material/styles';
import {
  BUTTON_PRIMARY_VARIANT,
  BUTTON_SECONDARY_VARIANT,
  BUTTON_SIZE_SMALL,
  BUTTON_SIZE_MEDIUM,
  BUTTON_SIZE_LARGE
} from 'consts/consts'


const setBackgroundColor = (theme: Theme, $variant: string) => {
  switch($variant) {
    case BUTTON_PRIMARY_VARIANT:
      return theme.colors.PRIMARY;
    case BUTTON_SECONDARY_VARIANT:
      return theme.colors.SECONDARY
    default:
      return theme.colors.PRIMARY;
  }
};

const setSize = ($size: string) => {
  switch($size) {
    case  BUTTON_SIZE_SMALL:
      return css`
        width: 200px;
        height: 50px;
        font-size: 10px;
      `
    case BUTTON_SIZE_MEDIUM:
      return css`
      width: 300px;
      height: 70px;
      font-size: 14px;
    `
    case BUTTON_SIZE_LARGE:
      return css`
      width: 400px;
      height: 100px;
      font-size: 20px;
    `
    default:
      return css`
      width: 50px;
      height: 20px;
      font-size: 32px;
      `
  }
}

const StyledButton = withTheme(styled(MuiButton)<{
  $variant: string;
  $size: string;
  $isLoading?: boolean;
  $disabled?: boolean;
}>`
  background-color: ${({ theme, $variant }) => setBackgroundColor(theme, $variant)};
  color: ${({theme}) => theme.colors.WHITE};
  ${({$size}) => setSize($size)}
  &.MuiButton-root:hover {
    background-color: ${({ theme, $variant }) => setBackgroundColor(theme, $variant)};
  }
  &.Mui-disabled {
    color: ${({theme}) => theme.colors.WHITE};
    opacity: 0.6;
  }
`);

const StyledCircuralProgress = withTheme(styled(CircularProgress)`
  color: inherit;
`)

const Button = ({children, variant, size, isLoading, disabled, type, onClick}: any) => {
  return <StyledButton onClick={onClick} type={type} $variant={variant} $size={size} $isLoading={isLoading} disabled={isLoading || disabled}>
    { isLoading
      ? (
        <StyledCircuralProgress />
    ) : (
        <>{children}</>
    )}
    </StyledButton>;
};


export default Button;
