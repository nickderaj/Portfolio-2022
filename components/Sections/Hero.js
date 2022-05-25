import Image from 'next/image';
import { useRef } from 'react';
import useIntersection from '../../hooks/useIntersection';
import BrickWall from '../BrickWall';

export default function Hero() {
  const heroRef = useRef();
  const isVisible = useIntersection(heroRef);

  return (
    <BrickWall>
      <div className="relative display flex flex-col gap-4 w-6/12 max-w-[20rem]">
        <div className="rounded-[50%] p-1" ref={heroRef}>
          <Image
            src="/me.jpg"
            alt="Nick"
            height="2022"
            width="2022"
            layout="responsive"
            className="rounded-[50%]"
          />
        </div>
        <div
          className={`absolute z-20 left-1/2 -top-2 sm:-top-3 md:-top-4 w-3/12 ${
            isVisible ? 'crownfall' : ''
          }`}
        >
          <Image src="/svg/crown.svg" alt="crown" height="80" width="80" layout="responsive" />
        </div>
        <div className="absolute rotate w-full -z-10">
          <Image
            src="/me.jpg"
            alt="Nick"
            height="2022"
            width="2022"
            layout="responsive"
            className="rounded-[50%]"
          />
        </div>
        <div className="absolute w-full left-1/2 -bottom-6 -translate-x-1/2 text-center highlight text-slate-900 ">
          <h1 className="text-lg md:text-2xl font-kalam">Nick De Raj</h1>
          <h2 className="text-sm sm:text-base font-kalam">Full Stack Developer</h2>
        </div>
      </div>
    </BrickWall>
  );
}
