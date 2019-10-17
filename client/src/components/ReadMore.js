import styled,  { css } from 'styled-components';

const ReadMore = styled.span`
  display: ${props => props.toggle === true ? 'none': 'inline'};
  `


export default ReadMore;