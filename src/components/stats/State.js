import React from 'react'
import ring from '../../assets/ring.svg'

function State({ item }) {
    return (
        <div className='state'>
            <div className='contentState'>
                <h1>{item.title}</h1>
                <h5>{item.desc}</h5>
                <div></div>
                <img
                    src={ring}
                    alt='ring'
                />
            </div>
            <h3>{item.title2}</h3>
        </div>
    )
}

export default State
