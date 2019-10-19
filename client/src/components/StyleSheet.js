import styled from 'styled-components';

export const Overlay = styled.div`
    display: ${(props) => (props.toggle ? 'none' : 'block')};
    position:fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-color:rgba(0,0,0,0.5);
`;

export const ModalWindow = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    text-align: left;
    white-space: wrap;
    text-size-adjust: 100%;
    z-index: 2; /* 1px higher than the overlay layer */
`;
export const ReadMore = styled.span`
  display: ${(props) => (props.toggle ? 'none' : 'inline')};
  `;

export const ReadMoreButton = styled.button`
  display:${(props) => (props.toggle ? 'inline' : 'none')}
  background-color: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
  height: inherit;
  text-align: left;
  color: #222222;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-size: 14px;
  line-height: 1.4;
  line-height: 1.4;
`;

export const FaqQuestionsButton = styled(ReadMoreButton)`
  display:inline
`;

export const ReadLessButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 0;
  text-decoration: none;
  padding: 0;
  height: inherit;
  text-align: left;
  color: #222;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-size: 14px;
  line-height: 1.4;
  display:${(props) => (props.toggle ? 'none' : 'inline')}
`;

export const ButtonLabel = styled.span`
    font-size: 14px;
    line-height: 1.4;
    text-decoration: underline
`;

export const ReadButton = styled(ReadMoreButton)`
  display: inline
`
