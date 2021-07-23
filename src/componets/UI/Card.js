import React from 'react'
const Card = (props) => {
    return (
        <div className={`rounded-lg shadow-md flex flex-col p-2 overflow-hidden my-3 ${props.bg}`}>{props.children}</div>
    )
}

export default Card;