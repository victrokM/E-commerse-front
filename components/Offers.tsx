import Image from 'next/image';
import React, { JSX } from 'react';
import Button from './Button';
import clotes from '@/public/images/clotes.png';
import { FaArrowRight } from 'react-icons/fa6';

export default function Offers(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="font-semibold  text-4xl">Special Offers Just for You</div>
      <div className="flex flex-row gap-6">
        <div>
          <Image
            alt="clotes"
            src={clotes}
            width={500}
            height={600}
            className="overflow-hidden rounded-2xl w-[400px] h-[500px] object-cover"
          />
        </div>
        <div className="bg-black">
          <div>
            <Button>Black Friday Only</Button>
          </div>
          <div>Black Friday Flash Sale-50% Off Sitewide</div>
          <div>
            <Button>
              <div>Check Offers</div>
              <div>
                <FaArrowRight />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
