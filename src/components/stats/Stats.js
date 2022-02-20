import React from 'react'
import titleImg from '../../assets/titleGroup2.svg'
import State from './State'
import { statsData } from './statsData'
import flower from '../../assets/flower.svg'
import './stats.scss'

function Stats() {
    return (
        <div className='stats'>
            <div className='titleImg'>
                <img
                    src={titleImg}
                    alt="titleImg"
                />
            </div>

            <div className='content'>
                {statsData.map(item => (
                    <State
                        item={item}
                        key={item.id}
                    />
                ))}
                <img
                    src={flower}
                    alt='flower'
                    className='flower1'
                />
                <img
                    src={flower}
                    alt='flower'
                    className='flower2'
                />
            </div>
        </div>
    )
}

export default Stats
