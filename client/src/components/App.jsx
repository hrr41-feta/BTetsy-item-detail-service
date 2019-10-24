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

  function getProductId() {
    const searchParams = new URLSearchParams(window.location.search);
    const productId = Number(searchParams.get('productId'));
    return productId;
  }
  async function fetchData(productId) {
    const res = await axios.get(`/api/description/${productId}`);
    const tempData = res.data;
    setData(tempData);
  }
  useEffect(() => {
    const Id = getProductId();
    console.log(Id);
    fetchData(Id);
  }, []);
  return (
    <div>
      <div>
        <ItemDescription description={data.product.productDescription} />
      </div>
      <div>
        <ShopPolicies policies={data.shopPolicies} country={data.vendorCountry} />
      </div>
      <div>
        <Messages
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
