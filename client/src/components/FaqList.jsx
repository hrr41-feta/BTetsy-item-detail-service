import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReadMore, FaqQuestionsButton, ButtonLabel } from './StyleSheet.js';
import FaqEntry from './FaqEntry.jsx';

const FaqList = ({ faqList }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <FaqQuestionsButton onClick={() => setToggle(!toggle)}>
        <ButtonLabel> FAQ's </ButtonLabel>
      </FaqQuestionsButton>
      <ReadMore toggle={toggle}>
        {faqList.map((faq, index) => <FaqEntry key={index} faq={faq} />)}
      </ReadMore>
    </div>

  );
};

// FaqList.propTypes = {
//   FaqList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
// };

export default FaqList;
