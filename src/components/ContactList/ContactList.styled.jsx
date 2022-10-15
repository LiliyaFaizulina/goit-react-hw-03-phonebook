import styled from 'styled-components';

export const List = styled.ul`
    line-height: 1.8;
    letter-spacing: 0.02em;
    color: ${p => p.theme.colors.darkBlue};
`;

export const ContactItem = styled.li`
    display: flex;
    gap: 10px;
    align-items: center;
    &:not(:last-child){
        margin-bottom: 10px;
    }
`;

export const DeleteButton = styled.button`
    margin-left: auto;
    padding: 5px 10px;
    border-radius: 2px;
    line-height: 1.4;
     background-color: ${p => p.theme.colors.blue};
    color: ${p => p.theme.colors.light};
    transition: color ${p => p.theme.animation}, background-color ${p => p.theme.animation};
    
    &:focus, &:hover{
        background-color: ${p => p.theme.colors.darkBlue};
        color: ${p => p.theme.colors.pink};
    }
`