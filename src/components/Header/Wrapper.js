import styled from 'styled-components';

import { violet } from 'theme/colors';

const Wrapper = styled.header`
  background: ${violet};
  overflow: hidden;
  position: relative;
  width: 100%;
  height: ${props => ( props.isHome ? props.theme.header.homeHeight : props.theme.header.pageHeight )};
`;

export default Wrapper;