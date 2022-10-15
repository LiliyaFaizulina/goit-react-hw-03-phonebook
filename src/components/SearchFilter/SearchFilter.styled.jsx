import styled from 'styled-components';

export const FilterLabel = styled.label`
    font-size: 20px;
    font-weight: 600;
    color: ${p => p.theme.colors.darkBlue};
`;

export const FilterInput = styled.input`
    display: block;
    margin-top: 10px;
    margin-bottom: 20px;
    height: 29px;
`