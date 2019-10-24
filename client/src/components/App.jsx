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
  const [productId, setProductId] = useState(1)
  const searchParams = new URLSearchParams(window.location.search);

  function setId() {
    setProductId(Number(searchParams.get('productId')));
  };
  async function fetchData() {
    setId();
    const res = await axios.get(`/product/${productId}`);
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
        <ShopPolicies policies={data.shopPolicies} country={data.vendorCountry} />
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
      <div>
        <FaqList faqList={data.faq} />
      </div>
    </div>
  );
}

export default App;
