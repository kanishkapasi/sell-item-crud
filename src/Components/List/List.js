import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { RiDeleteBin5Line } from 'react-icons/ri';

// Import Css File
import './List.css'

function List() {
  
  const [items,setItems]=useState(null);
  

  useEffect(()=>{
    displayItems()
  },[]);

  const displayItems=()=>{
    fetch('http://localhost:8000/items')
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      setItems(data);
    })
  }

  const Delete=(id)=>{
    fetch(`http://localhost:8000/items/${id}`,{
      method:"DELETE"
    })
    .then(()=>{
      displayItems()
    })
  }


  return (
    <div className='listContainer'>
      <div className="btn">
          <Link to={'/Add'}>
            <button>
              Add Items
            </button>
          </Link>
      </div>
      {items && (
        <div className="list">
          {items.map((el)=>{
              return(
                <div className="listItems" key={el.id}>
                  <h1>{el.itemName}</h1>
                  <h2>{el.itemBrand}</h2>
                  <p>condition of item {el.itemCondition} %</p>
                  <p>items quantity {el.itemQuantity}</p>
                  <p>price in 1 item is ${el.itemPrice}</p>
                  <div className="btn"                     onClick={()=>{
                      Delete(el.id)
                    }}>
                    <RiDeleteBin5Line className='del'/>
                  </div>
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}

export default List
