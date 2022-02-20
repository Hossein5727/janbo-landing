import React from 'react'
import imgTitle from '../../assets/titleGroup4.svg'
import './manageProduct.scss'
import { productsData } from './productsData'

function ManageProduct() {
    return (
        <div className='manage'>
            <div className='titleImg'>
                <img
                    src={imgTitle}
                    alt='imgTitle'
                />
            </div>

            <div className='content'>
                {productsData.map(item => (
                    <div className={`productInfo ${item.special && 'special'}`} key={item.id}>
                        <img
                            src={item.img}
                            alt={item.title}
                        />
                        <h2>{item.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ManageProduct
