import styled from 'styled-components';

const Carousel = styled.div`
  float: left;
  width: ${props => (props.span ? (props.span / 12) * 100 : "8.33")}%;
  padding: 1rem;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;