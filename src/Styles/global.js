import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
        @font-face {
		font-family: 'Akatab';
		src: url('/Assets/Font/Akatab-Regular.ttf');
	    }
        font-family: 'Akatab';
    }
    body{
       
        font-family: 'Akatab';
    }
`;
export default GlobalStyles;
