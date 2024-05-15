import styled from 'styled-components';

export const ComponentTitle = styled.h2`
    font-weight: 400;
`;

export const ComponentSubtitle = styled.p`
    font-weight: 50;
    font-size: small;
    margin-top: 0;
    color: gray;
`;

export const ComponentWrapper = styled.section`
`;

export const InputWrapper = styled.div`
    width: 100%;
`;

export const InputContainer = styled.div`
    display: flex;
    gap: 25px;
`;

export const Wrapper = styled.form`
    max-width: 400px;
    margin: 0 auto;
`

export const RedDot = styled.span`
    color: red;
    font-size: medium;
`

export const SubmitBtn = styled.button`
    padding: 13px 20px;
    width: 140px;
    background: none;
    color: gray;
    border: 2px solid #00cf29;
    border-radius: 5px;
    transition: 2s;

    &:hover{
        background-color: #00cf29;
        color: #fff;
    }
`;

export const Line = styled.hr`
    border-top: 0.5px solid rgba(103, 103, 116, 0.1);
    opacity: 1px;
    width: 500px;
    position: relative;
    right: 10%;
`;

export const Logo = styled.img`
    
`;

export const ErrorMessage = styled.span`
  color: red;
`;