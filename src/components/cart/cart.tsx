'use client'
import { useEffect, useState } from 'react';
import { Drawer, DrawerContent, DrawerTitle } from '../ui/drawer'
import { useCart } from '@/stores/cart';
import { CartEmpty } from '@/components/cart/cart-empty';
import { CartList } from '@/components/cart/cart-list';
export const Cart = () => {

    const cart = useCart();

    const [open, setOpen] = useState(cart.open);

    useEffect(() => {
        setOpen(cart.open);
    }, [cart])

  return (
    <Drawer 
        direction='right' 
        open={open} 
        onOpenChange={open => cart.setOpen(open)}
    >
        <DrawerContent className='p-4'>
            <DrawerTitle>Carrinho</DrawerTitle>
            {cart.items.length <= 0 && <CartEmpty />}
            {cart.items.length > 0 && <CartList />}
           
        </DrawerContent>
    </Drawer>
  )
}
