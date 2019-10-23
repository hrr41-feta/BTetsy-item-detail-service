import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Overlay, ModalWindow, ReadButton, ButtonLabel, CloseModal, TitleText, ModalBody, ModalHeader, MadeForYou, ShippingAndReturns, FromCountry, ShopPolicyContainer, ExceptionsMayApply
} from './StyleSheet';


const ShopPolicies = ({ policies, country }) => {
  const [toggle, setToggle] = useState(true);
  const [ReturnsAndExchanges, setReturnsAndExchanges] = useState(true);
  const [AdditionalPolicies, setAdditionalPolicies] = useState(true);
  const [PaymentInfo, setPaymentInfo] = useState(true);
  return (
    <ShopPolicyContainer>
      <ShippingAndReturns>
        Shipping And Returns
      </ShippingAndReturns>
      <MadeForYou>
      Made just for you. Ready to ship in 1–2 weeks.
      </MadeForYou>
      <FromCountry>
From
        {' '}
        {country}
      <div></div>
      </FromCountry>
      <MadeForYou>
Returns and exchanges accepted
<ExceptionsMayApply>Exceptions may apply.</ExceptionsMayApply>
            </MadeForYou>

      <Overlay toggle={toggle}>
        <ModalWindow>
          <ModalHeader>
            <CloseModal onClick={() => setToggle(!toggle)}> &times; </CloseModal>
            <div>Shop Policies</div>

          </ModalHeader>
          <ModalBody>

            <div>
              <TitleText>Returns and exchanges</TitleText>
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
            <TitleText>Shipping policies</TitleText>
            <div />
            <div>
              {policies.shippingPolicies}
            </div>
            <div>
              <TitleText> Payment info </TitleText>
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
              <TitleText> Additional policies </TitleText>
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
          </ModalBody>
        </ModalWindow>
      </Overlay>
      <ReadButton onClick={() => setToggle(!toggle)}>
        {' '}
        <ButtonLabel>View Shop Policies </ButtonLabel>
      </ReadButton>
    </ShopPolicyContainer>
  );
};

ShopPolicies.propTypes = {
  policies: PropTypes.objectOf(PropTypes.string).isRequired,
  country: PropTypes.string.isRequired,
};

export default ShopPolicies;
