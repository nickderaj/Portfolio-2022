import { useRef } from 'react';
import Image from 'next/image';
import useIntersection from '../../hooks/useIntersection';

export default function About() {
  const aboutRef = useRef();
  const isVisible = useIntersection(aboutRef);

  return (
    <section className="bg-gradient-to-r from-slate-50 to-slate-100" id="about">
      <div className="py-12 h-[45rem] lg:py-12 px-10 flex flex-col lg:flex-row max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-6 justify-center relative" ref={aboutRef}>
          <h2
            className={`opacity-0  text-4xl lg:text-6xl font-bold text-blue-400 font-kalam ${
              isVisible ? 'slide-in' : ''
            }`}
          >
            Who Am I?
          </h2>

          <p
            className={`text-justify text-base sm:text-lg  mx-auto w-11/12 text-slate-900 font-cairo relative ${
              isVisible ? 'slide-up' : ''
            }`}
          >
            I&apos;m{' '}
            <span>
              <svg
                className="absolute -top-4 opacity-30"
                width="104"
                height="54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66 4.442C19.968 3.87 51.687 7.98 59.806 10.15c8.119 2.17 42.004 11.335 42.193 22.216.19 10.881-23.966 21.44-51.095 18.938C23.775 48.802 2.174 36.415 2.001 25.7 1.828 14.986 19.498 5.55 42.092 2.767c22.595-2.785 62.01 7.677 49.853 28.879"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                ></path>
              </svg>
              Nick
            </span>
            , an Indian-Italian nerd from Malaysia with a mix of passions including{' '}
            <span className="font-bold">UI/UX design, App Development, Pixel Art, Snowboarding, Cooking</span>{' '}
            and more !
            <br />
            <br />I love making anything from simple animated components to fully responsive, functional web
            apps with an integrated back-end & database.
          </p>

          <div
            className={`flex gap-2 flex-wrap pb-6 items-center justify-center ${
              isVisible ? 'slide-up-slow' : ''
            }`}
          >
            <a
              href="#projects"
              className="bg-rose-50 hover:bg-rose-400 hover:text-white hover:border-rose-400 
                transition-all duration-300 cursor-pointer pt-1 border-2 border-rose-100 rounded-3xl w-40 sm:w-52 
                flex justify-center items-center uppercase text-sm font-kalam"
            >
              Projects
            </a>
            <a
              href="#work"
              className="bg-violet-50 hover:bg-violet-400 hover:text-white hover:border-violet-400 
                transition-all duration-300 cursor-pointer pt-1 border-2 border-violet-100 rounded-3xl w-40 sm:w-52 
                flex justify-center items-center uppercase text-sm font-kalam"
            >
              Work Experience
            </a>
            <a
              href="#contact"
              className="bg-amber-50 hover:bg-amber-500 hover:text-white hover:border-amber-500 
                transition-all duration-300 cursor-pointer pt-1 border-2 border-amber-100 rounded-3xl w-40 sm:w-52 
                flex justify-center items-center uppercase text-sm font-kalam"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="hidden lg:block h-[full] w-full relative">
          <div className="w-6/12 absolute top-12 left-6 hover:scale-105 transition-all duration-300">
            <Image src="/me_1.jpg" alt="Me" height="700" width="480" className="rounded-xl" />
          </div>
          <div className="w-6/12 absolute top-24 left-48 left-52 xl:left-64 hover:scale-105 transition-all duration-300">
            <Image src="/me_2.jpeg" alt="Me again" height="586" width="373" className="rounded-xl" />
          </div>
        </div>
        <div className="block lg:hidden flex w-full sm:w-9/12 md:w-8/12 gap-4 mx-auto">
          <div className="w-8/12">
            <Image
              src="/me_1.jpg"
              alt="Me"
              height="700"
              width="480"
              className="rounded"
              layout="responsive"
            />
          </div>
          <div className="w-8/12">
            <Image
              src="/me_2.jpeg"
              alt="Me again"
              height="586"
              width="373"
              className="rounded"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
