import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Overlay, ModalWindow, ReadButton, ButtonLabel, ReadMore,
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
          <button onClick={() => setToggle(!toggle)}> X </button>
          <div>
            {' '}
            {ReturnsAndExchanges ? policies.returnsAndExchange.slice(0, ((policies.returnsAndExchange.length) / 2)) : policies.returnsAndExchange}
            {' '}
          </div>
          <div />
          <ReadButton onClick={() => setReturnsAndExchanges(!ReturnsAndExchanges)}>
            <ButtonLabel>
              {ReturnsAndExchanges ? 'Read More' : 'Read Less'}
            </ButtonLabel>
          </ReadButton>
          <div></div>
          <div>
            {' '}
            {ReturnsAndExchanges ? policies.returnsAndExchange.slice(0, ((policies.returnsAndExchange.length) / 2)) : policies.returnsAndExchange}
            {' '}
          </div>
          <div />
          <ReadButton onClick={() => setReturnsAndExchanges(!ReturnsAndExchanges)}>
            <ButtonLabel>
              {ReturnsAndExchanges ? 'Read More' : 'Read Less'}
            </ButtonLabel>
          </ReadButton>
          <div></div>
          <div>
            {' '}
            {AdditionalPolicies ? policies.additionalPolicies.slice(0, ((policies.additionalPolicies.length) / 2)) : policies.additionalPolicies}
            {' '}
          </div>
          <div />
          <ReadButton onClick={() => setAdditionalPolicies(!AdditionalPolicies)}>
            <ButtonLabel>
              {AdditionalPolicies ? 'Read More' : 'Read Less'}
            </ButtonLabel>
          </ReadButton>
          <div></div>
        </ModalWindow>
      </Overlay>
      <button onClick={() => setToggle(!toggle)}> Display</button>
    </div>
  );
};

ShopPolicies.propTypes = {
  policies: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ShopPolicies;
