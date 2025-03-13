import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { LuShoppingCart } from 'react-icons/lu';
import { IoMdMenu } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa6';
import ModalAuth from './ModalAuth';
import useModal from '@/hooks/useModal';

export default function Header() {
  const [isOpen, toggle] = useModal();

  return (
    <div className="w-full flex flex-row h-[60px] items-center px-5 font-bold">
      <div className="w-16">Logo</div>
      <div className="w-full flex items-center  gap-3 justify-center">
        <div className="cursor-pointer hover:text-gray-400">Products</div>
        <div className="cursor-pointer hover:text-gray-400">Support</div>
        <div className="cursor-pointer hover:text-gray-400">About Us</div>
      </div>
      <div className="w-fit flex flex-row text-xl items-center gap-4">
        <FiSearch className="cursor-pointer hover:text-gray-400 hover:scale-125 transition-all duration-300" />
        <LuShoppingCart className="cursor-pointer hover:text-gray-400 hover:scale-125 transition-all duration-300" />
        <FaRegUser
          className="cursor-pointer hover:text-gray-400 hover:scale-125 transition-all duration-300"
          onClick={() => toggle()}
        />
        <div className="w-fit py-1 px-2.5 rounded-xl bg-black cursor-pointer hover:scale-110 transition-all duration-300">
          <IoMdMenu className="text-white" />
        </div>
      </div>
      <ModalAuth isOpen={isOpen} toggle={toggle} />
    </div>
  );
}
