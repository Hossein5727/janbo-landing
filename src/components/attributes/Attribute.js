import React from 'react'

function Attribute({ item }) {
    return (
        <div className={`attribute ${item.special && 'bgRed'}`}>
            <div className='icon'>
                <img
                    src={item.icon}
                    alt={item.title}
                />
            </div>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
        </div>
    )
}

export default Attribute
