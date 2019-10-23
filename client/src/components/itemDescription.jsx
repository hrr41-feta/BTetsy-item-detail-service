import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ReadMore, ButtonLabel, ItemDescriptionList, ReadButton, ItemDescriptionContainer,
} from './StyleSheet.js';

// should render data from productId. item description
// should use html read more or read less button

const ItemDescription = ({ description }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <ItemDescriptionContainer>
      <ItemDescriptionList toggle={toggle}>
        {description}
        <div />
      </ItemDescriptionList>
      <ReadButton onClick={() => setToggle(!toggle)}>
        <ButtonLabel>
          {toggle ? ' + Learn More About This Item' : ' - Less'}
        </ButtonLabel>
      </ReadButton>
    </ItemDescriptionContainer>
  );
};

ItemDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ItemDescription;
