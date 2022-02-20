import React from 'react'
import imgFooter from '../../assets/footerImg.svg'
import './footer.scss'

function Footer() {
    return (
        <footer className='footer'>
            <div className='img'>
                <img
                    src={imgFooter}
                    alt='imgFooter'
                />
            </div>
            <button className='submit'>ثبت کارت</button>
        </footer>
    )
}

export default Footer
