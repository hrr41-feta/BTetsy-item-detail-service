import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
 ReadMore, ReadMoreButton, ReadLessButton, ButtonLabel
} from './StyleSheet.js';

// should render data from productId. item description
// should use html read more or read less button

const ItemDescription = ({ description }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <p>
        {description.slice(0, description.length / 2)}
        <ReadMore toggle={toggle}>{description.slice(description.length / 2)}</ReadMore>
        <ReadMoreButton toggle={toggle} onClick={() => setToggle(!toggle)}>
          {' '}
          <ButtonLabel> + Learn More About This Item </ButtonLabel>
        </ReadMoreButton>
        <ReadLessButton toggle={toggle} onClick={() => setToggle(!toggle)}>
          {' '}
          <ButtonLabel> - Less </ButtonLabel>
          {' '}
        </ReadLessButton>
      </p>
    </div>
  );
};

ItemDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ItemDescription;
