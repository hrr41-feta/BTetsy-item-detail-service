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
    width: 644px;;
    text-align: left;
    white-space: wrap;
    text-size-adjust: 100%;
    z-index: 2; /* 1px higher than the overlay layer */
`;

export const ModalHeader = styled(ModalWindow)`
    background-color:rgb(251, 251, 250);
    display: block;
    border-bottom-color:rgb(225, 227, 223);
    position: relative;
    padding-left:0px;
    padding-right:0px;
    padding-top: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    width: 100%;
    position: relative
    font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
`;
export const ModalBody = styled(ModalWindow)`
  padding: 0px;
  margin: 0px;
  border: 0px;
  width: 100%
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
  cursor: pointer
`;

export const FaqQuestionsButton = styled(ReadMoreButton)`
  display:inline;
`;
export const ButtonLabel = styled.span`
    font-size: 14px;
    line-height: 1.4;
    text-decoration: underline
`;


export const FaqButtonLabel = styled(ButtonLabel)`
  color:rgb(51, 51, 51);
  font-family:"Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  font-weight:500;
  line-height:25.6px;
  font-size:16px;
`;

export const FaqQuestionButtonLabel = styled(ButtonLabel)`
  rgb(34, 34, 34);
  font-size: 14px;
  font-family:"Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  line-height:19.6px;
  padding-right:6px;
`;

export const ReadLessButton = styled(ReadMoreButton)`
  display:${(props) => (props.toggle ? 'none' : 'inline')}
`;
export const ReadButton = styled(ReadMoreButton)`
  display: inline
`;

export const CloseModal = styled.button`
  box-sizing: border-box
  color: rgb(34, 34, 34);
  rgb(34, 34, 34);
  float: right;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer
`;

export const TitleText = styled.div`
  color: rgb(34, 34, 34);
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-size: 16px;
  font-weight: 500;
`;

export const MessageInput = styled.input`
  position: absolute;
  bottom: 0px;
`;

export const MessageModal = styled(ModalWindow)`
  display: ${(props) => (props.toggle ? 'none' : 'inline-block')};
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 398px;
  height: 250px;
`;


export const MessageMeet = styled.div`
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-weight: 500;
  line-height: 24.6px
  color: rgb(34, 34, 34);
`;

export const VendorName = styled(MessageMeet)`
  display: inline-block;
  text-decoration-line: underline;
  cursor: pointer
`;

export const MessageSellerButton = styled.button`
background-attachment:scroll;
background-clip:border-box;
background-color:rgb(255, 255, 255);
background-origin:padding-box;
border-bottom-color:rgba(0, 0, 0, 0.15);
border-bottom-left-radius:3px;
border-bottom-right-radius:3px;
border-bottom-style:solid;
border-bottom-width:1px;
border-left-color:rgba(0, 0, 0, 0.15);
border-left-style:solid;
border-left-width:1px;
border-right-color:rgba(0, 0, 0, 0.15);
border-right-style:solid;
border-right-width:1px;
border-top-color:rgba(0, 0, 0, 0.15);
border-top-left-radius:3px;
border-top-right-radius:3px;
border-top-style:solid;
border-top-width:1px;
box-sizing:border-box;
color:rgb(34, 34, 34);
cursor:pointer;
display:inline-block;
font-family:"Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
font-size:14px;
font-weight:700;
height:38px;
line-height:19.6px;
padding-bottom:8px;
padding-left:12px;
padding-right:12px;
padding-top:8px;
text-align:center;
text-decoration-color:rgb(34, 34, 34);
text-decoration-style:solid;
text-rendering:optimizelegibility;
text-size-adjust:100%;
user-select:none;
white-space:nowrap;
width:152.922px;
`;
export const VendorFlag = styled.div`
`;

export const VendorPhoto = styled.img`
  display: inline;
  position: relative
`;

export const VendorLocation = styled.p`
  display: inline-block;
  position: absolute;
  box-sizing:border-box;
  color:rgb(117, 117, 117);
  font-family:"Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size:14px;
  font-weight:300;
`;

export const ItemDescriptionList = styled.div`
  font-size: 14px;
  text-aligh: left
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  overflow: hidden;
  width: 100%;
  height: ${(props) => (props.toggle ? '100px' : 'auto')};
  -webkit-mask-image: ${(props) => (props.toggle ? 'linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1))' : 'none')}
`;

export const ItemDescriptionContainer = styled.div`
background-color:rgb(255, 255, 255);
border-bottom-color:rgb(225, 227, 223);
border-bottom-style:solid;
border-bottom-width:1px;
box-sizing: border-box;
color:rgb(34, 34, 34);
display:block;
padding-bottom:18px;
padding-left:0px;
padding-right:0px;
padding-top:18px;
text-side-adjust: 100%;
width: 500px;
`;

export const FaqContainer = styled.div`
background-color:rgb(255, 255, 255);
border-bottom-color:rgb(225, 227, 223);
border-bottom-style:solid;
border-bottom-width:1px;
box-sizing: border-box;
color:rgb(34, 34, 34);
display:block;
font-family:"Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
font-size:14px;
height:86px;
line-height:19.6px;
padding-bottom:18px;
padding-left:0px;
padding-right:0px;
padding-top:18px;
text-align:left;
text-rendering:optimizelegibility;
text-size-adjust:100%;
width:33%;
-webkit-font-smoothing:auto;
`;

export const MeetSection = styled.div`
line-height:19.6px;
box-sizing:border-box;
border-bottom-color:rgb(225, 227, 223);
border-bottom-style:solid;
border-bottom-width:1px;
padding-top:18px;
padding-bottom: 18px;
width: 281.984px;
`;

export const VendorNameTitle = styled.h3`
    display: inline-block;
    position: flex;
    box-sizing:border-box;
    color:rgb(34, 34, 34);
    font-family:"Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
    font-size:14px;
    height:75.3438px;
    line-height:22.4px
    text-align:left;
    vertical-align:middle;
    width:188px;
    -webkit-font-smoothing:auto;
`;

export const VendorNameAndLocation = styled.div`
  display: inline-block;
  font-size: 14px;
  width: 188px;
  position: absolute
`;

export const VendorPhotoAndLocation = styled.div`
  border-bottom-color:rgb(225, 227, 223);
  box-sizing:border-box;
  text-align:left;
  vertical-align:middle;
  -webkit-font-smoothing:auto;
  width: 188px;
  padding-top:12px;
  display: inline-block;
  float: left
`;

export const VendorIcon = styled.div`
  display: inline-block;
  padding-right: 18px
  text-align: left;
`;
export const ShippingAndReturns = styled.div`
  box-sizing:border-box;
  color:rgb(34, 34, 34);
  display:block;
  font-family:"Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size:16px;
  height:38px;
  line-height:19.6px;
  font-weight: 500;
  text-size-adjust: 100%
`;
export const MadeForYou = styled.div`
  box-sizing:border-box;
  color:rgb(34, 34, 34);
  display:block;
  font-family:"Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size:14px;
  height:38px;
  line-height:19.6px;
  text-align: left;
  font-weight: 500
`;

export const ExceptionsMayApply = styled(MadeForYou)`
  font-weight: 250
`;

export const FromCountry = styled.div`
  box-sizing:border-box;
  color:rgb(34, 34, 34);
  display:block;
  font-family:"Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size:14px;
  height:19px;
  line-height:19.6px;
  margin-bottom:6px;
  margin-left:0px;
  margin-right:0px;
  margin-top:6px;
  text-align:left;
  text-rendering:optimizelegibility;
  text-size-adjust:100%;
  width:269.984px;
  -webkit-font-smoothing:auto;
`;

export const ShopPolicyContainer = styled.div`
  width: 500px;
`;
