import React from 'react'
import titleImg from '../../assets/titleGrooup1.svg'
import img from '../../assets/guideSection1.svg'
import './guide.scss'

function Guide() {
    return (
        <div className='guide'>
            <div className='titleImg'>
                <img
                    src={titleImg}
                    alt='titleImg'
                />
            </div>
            <div className='guideSection'>

                <img
                    src={img}
                    alt='guideSection'
                />
            </div>
        </div>
    )
}

export default Guide
