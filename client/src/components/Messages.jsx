import React, { useState } from 'react';
import {
  Overlay, MessageModal, ReadMore, ReadButton, TitleText, ButtonLabel, CloseModal, MessageInput, MessageMeet, VendorPhoto
} from './StyleSheet.js';


const Messages = ({ messages, vendorName, vendorFirstName, vendorLastName, vendorLocation, vendorPhoto }) => {
  const [toggle, setToggle] = useState(true);
  const [MessageToggle, setMessages] = useState(true);
  return (
    <div>
      <div>
      <MessageMeet>Meet {vendorName}</MessageMeet>
      </div>
      <div>
        {console.log(vendorPhoto)}
        <img src={vendorPhoto} alt="Girl in a jacket"></img>
      </div>
      <div>
          <MessageModal toggle={toggle}>
            <CloseModal onClick={() => setToggle(!toggle)}> &times; </CloseModal>
            <TitleText>Messages</TitleText>
            {messages}
            <div></div>
            <MessageInput placeholder="Write a Message"></MessageInput>
          </MessageModal>
        <button onClick={() => setToggle(!toggle)}> Message The Seller </button>
      </div>
    </div>
  );
};

export default Messages;
