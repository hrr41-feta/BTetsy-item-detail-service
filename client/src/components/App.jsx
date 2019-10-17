import React, { useState, useEffect } from 'react';
import ItemDescription from './itemDescription.jsx';
import sampleData from '../sampleData.js';

function App() {
  // const [description, getDescription] = useState(sampleData[0].productId.productDescription);

  return (
    <div>
      <ItemDescription description={sampleData.sampleData[0]} />
    </div>
  )
}

export default App;
