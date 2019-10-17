import React from 'react';

// should render data from productId. item description
// should use html read more or read less button

const ItemDescription = ({ description }) => (
  <p>{description.productId.productDescription}</p>
);

export default ItemDescription;
