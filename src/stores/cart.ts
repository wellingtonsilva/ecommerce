import {create} from 'zustand'
import { CartItem } from '@/types/cart-item'

type Store ={
    open: boolean;
    setOpen: (open: boolean) => void;
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (productId: number) => void;
}

export const useCart = create<Store>()((set) => ({
    open: false,
    setOpen: (open => set(state => ({...state, open}))),
    items: [],
    addItem: (item) => set(state => {
        let cloneItems = [...state.items];
        let itemIndex = cloneItems.findIndex(i => i.productId === item.productId);
        if(itemIndex === -1){
            cloneItems.push(item);
        }else{
            cloneItems[itemIndex].quantity += item.quantity;
        }
        return {...state, items: cloneItems}
    }),
    removeItem: (productId) => set(state => {
        return {...state, items: state.items.filter(item => item.productId !== productId)}
    })

}))