import React, { useState } from 'react';
import { Overlay, ModalWindow } from './ShopPoliciesOverlay';

const ShopPolicies = ({ policies }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <Overlay toggle={toggle}>
        <ModalWindow>{policies.returnsAndExchange}</ModalWindow>
        <button onClick={() => setToggle(!toggle)}> X </button>
      </Overlay>
      <button onClick={() => setToggle(!toggle)}> Display</button>
    </div>
  );
};

export default ShopPolicies;
