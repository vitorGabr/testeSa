import styled from "styled-components";
import * as theme from '../../theme';

export const Container = styled.div`
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 15%;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.14);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.14);
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.14);
    background-color: ${theme.tertiary};
    h5{
        margin: 0;
        width: 100%;
        font-weight: 900;
        word-break: break-all;
    }
    p{
        font-size: 0.8rem;
        margin: 0;
    }
    .btn-reactions{
        display: flex;
        align-items:center;
        justify-content: flex-end;
        span{
            cursor: pointer;
            color: ${theme.card};
        }
        span:first-child{
            margin-right: 0.5rem;
        }
    }
    @media (max-width: 768px) {
        width: 40%;
    }
    @media (max-width: 368px) {
        width: 100%;
    }
`