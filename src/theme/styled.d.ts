// import 'styled-components';
import {CustomTheme} from './theme';
import { ThemeOptions } from '@mui/material/styles';
import { TypographyPropsVariantOverrides } from '@mui/material';


declare module '@mui/material/styles' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Theme extends CustomTheme {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ThemeOptions extends CustomTheme {}
}
