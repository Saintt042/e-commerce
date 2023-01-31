import React from 'react'
import { Container } from './ProductStyle';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import nn from "../../nn.jpg";

const Product = () => {
  return (
    <Container>
         <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src=''
                    className="product-detail-image" alt="" />
                </div>
                <div className='small-images-container'>
                     <img
                        src={nn}
                        className='small-image'
                        onMouseEnter=''
                        alt=''
                        />  
                </div>
            </div>
            <div className="product-detail-desc">
                <h1>name</h1>
                <div className="reviews">
                    <div>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                    <p>
                        (20)
                    </p>
                </div>
                <h4>Details: </h4>
                <p>Details</p>
                <p className="price">₦ price</p>
                <div className="quantity">
                    <h3>Quantity:</h3>
                    <p className='quantity-desc'>
                        <span className='minus'
                        onClick=''>
                            <RemoveIcon />
                        </span>

                        <span className='num'
                        onClick="">Quantity</span>

                        <span className='plus'
                        onClick=''> <AddIcon /> </span>
                    </p>
                </div>
                <div className='buttons'>
                    <button type='button'
                    className='add-to-cart'
                    onClick=''>Add to Cart</button>
                     <button type='button'
                    className='buy-now'
                    onClick="">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="maylike-products-wrapper">
            <h2>You may also like</h2>
            <div className='marquee'>
                <div className="maylike-products-container track">
                   
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Product