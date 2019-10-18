import styled from 'styled-components';

export const Overlay = styled.div`
    display: ${props => props.toggle === true ? 'none': 'block-line'};
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color:rgba(0,0,0,0.5);
`;

export const ModalWindow = styled.div`
    width: 300px;
    height: 200px;
    line-height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -150px;
    background-color: #f1c40f;
    border-radius: 5px;
    text-align: center;
    z-index: 11; /* 1px higher than the overlay layer */
`;


