import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';

import axios from 'axios';
export default function CategoryProducts() {
 const{categoryId}=useParams();
 const [products, setProducts]=useState([{}]);
  const [isLoading,setIsLoading] = useState(true); 
  const getProducts = async()=>{
    try {
    const {data}=await axios.get(`https://ecommerce-node4.onrender.com/products/category/${categoryId}`);
    setProducts(data.products);

    }
    catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }


  }
  useEffect(()=>{
    getProducts();
  },[])

  if (isLoading) {
    return <h1>Loading...</h1>

  }

  return (
    
        <section className ="products">
         <h2 className='cat3'>Products</h2>
         <div className='container cat1'>
         <div className='row '>
           {products.map(product=>(
       
            <div className='col-md-4'  key={product._id}>
             
              <div className='product'>
                
                <button type="button" className="btn4">
                                       <strong><img src={product.mainImage.secure_url}  className='img2'/>
                                       <h6 className='p2'>{product.name}</h6>
                                       </strong>
                                       
                                       <div id="container-stars4">
                                           <div id="stars4"></div>
                                       </div>
       
                                       <div id="glow4">
                                           <div className="circle4"></div>
                                           <div className="circle4"></div>
                                       </div>
                                   </button>
       
                 
                </div>
              </div>
         
           ))}
       
         </div>
         </div>
       
       
          
       
        </section>
       
           
           
         
  )
}
