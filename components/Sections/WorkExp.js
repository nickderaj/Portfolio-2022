import { useRef } from 'react';
import Image from 'next/image';
import useIntersection from '../../hooks/useIntersection';

function WorkBubble({ dotted, company, role, date, description, image, last }) {
  const workRef = useRef();
  const isVisible = useIntersection(workRef);

  return (
    <div
      className={`relative ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[90%]'
      } transition-all duration-1000`}
      ref={workRef}
    >
      <div className="absolute -top-0 left-[25px] bg-slate-50 z-10 rounded-[50%] h-[50px] w-[50px] border-2 border-indigo-600 p-1">
        <Image src={image} alt="Work" height="50" width="50" />
      </div>
      <div
        className={`${
          last ? '' : 'border-l-2'
        } border-indigo-600 h-full ml-12 pt-2 pl-12 pb-12 relative font-cairo ${
          dotted ? 'border-dashed' : ''
        }`}
      >
        <span className="flex flex-col md:flex-row items-start md:items-center pb-4">
          <h3 className="text-indigo-500 font-kalam text-2xl pr-2">{company},</h3>
          <h5 className="text-base pr-1">{role}</h5>
          <h4 className="text-xs text-slate-500">({date})</h4>
        </span>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default function WorkExp() {
  return (
    <section className="bg-gradient-to-r from-indigo-100 to-indigo-200 pb-6" id="work">
      <div className="py-4 lg:py-12 px-10 lg:flex-row max-w-screen-xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-bold text-indigo-500 font-kalam pb-6 relative">
          Work Experience
          <a
            className="absolute top-8 wiggle"
            href="https://www.linkedin.com/in/nickderaj/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/work/smiley.svg" height="40" width="40" alt="smile" />
          </a>
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-24 w-full md:w-10/12 xl:w-full">
          <div>
            <WorkBubble
              company="SupaHands"
              role="Full Stack Engineer"
              date="2021 - current"
              description="Data Labelling for AI Machine Learning. Main technologies used: Ruby on Rails, React.js, Next.js,
          Node.js, AWS Infstracture & Docker."
              image="/work/rabbit.svg"
              dotted
            />
            <WorkBubble
              company="MERN Stack Course"
              role="Student"
              date="2021"
              description="Studied the fundamentals and modern use-case applications of JavaScript, HTML, CSS, Sass,
              Node.js and React.js, including OOP, MVC Architecture and Modular planning."
              image="/work/bird.svg"
            />
            <WorkBubble
              company="De Raj Group"
              role="Group Deputy CEO"
              date="2016 - 2019"
              description="Business growth, Marketing, Financial forecasts & Risk Management for an Oil and Gas Company, publicly listed on the Frankfurt Exchange."
              image="/work/bear.svg"
            />
            <WorkBubble
              company="University of Bristol"
              role="Student"
              date="2013 - 2016"
              description="BSc Economics & Mathematics | 2:1 (Hons). Statistics, Probability, Macro & Micro Economics"
              image="/work/dino.svg"
              last
            />
          </div>
          <div className="hidden xl:flex justify-center items-center">
            <Image src="/work/working.svg" width="1042" height="994" alt="working" />
          </div>
        </div>
      </div>
    </section>
  );
}
