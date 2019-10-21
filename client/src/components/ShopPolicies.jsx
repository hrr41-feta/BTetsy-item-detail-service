import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Overlay, ModalWindow, ReadButton, ButtonLabel, CloseModal, TitleText,
} from './StyleSheet.js';


const ShopPolicies = ({ policies }) => {
  const [toggle, setToggle] = useState(true);
  const [ReturnsAndExchanges, setReturnsAndExchanges] = useState(true);
  const [AdditionalPolicies, setAdditionalPolicies] = useState(true);
  const [PaymentInfo, setPaymentInfo] = useState(true);
  return (
    <div>
      <Overlay toggle={toggle}>
        <ModalWindow>
          <CloseModal onClick={() => setToggle(!toggle)}> &times; </CloseModal>
          <div>
            <TitleText>Returns and Exchanges</TitleText>
            <div />
            {' '}
            {ReturnsAndExchanges ? policies.returnsAndExchange.slice(0, ((policies.returnsAndExchange.length) / 2)) : policies.returnsAndExchange}
            {' '}
          </div>
          <div />
          <ReadButton onClick={() => setReturnsAndExchanges(!ReturnsAndExchanges)}>
            <ButtonLabel>
              {ReturnsAndExchanges ? ' + More' : ' - Less'}
            </ButtonLabel>
          </ReadButton>
          <div />
          <TitleText>Shopping Policies</TitleText>
          <div />
          <div>

          We ship almost all of our items USPS Priority mail, which usually takes 2-3 business days to arrive (per USPS guidelines). If you require tracking or other shipping services please let me know and payment for rush shipping can be arranged.

          International orders can take up to 14-21 business days or more to arrive. If you need your order sooner, please contact us for upgraded shipping options. Please note for international orders we are not responsible for any additional custom charges that might occur. We do not know if or when a package will be charged or taxed and it's not part of the shipping cost.

          </div>
          <div>
            <TitleText> Payment Info </TitleText>
            <div />
            {' '}
            {PaymentInfo ? policies.returnsAndExchange.slice(0, ((policies.returnsAndExchange.length) / 2)) : policies.returnsAndExchange}
            {' '}
          </div>
          <div />
          <ReadButton onClick={() => setPaymentInfo(!PaymentInfo)}>
            <ButtonLabel>
              {PaymentInfo ? ' + More' : ' - Less'}
            </ButtonLabel>
          </ReadButton>
          <div />
          <div>
            <TitleText> Additional Policies </TitleText>
            <div />
            {' '}
            {AdditionalPolicies ? policies.additionalPolicies.slice(0, ((policies.additionalPolicies.length) / 2)) : policies.additionalPolicies}
            {' '}
          </div>
          <div />
          <ReadButton onClick={() => setAdditionalPolicies(!AdditionalPolicies)}>
            <ButtonLabel>
              {AdditionalPolicies ? ' + More' : ' - Less'}
            </ButtonLabel>
          </ReadButton>
          <div />
        </ModalWindow>
      </Overlay>
      <button onClick={() => setToggle(!toggle)}> View Shop Policies </button>
    </div>
  );
};

ShopPolicies.propTypes = {
  policies: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ShopPolicies;
