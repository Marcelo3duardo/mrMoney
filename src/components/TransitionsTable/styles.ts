import styled from "styled-components";

export const Container = styled.div`
   margin-top:4rem;
   max-width: 1128px;
   margin:0 auto;
   align-items:center;

   table{
     width:100%;
     border-spacing: 0 0.5rem;
     
     th{ 
       color: var(--text-body-color);
       font-weight: 400;
       padding:1rem 2rem;
       line-height: 1.5rem;
       text-align: left;
     }

     td{ 
       padding: 1rem 2rem;
       border: 0;
       background: var(--shape);
       border-radius:0.25rem;
       &:first-child{
         color: var(--text-title);
         font-weight: 600;
       }

       &.deposit{
         color: var(--green);
       }

       &.retirada{
        color: var(--red);
       }
     }
   }
  `;