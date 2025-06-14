'use client'
import { useCart } from "@/stores/cart";
import { Button } from "../ui/button"


export const CartEmpty = () => {

    const {setOpen} = useCart();

  return (
    <div className="my-10 text-center">
        <p className="mb-5">Seu carrinho está vazio</p>
        <Button onClick={() => setOpen(false)}>Fechar carrinho</Button>
    </div>
  )
}
