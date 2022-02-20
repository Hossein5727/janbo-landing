import React from 'react'
import titleImg from '../../assets/attribiutes.svg'
import Attribute from './Attribute'
import './attributes.scss'
import { attributesData } from './attributesData'

function Attributes() {
    return (
        <div className='attributes'>
            <div className='titleImg'>
                <img
                    src={titleImg}
                    alt='titelImg'
                />
            </div>

            <div className='content'>
                {attributesData.map(item => (
                    <Attribute
                        item={item}
                        key={item.id}
                    />
                ))}
            </div>

        </div>
    )
}

export default Attributes
