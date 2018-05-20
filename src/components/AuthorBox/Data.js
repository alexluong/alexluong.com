import React  from 'react';
import styled from 'styled-components';

const DataContainer = styled.div`
  grid-area: data;
  width: 100%;
  height: auto;
  @media screen and (max-width: ${props => props.theme.size.md}) {
    h2 {
      text-align: center;
    }
  }
  * {
    margin: 0;
  }
  p {
    font-size: 1.8rem;
  }
`;

const Data = ({ name, description }) => (
  <DataContainer>
    <h2>{ name }</h2>
    <p>{ description }</p>
  </DataContainer>
);

export default Data;