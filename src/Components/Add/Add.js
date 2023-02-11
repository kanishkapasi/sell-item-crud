import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// Import Css File
import './Add.css'

function Add() {

  const [itemName,setItemName]=useState("");
  const [itemBrand,setItemBrand]=useState("");
  const [itemCondition,setItemCondition]=useState("");
  const [itemQuantity,setItemQuantity]=useState("");
  const [itemPrice,setItemPrice]=useState("");

  const navigate=useNavigate();

  const handle=(e)=>{
    e.preventDefault();

    const data ={itemName,itemBrand,itemCondition,itemQuantity,itemPrice}

    fetch('http://localhost:8000/items',{
      method:'POST',
      headers:{"content-type":"application/json"},
      body:JSON.stringify(data)
    })
    .then(()=>{
      navigate('/List')
    })

  }

  return (
    <div className='addContainer'>
      <h1>List Your Items</h1>
      <div className="fr">
        <form onSubmit={handle}>
          <input 
            type="text"
            value={itemName}
            required
            placeholder='Item Name'
            onChange={(e)=>{
              setItemName(e.target.value);
            }}
          />
          <br/>
          <input 
            type="text"
            value={itemBrand}
            required
            placeholder='Brand Name'
            onChange={(e)=>{
              setItemBrand(e.target.value);
            }}
          />    
          <br/>
          <input 
            type="text"
            value={itemCondition}
            required
            placeholder='Item Condition'
            onChange={(e)=>{
              setItemCondition(e.target.value);
            }}
          />
          <br/>
          <input 
            type="number"
            value={itemQuantity}
            required
            placeholder='Item Quantity'
            onChange={(e)=>{
              setItemQuantity(e.target.value);
            }}
          />
          <br/>
          <input 
            type="number"
            value={itemPrice}
            required
            placeholder='Item Price'
            onChange={(e)=>{
              setItemPrice(e.target.value);
            }}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Add
