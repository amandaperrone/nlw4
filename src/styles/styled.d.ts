import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
        white: string,
        background: string,
        grayLine: string,
        text: string,
        textHighlight: string,
        title: string,
        red: string,
        green: string,
        pink: string,
        pinkDark: string,
        blueTwitter: string, 
    }
  }
}