import styled from "styled-components";

const theme = {
  blue: {
    default: '#1582D1',
    textColor: 'white',
    hover: '#1C5B89'
  },
  orange: {
    default: '#FBC108',
    textColor: 'black',
    hover: '#C69702'
  }
}

const StyledButton = styled.button`
  font-size: 22px;
  font-weight: 600;
  margin: auto 0;
  padding: 15px 60px;
  border-radius: 15px;
  border: none;
  color: ${props => theme[props.theme].textColor};
  background-color: ${props => theme[props.theme].default};
  text-align: center;
  cursor: pointer

  &:hover {
    background-color: ${props => theme[props.theme].hover};
  }
`;

StyledButton.defaultProps = {
  theme: 'blue'
}

export default StyledButton;