import axios from 'axios';
import { useEffect, useState } from 'react'
import Carts from './Carts';

const CartApi = () => {
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const handleApiData = async () =>{
            try {
                const response = await axios.get("https://fakestoreapi.com/products")
                setCart(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        handleApiData();
    },[]);
  return (
    <div>
      <Carts product={cart} />
    </div>
  )
}

export default CartApi
