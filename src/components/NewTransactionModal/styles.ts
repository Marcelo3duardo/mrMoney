import styled from "styled-components";
import {transparentize} from "polished"

export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size:1.5rem;
        margin-bottom:2rem;

    }

    input{ 
        width: 100%;
        padding:0 1.5rem;
        height:4rem;
        border-radius:0.25rem;

        border:1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight:400;
        font-size:1rem;

       &::placeholder{
           color: var(--text-body);
       }

        & + input{
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding:0 1.5rem;
        height:4rem;
        background: var(--green);
        color:#fff;
        border-radius: 0.25rem;
        border: 0;
        font-size:1rem;
        margin-top:1.5rem;
        font-weight: 600;

        transition: filter 0.4s;

        &:hover{
            filter: brightness(0.85);
        }


    }
`;

export const TransactionTypeContainer = styled.div`
    margin:1rem 0;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:0.5rem;

 `;

 interface RadioBoxProps{
     isActive: boolean;
     activeColor: 'green' | 'red';
 }

 const colors = {
     green:'#33CC95',
     red:'#E62E4D'   
 }


 export const RadioBox =styled.button<RadioBoxProps>`
 
        height: 4rem;
        //border:1px solid #d7d7d7;
        border:  ${(props) => props.isActive ? '2px solid #24272B' : '1px solid #24272B'};
        border-radius: 0.25rem;

        background: ${(props) => props.isActive ? transparentize(0.9 , colors[props.activeColor])  : 'var(--shape)'};

        display:flex;

        align-items: center;
        justify-content: center;

        img{
            width:20px;
            height:20px;
           // display: ${(props) => props.isActive ? 'block' : 'none'}
        }

        span{
            display:inline-block;
            margin-left: 1rem;
            font-size:1rem;
            color:${(props) => props.isActive ? 'var(--text-title)' : 'rgba(0,0,0,0.2)'};
        }

        
        transition: border-color 0.4s;

        &:hover{
           border-color: #aaa;
        }

 
 `;