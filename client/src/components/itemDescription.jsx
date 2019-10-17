import React, { useState } from 'react';
import ReadMore from './ReadMore';

// should render data from productId. item description
// should use html read more or read less button

const ItemDescription = ({ description }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <p>
        {description.slice(0, description.length / 2)}
        <ReadMore toggle={toggle}>{description.slice(description.length / 2)}</ReadMore>
        <button onClick={() => setToggle(!toggle)}>
          {' '}
          {toggle === true ? 'Read More' : 'Read Less'}
                </button>
      </p>
    </div>
  );
};

export default ItemDescription;
