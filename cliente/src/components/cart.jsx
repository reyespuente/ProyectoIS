import { CartItem } from './cart-item.jsx'
import { CartTotal } from './cart-total.jsx'
import { CartButton } from './cart-button.jsx'

export const Cart = () => {
  return (
    <div className='bg-Rose-50 p-6 rounded-xl'>
      <h2 className='text-Red font-bold text-2xl mb-6'>Your Cart (7)</h2>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartTotal />
      <div className='bg-Rose-100 rounded-lg flex justify-center gap-1 p-4 mb-6'>
        <img src="/cliente/public/images/icon-carbon-neutral.svg" alt="" />
        <p className='text-sm'>This is a <span className='font-bold'>carbon neutral</span> delivery</p>
      </div>
      <CartButton text="Confirm Order" />
    </div>
  )
}
