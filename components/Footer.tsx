import React, { JSX } from 'react';
import pe from '../public/images/pe.jpg';
import {
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaWhatsapp,
  FaArrowRight
} from 'react-icons/fa6';

const socialIcons = [
  { icon: <FaInstagram />, name: 'Instagram' },
  { icon: <FaXTwitter />, name: 'Twitter' },
  { icon: <FaFacebook />, name: 'Facebook' },
  { icon: <FaWhatsapp />, name: 'WhatsApp' }
];

export default function Footer(): JSX.Element {
  return (
    <div className="w-full flex items-center justify-center mt-5">
      <div className="bg-[#E2E1E6] w-[90%] text-black flex flex-row items-center justify-center pr-5 gap-5 rounded-[42px]">
        <div className="flex flex-col gap-8 p-7 w-[60%]">
          <div className="flex gap-4 text-xs">
            {['Products', 'Support', 'About Us'].map((text) => (
              <div
                key={text}
                className="cursor-pointer hover:text-gray-500 transition-all duration-300"
              >
                {text}
              </div>
            ))}
          </div>
          <div className="text-3xl font-bold leading-[1.8rem] mt-5">
            Fashion is the trend, but style is your essence.
          </div>
          <div className="flex flex-row gap-7 mt-5">
            {[
              { label: 'PHONE', value: '+57 0000000000' },
              { label: 'E-MAIL', value: 'support@us.com' },
              { label: 'ADDRESS', value: '12 Street' }
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-2">
                <div className="text-[10px] text-gray-500">{label}</div>
                <div className="text-xs">{value}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="line-clamp-2 w-[50%] leading-[1.2rem]">
              Sign up for the latest updates and exclusive offers
            </div>
            <div className="flex flex-col gap-4 w-[60%] items-center">
              <input
                type="text"
                placeholder="Email address"
                className="w-full border-b border-white text-xs p-1 bg-inherit outline-none"
              />
              <button className="text-xs rounded-xl border w-[200px] bg-[#C2C4C7] p-1 hover:text-white transition-all duration-300 hover:scale-110">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            {socialIcons.map(({ icon, name }) => (
              <div
                key={name}
                className="rounded-full p-2 bg-[#C2C4C7] border border-gray-300 cursor-pointer hover:scale-110 transition-all duration-300 hover:text-white"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
        <div
          className="w-[300px] h-[450px] relative rounded-xl bg-gray-400 m-5"
          style={{
            backgroundImage: `url(${pe.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute bottom-2 right-3 bg-gray-100 p-2 flex flex-row items-center gap-3 rounded-lg font-semibold text-sm hover:scale-110 transition-all duration-300 cursor-pointer">
            See Products
            <div>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
