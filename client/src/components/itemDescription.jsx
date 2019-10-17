import React, { useState, useEffect } from 'react';

// should render data from productId. item description
// should use html read more or read less button

const ItemDescription = ({ description }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <p>
        {description.slice(0, description.length / 2)}
        <span id="dots">...</span>
        <span id="more" style={{ display: toggle === true ? "none" : "inline" }}>{description.slice(description.length / 2)}</span>
        <button onClick={() => setToggle(!toggle)}> Read More</button>
      </p>
    </div>
  );
};

export default ItemDescription;
