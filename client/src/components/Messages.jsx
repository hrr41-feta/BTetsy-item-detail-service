import React, { useState } from 'react';
import {
  Overlay, MessageModal, ReadMore, ReadButton, TitleText, ButtonLabel, CloseModal, MessageInput, MessageMeet, VendorPhoto, VendorName, VendorLocation, MessageSellerButton,
} from './StyleSheet.js';


const Messages = ({
  messages, vendorName, vendorFirstName, vendorLastName, vendorLocation, vendorPhoto,
}) => {
  const [toggle, setToggle] = useState(true);
  const [MessageToggle, setMessages] = useState(true);
  return (
    <div>
      <div>
        <MessageMeet>
Meet
          {' '}
          <VendorName>
            {' '}
            {vendorName}
            {' '}
          </VendorName>
        </MessageMeet>
      </div>
      <div>
        <img src="Girl In a Jacket" />
      </div>
      <div>
        <VendorLocation>{vendorLocation}</VendorLocation>
      </div>
      <div>
        <MessageModal toggle={toggle}>
          <CloseModal onClick={() => setToggle(!toggle)}> &times; </CloseModal>
          <TitleText>Messages</TitleText>
          {messages}
          <div />
          <MessageInput placeholder="Write a Message" />
        </MessageModal>
        <MessageSellerButton onClick={() => setToggle(!toggle)}> Message the Seller </MessageSellerButton>
      </div>
    </div>
  );
};

export default Messages;
