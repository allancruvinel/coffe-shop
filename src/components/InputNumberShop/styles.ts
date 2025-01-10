import styled from 'styled-components';

export const ProductCounter = styled.div`
  display: flex;
  width: 72px;
  height: 32px;
  background-color: ${(props) => props.theme['base-button']};
  gap: 4px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  p {
    color: ${(props) => props.theme['base-title']};
    font-family: 'roboto';
    font-size: 16px;
    width: 20px;
    text-align: center;
  }
  svg {
    color: ${(props) => props.theme.purple};
  }
  svg:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`;
