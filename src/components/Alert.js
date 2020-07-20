import React from 'react'

export const Alert = ({type,text}) => {
    return (
        <div>
          <div className={`alert alert-${type}`}>{text}</div>
        </div>
    )
}
