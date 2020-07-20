import React from 'react'

export const ListItems = ({item,handleDelete}) => {
    return (
       <div className="listItem bg-gray-200">
          <li>userName : <span>{item.userName}</span></li>
       <li>email : <span>{item.email}</span></li>
         <li>password : <span>{item.password}</span></li>
         <button className="shadow   focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" onClick={() => handleDelete(item.id)}>delete</button>
       </div>
    )
}
