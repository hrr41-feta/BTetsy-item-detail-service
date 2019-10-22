import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemDescription from './itemDescription.jsx';
import ShopPolicies from './ShopPolicies.jsx';
import FaqList from './FaqList.jsx';
import Messages from './Messages.jsx';
import sampleData from '../sampleData.js';

function App() {
  // const [description, getDescription] = useState(sampleData[0].productId.productDescription);
  const sample = sampleData.sampleData[0];
  const [data, setData] = useState(sample);

  async function fetchData() {
    const res = await axios.get('/index');
    const tempData = res.data;
    setData(tempData);
  }
  useEffect(() => {
    fetchData();
  });
  return (
    <div>
      <div>
        <ItemDescription description={data.productId[0].productDescription} />
      </div>
      <div>
        <ShopPolicies policies={data.shopPolicies} />
      </div>
      <div>
        <FaqList faqList={data.faq} />
      </div>
      <div>
        <Messages
          messages={data.messages.message}
          vendorName={data.vendorName}
          vendorFirstName={data.vendorFirstName}
          vendorLastName={data.vendorLastName}
          vendorLocation={data.vendorLocation}
          vendorPhoto={data.vendorPhoto}
        />
      </div>
    </div>
  );
}

export default App;
