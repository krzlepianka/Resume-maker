//import { createTheme } from '@mui/material/'
import { createTheme } from '@mui/material/styles'

const PRIMARY = '#0367A6'
const SECONDARY = '#E44747'
const TERTIARY = '#8D7EC9'
const WHITE = '#FFF'
const BLACK = '#000'

export interface CustomTheme {
  colors: {
    PRIMARY: string,
    SECONDARY: string,
    TERTIARY: string,
    WHITE: string,
    BLACK: string
  },
  paddings: {
    small: number | string,
    smallMedium: number | string,
    medium: number | string,
    large: number | string
  },
  size: {
    small: number | string,
    medium: number | string,
    large: number | string,
    huge: number | string
  },
  fonts: {
    main: string;
    secondary: string;
  },
  horizontalAlign: {
    left: string,
    right: string,
    center: string
  }
}

const customTheme = createTheme({
  // typography: {
  //   fontFamily: 'Work Sans',
  //   h1: {
  //     fontSize: '6rem',
  //     fontWeight: 300,
  //     letterSpacing: '1px'
  //   },
  //   h2: {
  //     fontSize: '3rem',
  //     fontWeight: 400,
  //     letterSpacing: '1px'
  //   },
  //   h3: {
  //     fontSize: '2rem',
  //     fontWeight: 400,
  //     letterSpacing: '1px'
  //   },
  //   body1: {
  //     fontSize: '1.5rem',
  //     fontWeight: 300,
  //     letterSpacing: '1px'
  //   }
  // },
  colors: {
    PRIMARY,
    SECONDARY,
    TERTIARY,
    WHITE,
    BLACK
  },
  paddings: {
    small: 10,
    smallMedium: 20,
    medium: 30,
    large: 40
  },
  size: {
    small: 20,
    medium: 40,
    large: 60,
    huge: 80
  },
  fonts: {
    main:'Arial',
    secondary: 'sans-serif'
  },
  horizontalAlign: {
    left: 'left',
    right: 'right',
    center: 'center'
  }
});

export default customTheme;
