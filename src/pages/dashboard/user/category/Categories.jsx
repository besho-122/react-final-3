import React from 'react'
import axios from 'axios'
import { useState ,useEffect} from 'react';

import './Categories.css'

import { Link } from'react-router-dom';


export default function Categories() {
  const [categories, setCategories]=useState([{}]);
  const [isLoading,setIsLoading] = useState(true);
  const getCategories = async()=>{
    try {
    const {data}=await axios.get('https://ecommerce-node4.onrender.com/categories/active');
    setCategories(data.categories);

    }
    catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  
  useEffect(()=>{
    getCategories();
  },[])

  if (isLoading) {
    return <h1>Loading...</h1>

  }


  return (
 <section className ="categories">
  <h2 className='cat3'>Categories</h2>
  <div className='container cat1'>
  <div className='row '>
    {categories.map(category=>(

     <div className='col-md-4'  key={category._id}>
      
       <div className='category'>
         
         <Link type="button" className="btn3" to={`/categories/${category._id}`}>
                                <strong><img src={category.image.secure_url} alt={category.name} className='img1'/></strong>
                                <div id="container-stars3">
                                    <div id="stars3"></div>
                                </div>

                                <div id="glow3">
                                    <div className="circle3"></div>
                                    <div className="circle3"></div>
                                </div>
                            </Link>

          
         </div>
       </div>
  
    ))}

  </div>
  </div>


   

 </section>

    
    
  )
}
