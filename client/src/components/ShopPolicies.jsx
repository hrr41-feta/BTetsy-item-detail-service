import React, { useState, useEffect } from 'react';

const ShopPolicies = ({ policies }) => {
  return(
  <div id="overlay" style={{display:'block'}}>{policies.returnsAndExchange}</div>
  );
};

export default ShopPolicies;
