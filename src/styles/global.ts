import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
    --backgroundBody: #f0f2f5;
    --shape:#f2faff;
    --red:#E62E4D;
    --green:#33CC95;
    --blue:#5429CC;
    --blue-light:#6933ff;
    --text-title:#363F5F;
    --text-body:#969CB3;
}

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body,input,textarea,button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6, strong{
        font-weight: 600;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%;

        }

        @media(max-width:720px){
            font-size: 87.5%;
        }
    }

    body{
        background: var(--backgroundBody);
        -webkit-font-smoothing: antialiased;//deixar as fontes mais nitidas 
    }

    .react-modal-overlay{
        background-color: rgba(0,0,0,0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width:576px;
        background: var(--backgroundBody);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;

    }

     .react-modal-close{
        position:absolute;
        right:1.5rem;
        top:1.5rem;
        border:0;
        background  :transparent ;
    

        transition: filter 0.4s;
        &:hover{
            filter:brightness(0.9);
        }
    }


`



