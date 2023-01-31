import styled from 'styled-components';

export const Header = styled.h1`
    background-color: #367377;
    height: 15vh;
    width: 100vw;
    text-align: center;
`;

export const Resume = styled.div`
    width: 25vw;
    height: 15vh;
    margin-top: -5vh;
    padding: 10px 20px;
    background-color: white;
    border-radius: 10px;
`;

export const ResumeTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
`;

export const ResumeValue = styled.strong`
    display: flex;
    height: 50%;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
`;