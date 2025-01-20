import axios from 'axios';
import { useEffect, useState } from 'react'
import Products from './Products';
import { CART_API } from '../utils/constant';

const CartApi = () => {
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const handleApiData = async () =>{
            try {
                const response = await axios.get(`${CART_API}`);
                setCart(response.data);
                // console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        handleApiData();
    },[]);
  return (
    <div>
      <Products product={cart} />
    </div>
  )
}

export default CartApi
