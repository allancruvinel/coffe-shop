import styled from 'styled-components';

export const CategoryStyle = styled.div`
  p {
    font-family: 'roboto';
    font-weight: bold;
    font-size: 10px;
    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;
    padding: 4px 8px;
  }
`;
