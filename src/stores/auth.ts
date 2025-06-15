import {create} from 'zustand'
import {setCookie, deleteCookie} from 'cookies-next/client'
type Store ={
    token: string | null;
    open:boolean;
    setOpen: (open: boolean) => void;
    setToken: (newToken: string | null) => void;
}

export const useAuth = create<Store>((set) => ({
    token: null,
    open: false,
    setOpen: (open) => set(state => ({...state, open})),
    setToken: (newToken) => set(state => {
        if(newToken){
            setCookie('token', newToken);
        } else{
            deleteCookie('token');
        }
        return {...state, token: newToken}
    }) 
}))