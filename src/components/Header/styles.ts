import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
`;

export const ActionsField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  
`

export const LocationField = styled.div`
  background-color: ${(props) => props.theme["purple-light"]};
  display: flex;

  align-items: center;
  justify-content: center;
  height: 40px;
  gap: 0.25rem;
  padding: 0 8px;
  border-radius: 6px;
  
  p{
    color: ${props => props.theme['purple-dark']};
  }
`;
