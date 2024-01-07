import React from 'react'
import { Divider } from '@nextui-org/react'

function CartProduct({ item }) {
  return (
    <div className='grid grid-cols-2 max-w-full items-center'>
      <div className='place-self-center'>
        <img src={item?.id_prod.thumbnail} alt="Foto del producto" className=' h-28' />
      </div>
      <div>
        <h2 className='text-xl'>{item?.id_prod?.title} x{item?.quantity}</h2>
        <h3 className=''>Price: ${item?.id_prod?.price * item?.quantity}</h3>
      </div>

      <Divider className='my-2 col-span-2' />
    </div>
  )
}

export default CartProduct