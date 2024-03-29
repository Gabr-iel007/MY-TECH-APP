import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../DB/ProductDB'
import ProductCard from '../components/ProductCard'
import DetailCard from '../components/DetailCard'

const DetailPage = () => {
  const {id} = useParams()
  // console.log(`product ${id} clicked`);
  console.log(data);

  // Go into the database and find the product with the id =/ the same as product id

  const product = data.find((p) => p.id === parseInt( id));
  // console.log(product);
  return (
    <div>
        <h1>Detail Page</h1>
        <div className=''>
          <h3>Product {id} clicked</h3>
          {/* <ProductCard product={product}/> */}
          <DetailCard product={product}/>
              </div>
    </div>
  )
}

export default DetailPage