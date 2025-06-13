'use client'
import { Product } from '@/generated/prisma';
import Image from 'next/image';
import { Button } from '../ui/button';
import {decimalToMoney} from '@/lib/utils';

type Props = {
    data: Product;
}

export const PizzaItem = ({data}: Props) => {
  return (
    <div className='text-sm bg-secondary p-4 rounded-b-md'>
       <Image
          src={data.image}
          alt={data.name}
          width={200}
          height={200}
          className='w-full mb-3'
      />
      <div className='mb-2'>
        <h3 className='font-bold text-lg'>{data.name}</h3>
        <p className='truncate mb-3'>{data.ingredients}</p>
        <p className='font-bold text-sm'>{decimalToMoney(data.price)}</p>
      </div>
      <div className='text-center'>
        <Button>Adicionar ao Carrinho</Button>
      </div>
    </div>
  )
}
