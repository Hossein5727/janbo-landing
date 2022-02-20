import React from 'react'
import titleImg from '../../assets/titleGroup3.svg'
import { storesData } from './storesData'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './stores.scss'

function Stores() {
    return (
        <div className='stores'>
            <div className='titleImg'>
                <img
                    src={titleImg}
                    alt='titleImg'
                />
            </div>

            <div className='content'>
                {storesData.map(item => (
                    <div className='store' key={item.id}>
                        <img
                            src={item.icon}
                            alt={item.id}
                        />
                    </div>
                ))}
                <ArrowForwardIosIcon
                    fontSize='medium'
                    className='forward'
                />
                <ArrowBackIosNewIcon
                    fontSize='medium'
                    className='prev'
                />
            </div>
        </div>
    )
}

export default Stores
