import styled from "styled-components";
import * as theme from '../../theme';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    background-color: ${theme.bgColor};
`;

export const Header = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    .create-feed{
        margin-right: 1rem;
    }
    color: ${theme.primary};
    .feed-btn{
        background: ${theme.card};
        box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.14);
        border:0;
        &:hover{
            opacity: 0.5;
        }
    }
`;

export const Content = styled.div`
    padding: 0 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;