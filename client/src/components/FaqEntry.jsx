import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaqQuestionsButton, ButtonLabel, ReadMore } from './StyleSheet.js';

const FaqEntry = ({ faq }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <FaqQuestionsButton onClick={() => setToggle(!toggle)}>
        <ButtonLabel>{faq.question}</ButtonLabel>
      </FaqQuestionsButton>
      <div>
        <ReadMore toggle={toggle}>{faq.answer}</ReadMore>
      </div>
    </div>
  );
};

FaqEntry.propTypes = {
  faq: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default FaqEntry;
