import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './StyleSheet.js';


const ShopPolicies = ({ policies }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <Overlay toggle={toggle}>
        <ModalWindow>
          {' '}
          {policies.returnsAndExchange}
          {' '}
        </ModalWindow>
        <button onClick={() => setToggle(!toggle)}> X </button>
      </Overlay>
      <button onClick={() => setToggle(!toggle)}> Display</button>
    </div>
  );
};

ShopPolicies.propTypes = {
  policies: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ShopPolicies;
