import styled from "styled-components";
import * as theme from '../../theme';

export const Container = styled.div`
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem;
    min-width: 15%;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.14);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.14);
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.14);
    background-color: ${theme.tertiary};
    h5{
        margin: 0;
        font-weight: 900;
    }
    p{
        font-size: 0.8rem;
        margin: 0;
    }
`