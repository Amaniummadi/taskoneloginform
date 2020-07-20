import React from 'react'
import {ListItems} from './ListItems'
import {
    Link
  } from "react-router-dom";
export const LoginList = ({allList,clearItems,handleDelete}) => {
    return (
        <div className="list-Head  ">
            <p>list of All users</p>
            <ul>
                {allList.map((item)=>{
                    return  <ListItems item={item} key={item.id} handleDelete={handleDelete}/>
                })}
        
              </ul>
              {allList.length > 0 ?  <button className="shadow  focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" onClick={clearItems}>clear items </button> : <p>Empty</p>}
            <div>
            <Link to="/">
      <button className=" shadow  focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded mt-8 " >
        Back
      </button>
      </Link>
            </div>
              
        </div>
        
       
    )
}
