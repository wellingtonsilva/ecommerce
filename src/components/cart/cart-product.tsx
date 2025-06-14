"use client"
import { decimalToMoney } from '@/lib/utils';
import { useCart } from '@/stores/cart';
import { useProducts } from '@/stores/products';
import { CartItem } from '@/types/cart-item';
import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';

type Props = {
    data: CartItem;
}

export const CartProduct = ({ data }: Props) => {

    const [quantity, setQuantity] = React.useState(data.quantity);

    const cart = useCart()

    const products = useProducts();
    let product = products.products.find(item => item.id === data.productId);
    if(!product) return null;

    const handlePlus = () => {
        cart.addItem({productId: product.id, quantity: 1})
        setQuantity(quantity + 1);
    }

    const handleMinus = () => {
       
        if(quantity - 1 <= 0) {
            cart.removeItem(data.productId);
        } else{
           cart.addItem({productId: product.id, quantity: -1})
            setQuantity(quantity - 1);
        }
       
    }

  return (
    <div className='flex items-center gap-3'>
         <div className='w-10'>
            <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className='w-full'
            />
         </div>
         <div className='flex-1'>
            <p className='font-bold'>{product.name}</p>
            <p className='text-sm'>{decimalToMoney(product.price)}</p>
        </div>
        <div className='flex items-center bg-secondary p-2 rounded-md'>
          <Button size="sm" variant="ghost" onClick={handleMinus}>-</Button>
          <div className='mx-3'>{quantity}</div>
          <Button size="sm" variant="ghost" onClick={handlePlus}>+</Button>   
       </div>
    </div>
  )
}
