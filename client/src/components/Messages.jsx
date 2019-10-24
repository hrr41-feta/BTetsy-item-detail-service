import React, { useState } from 'react';
import {
  MessageModal, TitleText, CloseModal, MessageInput, MessageMeet, VendorName, VendorLocation, MessageSellerButton, MeetSection, VendorNameTitle, VendorNameAndLocation, VendorPhotoAndLocation, VendorIcon,
} from './StyleSheet.js';


const Messages = ({
  vendorName, vendorFirstName, vendorLastName, vendorLocation, vendorPhoto,
}) => {
  const [toggle, setToggle] = useState(true);
  const [MessageToggle, setMessages] = useState(true);
  return (
    <MeetSection>
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
        <VendorPhotoAndLocation>
          <VendorIcon>
            <img src={vendorPhoto} alt=" " />
          </VendorIcon>
          <VendorNameAndLocation>
            <VendorNameTitle>
            {' '}
            {vendorFirstName}
            {' '}
            <div></div>
            <VendorLocation>{vendorLocation}</VendorLocation>
          </VendorNameTitle>

          </VendorNameAndLocation>

        </VendorPhotoAndLocation>
      </div>

      <div />
      <div>
        <MessageModal toggle={toggle}>
          <CloseModal onClick={() => setToggle(!toggle)}> &times; </CloseModal>
          <TitleText>Messages</TitleText>
          <div />
          <MessageInput placeholder="Write a Message" />
        </MessageModal>
        <MessageSellerButton onClick={() => setToggle(!toggle)}> Message the Seller </MessageSellerButton>
      </div>
    </MeetSection>
  );
};

export default Messages;
