import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReadMore, FaqQuestionsButton, FaqButtonLabel, FaqContainer } from './StyleSheet.js';
import FaqEntry from './FaqEntry.jsx';

const FaqList = ({ faqList }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <FaqContainer>
      <FaqQuestionsButton onClick={() => setToggle(!toggle)}>
        <FaqButtonLabel> FAQ's </FaqButtonLabel>
      </FaqQuestionsButton>
      <ReadMore toggle={toggle}>
        {faqList.map((faq, index) => <FaqEntry key={index} faq={faq} />)}
      </ReadMore>
      </FaqContainer>
    </div>

  );
};

// FaqList.propTypes = {
//   FaqList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
// };

export default FaqList;
