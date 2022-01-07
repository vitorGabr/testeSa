import styled from "styled-components";
import * as theme from '../../theme';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: #f5f5f5;
    align-items: center;
    flex-direction: column;
    background: ${theme.bgColor};
    color: ${theme.primary};
    h1{
        font-weight: bold;
    }
    form{
        -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.14);
        -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.14);
        box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.14);
        background: ${theme.card};
        border-radius: 5px;
        padding: 2rem;
        height: auto;
        width: 30%;
        a{
            color: ${theme.tertiary};
        }
        @media (max-width: 768px) {
            width: 90%;
        }
        button{
            background: ${theme.secondary};
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.14);
            border:0;
            &:hover{
                background: ${theme.secondary};
                opacity: 0.5;
            }
        }
    }
`;