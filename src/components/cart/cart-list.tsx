"use client"
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { useCart } from '@/stores/cart';
import { useProducts } from '@/stores/products';
import { decimalToMoney } from '@/lib/utils';
import { CartProduct } from './cart-product';

export const CartList = () => {

  const cart = useCart();
  const products = useProducts();
  const [subtotal, setSubtotal] = React.useState(0);
  const [frete, setFrete] = React.useState(10);

  useEffect(() => {
    let total = 0;
    cart.items.forEach(item => {
      let product = products.products.find(p => p.id === item.productId);
      if(product) total += Number(product.price) * item.quantity;
    })
    setSubtotal(total);
  }, [cart.items, products])

  return (
    <>
      <div className='flex flex-col gap-4 my-5'>
        {cart.items.map(item => (
          <CartProduct key={item.productId} data={item} />
        ))}
       
      </div>
      <div className='my-4 text-right'>
        <div>Sub-total: {decimalToMoney(subtotal)}</div>
        <div>Frete: {decimalToMoney(frete)}</div>
        <div className='font-bold'>Total: {decimalToMoney(subtotal + frete)} </div>
      </div>
      <Button>Finalizar Compra</Button>
    </>
  )
}
