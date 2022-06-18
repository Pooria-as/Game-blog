import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
    *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    }
    body{
        font-family: 'Anton', sans-serif;
        /* font-family: 'Gentium Plus', serif;
        font-family: 'Macondo', cursive;
        font-family: 'Square Peg', cursive;
        font-family: 'Water Brush', cursive; */
    }
    html {
    overflow: auto;
}


/* Just for the example */
div {
    min-height: 300%;
}

body::-webkit-scrollbar {
    width: 15px;
}

body.thin::-webkit-scrollbar {
    width: 2px;
}

::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #eee;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #888;
}
::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(100,100,100,0.4); 
}
`

export default GlobalStyles
