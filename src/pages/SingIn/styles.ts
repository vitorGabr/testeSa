import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    form{
        height: auto;
        width: 40%;
        @media (max-width: 768px) {
            width: 90%;
        }
    }
`;