import styled from 'styled-components';

export const Form = styled.form`
margin-bottom: 30px;
    padding: 30px 50px;
    border: 1px solid ${p => p.theme.colors.darkBlue};
`;

export const Label = styled.label`
    &:not(:last-child){
        margin-bottom: 10px;
    }
    display: flex;
    gap: 10px;
    justify-content: space-between;
    font-weight: 600;
    line-height: 1.8;
    letter-spacing: 0.02em;
    color: ${p => p.theme.colors.blue};
`;

export const FormButton = styled.button`
    display: block;
    margin: 20px auto 0;
    padding: 5px 10px;
    border-radius: 2px;
    line-height: 1.4;
    background-color: ${p => p.theme.colors.darkBlue};
    color: ${p => p.theme.colors.light};
    transition: color ${p => p.theme.animation}, background-color ${p => p.theme.animation};

    &:focus, &:hover{
        background-color: ${p => p.theme.colors.blue};
        color: ${p => p.theme.colors.darkBlue};
    }
`