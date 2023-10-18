import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';

function Navbar({ className }: any) {

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className={className}>
      <div className='flex justify-between items-center h-14 lg:h-24 sm:h-[3rem] max-w-[1440px] mx-auto px-4 text-black'>
        <h1 className='w-full font-bold md:text-2xl sm:text-lg'>Logo Here</h1>
        <ul className='hidden md:flex'>
          <li className='p-4 cursor-pointer'>Home</li>
          <li className='p-4 cursor-pointer'>Features</li>
          <li className='p-4 cursor-pointer'>Blog</li>
          <li className='p-4 cursor-pointer'>Shop</li>
          <li className='p-4 cursor-pointer'>About</li>
          <li className='p-4 font-bold cursor-pointer'>Contact</li>
        </ul>

        {/* Корзина и пользовательский иконки */}
        <div className=' space-x-4 items-center hidden md:flex'>
          <div className='rounded-full border border-black p-1 flex items-center justify-center cursor-pointer'>
            <AiOutlineUser size={18} />
          </div>
          <div className='rounded-full border border-black p-1 flex items-center justify-center cursor-pointer'>
            <BsCart3 size={18} />
          </div>
        </div>


        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={21} /> : <HiMenuAlt3 size={21} />}
        </div>

        {/* Mobile version menu */}
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-black-900 bg-black text-fuchsia-50 ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold pt-[29px] pl-[20px]'>Logo Here</h1>
          <ul className='pt-24'>
            <li className='p-4 pl-6'>Home</li>
            <li className='p-4 pl-6'>Features</li>
            <li className='p-4 pl-6'>Blog</li>
            <li className='p-4 pl-6'>Shop</li>
            <li className='p-4 pl-6'>About</li>
            <li className='p-4 pl-6'>Contact</li>
          </ul>
          <div className='flex space-x-4 items-center mx-auto ml-[40%]'>
            <div className='rounded-full border border-white p-1 flex items-center justify-center cursor-pointer'>
              <AiOutlineUser size={18} />
            </div>
            <div className='rounded-full border border-white p-1 flex items-center justify-center cursor-pointer'>
              <BsCart3 size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar;