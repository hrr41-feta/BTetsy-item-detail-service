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
    const searchParams = new URLSearchParams(window.location.search);
    const productId = Number(searchParams.get('productId'));
    const res = await axios.get(`/products/${productId}`);
    const tempData = res.data;
    console.log(tempData);
    setData(tempData);
  }
  useEffect(() => {
    fetchData();
  },[]);
  return (
    <div>
      {console.log('data', data.product.productDescription)}
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
