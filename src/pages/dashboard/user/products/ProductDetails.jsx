import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './ProductDetails.css'

export default function ProductDetails() {
    const {productId}=useParams();
     const [product, setProduct]=useState({});
      const [isLoading,setIsLoading] = useState(true); 
      const getProduct = async()=>{
        try {
        const {data}=await axios.get(`https://ecommerce-node4.onrender.com/products/${productId}`);
        setProduct(data.product);
    
        }
        catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
    
    
      }
      useEffect(()=>{
        getProduct();
      },[])
    
      if (isLoading) {
        return <h1>Loading...</h1>
    
      }

      
  return (
    <div className='container pd1'>
    
      <h1 className='hhh'>Product Details</h1>
      <h2></h2>
      <Card className='card1'>
      <Card.Img variant="top" src={product.mainImage.secure_url } className='cardimg' />
      <Card.Body>
        <Card.Title className='text3'>{product.name}</Card.Title>
        <Card.Text className='text1'>
          {product.description}
          <br/>
          
          
        </Card.Text>
        <Card.Text className='text2'>
          
          <br/>
          <h2>Price : {product.price}</h2>
          <br/>
          <h2>Discount : {product.discount}</h2>
          <br/>
          <h2>FinalPrice :  {product.finalPrice}</h2>
          <br/>
          <h2>Stock :  {product.stock}</h2>
          
        </Card.Text>
    
      </Card.Body>
    </Card>
    </div>
    
  )
}
